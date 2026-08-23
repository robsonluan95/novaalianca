import { Project, Service, NewsItem, ValueItem, MetricItem, NavLink } from '@/types';

export interface ClientLogo {
  id: string;
  name: string;
  image: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Página Inicial', href: '#hero' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export const HERO_METRICS: MetricItem[] = [
  { value: '2.750+ MWp', label: 'Instalados em Energia Solar' },
  { value: '35+', label: 'Projetos de Energia, Civil & Mineração' },
  { value: '11+', label: 'Anos de Experiência Unida (Carvalho + HB20)' },
];

export const CLIENTS_LIST: ClientLogo[] = [
  {
    id: 'gov-para',
    name: 'Governo do Estado do Pará',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'pref-volta-redonda',
    name: 'Prefeitura Municipal de Volta Redonda',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'pref-eldorado',
    name: 'Prefeitura de Eldorado do Carajás',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'pref-parauapebas',
    name: 'Prefeitura de Parauapebas',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=300&q=80',
  },
];

export interface ExpertiseArea {
  id: string;
  title: string;
  description: string;
  iconName: 'Building' | 'HardHat' | 'Droplet' | 'Pickaxe' | 'Sun';
}

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    id: 'construcao-civil',
    title: 'Construção Civil',
    description: 'Planejamento, gerenciamento e execução de obras civis de grande porte.',
    iconName: 'Building',
  },
  {
    id: 'obras-infraestrutura',
    title: 'Obras de Infraestrutura',
    description: 'Concepção, construção, fiscalização, operação e análise de pavimentação e terraplenagem.',
    iconName: 'HardHat',
  },
  {
    id: 'saneamento',
    title: 'Saneamento',
    description: 'Maquinários de alta tonelagem e profissionais especializados em redes de saneamento.',
    iconName: 'Droplet',
  },
  {
    id: 'mineracao',
    title: 'Mineração',
    description: 'Soluções com custos otimizados e execução acelerada para movimentação de terra e minérios.',
    iconName: 'Pickaxe',
  },
];

export const SERVICE_STAGES = [
  {
    id: 'stage-1',
    title: 'Terraplenagem e Abertura de Vias',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'stage-2',
    title: 'Compactação de Solo e Pavimentação Asfáltica',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'stage-3',
    title: 'Nivelamento e Drenagem com Maquinário Pesado',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  },
];

export const FEATURED_PROJECT: Project = {
  id: 'ufv-cristino-castro-featured',
  title: 'UFV Cristino Castro (Energia Solar & Terraplenagem)',
  location: 'Cristino Castro, Piauí',
  year: '2025',
  capacity: '765 MWp',
  description:
    'Exemplo máximo da união Carvalho + HB20: terraplenagem pesada de 1.200.000 m² (HB20) combinada com 543.089 módulos fotovoltaicos, 6.064 trackers e 76.140 perfis metálicos cravados (Carvalho).',
  image: '/ufv-cristino-castro.jpg',
  isFeatured: true,
};

export const PROJECTS_LIST: Project[] = [
  {
    id: 'ufv-cristino-castro',
    title: 'UFV Cristino Castro',
    location: 'Cristino Castro, Piauí',
    year: '2025',
    capacity: '765 MWp',
    image: '/ufv-cristino-castro.jpg',
  },
  {
    id: 'reatores',
    title: 'Reatores Lote 7 & 8',
    location: 'Governador Valadares, Minas Gerais',
    year: '2020',
    capacity: '35 MVAr',
    image: '/Reatores.png',
  },
  {
    id: 'ufv-panorama',
    title: 'UFV Panorama',
    location: 'Ribeiro Gonçalves, Piauí',
    year: '2024',
    capacity: '550 MWp',
    image: '/ufv-panorama.jpg',
  },
  {
    id: 'ufv-belmonte',
    title: 'UFV Belmonte',
    location: 'Belmonte, Pernambuco',
    year: '2023',
    capacity: '570 MWp',
    image: '/ufv-belmonte.png',
  },
  {
    id: 'ufv-sao-goncalo',
    title: 'UFV São Gonçalo',
    location: 'São Gonçalo do Gurguéia, Piauí',
    year: '2022',
    capacity: '864.5 MWp',
    image: '/ufv-sao-goncalo.jpg',
  },
  {
    id: 'ufv-jaiba',
    title: 'UFV Jaíba',
    location: 'Jaíba, Minas Gerais',
    year: '2020',
    capacity: '106 MWp',
    image: '/ufv-jaiba.jpg',
  },
  {
    id: 'ufv-dracena',
    title: 'UFV Dracena',
    location: 'Dracena, São Paulo',
    year: '2019',
    capacity: '90 MWp',
    image: '/ufv-dracena.png',
  },
  {
    id: 'ufv-pirapora',
    title: 'UFV Pirapora',
    location: 'Pirapora, Minas Gerais',
    year: '2018',
    capacity: '406 MWp',
    image: '/ufv-pirapora.png',
  },
  {
    id: 'ufv-iaciara',
    title: 'UFV Iaciara I & Iaciara II',
    location: 'Iaciara, Goiás',
    year: '2023',
    capacity: '7.20 MWp',
    image: '/ufv-iaciara.png',
  },
  {
    id: 'ufv-santo-antonio',
    title: 'UFV Santo Antônio',
    location: 'Lagoa Santa, Minas Gerais',
    year: '2023',
    capacity: '7.86 MWp',
    image: '/ufv-santo-antonio.png',
  },
  {
    id: 'linha-verde-ii',
    title: 'Linha Verde II (LT 500 kV)',
    location: 'Santana do Riacho, Minas Gerais',
    year: '2020',
    capacity: '500 kV',
    image: '/Linha Verde II.jpg',
  },
  {
    id: 'complexo-termosolar',
    title: 'Complexo Termosolar (CSP & PV)',
    location: 'Barra, Bahia',
    year: '2020',
    capacity: '240 MW',
    image: '/Termosolar.jpeg',
  },
  {
    id: 'abroad-moquegua',
    title: 'ABROAD Complexo Moquegua',
    location: 'Moquegua, Peru',
    year: '2020',
    capacity: '2 GW',
    image: '/abroad.jpeg',
  },
  {
    id: 'subestacao-itabira',
    title: 'Subestação Itabira 5 (3D)',
    location: 'Itabira, Minas Gerais',
    year: '2020',
    capacity: '500 kV',
    image: '/subestacao-itabira.png',
  },
];

export const SERVICES_LIST: Service[] = [
  {
    id: 'obras-civis',
    title: 'Obras Civis',
    description: 'Preparação de terreno, terraplenagem e infraestrutura civil para usinas solares.',
    image: '/obras-civis.png',
    iconName: 'Building',
  },
  {
    id: 'cravacao-perfis',
    title: 'Cravação de Perfis Metálicos',
    description: 'Instalação especializada de fundações metálicas para estruturas fotovoltaicas.',
    image: '/cravacao-perfis-metalicos.png',
    iconName: 'Hammer',
  },
  {
    id: 'montagem-estruturas',
    title: 'Montagem de Estruturas e Módulos',
    description: 'Montagem precisa de estruturas metálicas e instalação de painéis solares.',
    image: '/montagem-estruturas-modulos.png',
    iconName: 'Sun',
  },
  {
    id: 'instalacao-eletrica',
    title: 'Instalação Elétrica',
    description: 'Sistemas elétricos completos, cabeamento e conexão à rede de transmissão.',
    image: '/instalacao-eletrica.png',
    iconName: 'Zap',
  },
  {
    id: 'logistica',
    title: 'Logística',
    description: 'Gestão completa de suprimentos e logística para grandes projetos solares.',
    image: '/logistica.png',
    iconName: 'Truck',
  },
  {
    id: 'operacao-manutencao',
    title: 'Operação e Manutenção (O&M)',
    description: 'Serviços especializados de manutenção e monitoramento de performance.',
    image: '/operacao-manutencao.png',
    iconName: 'Settings',
  },
  {
    id: 'lancamento-cabos',
    title: 'Lançamento de Cabos de BT e MT',
    description: 'Especializados no lançamento de cabos de média e baixa tensão para conexão de usinas fotovoltaicas à rede elétricas.',
    image: '/lancamento-cabos.png',
    iconName: 'ShieldCheck',
  },
  {
    id: 'abertura-valas',
    title: 'Abertura de Valas',
    description: 'Serviços de abertura de valas para instalação de cabos subterrâneos, com equipamentos especializados.',
    image: '/abertura-valas.png',
    iconName: 'Wrench',
  },
];

export interface ExtendedNewsItem extends NewsItem {
  image?: string;
  fullContent?: string;
}

export const NEWS_LIST: ExtendedNewsItem[] = [
  {
    id: 'news-1',
    title: 'Concluímos uma grande etapa na UFV Cristino Castro',
    summary:
      'No total foram mais de 1.500.000 metros de cabos lançados e conectorizados dentro da subestação, todos prontos para o comissionamento. E o mais impressionante: alcançamos essa meta em apenas 53 dias. Um marco que só foi possível graças ao comprometimento, técnica e dedicação de todo o time envolvido. Cada metro lançado representa não apenas avanço no projeto, mas também a energia que logo seguirá impulsionando novas conquistas.',
    date: '18 de setembro de 2025',
    statusTag: 'Projeto Concluído',
    author: {
      name: 'Nova Aliança Empreendimentos',
      role: 'Energia Solar',
    },
    image: '/concluimos-etapa-cristino-castro.png',
  },
  {
    id: 'news-2',
    title: 'Atividades elétricas da UFV LINS 7 e LINS 8 já alcançaram 80% de execução.',
    summary:
      'Isso significa que estamos cada vez mais próximos da etapa final do projeto e, em breve, tudo estará concluído e energizado. Mais do que números, esse avanço representa dedicação, trabalho em equipe e a concretização de mais um passo importante para a geração de energia limpa e sustentável. 🌱',
    date: '14 de agosto de 2025',
    statusTag: 'Etapa Concluída',
    author: {
      name: 'Nova Aliança Empreendimentos',
      role: 'Energia Solar',
    },
    image: '/atividades-eletricas-lins.png',
  },
  {
    id: 'news-3',
    title: 'Dia Mundial do Meio Ambiente: nosso papel como agente de transformação',
    summary:
      'No Dia Mundial do Meio Ambiente, reafirmamos nosso papel não apenas como empresa de engenharia, mas também como agente de transformação. Trabalhar com energia renovável já representa um passo importante nessa missão, mas sabemos que é possível ir além. Durante esta semana, o Consórcio Solar Cristino Castro promoveu diversas atividades voltadas para a preservação ambiental, incentivando a consciência sustentável em nossas práticas e em nossa comunidade.',
    date: '05 de maio de 2025',
    statusTag: 'Meio Ambiente',
    author: {
      name: 'Nova Aliança Empreendimentos',
      role: 'Meio Ambiente',
    },
    image: '/dia-mundial.png',
  },
];

export const VALUES_LIST: ValueItem[] = [
  {
    id: 'excelencia-tecnica',
    title: 'Excelência Técnica',
    description: 'Comprometidos com padrões elevados de qualidade, segurança e inovação em cada projeto.',
    iconName: 'Shield',
  },
  {
    id: 'sustentabilidade',
    title: 'Sustentabilidade',
    description: 'Promovemos um futuro limpo com soluções renováveis e práticas responsáveis ao longo do ciclo de vida.',
    iconName: 'Leaf',
  },
  {
    id: 'seguranca',
    title: 'Segurança',
    description: 'Priorizamos a proteção de pessoas e do meio ambiente, garantindo confiabilidade, prevenção de riscos e resultados consistentes em todos os nossos projetos.',
    iconName: 'HardHat',
  },
];
