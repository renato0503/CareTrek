import React from 'react';
import { User, Settings, CreditCard, Bluetooth, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { ATHLETE_DATA } from '../constants';

const SettingItem: React.FC<{ icon: React.ReactNode; label: string; value?: string }> = ({ icon, label, value }) => (
  <div className="flex items-center justify-between p-4 border-b border-slate-800 last:border-0 cursor-pointer active:bg-slate-800/50 transition-colors">
    <div className="flex items-center gap-3">
      <div className="text-slate-400">
        {icon}
      </div>
      <span className="text-slate-200 text-sm font-medium">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      {value && <span className="text-slate-500 text-xs">{value}</span>}
      <ChevronRight size={16} className="text-slate-600" />
    </div>
  </div>
);

export const ProfileView: React.FC = () => {
  return (
    <div className="pb-24 animate-fade-in">
      <header className="flex flex-col items-center py-8">
        <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center border-4 border-slate-800 shadow-xl mb-4">
          <User size={40} className="text-slate-400" />
        </div>
        <h1 className="text-2xl font-bold text-white">{ATHLETE_DATA.name}</h1>
        <p className="text-lime-400 text-sm font-medium bg-lime-400/10 px-3 py-1 rounded-full mt-2 border border-lime-400/20">
          {ATHLETE_DATA.level}
        </p>
        <p className="text-slate-500 text-sm mt-1">{ATHLETE_DATA.category}</p>
      </header>

      <div className="bg-slate-800/50 rounded-xl overflow-hidden mb-6 backdrop-blur-sm">
        <SettingItem 
          icon={<CreditCard size={18} />} 
          label="Plano de Assinatura" 
          value="Pro Anual" 
        />
        <SettingItem 
          icon={<Bluetooth size={18} />} 
          label="Conectar Dispositivos" 
          value="Garmin Connect™"
        />
        <SettingItem 
          icon={<Settings size={18} />} 
          label="Configurações do App" 
        />
        <SettingItem 
          icon={<HelpCircle size={18} />} 
          label="Ajuda e Suporte" 
        />
      </div>

      <button className="w-full flex items-center justify-center gap-2 text-red-400 p-4 rounded-xl border border-red-900/30 bg-red-900/10 hover:bg-red-900/20 active:scale-[0.98] transition-all">
        <LogOut size={18} />
        <span className="font-semibold">Sair da Conta</span>
      </button>
      
      <div className="mt-8 text-center">
        <p className="text-slate-700 text-xs">CareTrek App v1.0.4</p>
      </div>
    </div>
  );
};