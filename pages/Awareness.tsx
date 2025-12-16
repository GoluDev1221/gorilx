
import React, { useContext, useState } from 'react';
import { ChevronDown, Check, X, Smartphone, Package, Briefcase, Info, Monitor, CreditCard, Video, Phone, Banknote, TrendingUp, PlugZap, Siren, Share2, UserX } from 'lucide-react';
import { LanguageContext } from '../App';
import { UI_TEXT, SCENARIOS, MYTHS } from '../constants';

const IconMap: any = {
  Smartphone: Smartphone,
  Package: Package,
  Briefcase: Briefcase,
  Monitor: Monitor,
  CreditCard: CreditCard,
  Video: Video,
  Phone: Phone,
  Banknote: Banknote,
  TrendingUp: TrendingUp,
  PlugZap: PlugZap,
  Siren: Siren,
  UserX: UserX
};

export default function Awareness() {
  const { lang } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState<'scenarios' | 'myths'>('scenarios');

  const handleShare = async (item: any, type: 'scenario' | 'myth') => {
    let shareData;
    
    if (type === 'scenario') {
      shareData = {
        title: `GorilX Cyber Safety: ${item.title[lang]}`,
        text: `🚨 *${item.title[lang]}*\n\n${item.description[lang]}\n\n✅ *Safety Tips:*\n${item.dos[lang].map((d: string) => `• ${d}`).join('\n')}\n\n🛡️ Stay safe with GorilX App!`,
      };
    } else {
      shareData = {
        title: `GorilX Myth Buster`,
        text: `🧐 *Cyber Myth Buster*\n\n❌ *Myth:* ${item.myth[lang]}\n\n✅ *Reality:* ${item.reality[lang]}\n\n🛡️ Know the truth with GorilX App!`,
      };
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.text);
        alert('Content copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{UI_TEXT.learn[lang]}</h2>

      {/* Tabs */}
      <div className="flex p-1.5 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setActiveTab('scenarios')}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
            activeTab === 'scenarios' 
              ? 'bg-white dark:bg-slate-800 shadow-sm text-blue-600 dark:text-blue-400' 
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
          }`}
        >
          {UI_TEXT.safetyScenarios[lang]}
        </button>
        <button
          onClick={() => setActiveTab('myths')}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
            activeTab === 'myths' 
              ? 'bg-white dark:bg-slate-800 shadow-sm text-blue-600 dark:text-blue-400' 
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
          }`}
        >
          {UI_TEXT.mythVsReality[lang]}
        </button>
      </div>

      <div className="space-y-4">
        {activeTab === 'scenarios' && SCENARIOS.map((scenario) => {
          const Icon = IconMap[scenario.iconName] || Info;
          return (
            <div key={scenario.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors">
              <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{scenario.title[lang]}</h3>
                  </div>
                  <button 
                    onClick={() => handleShare(scenario, 'scenario')}
                    className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="Share"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {scenario.description[lang]}
                </p>
              </div>
              
              <div className="grid grid-cols-2 text-xs">
                <div className="p-5 bg-green-50/50 dark:bg-green-900/10 space-y-3 border-r border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-green-700 dark:text-green-400 flex items-center gap-1.5 uppercase tracking-wide">
                    <Check size={16} strokeWidth={3} /> {UI_TEXT.dos[lang]}
                  </h4>
                  <ul className="space-y-2">
                    {scenario.dos[lang].map((d, i) => (
                      <li key={i} className="text-slate-700 dark:text-slate-300 leading-snug">{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 bg-red-50/50 dark:bg-red-900/10 space-y-3">
                  <h4 className="font-bold text-red-700 dark:text-red-400 flex items-center gap-1.5 uppercase tracking-wide">
                    <X size={16} strokeWidth={3} /> {UI_TEXT.donts[lang]}
                  </h4>
                  <ul className="space-y-2">
                    {scenario.donts[lang].map((d, i) => (
                      <li key={i} className="text-slate-700 dark:text-slate-300 leading-snug">{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}

        {activeTab === 'myths' && MYTHS.map((m) => (
          <div key={m.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 transition-colors">
             <div className="flex justify-between items-start">
               <div className="flex-1">
                 <span className="text-[10px] font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded-md mb-2 inline-block tracking-wider">MYTH</span>
                 <p className="font-semibold text-lg text-slate-800 dark:text-slate-100 leading-snug">{m.myth[lang]}</p>
               </div>
               <button 
                  onClick={() => handleShare(m, 'myth')}
                  className="p-2 -mr-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Share"
                >
                  <Share2 size={20} />
                </button>
             </div>
             <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-md mb-2 inline-block tracking-wider">REALITY</span>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{m.reality[lang]}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
