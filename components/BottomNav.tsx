import React from 'react';
import { Activity, Users, User } from 'lucide-react';
import { Tab } from '../types';

interface BottomNavProps {
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-lg border-t border-slate-800 pb-safe pt-2 px-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-50">
      <div className="flex justify-between items-center max-w-md mx-auto h-16">
        <button 
          onClick={() => onTabChange(Tab.PERFORMANCE)}
          className={`flex flex-col items-center gap-1 w-16 transition-all duration-300 ${
            currentTab === Tab.PERFORMANCE ? 'text-lime-400 -translate-y-2' : 'text-slate-500'
          }`}
        >
          <div className={`p-2 rounded-full transition-all ${
            currentTab === Tab.PERFORMANCE ? 'bg-lime-400/20 shadow-[0_0_15px_rgba(163,230,53,0.3)]' : ''
          }`}>
            <Activity size={24} />
          </div>
          <span className="text-[10px] font-medium">Performance</span>
        </button>

        <button 
          onClick={() => onTabChange(Tab.CONSULTING)}
          className={`flex flex-col items-center gap-1 w-16 transition-all duration-300 ${
            currentTab === Tab.CONSULTING ? 'text-lime-400 -translate-y-2' : 'text-slate-500'
          }`}
        >
          <div className={`p-2 rounded-full transition-all ${
            currentTab === Tab.CONSULTING ? 'bg-lime-400/20 shadow-[0_0_15px_rgba(163,230,53,0.3)]' : ''
          }`}>
            <Users size={24} />
          </div>
          <span className="text-[10px] font-medium">Consultorias</span>
        </button>

        <button 
          onClick={() => onTabChange(Tab.PROFILE)}
          className={`flex flex-col items-center gap-1 w-16 transition-all duration-300 ${
            currentTab === Tab.PROFILE ? 'text-lime-400 -translate-y-2' : 'text-slate-500'
          }`}
        >
          <div className={`p-2 rounded-full transition-all ${
            currentTab === Tab.PROFILE ? 'bg-lime-400/20 shadow-[0_0_15px_rgba(163,230,53,0.3)]' : ''
          }`}>
            <User size={24} />
          </div>
          <span className="text-[10px] font-medium">Perfil</span>
        </button>
      </div>
    </nav>
  );
};