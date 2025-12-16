import React, { useContext, useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, CheckCircle, Activity, MessageSquareWarning, Thermometer, AlertOctagon, Touchpad, UserX, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { UI_TEXT, SYMPTOMS } from '../constants';

const IconMap: any = {
  MessageSquareWarning: MessageSquareWarning,
  Thermometer: Thermometer,
  AlertOctagon: AlertOctagon,
  Touchpad: Touchpad,
  UserX: UserX,
  Activity: Activity
};

export default function Symptoms() {
  const { lang } = useContext(LanguageContext);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-6 pb-6">
       <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Activity className="text-red-500" />
            {UI_TEXT.symptomChecker[lang]}
          </h2>
          <Link to="/" className="text-sm font-semibold text-blue-600 dark:text-blue-400">Back</Link>
       </div>
       
       <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-900/30 text-sm text-amber-900 dark:text-amber-100 flex gap-3">
         <Info className="shrink-0 text-amber-600 dark:text-amber-500" size={20} />
         <p>{UI_TEXT.amIHacked[lang]} Use this guide to identify suspicious activity on your device and take immediate action.</p>
       </div>

       <div className="space-y-4">
          {SYMPTOMS.map((item) => {
            const isExpanded = expandedId === item.id;
            const Icon = IconMap[item.iconName] || Activity;
            
            return (
              <div key={item.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
                <button 
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className={`w-full flex items-start gap-4 p-5 text-left transition-colors ${isExpanded ? 'bg-slate-50 dark:bg-slate-800/50' : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/30'}`}
                >
                  <div className={`p-3 rounded-xl shrink-0 ${isExpanded ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight mb-1">{item.title[lang]}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{item.indication[lang]}</p>
                  </div>
                  {isExpanded ? <ChevronUp size={20} className="text-slate-400 shrink-0 mt-1"/> : <ChevronDown size={20} className="text-slate-400 shrink-0 mt-1"/>}
                </button>
                
                {isExpanded && (
                  <div className="p-5 border-t border-slate-100 dark:border-slate-800 animate-fade-in space-y-6">
                    {/* Confirmation Steps */}
                    <div>
                       <h4 className="font-bold text-slate-700 dark:text-slate-200 text-sm mb-3 flex items-center gap-2 uppercase tracking-wide">
                         <AlertCircle size={16} className="text-amber-500" /> {UI_TEXT.howToCheck[lang]}
                       </h4>
                       <ul className="space-y-3">
                         {item.confirmation[lang].map((step, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-100 dark:border-amber-900/20">
                             <div className="min-w-[6px] h-[6px] rounded-full bg-amber-400 mt-1.5"></div>
                             {step}
                           </li>
                         ))}
                       </ul>
                    </div>

                    {/* Solution Steps */}
                    <div>
                       <h4 className="font-bold text-slate-700 dark:text-slate-200 text-sm mb-3 flex items-center gap-2 uppercase tracking-wide">
                         <CheckCircle size={16} className="text-green-500" /> {UI_TEXT.solution[lang]}
                       </h4>
                       <ul className="space-y-3">
                         {item.action[lang].map((act, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 bg-green-50 dark:bg-green-900/10 p-3 rounded-lg border border-green-100 dark:border-green-900/20">
                             <div className="min-w-[6px] h-[6px] rounded-full bg-green-500 mt-1.5"></div>
                             {act}
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
       </div>
    </div>
  );
}