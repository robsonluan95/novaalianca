import { Project, Service, NewsItem, ValueItem, MetricItem } from '@/types';

export interface ClientLogo {
  id: string;
  name: string;
  image: string;
}

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

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'ufv-cristino-castro',
    title: 'UFV Cristino Castro (Energia Solar & Terraplenagem)',
    location: 'Cristino Castro, Piauí',
    year: '2025',
    capacity: '765 MWp',
    description:
      'Exemplo máximo da união Carvalho + HB20: terraplenagem pesada de 1.200.000 m² (HB20) combinada com 543.089 módulos fotovoltaicos, 6.064 trackers e 76.140 perfis metálicos cravados (Carvalho).',
    image: '/ufv-cristino-castro.jpg',
    isFeatured: true,
    segment: 'energia',
    subtype: 'Solar',
  },
  {
    id: 'linha-verde-ii',
    title: 'Linha Verde II (LT 500 kV)',
    location: 'Santana do Riacho, Minas Gerais',
    year: '2020',
    capacity: '500 kV',
    description:
      'Linha de transmissão de 500 kV entre as subestações Presidente Juscelino e Itabira 5, com 160,33 km de traçado e 314 torres (148 estaiadas e 166 autoportantes), executada pela Quebec Engenharia para a SPE Transmissora de Energia Linha Verde II / Terna Plus. Contrato de R$ 202,4 milhões e prazo de 16 meses, com fornecedores como Gerdau, Alubar, ZTT do Brasil e Siemens.',
    image: '/linha_verde_ii.jpg',
    gallery: [
      '/linha-verde-ii-galeria-1.jpg',
      '/linha-verde-ii-galeria-2.jpg',
      '/linha-verde-ii-galeria-3.jpg',
      '/linha-verde-ii-galeria-4.jpg',
    ],
    isFeatured: true,
    segment: 'energia',
    subtype: 'Transmissão/Subestação',
  },
  {
    id: 'abroad-moquegua',
    title: 'Complexo Moquegua',
    location: 'Moquegua, Peru',
    year: '2014',
    capacity: '2 GW',
    description:
      'Desenvolvido pela ABROAD Energy (BraxEnergy), holding com atuação no Brasil, Peru, África do Sul e Panamá: geração solar térmica (CSP) e fotovoltaica híbrida de grande capacidade para o Ministério de Minas e Energia do Peru, com agenda ESG de produção de hortaliças e frutas por aeroponia. A mesma holding também desenvolveu o portfólio de PCHs Rodeio Bonito, São Domingos II e Ernesto J. Dreher no Brasil.',
    image: '/abroad.jpeg',
    isFeatured: true,
    segment: 'energia',
    subtype: 'Outros',
  },
  {
    id: 'pch-rodeio-bonito',
    title: 'PCH Rodeio Bonito (Central Hidrelétrica)',
    location: 'Maravilha, Santa Catarina',
    year: '2021',
    capacity: '24.000 kW',
    description:
      'Pequena Central Hidrelétrica de alta complexidade com turbina Francis Horizontal, vazão total de 21,60 m³/s e projeto inovador de vazão sanitária submersível.',
    image: '/pch-rodeio-bonito.jpg',
    isFeatured: true,
    segment: 'energia',
    subtype: 'PCH',
  },
];

export const FEATURED_PROJECT: Project = FEATURED_PROJECTS[0];

export const PROJECTS_LIST: Project[] = [
  {
    id: 'ufv-cristino-castro',
    title: 'UFV Cristino Castro',
    location: 'Cristino Castro, Piauí',
    year: '2025',
    capacity: '765 MWp',
    image: '/ufv-cristino-castro.jpg',
    segment: 'energia',
    subtype: 'Solar',
  },
  {
    id: 'reatores',
    title: 'Reatores Lote 7 & 8',
    location: 'Governador Valadares, Minas Gerais',
    year: '2020',
    capacity: '35 MVAr',
    description:
      'Fornecimento de 12 reatores monofásicos de 500/√3 kV pela TUSA para os Lotes 7 e 8 da Quebec Engenharia: 6 unidades de 35 MVAr (SE Governador Valadares 6 e Mutum) e 6 unidades de 23,33 MVAr (SE Presidente Juscelino e Itabira 5), com controle de qualidade completo de isolamento (ensaio "vapour phase").',
    image: '/Reatores.png',
    segment: 'energia',
    subtype: 'Transmissão/Subestação',
  },
  {
    id: 'ufv-panorama',
    title: 'UFV Panorama',
    location: 'Ribeiro Gonçalves, Piauí',
    year: '2024',
    capacity: '550 MWp',
    image: '/ufv-panorama.jpg',
    segment: 'energia',
    subtype: 'Solar',
  },
  {
    id: 'ufv-belmonte',
    title: 'UFV Belmonte',
    location: 'Belmonte, Pernambuco',
    year: '2023',
    capacity: '570 MWp',
    image: '/ufv-belmonte.png',
    segment: 'energia',
    subtype: 'Solar',
  },
  {
    id: 'ufv-sao-goncalo',
    title: 'UFV São Gonçalo',
    location: 'São Gonçalo do Gurguéia, Piauí',
    year: '2022',
    capacity: '864.5 MWp',
    image: '/ufv-sao-goncalo.jpg',
    segment: 'energia',
    subtype: 'Solar',
  },
  {
    id: 'ufv-jaiba',
    title: 'UFV Jaíba',
    location: 'Jaíba, Minas Gerais',
    year: '2020',
    capacity: '106 MWp',
    image: '/ufv-jaiba.jpg',
    segment: 'energia',
    subtype: 'Solar',
  },
  {
    id: 'ufv-dracena',
    title: 'UFV Dracena',
    location: 'Dracena, São Paulo',
    year: '2019',
    capacity: '90 MWp',
    image: '/ufv-dracena.png',
    segment: 'energia',
    subtype: 'Solar',
  },
  {
    id: 'ufv-pirapora',
    title: 'UFV Pirapora',
    location: 'Pirapora, Minas Gerais',
    year: '2018',
    capacity: '406 MWp',
    image: '/ufv-pirapora.png',
    segment: 'energia',
    subtype: 'Solar',
  },
  {
    id: 'ufv-iaciara',
    title: 'UFV Iaciara I & Iaciara II',
    location: 'Iaciara, Goiás',
    year: '2023',
    capacity: '7.20 MWp',
    image: '/ufv-iaciara.png',
    segment: 'energia',
    subtype: 'Solar',
  },
  {
    id: 'ufv-santo-antonio',
    title: 'UFV Santo Antônio',
    location: 'Lagoa Santa, Minas Gerais',
    year: '2023',
    capacity: '7.86 MWp',
    image: '/ufv-santo-antonio.png',
    segment: 'energia',
    subtype: 'Solar',
  },
  {
    id: 'linha-verde-ii',
    title: 'Linha Verde II (LT 500 kV)',
    location: 'Santana do Riacho, Minas Gerais',
    year: '2020',
    capacity: '500 kV',
    image: '/linha_verde_ii.jpg',
    segment: 'energia',
    subtype: 'Transmissão/Subestação',
  },
  {
    id: 'complexo-termosolar',
    title: 'Complexo Termosolar (CSP & PV)',
    location: 'Barra, Bahia',
    year: '2020',
    capacity: '240 MW',
    description:
      'Estudo de viabilidade para usina termosolar (CSP, tecnologia de calhas parabólicas) de 240 MW em Barra, Bahia — parte de um portfólio de 9 projetos termosolares e fotovoltaicos autorizados pela ANEEL no semiárido brasileiro, atualmente com elaboração de EIA/RIMA em andamento.',
    image: '/Termosolar.jpeg',
    segment: 'energia',
    subtype: 'Solar/Termosolar',
  },
  {
    id: 'abroad-moquegua',
    title: 'ABROAD Complexo Moquegua',
    location: 'Moquegua, Peru',
    year: '2014',
    capacity: '2 GW',
    image: '/abroad.jpeg',
    segment: 'energia',
    subtype: 'Outros',
  },
  {
    id: 'pch-rodeio-bonito',
    title: 'PCH Rodeio Bonito',
    location: 'Maravilha, Santa Catarina',
    year: '2021',
    capacity: '24.000 kW',
    image: '/pch-rodeio-bonito.jpg',
    segment: 'energia',
    subtype: 'PCH',
  },
  {
    id: 'pch-sao-domingos-ii',
    title: 'PCH São Domingos II',
    location: 'São Domingos, Goiás',
    year: '2022',
    capacity: '24.000 kW',
    image: '/pch-sao-domingos.jpg',
    segment: 'energia',
    subtype: 'PCH',
  },
  {
    id: 'pch-3-linha-leste',
    title: 'PCH 3ª Linha Leste',
    location: 'Ijuí, Rio Grande do Sul',
    year: '2022',
    capacity: '12.350 kW',
    image: '/pch-linha-leste.jpg',
    segment: 'energia',
    subtype: 'PCH',
  },
  {
    id: 'pch-ernesto-dreher',
    title: 'PCH Ernesto J. Dreher',
    location: 'Júlio de Castilhos, Rio Grande do Sul',
    year: '2023',
    capacity: '17.000 kW',
    image: '/pch_ernesto_j_dreher.png',
    segment: 'energia',
    subtype: 'PCH',
  },
  {
    id: 'subestacao-itabira',
    title: 'Subestação Itabira 5 (3D)',
    location: 'Itabira, Minas Gerais',
    year: '2020',
    capacity: '500 kV',
    image: '/subestacao-itabira.png',
    segment: 'energia',
    subtype: 'Transmissão/Subestação',
  },
  {
    id: 'leilao-aneel-2005',
    title: 'Leilão ANEEL 001/2005 - Interligação Norte-Sul',
    location: 'Interligação Norte-Sul, Brasil',
    year: '2006',
    capacity: '708 km LT & SEs',
    image: '/interligacao-norte-sul.webp',
    segment: 'energia',
    subtype: 'Transmissão/Subestação',
  },
];

export const SERVICES_LIST: Service[] = [
  {
    id: 'obras-civis',
    title: 'Obras Civis',
    description: 'Preparação de terreno, terraplenagem e infraestrutura civil para usinas solares.',
    image: '/obras-civis.png',
    iconName: 'Building',
    segment: 'energia',
  },
  {
    id: 'cravacao-perfis',
    title: 'Cravação de Perfis Metálicos',
    description: 'Instalação especializada de fundações metálicas para estruturas fotovoltaicas.',
    image: '/cravacao-perfis-metalicos.png',
    iconName: 'Hammer',
    segment: 'energia',
  },
  {
    id: 'montagem-estruturas',
    title: 'Montagem de Estruturas e Módulos',
    description: 'Montagem precisa de estruturas metálicas e instalação de painéis solares.',
    image: '/montagem-estruturas-modulos.png',
    iconName: 'Sun',
    segment: 'energia',
  },
  {
    id: 'instalacao-eletrica',
    title: 'Instalação Elétrica',
    description: 'Sistemas elétricos completos, cabeamento e conexão à rede de transmissão.',
    image: '/instalacao-eletrica.png',
    iconName: 'Zap',
    segment: 'energia',
  },
  {
    id: 'logistica',
    title: 'Logística',
    description: 'Gestão completa de suprimentos e logística para grandes projetos solares.',
    image: '/logistica.png',
    iconName: 'Truck',
    segment: 'energia',
  },
  {
    id: 'operacao-manutencao',
    title: 'Operação e Manutenção (O&M)',
    description: 'Serviços especializados de manutenção e monitoramento de performance.',
    image: '/operacao-manutencao.png',
    iconName: 'Settings',
    segment: 'energia',
  },
  {
    id: 'lancamento-cabos',
    title: 'Lançamento de Cabos de BT e MT',
    description: 'Especializados no lançamento de cabos de média e baixa tensão para conexão de usinas fotovoltaicas à rede elétricas.',
    image: '/lancamento-cabos.png',
    iconName: 'ShieldCheck',
    segment: 'energia',
  },
  {
    id: 'abertura-valas',
    title: 'Abertura de Valas',
    description: 'Serviços de abertura de valas para instalação de cabos subterrâneos, com equipamentos especializados.',
    image: '/abertura-valas.png',
    iconName: 'Wrench',
    segment: 'energia',
  },
  {
    id: 'linha-transmissao',
    title: 'Linhas de Transmissão',
    description: 'Serviços completos para linhas de transmissão: fundação das torres, montagem das torres e lançamento de cabo.',
    image: '/servico-linhas-transmissao.jpg',
    iconName: 'Zap',
    segment: 'energia',
  },
  {
    id: 'subestacao-se',
    title: 'Subestações (SE)',
    description: 'Construção civil e eletromecânica: montagem das bases dos pórticos, montagem dos pórticos, casa de comando e paredes corta-fogo.',
    image: '/servico-subestacao.jpg',
    iconName: 'Building',
    segment: 'energia',
  },
  // Serviços reais da HB20 Construções (validados no site oficial hb20construcoes.com.br)
  {
    id: 'construcao-civil',
    title: 'Construção Civil',
    description: 'Planejamento, gerenciamento e execução de obras civis de grande porte.',
    image: '',
    iconName: 'Building',
    segment: 'edificacoes',
  },
  {
    id: 'obras-infraestrutura',
    title: 'Obras de Infraestrutura',
    description: 'Concepção, construção, fiscalização, operação e análise de pavimentação e terraplenagem.',
    image: '',
    iconName: 'HardHat',
    segment: 'estrada-e-rodagem',
  },
  {
    id: 'saneamento-infra',
    title: 'Saneamento',
    description: 'Maquinários de alta tonelagem e profissionais especializados em redes de saneamento.',
    image: '',
    iconName: 'Droplet',
    segment: 'infraestrutura',
  },
  {
    id: 'mineracao-infra',
    title: 'Mineração',
    description: 'Soluções com custos otimizados e execução acelerada para movimentação de terra e minérios.',
    image: '',
    iconName: 'Pickaxe',
    segment: 'infraestrutura',
  },
  // Etapas com foto real (pasta /public), sem descrição própria — não inventar texto que não existe.
  {
    id: 'stage-terraplenagem',
    title: 'Terraplenagem e Abertura de Vias',
    image: '/etapa-terraplenagem.jpg',
    iconName: 'HardHat',
    segment: 'estrada-e-rodagem',
  },
  {
    id: 'stage-compactacao',
    title: 'Compactação de Solo e Pavimentação Asfáltica',
    image: '/etapa-compactacao.jpg',
    iconName: 'HardHat',
    segment: 'estrada-e-rodagem',
  },
  {
    id: 'stage-nivelamento',
    title: 'Nivelamento e Drenagem com Maquinário Pesado',
    image: '/etapa-terraplenagem.jpg',
    iconName: 'HardHat',
    segment: 'estrada-e-rodagem',
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
