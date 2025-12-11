export enum Tab {
  PERFORMANCE = 'performance',
  CONSULTING = 'consulting',
  PROFILE = 'profile',
}

export interface Metric {
  id: string;
  label: string;
  value: string | number;
  unit?: string;
  status: 'good' | 'warning' | 'neutral';
  trend: 'up' | 'down' | 'stable';
  history: number[]; // For chart simulation
}

export interface Appointment {
  id: string;
  type: 'Nutrição' | 'Fisioterapia' | 'Psicologia';
  doctor: string;
  date: string;
  time: string;
  isVirtual: boolean;
}

export interface Plan {
  title: string;
  description: string;
  meta: string;
}

export interface AthleteData {
  name: string;
  category: string;
  level: string;
  metrics: {
    restingHeartRate: Metric;
    sleepQuality: Metric;
    vo2Max: Metric;
  };
  appointments: Appointment[];
  nutritionPlan: Plan;
}