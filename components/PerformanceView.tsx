import React, { useState } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Moon, Wind, RefreshCw, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { ATHLETE_DATA } from '../constants';
import { Metric } from '../types';

const MetricCard: React.FC<{ metric: Metric; icon: React.ReactNode }> = ({ metric, icon }) => {
  const isGood = metric.status === 'good';
  const isWarning = metric.status === 'warning';

  const colorClass = isGood ? 'text-lime-400' : isWarning ? 'text-yellow-400' : 'text-slate-400';
  const bgClass = isGood ? 'bg-lime-400/10' : isWarning ? 'bg-yellow-400/10' : 'bg-slate-700/50';

  const chartData = metric.history.map((val, idx) => ({ day: idx, value: val }));

  return (
    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-lg mb-4">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg ${bgClass} ${colorClass}`}>
            {icon}
          </div>
          <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">{metric.label}</span>
        </div>
        <div className={`flex items-center text-xs font-bold ${colorClass}`}>
          {metric.trend === 'up' && <ArrowUp size={14} />}
          {metric.trend === 'down' && <ArrowDown size={14} />}
          {metric.trend === 'stable' && <Minus size={14} />}
        </div>
      </div>
      
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-3xl font-bold text-white">{metric.value}</span>
        {metric.unit && <span className="text-slate-500 text-sm">{metric.unit}</span>}
      </div>

      <div className="h-16 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id={`gradient-${metric.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={isGood ? '#a3e635' : isWarning ? '#facc15' : '#94a3b8'} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={isGood ? '#a3e635' : isWarning ? '#facc15' : '#94a3b8'} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={isGood ? '#a3e635' : isWarning ? '#facc15' : '#94a3b8'} 
              fill={`url(#gradient-${metric.id})`} 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const PerformanceView: React.FC = () => {
  const [syncing, setSyncing] = useState(false);

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => setSyncing(false), 2000);
  };

  return (
    <div className="pb-24 animate-fade-in">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-white tracking-tight">Performance Tracker</h1>
        <div className="flex items-center gap-2 mt-1">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
          </span>
          <p className="text-yellow-500 text-sm font-medium">Recuperação Necessária</p>
        </div>
      </header>

      {/* Sync Button */}
      <div className="mb-6 flex justify-end">
        <button 
          onClick={handleSync}
          className="flex items-center gap-2 text-xs font-semibold text-lime-400 bg-lime-400/10 px-3 py-2 rounded-full hover:bg-lime-400/20 transition-all active:scale-95"
        >
          <RefreshCw size={14} className={syncing ? 'animate-spin' : ''} />
          {syncing ? 'Sincronizando...' : 'Sincronizar Dados'}
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-1">
        <MetricCard 
          metric={ATHLETE_DATA.metrics.restingHeartRate} 
          icon={<Activity size={20} />} 
        />
        <MetricCard 
          metric={ATHLETE_DATA.metrics.sleepQuality} 
          icon={<Moon size={20} />} 
        />
        <MetricCard 
          metric={ATHLETE_DATA.metrics.vo2Max} 
          icon={<Wind size={20} />} 
        />
      </div>

      {/* Insight Box */}
      <div className="mt-6 bg-gradient-to-r from-indigo-900 to-slate-900 p-4 rounded-xl border-l-4 border-indigo-500 shadow-lg">
        <h3 className="text-indigo-300 text-sm font-bold uppercase mb-1">CareTrek AI Insight</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Sua média de sono está abaixo do ideal. Priorize o descanso hoje à noite para maximizar a recuperação muscular do último treino.
        </p>
      </div>
    </div>
  );
};