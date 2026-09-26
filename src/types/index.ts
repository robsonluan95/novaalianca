export type SegmentSlug =
  | 'energia'
  | 'oleo-e-gas'
  | 'infraestrutura'
  | 'estrada-e-rodagem'
  | 'edificacoes';

export interface Segment {
  slug: SegmentSlug;
  href: string;
  label: string;
  tagline: string;
  metaDescription: string;
  accentVar: string;
  iconName: 'Sun' | 'Fuel' | 'HardHat' | 'Truck' | 'Building2';
  status: 'live' | 'coming-soon';
}

export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  capacity: string;
  description?: string;
  image: string;
  gallery?: string[];
  isFeatured?: boolean;
  segment: SegmentSlug;
  subtype?: string;
}

export interface Service {
  id: string;
  title: string;
  description?: string;
  image: string;
  iconName: 'Wrench' | 'Hammer' | 'Settings' | 'Zap' | 'Sun' | 'ShieldCheck' | 'Building' | 'Truck' | 'HardHat' | 'Droplet' | 'Pickaxe';
  segment: SegmentSlug;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  statusTag: string;
  author: {
    name: string;
    role: string;
  };
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Award' | 'Leaf' | 'HardHat' | 'Shield';
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}
