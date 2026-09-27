export type Locale = 'en' | 'pt-BR';
export type Theme = 'dark' | 'light';

export interface SkillContent {
  readonly command: string;
  readonly index: string;
  readonly title: string;
  readonly description: string;
  readonly outcome: string;
  readonly href: string;
}

export interface WorkflowStep {
  readonly number: string;
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly prompt: string;
  readonly result: string;
  readonly file: string;
}

export interface LandingCopy {
  readonly skipLink: string;
  readonly navigationLabel: string;
  readonly navigation: readonly { readonly label: string; readonly href: string }[];
  readonly languageLabel: string;
  readonly lightTheme: string;
  readonly darkTheme: string;
  readonly githubLabel: string;
  readonly hero: {
    readonly eyebrow: string;
    readonly titleLead: string;
    readonly titleAccent: string;
    readonly description: string;
    readonly primaryCta: string;
    readonly secondaryCta: string;
    readonly note: string;
  };
  readonly proof: readonly { readonly value: string; readonly label: string }[];
  readonly workflow: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly role: string;
    readonly company: string;
    readonly promptLabel: string;
    readonly resultLabel: string;
    readonly fileLabel: string;
    readonly stepLabel: string;
    readonly steps: readonly WorkflowStep[];
  };
  readonly catalog: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly openSource: string;
    readonly skills: readonly SkillContent[];
  };
  readonly system: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly items: readonly {
      readonly number: string;
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly installation: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly fullLabel: string;
    readonly fullDescription: string;
    readonly selectiveLabel: string;
    readonly selectiveDescription: string;
    readonly copyLabel: string;
    readonly copiedLabel: string;
  };
  readonly privacy: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly points: readonly string[];
  };
  readonly cta: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly button: string;
  };
  readonly footer: string;
}

const repoBase = 'https://github.com/paulohfreire/applycraft';
const skillBase = `${repoBase}/tree/master/.agents/skills`;

const skillLinks = {
  commands: `${skillBase}/comandos`,
  match: `${skillBase}/analisar-match-vaga`,
  tailor: `${skillBase}/adaptar-candidatura`,
  prepare: `${skillBase}/preparar-etapa`,
  track: `${skillBase}/atualizar-status-vaga`,
} as const;

export const landingContent: Record<Locale, LandingCopy> = {
  en: {
    skipLink: 'Skip to content',
    navigationLabel: 'Main navigation',
    navigation: [
      { label: 'Workflow', href: '#workflow' },
      { label: 'Skills', href: '#skills' },
      { label: 'Install', href: '#install' },
    ],
    languageLabel: 'Language',
    lightTheme: 'Use light theme',
    darkTheme: 'Use dark theme',
    githubLabel: 'View on GitHub',
    hero: {
      eyebrow: 'A local-first career workflow',
      titleLead: 'Your job search deserves',
      titleAccent: 'a system.',
      description:
        'ApplyCraft turns every application into a traceable workflow — from fit analysis and tailored documents to interview preparation and follow-up.',
      primaryCta: 'Explore the workflow',
      secondaryCta: 'Get the skills',
      note: 'Built for Codex and compatible AI agents. Your career data stays in your workspace.',
    },
    proof: [
      { value: '05', label: 'specialized skills' },
      { value: '01', label: 'connected workflow' },
      { value: '100%', label: 'local-first' },
    ],
    workflow: {
      eyebrow: 'See it in motion',
      title: 'One application. A clear next step at every stage.',
      description:
        'Follow a fictional Frontend Engineer application and see how each skill builds on reliable context instead of starting over.',
      role: 'Frontend Engineer · Angular',
      company: 'Northstar Labs',
      promptLabel: 'Prompt to your agent',
      resultLabel: 'What comes back',
      fileLabel: 'Workspace artifact',
      stepLabel: 'Select workflow step',
      steps: [
        {
          number: '01',
          label: 'Analyze',
          title: 'Know whether the role deserves your time.',
          description:
            'Compare the job requirements with your real experience and expose evidence, gaps, and risks.',
          prompt: '$analisar-match-vaga Frontend Engineer at Northstar Labs',
          result:
            'Strong match · 82% · Apply with emphasis on Angular architecture and international collaboration.',
          file: 'candidaturas/northstar-labs/analise-match.md',
        },
        {
          number: '02',
          label: 'Tailor',
          title: 'Turn evidence into a focused application.',
          description:
            'Adapt your CV and cover letter without inventing achievements or changing the source of truth.',
          prompt: '$adaptar-candidatura Northstar Labs',
          result:
            'CV reordered around Angular delivery, accessibility, APIs, and AI-assisted development.',
          file: 'candidaturas/northstar-labs/curriculo.md',
        },
        {
          number: '03',
          label: 'Prepare',
          title: 'Practice for the interview you are actually having.',
          description:
            'Generate probable questions, talking points, and an optional simulation for the current stage.',
          prompt: '$preparar-etapa Northstar Labs — technical interview',
          result: '12 targeted questions · 4 STAR stories · Angular architecture simulation ready.',
          file: 'candidaturas/northstar-labs/preparacao-tecnica.md',
        },
        {
          number: '04',
          label: 'Track',
          title: 'Keep the process current without losing its history.',
          description:
            'Record interviews, feedback, decisions, and next actions in the application timeline and dashboard.',
          prompt: '$atualizar-status-vaga Northstar Labs — technical interview completed',
          result: 'Stage updated · Follow-up due Sep 30 · Dashboard rebuilt.',
          file: 'candidaturas/northstar-labs/status.md',
        },
      ],
    },
    catalog: {
      eyebrow: 'The skill set',
      title: 'Specialists for every decision in the journey.',
      description:
        'Each skill has one clear responsibility. Together they preserve context from the first job description to the final outcome.',
      openSource: 'Open source instructions',
      skills: [
        {
          command: '$comandos',
          index: '01',
          title: 'Find the right command',
          description:
            'Lists the skills and project commands available in the workspace with concise usage guidance.',
          outcome: 'Start from the right tool',
          href: skillLinks.commands,
        },
        {
          command: '$analisar-match-vaga',
          index: '02',
          title: 'Evaluate the opportunity',
          description:
            'Builds an evidence-based compatibility assessment before you invest in an application.',
          outcome: 'Apply with intent',
          href: skillLinks.match,
        },
        {
          command: '$adaptar-candidatura',
          index: '03',
          title: 'Tailor the documents',
          description:
            'Adapts CV and cover letter while preserving facts and the original career record.',
          outcome: 'Relevant, truthful documents',
          href: skillLinks.tailor,
        },
        {
          command: '$preparar-etapa',
          index: '04',
          title: 'Prepare for the stage',
          description:
            'Creates focused preparation and optional interview simulations for a specific hiring stage.',
          outcome: 'Practice with context',
          href: skillLinks.prepare,
        },
        {
          command: '$atualizar-status-vaga',
          index: '05',
          title: 'Keep the timeline alive',
          description:
            'Updates status, stage history, next actions, and the consolidated application dashboard.',
          outcome: 'Nothing falls through',
          href: skillLinks.track,
        },
      ],
    },
    system: {
      eyebrow: 'How it works',
      title: 'Context compounds. Busywork does not.',
      description:
        'ApplyCraft uses simple Markdown artifacts as a shared memory that both you and your agent can inspect, edit, and reuse.',
      items: [
        {
          number: '01',
          title: 'You provide the facts',
          description: 'A base profile, the job description, and what happened in each stage.',
        },
        {
          number: '02',
          title: 'A skill does one job',
          description: 'Focused instructions reduce ambiguity and produce consistent artifacts.',
        },
        {
          number: '03',
          title: 'The workspace remembers',
          description: 'Every output becomes traceable context for the next decision.',
        },
      ],
    },
    installation: {
      eyebrow: 'Install your way',
      title: 'Bring the complete system — or one specialist.',
      description:
        'Install from the public GitHub repository with the Skills CLI. No hosted account or ApplyCraft API is required.',
      fullLabel: 'Complete workflow',
      fullDescription: 'Recommended · installs every ApplyCraft skill.',
      selectiveLabel: 'Single skill',
      selectiveDescription: 'Start with match analysis and add more skills later.',
      copyLabel: 'Copy command',
      copiedLabel: 'Copied',
    },
    privacy: {
      eyebrow: 'Local by design',
      title: 'Your career story is not our dataset.',
      description:
        'The repository provides instructions and local tools. Candidate profiles and application folders are intentionally ignored by Git.',
      points: [
        'No ApplyCraft account',
        'No hosted candidate database',
        'No analytics in this landing page',
      ],
    },
    cta: {
      eyebrow: 'Make the next application count',
      title: 'Stop rebuilding context. Start building momentum.',
      description:
        'Explore the repository, install the skills, and give each opportunity a process you can trust.',
      button: 'Open ApplyCraft on GitHub',
    },
    footer: 'Open source · Built by Paulo Freire',
  },
  'pt-BR': {
    skipLink: 'Ir para o conteúdo',
    navigationLabel: 'Navegação principal',
    navigation: [
      { label: 'Fluxo', href: '#workflow' },
      { label: 'Skills', href: '#skills' },
      { label: 'Instalação', href: '#install' },
    ],
    languageLabel: 'Idioma',
    lightTheme: 'Usar tema claro',
    darkTheme: 'Usar tema escuro',
    githubLabel: 'Ver no GitHub',
    hero: {
      eyebrow: 'Um fluxo de carreira local-first',
      titleLead: 'Sua busca por emprego merece',
      titleAccent: 'um sistema.',
      description:
        'O ApplyCraft transforma cada candidatura em um fluxo rastreável — da análise de compatibilidade e adaptação de documentos à preparação e ao acompanhamento.',
      primaryCta: 'Conheça o fluxo',
      secondaryCta: 'Instale as skills',
      note: 'Feito para Codex e agentes de IA compatíveis. Seus dados profissionais permanecem no seu workspace.',
    },
    proof: [
      { value: '05', label: 'skills especializadas' },
      { value: '01', label: 'fluxo conectado' },
      { value: '100%', label: 'local-first' },
    ],
    workflow: {
      eyebrow: 'Veja em funcionamento',
      title: 'Uma candidatura. Um próximo passo claro em cada etapa.',
      description:
        'Acompanhe uma candidatura fictícia para Frontend Engineer e veja como cada skill aproveita um contexto confiável em vez de recomeçar.',
      role: 'Frontend Engineer · Angular',
      company: 'Northstar Labs',
      promptLabel: 'Prompt para o agente',
      resultLabel: 'Resultado resumido',
      fileLabel: 'Artefato no workspace',
      stepLabel: 'Selecionar etapa do fluxo',
      steps: [
        {
          number: '01',
          label: 'Analisar',
          title: 'Saiba se a vaga merece o seu tempo.',
          description:
            'Compare requisitos com sua experiência real e exponha evidências, lacunas e riscos.',
          prompt: '$analisar-match-vaga Frontend Engineer na Northstar Labs',
          result:
            'Compatibilidade alta · 82% · Candidate-se destacando arquitetura Angular e colaboração internacional.',
          file: 'candidaturas/northstar-labs/analise-match.md',
        },
        {
          number: '02',
          label: 'Adaptar',
          title: 'Transforme evidências em uma candidatura focada.',
          description:
            'Adapte currículo e carta sem inventar conquistas ou alterar a fonte da verdade.',
          prompt: '$adaptar-candidatura Northstar Labs',
          result:
            'Currículo reorganizado em torno de Angular, acessibilidade, APIs e desenvolvimento assistido por IA.',
          file: 'candidaturas/northstar-labs/curriculo.md',
        },
        {
          number: '03',
          label: 'Preparar',
          title: 'Pratique para a entrevista que você realmente terá.',
          description:
            'Gere perguntas prováveis, pontos de apoio e uma simulação opcional para a etapa atual.',
          prompt: '$preparar-etapa Northstar Labs — entrevista técnica',
          result:
            '12 perguntas direcionadas · 4 histórias STAR · simulação de arquitetura Angular pronta.',
          file: 'candidaturas/northstar-labs/preparacao-tecnica.md',
        },
        {
          number: '04',
          label: 'Acompanhar',
          title: 'Mantenha o processo atual sem perder o histórico.',
          description:
            'Registre entrevistas, feedbacks, decisões e próximas ações na linha do tempo e no painel.',
          prompt: '$atualizar-status-vaga Northstar Labs — entrevista técnica concluída',
          result: 'Etapa atualizada · follow-up em 30 de setembro · painel reconstruído.',
          file: 'candidaturas/northstar-labs/status.md',
        },
      ],
    },
    catalog: {
      eyebrow: 'O conjunto de skills',
      title: 'Especialistas para cada decisão da jornada.',
      description:
        'Cada skill tem uma responsabilidade clara. Juntas, elas preservam o contexto desde a descrição da vaga até o resultado final.',
      openSource: 'Instruções open source',
      skills: [
        {
          command: '$comandos',
          index: '01',
          title: 'Encontre o comando certo',
          description:
            'Lista as skills e os comandos disponíveis no workspace com orientações objetivas de uso.',
          outcome: 'Comece pela ferramenta certa',
          href: skillLinks.commands,
        },
        {
          command: '$analisar-match-vaga',
          index: '02',
          title: 'Avalie a oportunidade',
          description:
            'Cria uma avaliação fundamentada de compatibilidade antes de você investir na candidatura.',
          outcome: 'Candidate-se com intenção',
          href: skillLinks.match,
        },
        {
          command: '$adaptar-candidatura',
          index: '03',
          title: 'Adapte os documentos',
          description:
            'Adapta currículo e carta preservando os fatos e o histórico profissional original.',
          outcome: 'Documentos relevantes e verdadeiros',
          href: skillLinks.tailor,
        },
        {
          command: '$preparar-etapa',
          index: '04',
          title: 'Prepare-se para a etapa',
          description:
            'Cria preparação focada e simulações opcionais para uma etapa específica do processo.',
          outcome: 'Prática com contexto',
          href: skillLinks.prepare,
        },
        {
          command: '$atualizar-status-vaga',
          index: '05',
          title: 'Mantenha a linha do tempo viva',
          description:
            'Atualiza status, histórico de etapas, próximas ações e o painel consolidado.',
          outcome: 'Nada fica para trás',
          href: skillLinks.track,
        },
      ],
    },
    system: {
      eyebrow: 'Como funciona',
      title: 'O contexto se acumula. O retrabalho não.',
      description:
        'O ApplyCraft usa artefatos Markdown simples como uma memória compartilhada que você e seu agente podem consultar, editar e reutilizar.',
      items: [
        {
          number: '01',
          title: 'Você fornece os fatos',
          description: 'Um perfil-base, a descrição da vaga e o que aconteceu em cada etapa.',
        },
        {
          number: '02',
          title: 'Uma skill resolve uma tarefa',
          description: 'Instruções focadas reduzem ambiguidades e produzem artefatos consistentes.',
        },
        {
          number: '03',
          title: 'O workspace se lembra',
          description: 'Cada resultado se torna um contexto rastreável para a próxima decisão.',
        },
      ],
    },
    installation: {
      eyebrow: 'Instale do seu jeito',
      title: 'Leve o sistema completo — ou apenas um especialista.',
      description:
        'Instale pelo repositório público no GitHub usando a Skills CLI. Nenhuma conta ou API do ApplyCraft é necessária.',
      fullLabel: 'Fluxo completo',
      fullDescription: 'Recomendado · instala todas as skills do ApplyCraft.',
      selectiveLabel: 'Skill individual',
      selectiveDescription: 'Comece pela análise de compatibilidade e adicione outras depois.',
      copyLabel: 'Copiar comando',
      copiedLabel: 'Copiado',
    },
    privacy: {
      eyebrow: 'Local por princípio',
      title: 'Sua história profissional não é o nosso conjunto de dados.',
      description:
        'O repositório fornece instruções e ferramentas locais. Perfis e pastas de candidaturas são ignorados intencionalmente pelo Git.',
      points: [
        'Sem conta no ApplyCraft',
        'Sem banco de candidatos hospedado',
        'Sem analytics nesta landing page',
      ],
    },
    cta: {
      eyebrow: 'Faça a próxima candidatura valer',
      title: 'Pare de reconstruir contexto. Comece a criar impulso.',
      description:
        'Explore o repositório, instale as skills e dê a cada oportunidade um processo em que você possa confiar.',
      button: 'Abrir o ApplyCraft no GitHub',
    },
    footer: 'Open source · Criado por Paulo Freire',
  },
};

export const installCommands = {
  full: 'npx skills add paulohfreire/applycraft',
  selective: 'npx skills add paulohfreire/applycraft --skill analisar-match-vaga',
} as const;

export const repositoryUrl = repoBase;
