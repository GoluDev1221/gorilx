import React, { useContext, useState } from 'react';
import { Phone, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import { LanguageContext } from '../App';
import { UI_TEXT, EMERGENCIES } from '../constants';

export default function Emergency() {
  const { lang } = useContext(LanguageContext);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="bg-red-600 dark:bg-red-800 rounded-2xl p-5 flex items-center gap-5 shadow-lg shadow-red-200 dark:shadow-none text-white">
        <div className="bg-white/20 p-4 rounded-full animate-pulse backdrop-blur-sm">
           <Phone size={28} className="text-white" />
        </div>
        <div>
           <h2 className="font-bold text-xl leading-tight">{UI_TEXT.callHelpline[lang]}</h2>
           <p className="text-red-100 text-sm mt-1 opacity-90">National Cyber Crime Helpline</p>
        </div>
        <a href="tel:1930" className="ml-auto bg-white text-red-700 px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:bg-red-50 transition-colors">
          CALL
        </a>
      </div>

      <div>
        <h3 className="font-bold text-slate-800 dark:text-white mb-4 text-xl">{UI_TEXT.selectIssue[lang]}</h3>
        <div className="space-y-4">
          {EMERGENCIES.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-colors">
                <button 
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-bold text-slate-800 dark:text-slate-100 text-lg">{item.title[lang]}</span>
                  {isExpanded ? <ChevronUp size={20} className="text-slate-400"/> : <ChevronDown size={20} className="text-slate-400"/>}
                </button>
                
                {isExpanded && (
                  <div className="p-5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 animate-fade-in">
                    <div className="mb-5">
                       <h4 className="font-bold text-red-600 dark:text-red-400 text-sm mb-3 flex items-center gap-2 uppercase tracking-wide">
                         <AlertTriangle size={16} /> {UI_TEXT.immediateAction[lang]}
                       </h4>
                       <ul className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300 ml-1">
                         {item.steps[lang].map((step, i) => (
                           <li key={i} className="pl-1">{step}</li>
                         ))}
                       </ul>
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-700 dark:text-slate-300 text-sm mb-3 uppercase tracking-wide">
                         {UI_TEXT.evidenceNeeded[lang]}
                       </h4>
                       <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 dark:text-slate-400 ml-1">
                         {item.evidence[lang].map((ev, i) => (
                           <li key={i} className="pl-1">{ev}</li>
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
      
      <div className="text-center text-xs text-slate-400 dark:text-slate-600 mt-8">
        {UI_TEXT.disclaimer[lang]}
      </div>
    </div>
  );
}