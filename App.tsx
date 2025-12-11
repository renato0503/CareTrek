import React, { useState } from 'react';
import { PerformanceView } from './components/PerformanceView';
import { ConsultingView } from './components/ConsultingView';
import { ProfileView } from './components/ProfileView';
import { BottomNav } from './components/BottomNav';
import { Tab } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.PERFORMANCE);

  const renderView = () => {
    switch (currentTab) {
      case Tab.PERFORMANCE:
        return <PerformanceView />;
      case Tab.CONSULTING:
        return <ConsultingView />;
      case Tab.PROFILE:
        return <ProfileView />;
      default:
        return <PerformanceView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-lime-400/30">
      <div className="max-w-md mx-auto min-h-screen relative flex flex-col">
        {/* Main Content Area */}
        <main className="flex-1 p-6">
          {renderView()}
        </main>

        {/* Navigation */}
        <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />
      </div>

      {/* Tailwind Utility for Safe Area Padding (iOS) */}
      <style>{`
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom);
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}