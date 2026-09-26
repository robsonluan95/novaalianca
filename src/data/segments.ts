import { Segment, SegmentSlug } from '@/types';
import { Translations } from '@/context/LanguageContext';
import { FEATURED_PROJECTS, PROJECTS_LIST, SERVICES_LIST } from './siteData';

export const SEGMENTS: Segment[] = [
  {
    slug: 'energia',
    href: '/energia',
    label: 'Energia',
    tagline: 'Usinas solares, PCHs, linhas de transmissão e subestações de grande escala.',
    metaDescription:
      'Energia solar fotovoltaica, PCHs, linhas de transmissão e subestações executadas pelo grupo Nova Aliança Empreendimentos.',
    accentVar: 'institutional',
    iconName: 'Sun',
    status: 'live',
  },
  {
    slug: 'oleo-e-gas',
    href: '/oleo-e-gas',
    label: 'Óleo e Gás',
    tagline: 'Engenharia e construção para o setor de óleo e gás.',
    metaDescription: 'Atuação do grupo Nova Aliança Empreendimentos no segmento de Óleo e Gás.',
    accentVar: 'institutional',
    iconName: 'Fuel',
    status: 'coming-soon',
  },
  {
    slug: 'infraestrutura',
    href: '/infraestrutura',
    label: 'Infraestrutura',
    tagline: 'Saneamento, mineração e grandes obras de infraestrutura.',
    metaDescription:
      'Saneamento, mineração e obras de infraestrutura executadas pelo grupo Nova Aliança Empreendimentos.',
    accentVar: 'institutional',
    iconName: 'HardHat',
    status: 'coming-soon',
  },
  {
    slug: 'estrada-e-rodagem',
    href: '/estrada-e-rodagem',
    label: 'Estrada e Rodagem',
    tagline: 'Terraplenagem, pavimentação e obras rodoviárias.',
    metaDescription: 'Atuação do grupo Nova Aliança Empreendimentos em obras de estrada e rodagem.',
    accentVar: 'institutional',
    iconName: 'Truck',
    status: 'coming-soon',
  },
  {
    slug: 'edificacoes',
    href: '/edificacoes',
    label: 'Edificações',
    tagline: 'Construção civil predial e industrial.',
    metaDescription: 'Atuação do grupo Nova Aliança Empreendimentos em edificações prediais e industriais.',
    accentVar: 'institutional',
    iconName: 'Building2',
    status: 'coming-soon',
  },
];

export type SubverticalSlug = 'solar' | 'pch' | 'transmissao-subestacoes' | 'saneamento' | 'mineracao';

export interface Subvertical {
  slug: SubverticalSlug;
  parentSlug: SegmentSlug;
  href: string;
  label: string;
  tagline: string;
  metaDescription: string;
  subtypes: string[];
}

export const SUBVERTICALS: Subvertical[] = [
  {
    slug: 'solar',
    parentSlug: 'energia',
    href: '/energia/solar',
    label: 'Solar',
    tagline: 'Usinas fotovoltaicas de grande escala (GC e GD).',
    metaDescription: 'Usinas solares fotovoltaicas de grande escala executadas pelo grupo Nova Aliança Empreendimentos.',
    subtypes: ['Solar', 'Solar/Termosolar'],
  },
  {
    slug: 'pch',
    parentSlug: 'energia',
    href: '/energia/pch',
    label: 'PCH',
    tagline: 'Pequenas Centrais Hidrelétricas.',
    metaDescription: 'Pequenas Centrais Hidrelétricas (PCHs) executadas pelo grupo Nova Aliança Empreendimentos.',
    subtypes: ['PCH'],
  },
  {
    slug: 'transmissao-subestacoes',
    parentSlug: 'energia',
    href: '/energia/transmissao-subestacoes',
    label: 'Transmissão & Subestações',
    tagline: 'Linhas de transmissão e subestações de alta tensão.',
    metaDescription: 'Linhas de transmissão e subestações executadas pelo grupo Nova Aliança Empreendimentos.',
    subtypes: ['Transmissão/Subestação'],
  },
  {
    slug: 'saneamento',
    parentSlug: 'infraestrutura',
    href: '/infraestrutura/saneamento',
    label: 'Saneamento',
    tagline: 'Maquinários de alta tonelagem e profissionais especializados em redes de saneamento.',
    metaDescription: 'Atuação do grupo Nova Aliança Empreendimentos em obras de saneamento.',
    subtypes: [],
  },
  {
    slug: 'mineracao',
    parentSlug: 'infraestrutura',
    href: '/infraestrutura/mineracao',
    label: 'Mineração',
    tagline: 'Soluções com custos otimizados e execução acelerada para movimentação de terra e minérios.',
    metaDescription: 'Atuação do grupo Nova Aliança Empreendimentos em obras de mineração.',
    subtypes: [],
  },
];

export function getSegment(slug: SegmentSlug): Segment {
  const segment = SEGMENTS.find((s) => s.slug === slug);
  if (!segment) throw new Error(`Unknown segment: ${slug}`);
  return segment;
}

export function getSubvertical(slug: SubverticalSlug): Subvertical {
  const subvertical = SUBVERTICALS.find((s) => s.slug === slug);
  if (!subvertical) throw new Error(`Unknown subvertical: ${slug}`);
  return subvertical;
}

export function getSubverticalsForSegment(slug: SegmentSlug) {
  return SUBVERTICALS.filter((s) => s.parentSlug === slug);
}

export function getAllProjects() {
  const all = [...FEATURED_PROJECTS, ...PROJECTS_LIST];
  return all.filter((p, i, self) => i === self.findIndex((x) => x.id === p.id));
}

export function getSegmentProjects(slug: SegmentSlug) {
  return getAllProjects().filter((p) => p.segment === slug);
}

export function getProjectById(id: string) {
  return getAllProjects().find((p) => p.id === id) ?? null;
}

export function getRelatedProjects(projectId: string, segment: SegmentSlug, limit = 3) {
  return getSegmentProjects(segment)
    .filter((p) => p.id !== projectId)
    .slice(0, limit);
}

export function getSubverticalProjects(slug: SubverticalSlug) {
  const subvertical = getSubvertical(slug);
  return getSegmentProjects(subvertical.parentSlug).filter(
    (p) => p.subtype && subvertical.subtypes.includes(p.subtype)
  );
}

export function getSegmentServices(slug: SegmentSlug) {
  return SERVICES_LIST.filter((s) => s.segment === slug);
}

export function buildNavLinks(t: Translations) {
  return [
    { label: t.nav.home, href: '/' },
    ...SEGMENTS.map((s) => ({
      label: t.segments.list.find((x) => x.slug === s.slug)?.label ?? s.label,
      href: s.href,
    })),
    { label: t.nav.news, href: '/noticias' },
    { label: t.nav.about, href: '/sobre' },
    { label: t.nav.contact, href: '/contato' },
  ];
}

export interface NavTreeItem {
  label: string;
  href: string;
  children: { label: string; href: string }[];
}

export function buildNavTree(t: Translations): NavTreeItem[] {
  return [
    { label: t.nav.home, href: '/', children: [] },
    ...SEGMENTS.map((s) => ({
      label: t.segments.list.find((x) => x.slug === s.slug)?.label ?? s.label,
      href: s.href,
      children: getSubverticalsForSegment(s.slug).map((sv) => ({
        label: t.segments.subverticals.find((x) => x.slug === sv.slug)?.label ?? sv.label,
        href: sv.href,
      })),
    })),
    { label: t.nav.news, href: '/noticias', children: [] },
    { label: t.nav.about, href: '/sobre', children: [] },
    { label: t.nav.contact, href: '/contato', children: [] },
  ];
}

export function segmentMetadata(slug: SegmentSlug) {
  const segment = getSegment(slug);
  return {
    title: `Nova Aliança Empreendimentos | ${segment.label}`,
    description: segment.metaDescription,
  };
}

export function projectMetadata(id: string) {
  const project = getProjectById(id);
  if (!project) return { title: 'Nova Aliança Empreendimentos', description: '' };
  const segment = getSegment(project.segment);
  // PROJECTS_LIST carries the plain title (FEATURED_PROJECTS' title includes a parenthetical subtitle).
  const plainTitle = PROJECTS_LIST.find((p) => p.id === id)?.title ?? project.title;
  const description =
    project.description ?? `${plainTitle} — ${project.location} • ${project.year} • ${project.capacity} (${segment.label}).`;
  return {
    title: `Nova Aliança Empreendimentos | ${plainTitle}`,
    description,
  };
}

export function subverticalMetadata(slug: SubverticalSlug) {
  const subvertical = getSubvertical(slug);
  const segment = getSegment(subvertical.parentSlug);
  return {
    title: `Nova Aliança Empreendimentos | ${segment.label} | ${subvertical.label}`,
    description: subvertical.metaDescription,
  };
}
