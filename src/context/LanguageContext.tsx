'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'BR' | 'US';

export interface Translations {
  nav: {
    home: string;
    projects: string;
    services: string;
    news: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    metrics: {
      installed: string;
      projects: string;
      experience: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    viewDetails: string;
    viewMore: string;
    viewLess: string;
    allProjectsTitle: string;
    allProjectsSubtitle: string;
    searchPlaceholder: string;
    foundCount: string;
    featured: {
      title: string;
      location: string;
      capacity: string;
      description: string;
    };
    list: {
      id: string;
      title: string;
      location: string;
      capacity: string;
    }[];
  };
  services: {
    title: string;
    subtitle: string;
    viewMore: string;
    viewLess: string;
    searchPlaceholder: string;
    foundCount: string;
    list: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  news: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    foundCount: string;
    readMore: string;
    viewAll: string;
    viewLess: string;
    list: {
      id: string;
      title: string;
      summary: string;
      date: string;
      statusTag: string;
      authorRole: string;
    }[];
  };
  about: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    founderTitle: string;
    founderRole: string;
    founderBio: string;
  };
  contact: {
    title: string;
    subtitle: string;
    sendMessage: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    infoTitle: string;
    whatsappLabel: string;
    responseTime: string;
    emailLabelInfo: string;
    whyWhatsappTitle: string;
    reason1: string;
    reason2: string;
    reason3: string;
    whatsappMessageBase: string;
    whatsappMessageName: string;
    whatsappMessageEmail: string;
    whatsappMessageText: string;
  };
  values: {
    title: string;
    excellenceTitle: string;
    excellenceDesc: string;
    sustainabilityTitle: string;
    sustainabilityDesc: string;
    safetyTitle: string;
    safetyDesc: string;
  };
  footer: {
    description: string;
    followLinkedin: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    address: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  BR: {
    nav: {
      home: 'Página Inicial',
      projects: 'Projetos',
      services: 'Serviços',
      news: 'Notícias',
      about: 'Sobre Nós',
      contact: 'Contato',
    },
    hero: {
      title: 'Nova Aliança Empreendimentos',
      subtitle:
        'Nascemos da união estratégica entre a Carvalho Energia Renovável e a HB20 Construções, reunindo mais de 11 anos de excelência na execução de parques de energia solar, subestações, linhas de transmissão e PCHs, além de construção civil, infraestrutura, saneamento e mineração.',
      metrics: {
        installed: 'MWp Instalados em Solar',
        projects: 'Projetos de Infraestrutura & Energia',
        experience: 'Anos de Experiência Unida',
      },
    },
    projects: {
      title: 'Projetos em Destaque',
      subtitle: 'Grandes obras de energia solar, infraestrutura civil, saneamento e mineração executadas pelo grupo Nova Aliança',
      viewDetails: 'Ver Detalhes do Projeto',
      viewMore: 'Ver mais projetos',
      viewLess: 'Ver menos',
      allProjectsTitle: 'Todos os Projetos',
      allProjectsSubtitle: 'Explore nosso portfólio completo de projetos de energia, civil e mineração',
      searchPlaceholder: 'Pesquisar projetos...',
      foundCount: 'projeto(s) encontrado(s)',
      featured: {
        title: 'UFV Cristino Castro (Energia Solar & Terraplenagem)',
        location: 'Cristino Castro, Piauí',
        capacity: '765 MWp',
        description:
          'Exemplo máximo da união Carvalho + HB20: terraplenagem pesada de 1.200.000 m² (HB20) combinada com 543.089 módulos fotovoltaicos, 6.064 trackers e 76.140 perfis metálicos cravados (Carvalho).',
      },
      list: [
        {
          id: 'ufv-cristino-castro',
          title: 'UFV Cristino Castro',
          location: 'Cristino Castro, Piauí',
          capacity: '765 MWp',
        },
        {
          id: 'ufv-panorama',
          title: 'UFV Panorama',
          location: 'Ribeiro Gonçalves, Piauí',
          capacity: '550 MWp',
        },
        {
          id: 'ufv-belmonte',
          title: 'UFV Belmonte',
          location: 'Belmonte, Pernambuco',
          capacity: '570 MWp',
        },
        {
          id: 'ufv-sao-goncalo',
          title: 'UFV São Gonçalo',
          location: 'São Gonçalo do Gurguéia, Piauí',
          capacity: '864.5 MWp',
        },
        {
          id: 'ufv-jaiba',
          title: 'UFV Jaíba',
          location: 'Jaíba, Minas Gerais',
          capacity: '106 MWp',
        },
        {
          id: 'ufv-dracena',
          title: 'UFV Dracena',
          location: 'Dracena, São Paulo',
          capacity: '90 MWp',
        },
        {
          id: 'ufv-pirapora',
          title: 'UFV Pirapora',
          location: 'Pirapora, Minas Gerais',
          capacity: '406 MWp',
        },
        {
          id: 'ufv-iaciara',
          title: 'UFV Iaciara I & Iaciara II',
          location: 'Iaciara, Goiás',
          capacity: '7.20 MWp',
        },
        {
          id: 'ufv-santo-antonio',
          title: 'UFV Santo Antônio',
          location: 'Lagoa Santa, Minas Gerais',
          capacity: '7.86 MWp',
        },
      ],
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções de alta performance e engenharia especializada para a construção de usinas solares de grande escala em todo o Brasil.',
      viewMore: 'Ver mais serviços',
      viewLess: 'Ver menos',
      searchPlaceholder: 'Pesquisar serviços...',
      foundCount: 'serviço(s) encontrado(s)',
      list: [
        {
          id: 'obras-civis',
          title: 'Obras Civis',
          description: 'Preparação de terreno, terraplenagem e infraestrutura civil para usinas solares.',
        },
        {
          id: 'cravacao-perfis',
          title: 'Cravação de Perfis Metálicos',
          description: 'Instalação especializada de fundações metálicas para estruturas fotovoltaicas.',
        },
        {
          id: 'montagem-estruturas',
          title: 'Montagem de Estruturas e Módulos',
          description: 'Montagem precisa de estruturas metálicas e instalação de painéis solares.',
        },
        {
          id: 'instalacao-eletrica',
          title: 'Instalação Elétrica',
          description: 'Sistemas elétricos completos, cabeamento e conexão à rede de transmissão.',
        },
        {
          id: 'logistica',
          title: 'Logística',
          description: 'Gestão completa de suprimentos e logística para grandes projetos solares.',
        },
        {
          id: 'operacao-manutencao',
          title: 'Operação e Manutenção (O&M)',
          description: 'Serviços especializados de manutenção e monitoramento de performance.',
        },
        {
          id: 'lancamento-cabos',
          title: 'Lançamento de Cabos de BT e MT',
          description: 'Especializados no lançamento de cabos de média e baixa tensão para conexão de usinas fotovoltaicas à rede elétricas.',
        },
        {
          id: 'abertura-valas',
          title: 'Abertura de Valas',
          description: 'Serviços de abertura de valas para instalação de cabos subterrâneos, com equipamentos especializados.',
        },
      ],
    },
    news: {
      title: 'Últimas Notícias',
      subtitle: 'Acompanhe as novidades da Nova Aliança e os marcos dos nossos projetos',
      searchPlaceholder: 'Pesquisar notícias...',
      foundCount: 'notícia(s) encontrada(s)',
      readMore: 'Ler mais',
      viewAll: 'Ver Todas as Notícias',
      viewLess: 'Ver Menos Notícias',
      list: [
        {
          id: 'news-1',
          title: 'Concluímos uma grande etapa na UFV Cristino Castro',
          summary:
            'No total foram mais de 1.500.000 metros de cabos lançados e conectorizados dentro da subestação, todos prontos para o comissionamento. E o mais impressionante: alcançamos essa meta em apenas 53 dias. Um marco que só foi possível graças ao comprometimento, técnica e dedicação de todo o time envolvido. Cada metro lançado representa não apenas avanço no projeto, mas também a energia que logo seguirá impulsionando novas conquistas.',
          date: '18 de setembro de 2025',
          statusTag: 'Projeto Concluído',
          authorRole: 'Energia Solar',
        },
        {
          id: 'news-2',
          title: 'Atividades elétricas da UFV LINS 7 e LINS 8 já alcançaram 80% de execução.',
          summary:
            'Isso significa que estamos cada vez mais próximos da etapa final do projeto e, em breve, tudo estará concluído e energizado. Mais do que números, esse avanço representa dedicação, trabalho em equipe e a concretização de mais um passo importante para a geração de energia limpa e sustentável. 🌱',
          date: '14 de agosto de 2025',
          statusTag: 'Etapa Concluída',
          authorRole: 'Energia Solar',
        },
        {
          id: 'news-3',
          title: 'Dia Mundial do Meio Ambiente: nosso papel como agente de transformação',
          summary:
            'No Dia Mundial do Meio Ambiente, reafirmamos nosso papel não apenas como empresa de engenharia, mas também como agente de transformação. Trabalhar com energia renovável já representa um passo importante nessa missão, mas sabemos que é possível ir além. Durante esta semana, o Consórcio Solar Cristino Castro promoveu diversas atividades voltadas para a preservação ambiental, incentivando a consciência sustentável em nossas práticas e em nossa comunidade.',
          date: '05 de maio de 2025',
          statusTag: 'Meio Ambiente',
          authorRole: 'Meio Ambiente',
        },
      ],
    },
    about: {
      title: 'Sobre a Nova Aliança Empreendimentos',
      subtitle: 'Nossa História — A União que nos Fortalece',
      paragraph1:
        'A Nova Aliança Empreendimentos nasceu da fusão estratégica entre duas grandes referências do mercado: a Carvalho Energia Renovável, líder em construção de usinas fotovoltaicas de grande porte (GC e GD), e a HB20 Construções, com mais de 10 anos de tradição em engenharia civil, obras de infraestrutura, saneamento básico e mineração.',
      paragraph2:
        'Essa sinergia une o melhor dos dois mundos — a inovação e tecnologia do setor de energias renováveis com a robustez e experiência comprovada em grandes obras civis. Com mais de 35 projetos realizados, 30+ clientes atendidos e um parque de máquinas de alta tonelagem, somos capazes de entregar soluções completas ponta a ponta.',
      paragraph3:
        'Nossa missão é impulsionar a infraestrutura e a transição energética do Brasil com rigor técnico, segurança operacional e compromisso com a excelência em cada etapa — da terraplenagem à energização.',
      founderTitle: 'Tiago Nunes de Castro',
      founderRole: 'Fundador & Diretor Geral',
      founderBio: 'Liderando a união entre a expertise solar da Carvalho e a tradição em engenharia civil da HB20, consolidando o grupo Nova Aliança como referência nacional.',
    },
    contact: {
      title: 'Contato',
      subtitle: 'Entre em contato conosco através do WhatsApp para saber mais sobre nossos serviços em energia solar, construção civil, saneamento e mineração.',
      sendMessage: 'Envie uma Mensagem',
      nameLabel: 'Nome (Opcional)',
      namePlaceholder: 'Seu nome',
      emailLabel: 'Email (Opcional)',
      emailPlaceholder: 'seu@email.com',
      messageLabel: 'Mensagem *',
      messagePlaceholder: 'Digite sua mensagem aqui...',
      submitButton: 'Enviar via WhatsApp',
      infoTitle: 'Informações de Contato',
      whatsappLabel: 'WhatsApp',
      responseTime: 'Respondemos em até 24 horas',
      emailLabelInfo: 'E-mail',
      whyWhatsappTitle: 'Por que escolher o WhatsApp?',
      reason1: 'Resposta rápida e direta',
      reason2: 'Atendimento personalizado',
      reason3: 'Compartilhamento fácil de arquivos',
      whatsappMessageBase: 'Olá! Gostaria de mais informações sobre os serviços da Nova Aliança Empreendimentos.',
      whatsappMessageName: 'Nome',
      whatsappMessageEmail: 'E-mail',
      whatsappMessageText: 'Mensagem',
    },
    values: {
      title: 'Nossos Valores',
      excellenceTitle: 'Excelência Técnica',
      excellenceDesc: 'Comprometidos com padrões elevados de qualidade, segurança e inovação em cada projeto.',
      sustainabilityTitle: 'Sustentabilidade',
      sustainabilityDesc: 'Promovemos um futuro limpo com soluções renováveis e práticas responsáveis ao longo do ciclo de vida.',
      safetyTitle: 'Segurança',
      safetyDesc: 'Priorizamos a proteção de pessoas e do meio ambiente, garantindo confiabilidade, prevenção de riscos e resultados consistentes em todos os nossos projetos.',
    },
    footer: {
      description:
        'A união entre a Carvalho Energia Renovável e a HB20 Construções. Atuamos em energia solar, construção civil, infraestrutura, saneamento e mineração em todo o Brasil.',
      followLinkedin: 'Siga no LinkedIn',
      quickLinks: 'Links Rápidos',
      servicesTitle: 'Serviços',
      contactTitle: 'Contato',
      address: 'Trindade - Goiás, Brasil',
      rights: 'Todos os direitos reservados.',
    },
  },
  US: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      services: 'Services',
      news: 'News',
      about: 'About Us',
      contact: 'Contact',
    },
    hero: {
      title: 'Nova Aliança Empreendimentos',
      subtitle:
        'We were born from the strategic partnership between Carvalho Energia Renovável and HB20 Construções, combining over 11 years of excellence in the execution of solar farms, substations, transmission lines, and small hydroelectric plants (PCHs), as well as civil construction, infrastructure, sanitation, and mining projects.',
      metrics: {
        installed: 'MWp Installed in Solar',
        projects: 'Infrastructure & Energy Projects',
        experience: 'Years of Combined Experience',
      },
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Major solar energy, civil infrastructure, sanitation, and mining projects delivered by the Nova Aliança group',
      viewDetails: 'View Project Details',
      viewMore: 'View more projects',
      viewLess: 'View less',
      allProjectsTitle: 'All Projects',
      allProjectsSubtitle: 'Explore our complete portfolio of energy, civil, and mining projects',
      searchPlaceholder: 'Search projects...',
      foundCount: 'project(s) found',
      featured: {
        title: 'UFV Cristino Castro (Solar Energy & Earthworks)',
        location: 'Cristino Castro, Piauí',
        capacity: '765 MWp',
        description:
          'Ultimate example of the Carvalho + HB20 union: heavy earthworks of 1,200,000 m² (HB20) combined with 543,089 photovoltaic modules, 6,064 trackers, and 76,140 driven metallic profiles (Carvalho).',
      },
      list: [
        {
          id: 'ufv-cristino-castro',
          title: 'UFV Cristino Castro',
          location: 'Cristino Castro, Piauí',
          capacity: '765 MWp',
        },
        {
          id: 'ufv-panorama',
          title: 'UFV Panorama',
          location: 'Ribeiro Gonçalves, Piauí',
          capacity: '550 MWp',
        },
        {
          id: 'ufv-belmonte',
          title: 'UFV Belmonte',
          location: 'Belmonte, Pernambuco',
          capacity: '570 MWp',
        },
        {
          id: 'ufv-sao-goncalo',
          title: 'UFV São Gonçalo',
          location: 'São Gonçalo do Gurguéia, Piauí',
          capacity: '864.5 MWp',
        },
        {
          id: 'ufv-jaiba',
          title: 'UFV Jaíba',
          location: 'Jaíba, Minas Gerais',
          capacity: '106 MWp',
        },
        {
          id: 'ufv-dracena',
          title: 'UFV Dracena',
          location: 'Dracena, São Paulo',
          capacity: '90 MWp',
        },
        {
          id: 'ufv-pirapora',
          title: 'UFV Pirapora',
          location: 'Pirapora, Minas Gerais',
          capacity: '406 MWp',
        },
        {
          id: 'ufv-iaciara',
          title: 'UFV Iaciara I & Iaciara II',
          location: 'Iaciara, Goiás',
          capacity: '7.20 MWp',
        },
        {
          id: 'ufv-santo-antonio',
          title: 'UFV Santo Antônio',
          location: 'Lagoa Santa, Minas Gerais',
          capacity: '7.86 MWp',
        },
      ],
    },
    services: {
      title: 'Our Services',
      subtitle: 'High performance solutions and specialized engineering for the construction of utility-scale solar plants across Brazil.',
      viewMore: 'View more services',
      viewLess: 'View less',
      searchPlaceholder: 'Search services...',
      foundCount: 'service(s) found',
      list: [
        {
          id: 'obras-civis',
          title: 'Civil Works',
          description: 'Site preparation, earthmoving, and civil infrastructure for solar power plants.',
        },
        {
          id: 'cravacao-perfis',
          title: 'Metallic Profile Pile Driving',
          description: 'Specialized installation of metallic foundations for photovoltaic structures.',
        },
        {
          id: 'montagem-estruturas',
          title: 'Structure and Module Assembly',
          description: 'Precise assembly of metallic structures and solar panel installation.',
        },
        {
          id: 'instalacao-eletrica',
          title: 'Electrical Installation',
          description: 'Complete electrical systems, cabling, and grid connection.',
        },
        {
          id: 'logistica',
          title: 'Logistics',
          description: 'Complete supply and logistics management for large solar projects.',
        },
        {
          id: 'operacao-manutencao',
          title: 'Operation and Maintenance (O&M)',
          description: 'Specialized maintenance and performance monitoring services.',
        },
        {
          id: 'lancamento-cabos',
          title: 'LV and MV Cabling',
          description: 'Specialized in laying low and medium voltage cables to connect photovoltaic plants to the power grid.',
        },
        {
          id: 'abertura-valas',
          title: 'Trenching',
          description: 'Trench opening services for underground cable installation, using specialized equipment.',
        },
      ],
    },
    news: {
      title: 'Latest News',
      subtitle: 'Stay updated with Nova Aliança news and our project milestones',
      searchPlaceholder: 'Search news...',
      foundCount: 'news found',
      readMore: 'Read more',
      viewAll: 'View All News',
      viewLess: 'View Less News',
      list: [
        {
          id: 'news-1',
          title: 'We completed a major phase at UFV Cristino Castro',
          summary:
            'A total of over 1,500,000 meters of cables were laid and connected inside the substation, all ready for commissioning. And most impressively: we reached this goal in just 53 days. A milestone that was only possible thanks to the commitment, technique, and dedication of the entire team involved. Each meter laid represents not just progress on the project, but the energy that will soon drive new achievements.',
          date: 'September 18, 2025',
          statusTag: 'Completed Project',
          authorRole: 'Solar Energy',
        },
        {
          id: 'news-2',
          title: 'Electrical activities at UFV LINS 7 and LINS 8 have already reached 80% execution.',
          summary:
            'This means we are getting closer to the final phase of the project, and soon everything will be completed and energized. More than numbers, this progress represents dedication, teamwork, and the realization of another important step towards clean and sustainable energy generation. 🌱',
          date: 'August 14, 2025',
          statusTag: 'Phase Completed',
          authorRole: 'Solar Energy',
        },
        {
          id: 'news-3',
          title: 'World Environment Day: our role as agents of transformation',
          summary:
            'On World Environment Day, we reaffirm our role not just as an engineering company, but as agents of transformation. Working with renewable energy is already a major step, but we know we can go further. This week, the Cristino Castro Solar Consortium promoted various activities focused on environmental preservation, encouraging sustainable awareness in our practices and our community.',
          date: 'May 5, 2025',
          statusTag: 'Environment',
          authorRole: 'Environment',
        },
      ],
    },
    about: {
      title: 'About Nova Aliança Empreendimentos',
      subtitle: 'Our Story — The Union that Empowers Us',
      paragraph1:
        'Nova Aliança Empreendimentos was born from the strategic merger of two market-leading companies: Carvalho Renewable Energy, a leader in utility-scale solar plant construction (GC & GD), and HB20 Construction, with over 10 years of tradition in civil engineering, infrastructure, sanitation, and mining.',
      paragraph2:
        'This synergy unites the best of both worlds — the innovation and technology of the renewable energy sector with the robustness and experience proven in large-scale civil works. With over 35 completed projects, 30+ clients served, and a fleet of high-tonnage heavy machinery, we deliver complete end-to-end solutions.',
      paragraph3:
        'Our mission is to drive Brazil\'s infrastructure development and energy transition with technical rigor, operational safety, and a commitment to excellence at every stage — from earthworks to energization.',
      founderTitle: 'Tiago Nunes de Castro',
      founderRole: 'Founder & Managing Director',
      founderBio: 'Leading the union of Carvalho\'s solar expertise and HB20\'s civil engineering tradition, consolidating Nova Aliança as a national benchmark.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch via WhatsApp to learn more about our solar energy, civil construction, sanitation, and mining services.',
      sendMessage: 'Send a Message',
      nameLabel: 'Name (Optional)',
      namePlaceholder: 'Your name',
      emailLabel: 'Email (Optional)',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message *',
      messagePlaceholder: 'Type your message here...',
      submitButton: 'Send via WhatsApp',
      infoTitle: 'Contact Information',
      whatsappLabel: 'WhatsApp',
      responseTime: 'We reply within 24 hours',
      emailLabelInfo: 'Email',
      whyWhatsappTitle: 'Why choose WhatsApp?',
      reason1: 'Fast & direct response',
      reason2: 'Personalized customer care',
      reason3: 'Easy file sharing',
      whatsappMessageBase: 'Hello! I would like more information about the services of Nova Aliança Empreendimentos.',
      whatsappMessageName: 'Name',
      whatsappMessageEmail: 'Email',
      whatsappMessageText: 'Message',
    },
    values: {
      title: 'Our Values',
      excellenceTitle: 'Technical Excellence',
      excellenceDesc: 'Committed to high standards of quality, safety, and innovation in every single project.',
      sustainabilityTitle: 'Sustainability',
      sustainabilityDesc: 'We promote a clean future with renewable solutions and responsible practices throughout the lifecycle.',
      safetyTitle: 'Safety',
      safetyDesc: 'We prioritize the safety of people and the environment, ensuring reliability, hazard prevention, and consistent results.',
    },
    footer: {
      description:
        'The union of Carvalho Renewable Energy and HB20 Construction. We operate in solar energy, civil construction, infrastructure, sanitation, and mining across Brazil.',
      followLinkedin: 'Follow on LinkedIn',
      quickLinks: 'Quick Links',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      address: 'Trindade - Goiás, Brazil',
      rights: 'All rights reserved.',
    },
  },
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('BR');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};