'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, CalendarDays, Clock } from 'lucide-react';

// WhatsApp da Liz (triagem/agendamento) + configuração do atendimento.
// Ajuste WORK_DAYS / TIMES conforme a agenda real do escritório (VivJus.IA).
const WHATS = '5562992565904';
const WORK_DAYS = [1, 2, 3, 4, 5]; // dom=0 ... sáb=6 (seg a sex)
const TIMES = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
const MONTHS_AHEAD = 2;

const MN = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const DOW = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];

const fmt = (d: Date) => `${d.getDate()} de ${MN[d.getMonth()]} de ${d.getFullYear()}`;
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function Agenda() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const minMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const maxMonth = new Date(today.getFullYear(), today.getMonth() + MONTHS_AHEAD, 1);

  const [view, setView] = useState(new Date(minMonth));
  const [selected, setSelected] = useState<Date | null>(null);

  const atMin = view.getFullYear() === minMonth.getFullYear() && view.getMonth() === minMonth.getMonth();
  const atMax = view.getFullYear() === maxMonth.getFullYear() && view.getMonth() === maxMonth.getMonth();

  const firstDow = new Date(view.getFullYear(), view.getMonth(), 1).getDay();
  const dim = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= dim; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));

  const sameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  const isDisabled = (d: Date) => d < today || !WORK_DAYS.includes(d.getDay());

  return (
    <section id="contato" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-gold-600 font-semibold tracking-wide uppercase text-sm">Agende seu atendimento</span>
          <h2 className="section-title text-navy-900 mt-2">
            Escolha o melhor <span className="gold-text">dia e horário</span>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle max-w-2xl mx-auto">
            Selecione uma data disponível e um horário. Você será direcionado ao WhatsApp para a nossa
            equipe confirmar o seu atendimento on-line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-premium border border-gray-100 bg-white">
          {/* Calendário */}
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-5">
              <button
                onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}
                disabled={atMin}
                aria-label="Mês anterior"
                className="w-9 h-9 grid place-items-center rounded-full border border-gray-200 text-navy-900 hover:bg-navy-900 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                <ChevronLeft size={18} />
              </button>
              <strong className="font-heading text-xl text-navy-900">
                {cap(MN[view.getMonth()])} {view.getFullYear()}
              </strong>
              <button
                onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}
                disabled={atMax}
                aria-label="Próximo mês"
                className="w-9 h-9 grid place-items-center rounded-full border border-gray-200 text-navy-900 hover:bg-navy-900 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-1">
              {DOW.map((d) => (
                <span key={d} className="text-center text-[11px] font-bold uppercase tracking-wide text-gray-400 py-1">
                  {d}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {cells.map((d, i) =>
                d === null ? (
                  <span key={i} />
                ) : (
                  <button
                    key={i}
                    disabled={isDisabled(d)}
                    onClick={() => setSelected(d)}
                    className={[
                      'aspect-square rounded-lg text-sm font-semibold grid place-items-center transition',
                      isDisabled(d) ? 'text-gray-300 cursor-not-allowed' : 'text-navy-900 hover:bg-gold-50',
                      selected && sameDay(d, selected) ? '!bg-gold-500 !text-navy-900 shadow-gold' : '',
                      sameDay(d, today) && !(selected && sameDay(d, selected)) ? 'ring-1 ring-gold-500' : '',
                    ].join(' ')}
                  >
                    {d.getDate()}
                  </button>
                )
              )}
            </div>

            <p className="mt-5 flex items-center gap-1.5 text-xs text-gray-500">
              <Clock size={14} /> Atendimento on-line · horário de Brasília
            </p>
          </div>

          {/* Horários */}
          <div className="p-6 md:p-8 bg-navy-900 text-blue-50 flex flex-col">
            {!selected ? (
              <div className="m-auto text-center text-blue-200/70 max-w-[230px]">
                <CalendarDays size={46} className="mx-auto mb-4 opacity-60" />
                <p className="text-sm leading-relaxed">
                  Selecione uma data no calendário para ver os horários disponíveis.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-lg text-white mb-4">Horários · {fmt(selected)}</h3>
                <div className="grid grid-cols-3 gap-2.5">
                  {TIMES.map((t) => {
                    const msg = `Olá! Gostaria de agendar um atendimento para ${fmt(selected)} às ${t}. Podem confirmar a disponibilidade?`;
                    return (
                      <a
                        key={t}
                        href={`https://wa.me/${WHATS}?text=${encodeURIComponent(msg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid place-items-center py-2.5 rounded-lg bg-white/10 border border-white/15 text-white font-semibold text-sm hover:bg-gold-500 hover:border-gold-500 hover:text-navy-900 hover:-translate-y-0.5 transition"
                      >
                        {t}
                      </a>
                    );
                  })}
                </div>
                <p className="mt-4 text-xs text-blue-200/70 leading-relaxed">
                  Ao escolher um horário, abriremos o WhatsApp com a data e a hora já preenchidas para confirmação.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
