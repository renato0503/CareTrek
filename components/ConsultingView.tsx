import React from 'react';
import { Calendar, Video, FileText, Dumbbell, ChevronRight, PlusCircle } from 'lucide-react';
import { ATHLETE_DATA } from '../constants';

export const ConsultingView: React.FC = () => {
  return (
    <div className="pb-24 animate-fade-in">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-white tracking-tight">Tríade da Performance</h1>
        <p className="text-slate-400 text-sm">Gerencie seu suporte multidisciplinar</p>
      </header>

      {/* Triad Icons Visual */}
      <div className="flex justify-center gap-8 mb-8 py-4">
        {['Fisio', 'Nutri', 'Psico'].map((item) => (
          <div key={item} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-slate-800 border-2 border-lime-400 flex items-center justify-center shadow-[0_0_15px_rgba(163,230,53,0.3)]">
              <span className="text-lime-400 font-bold text-xs">{item}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Appointments */}
      <section className="mb-8">
        <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
          <Calendar size={18} className="text-lime-400" />
          Próximos Agendamentos
        </h2>
        <div className="space-y-3">
          {ATHLETE_DATA.appointments.map((appt) => (
            <div key={appt.id} className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white font-bold">{appt.type}</h3>
                  <p className="text-slate-400 text-sm">{appt.doctor}</p>
                </div>
                <div className="text-right">
                  <span className="block text-lime-400 font-bold">{appt.date}</span>
                  <span className="block text-slate-400 text-xs">{appt.time}</span>
                </div>
              </div>
              
              {appt.isVirtual && (
                <button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] transition-all text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                  <Video size={16} />
                  Entrar na Sala Virtual
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Files & Plans */}
      <section className="mb-8">
        <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
          <FileText size={18} className="text-lime-400" />
          Planos Ativos
        </h2>
        
        <div className="grid gap-3">
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center justify-between group cursor-pointer hover:border-lime-500/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500/10 p-2 rounded-lg text-orange-500">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">Plano Nutricional</h4>
                <p className="text-slate-500 text-xs">{ATHLETE_DATA.nutritionPlan.meta}</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-slate-600 group-hover:text-white transition-colors" />
          </div>

          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center justify-between group cursor-pointer hover:border-lime-500/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500/10 p-2 rounded-lg text-blue-500">
                <Dumbbell size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">Biblioteca de Exercícios</h4>
                <p className="text-slate-500 text-xs">Fisioterapia Preventiva</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-slate-600 group-hover:text-white transition-colors" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <button className="w-full bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-lime-500/20 active:scale-[0.98] transition-all">
        <PlusCircle size={20} />
        Agendar Nova Sessão
      </button>
    </div>
  );
};