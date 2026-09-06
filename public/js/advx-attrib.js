/* ===================================================================
   AdvX — Atribuição de origem (UTM) · first-touch, 90 dias
   Guarda de qual anúncio/campanha o visitante veio e carrega esse código
   nos links de WhatsApp, para a Liz registrar a origem no lead do CRM.
   Referência: docs/atribuicao-utm.md no repo do AdvX.
   =================================================================== */
(function () {
  "use strict";

  var KEY = "advx_attrib";
  var MAX_MS = 90 * 24 * 60 * 60 * 1000; // first-touch vale 90 dias
  var CAMPOS = [
    "utm_source", "utm_medium", "utm_campaign",
    "utm_content", "utm_term", "fbclid", "gclid"
  ];

  function slug(v) {
    return String(v || "")
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 60);
  }

  /** Qual dos sites do escritório é este (usado quando não há campanha). */
  function siteSlug() {
    var h = String(location.hostname || "").replace(/^www\./, "");
    if (h.indexOf("cobertura") >= 0) return "site-cobertura";
    if (h.indexOf("odontologica") >= 0) return "site-odonto";
    if (h.indexOf("lgpd") >= 0) return "site-lgpd";
    if (h.indexOf("deniscarvalhoadvocacia") >= 0) return "site-institucional";
    return "site";
  }

  function daUrl() {
    var out = {};
    try {
      var u = new URLSearchParams(location.search);
      CAMPOS.forEach(function (k) {
        var v = u.get(k);
        if (v) out[k] = String(v).slice(0, 200);
      });
    } catch (e) {}
    return out;
  }

  function guardado() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return null;
      var d = JSON.parse(raw);
      if (!d || typeof d !== "object") return null;
      if (d._ts && Date.now() - d._ts > MAX_MS) return null; // expirou
      return d;
    } catch (e) { return null; }
  }

  var salvo = guardado();
  var atual = daUrl();
  var novaOrigem = false;

  // First-touch: a primeira origem manda. Só grava campo que ainda não existe.
  var dados = salvo || { _ts: Date.now() };
  CAMPOS.forEach(function (k) {
    if (atual[k] && !dados[k]) { dados[k] = atual[k]; novaOrigem = true; }
  });
  if (!dados.landing_page) {
    dados.landing_page = location.href.split("#")[0].slice(0, 400);
    novaOrigem = true;
  }
  if (!dados.referrer) {
    dados.referrer = (document.referrer || "").slice(0, 400);
  }

  try {
    if (!salvo || novaOrigem) localStorage.setItem(KEY, JSON.stringify(dados));
  } catch (e) {}

  // Disponível para o JS da página.
  window.ADVX_ATTRIB = dados;

  /**
   * Código de origem que viaja na mensagem do WhatsApp. É a CHAVE DE JUNÇÃO:
   * a Liz o grava como utm_campaign do lead, e ele precisa casar com
   * campanhas.utm_campaign no AdvX.
   * Ordem: campanha > origem > clique de anúncio > o site em si.
   */
  window.ADVX_REF = function () {
    if (dados.utm_campaign) return slug(dados.utm_campaign);
    if (dados.utm_source) return slug(dados.utm_source);
    if (dados.fbclid) return "meta";
    if (dados.gclid) return "google";
    return siteSlug(); // visita orgânica: ao menos sabemos qual site converteu
  };

  /**
   * Acrescenta "#ref-<codigo>" ao texto de um link do WhatsApp.
   * Monta na mão, com encodeURIComponent: o "#" PRECISA virar %23, senão o
   * navegador o trata como fragmento e corta a URL.
   */
  window.ADVX_WA = function (url) {
    try {
      if (!url) return url;
      if (url.indexOf("wa.me") < 0 && url.indexOf("api.whatsapp.com") < 0) return url;
      if (url.indexOf("%23ref-") >= 0 || url.indexOf("#ref-") >= 0) return url; // já marcado
      var ref = window.ADVX_REF();
      if (!ref) return url;
      var marca = encodeURIComponent("\n\n#ref-" + ref);
      var i = url.indexOf("text=");
      if (i < 0) return url + (url.indexOf("?") < 0 ? "?" : "&") + "text=" + marca;
      var fim = url.indexOf("&", i);
      return fim < 0 ? url + marca : url.slice(0, fim) + marca + url.slice(fim);
    } catch (e) { return url; }
  };

  // Marca qualquer link de WhatsApp no momento do clique. Pega links que já
  // estão na página, os que o React renderiza depois e os criados por script.
  document.addEventListener("click", function (ev) {
    try {
      var alvo = ev.target;
      if (!alvo || !alvo.closest) return;
      var a = alvo.closest('a[href*="wa.me"], a[href*="api.whatsapp.com"]');
      if (!a) return;
      var novo = window.ADVX_WA(a.getAttribute("href"));
      if (novo) a.setAttribute("href", novo);
    } catch (e) {}
  }, true);

  // Injeta os campos ocultos em <form data-advx-lead> (para formulários que um
  // dia enviem a um backend). Hoje os formulários abrem o WhatsApp.
  function injetar() {
    var forms = document.querySelectorAll("form[data-advx-lead]");
    for (var i = 0; i < forms.length; i++) {
      var f = forms[i];
      Object.keys(dados).forEach(function (k) {
        if (k.charAt(0) === "_") return;
        if (f.querySelector('[name="' + k + '"]')) return;
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = k;
        input.value = dados[k];
        f.appendChild(input);
      });
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injetar);
  } else {
    injetar();
  }
})();
