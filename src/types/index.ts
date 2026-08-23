export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  capacity: string;
  description?: string;
  image: string;
  isFeatured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: 'Wrench' | 'Hammer' | 'Settings' | 'Zap' | 'Sun' | 'ShieldCheck' | 'Building' | 'Truck';
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
