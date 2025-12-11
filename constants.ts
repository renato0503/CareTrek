import { AthleteData } from './types';

export const ATHLETE_DATA: AthleteData = {
  name: "Alexandre Souza",
  category: "Corrida / Ciclismo",
  level: "Amador Engajado",
  metrics: {
    restingHeartRate: {
      id: 'hr',
      label: 'FC Repouso',
      value: 52,
      unit: 'bpm',
      status: 'good',
      trend: 'down',
      history: [55, 54, 53, 52, 53, 52, 52]
    },
    sleepQuality: {
      id: 'sleep',
      label: 'Qualidade do Sono',
      value: '6h 30m',
      status: 'warning',
      trend: 'stable',
      history: [6.5, 7, 6, 5.5, 6.5, 6.5, 6.5]
    },
    vo2Max: {
      id: 'vo2',
      label: 'VO2 Max',
      value: 48,
      unit: 'mL/kg/min',
      status: 'good',
      trend: 'up',
      history: [46, 46.5, 47, 47.2, 47.5, 47.8, 48]
    }
  },
  appointments: [
    {
      id: '1',
      type: 'Nutrição',
      doctor: 'Dr. Mendes',
      date: '15/Dez',
      time: '10:00h',
      isVirtual: true
    },
    {
      id: '2',
      type: 'Fisioterapia',
      doctor: 'Dra. Clara',
      date: '20/Dez',
      time: '14:00h',
      isVirtual: true
    }
  ],
  nutritionPlan: {
    title: "Plano de Aumento de Endurance",
    description: "Foco em carboidratos complexos e hidratação intra-treino.",
    meta: "2800 kcal/dia"
  }
};