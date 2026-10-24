// Perguntas frequentes das subpáginas, compartilhadas entre o componente visual
// (acordeão) e o JSON-LD (FAQPage) da página — uma fonte única evita divergência.

export const teaFaqs: [string, string][] = [
  ['O plano de saúde pode limitar o número de sessões de terapia para autismo?', 'Não. Em março de 2026, o STJ fixou, no Tema Repetitivo 1.295, que é abusiva a limitação do número de sessões de psicologia, fonoaudiologia, fisioterapia e terapia ocupacional prescritas a pacientes com TEA.'],
  ['O plano é obrigado a cobrir a terapia ABA?', 'Desde a RN ANS 539/2022, a operadora deve cobrir o método ou a técnica indicado pelo médico assistente. A jurisprudência do STJ reconhece o direito a sessões ilimitadas de ABA quando prescritas.'],
  ['O plano precisa pagar acompanhante terapêutico na escola?', 'Em regra, não. O STJ entende que o plano não cobre acompanhamento em ambiente escolar ou domiciliar. Na escola, o acompanhante especializado é responsabilidade da escola ou da rede de ensino, conforme a Lei 12.764/2012.'],
  ['Não há clínica credenciada na minha cidade. O que fazer?', 'Se a rede não tiver profissional apto, a operadora deve garantir o atendimento. O STJ reconhece o direito ao reembolso integral em clínica não credenciada quando não há opção na rede, preferencialmente no município de residência.'],
  ['A escola pode recusar a matrícula ou cobrar mais caro?', 'Não. A recusa de matrícula é punida com multa ao gestor escolar, e as escolas particulares não podem cobrar valores adicionais em razão da deficiência.'],
  ['Musicoterapia e equoterapia são cobertas?', 'A musicoterapia foi reconhecida como de cobertura obrigatória pelo STJ. A equoterapia tem decisões divergentes, e a análise depende da prescrição e do caso concreto.'],
  ['Quanto tempo demora um processo?', 'O tempo varia conforme o caso e o tribunal. Em situações urgentes, é possível pedir uma decisão provisória (tutela de urgência), cuja concessão depende da avaliação do juiz.'],
  ['O atendimento é presencial?', 'O atendimento é 100% online, para famílias de todo o Brasil, com comunicação direta com o advogado.'],
];

export const medFaqs: [string, string][] = [
  ['O plano pode negar um medicamento porque ele não está no Rol da ANS?', 'O Rol é a referência básica, mas não um limite absoluto. Desde a ADI 7265 (STF, 2025), o tratamento fora do Rol pode ser coberto quando cinco critérios estão presentes ao mesmo tempo, entre eles a comprovação científica de eficácia e a inexistência de alternativa no Rol.'],
  ['O plano é obrigado a fornecer medicamento para usar em casa?', 'Em regra, a lei exclui da cobertura obrigatória os medicamentos de uso domiciliar, com exceções importantes como a quimioterapia oral e os previstos no contrato ou na regulamentação. Quando o plano não é obrigado, o SUS pode ser o caminho adequado.'],
  ['O SUS é obrigado a fornecer medicamento que não está na lista oficial?', 'Em caráter excepcional, sim, desde que cumpridos os requisitos fixados pelo STF nos Temas 6 e 1234 — entre eles o pedido administrativo prévio, a inexistência de substituto no SUS, a prova científica de eficácia e a incapacidade financeira.'],
  ['Preciso pedir primeiro ao plano ou ao SUS antes de entrar na Justiça?', 'Sim. Tanto para planos quanto para o SUS, os critérios atuais do STF exigem, como regra, a demonstração de que o pedido foi feito e negado (ou não respondido em prazo razoável) antes da ação.'],
  ['E se o medicamento não tiver registro na Anvisa?', 'Planos, em regra, não são obrigados a fornecê-lo. No SUS, o fornecimento só é admitido em hipóteses muito restritas, como demora irrazoável da Anvisa ou importação autorizada pela própria agência.'],
  ['Meu tratamento foi interrompido no meio. O que fazer?', 'Guarde todos os documentos e procure orientação o quanto antes. A interrupção de tratamento em curso pode trazer riscos à saúde e deve ser avaliada com urgência.'],
  ['Quanto tempo demora um processo?', 'Varia conforme o caso, o tribunal e a necessidade de análise técnica. Em situações urgentes, é possível pedir uma decisão provisória (tutela de urgência), cuja concessão depende da avaliação do juiz.'],
];

export const reajusteFaqs: [string, string][] = [
  ['Meu plano aumentou muito. O reajuste é abusivo?', 'Depende do tipo. O reajuste por faixa etária e o por sinistralidade (planos coletivos) têm regras próprias: precisam de previsão contratual, base de cálculo e transparência. Percentuais desarrazoados, sem demonstração, podem ser revistos.'],
  ['O plano pode aumentar por idade depois dos 60 anos?', 'Não. O Estatuto do Idoso (Lei 10.741/2003, art. 15, § 3º) veda a cobrança de valores diferenciados em razão da idade, e a ANS não prevê faixa de reajuste etário a partir dos 60 anos.'],
  ['O reajuste anual tem limite?', 'Nos planos individuais e familiares, há um teto anual autorizado pela ANS. Nos planos coletivos, o reajuste é negociado, mas a operadora precisa justificá-lo com base de cálculo.'],
  ['O que é reajuste por sinistralidade?', 'É o aumento aplicado em planos coletivos conforme o uso (custo assistencial) do grupo. Ele precisa ser transparente e demonstrado; a operadora deve fornecer a memória de cálculo.'],
  ['Posso pedir de volta o que paguei a mais?', 'Em muitos casos, sim. Reconhecida a abusividade, é possível buscar a restituição dos valores pagos indevidamente, respeitado o prazo prescricional.'],
  ['Como faço para contestar um reajuste?', 'Reúna o contrato, o histórico de valores e o comunicado do reajuste. É possível buscar a revisão na via administrativa, pela ANS, ou pela via judicial, conforme o caso.'],
  ['O atendimento é presencial?', 'O atendimento é 100% online, para todo o Brasil, com comunicação direta com o advogado.'],
];

export const homecareFaqs: [string, string][] = [
  ['O plano de saúde é obrigado a fornecer home care?', 'Quando o home care substitui a internação hospitalar e é indicado pelo médico assistente como necessário, a negativa costuma ser considerada abusiva pelos tribunais, por se tratar de continuidade do cuidado.'],
  ['O plano pode alegar que o home care não está no contrato ou no rol?', 'A cláusula que exclui o home care pode ser considerada abusiva quando ele substitui uma internação que o plano teria de cobrir. O que se analisa é a necessidade clínica, atestada pelo médico.'],
  ['O plano paga cuidador para ficar com o paciente?', 'Em regra, o cuidador leigo (acompanhante) é responsabilidade da família. O plano deve cobrir a equipe técnica de saúde prescrita — enfermagem, fisioterapia, fonoaudiologia — e os equipamentos e insumos necessários.'],
  ['O plano reduziu as horas de enfermagem. Isso é permitido?', 'A quantidade de atendimento deve seguir a prescrição médica. A redução unilateral, sem respaldo clínico, costuma ser questionável.'],
  ['Eu já estava em home care e o plano cortou. O que fazer?', 'Guarde o relatório médico e a negativa por escrito e procure orientação com urgência. A interrupção de um tratamento em curso pode fundamentar um pedido de tutela de urgência.'],
  ['Quanto tempo demora uma liminar?', 'Varia conforme o caso e a comarca, mas pedidos de urgência são analisados com prioridade. Não há garantia de resultado.'],
  ['O atendimento é presencial?', 'O atendimento é 100% online, para todo o Brasil, com comunicação direta com o advogado.'],
];

export function faqJsonLd(faqs: [string, string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function legalServiceJsonLd(name: string, url: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name,
    url,
    description,
    areaServed: 'BR',
    provider: {
      '@type': 'Attorney',
      name: 'Denis Carvalho Advocacia',
      url: 'https://coberturaemsaude.com.br',
    },
    availableLanguage: 'pt-BR',
  };
}
