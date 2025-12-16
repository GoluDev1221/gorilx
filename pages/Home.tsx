import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, BookOpen, Award, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { LanguageContext } from '../App';
import { UI_TEXT, SCENARIOS, APP_INFO } from '../constants';

export default function Home() {
  const { lang, userProgress } = useContext(LanguageContext);
  
  // Randomize the tip once on mount so it doesn't change on every re-render
  const [randomScenario] = useState(() => SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)]);

  const StatCard = ({ icon: Icon, label, value, color, bgClass, textClass }: any) => (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
      <div className={`p-3 rounded-xl ${bgClass}`}>
        <Icon size={22} className={textClass} />
      </div>
      <div>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">{label}</p>
        <p className="text-xl font-bold text-slate-800 dark:text-white">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 pb-6">
      {/* Welcome Header */}
      <section className="mt-2">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">{UI_TEXT.welcome[lang]}</h2>
        <p className="text-slate-500 dark:text-slate-400">{UI_TEXT.subtitle[lang]}</p>
      </section>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard 
          icon={Award} 
          label={UI_TEXT.xp[lang]} 
          value={userProgress.xp} 
          bgClass="bg-amber-100 dark:bg-amber-900/30"
          textClass="text-amber-600 dark:text-amber-500"
        />
        <StatCard 
          icon={CheckCircle2} 
          label={UI_TEXT.completed[lang]} 
          value={`${userProgress.completedLevels.length}`} 
          bgClass="bg-emerald-100 dark:bg-emerald-900/30"
          textClass="text-emerald-600 dark:text-emerald-500"
        />
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-1 gap-4">
        {/* Emergency CTA */}
        <Link to="/emergency" className="block relative overflow-hidden group rounded-3xl shadow-lg shadow-red-200/50 dark:shadow-none">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transform transition-transform group-hover:scale-105"></div>
          <div className="relative p-6 flex items-center justify-between text-white">
            <div>
              <h3 className="font-bold text-xl mb-1">{UI_TEXT.emergency[lang]}</h3>
              <p className="text-red-100 text-sm font-medium opacity-90">{UI_TEXT.cyberHelpline[lang]}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full animate-pulse">
              <ShieldAlert size={32} />
            </div>
          </div>
        </Link>
        
        {/* Symptom Checker CTA */}
        <Link to="/symptoms" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-3xl shadow-sm flex items-center justify-between group hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
           <div className="flex items-center gap-4">
             <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl group-hover:scale-110 transition-transform">
               <Activity size={24} />
             </div>
             <div>
               <h3 className="font-bold text-slate-800 dark:text-white">{UI_TEXT.checkSymptoms[lang]}</h3>
               <p className="text-xs text-slate-500 dark:text-slate-400">{UI_TEXT.amIHacked[lang]}</p>
             </div>
           </div>
           <ChevronRight className="text-slate-400 dark:text-slate-600 group-hover:text-blue-500" />
        </Link>
      </div>

      {/* Tip of the Day - Randomized */}
      <div className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 p-5 rounded-2xl border border-blue-100 dark:border-slate-700 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
            <BookOpen size={18} />
            <span className="font-bold text-sm uppercase tracking-wide">{UI_TEXT.didYouKnow[lang]}</span>
          </div>
        </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {randomScenario.description[lang]}
        </p>
        <Link to="/awareness" className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          {UI_TEXT.startLearning[lang]} <ChevronRight size={16} />
        </Link>
      </div>

      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400 dark:text-slate-600">
        <p className="font-medium">GorilX v1.0.0 (Beta)</p>
        <div className="my-2">
          <Link to="/about" className="text-blue-500 dark:text-blue-400 hover:underline decoration-dotted underline-offset-2">
            About This Project
          </Link>
        </div>
        <p>Developed by {APP_INFO.developer} • {APP_INFO.company}</p>
      </div>
    </div>
  );
}