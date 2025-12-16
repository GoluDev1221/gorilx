import React, { useContext, useState } from 'react';
import { Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react';
import { LanguageContext } from '../App';
import { UI_TEXT } from '../constants';

export default function Tools() {
  const { lang } = useContext(LanguageContext);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const calculateStrength = (pwd: string) => {
    if (!pwd) return { score: 0, label: '', color: 'bg-slate-200 dark:bg-slate-700', textColor: '' };
    let s = 0;
    if (pwd.length > 8) s++;
    if (pwd.length > 12) s++;
    if (/[A-Z]/.test(pwd)) s++;
    if (/[0-9]/.test(pwd)) s++;
    if (/[^A-Za-z0-9]/.test(pwd)) s++;

    if (s <= 2) return { score: 1, label: UI_TEXT.weak[lang], color: 'bg-red-500', textColor: 'text-red-500' };
    if (s <= 4) return { score: 2, label: UI_TEXT.moderate[lang], color: 'bg-yellow-500', textColor: 'text-yellow-500' };
    return { score: 3, label: UI_TEXT.strong[lang], color: 'bg-green-500', textColor: 'text-green-500' };
  };

  const strength = calculateStrength(password);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{UI_TEXT.passwordChecker[lang]}</h2>

      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type a password..."
            className="w-full p-4 pr-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
          >
            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
          </button>
        </div>

        {/* Strength Meter */}
        {password && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{UI_TEXT.checkStrength[lang]}</span>
              <span className={`text-sm font-bold ${strength.textColor}`}>
                {strength.label}
              </span>
            </div>
            <div className="flex gap-2 h-2.5">
              <div className={`flex-1 rounded-full transition-colors duration-300 ${strength.score >= 1 ? strength.color : 'bg-slate-100 dark:bg-slate-800'}`}></div>
              <div className={`flex-1 rounded-full transition-colors duration-300 ${strength.score >= 2 ? strength.color : 'bg-slate-100 dark:bg-slate-800'}`}></div>
              <div className={`flex-1 rounded-full transition-colors duration-300 ${strength.score >= 3 ? strength.color : 'bg-slate-100 dark:bg-slate-800'}`}></div>
            </div>

            {/* Suggestions */}
            <div className="mt-6 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-sm text-slate-600 dark:text-slate-300 space-y-3">
              <p className="flex items-center gap-3">
                 {password.length > 8 ? <ShieldCheck size={18} className="text-green-500"/> : <AlertCircle size={18} className="text-slate-400 dark:text-slate-500"/>}
                 8+ Characters
              </p>
              <p className="flex items-center gap-3">
                 {/[A-Z]/.test(password) ? <ShieldCheck size={18} className="text-green-500"/> : <AlertCircle size={18} className="text-slate-400 dark:text-slate-500"/>}
                 Uppercase Letter
              </p>
              <p className="flex items-center gap-3">
                 {/[0-9]/.test(password) ? <ShieldCheck size={18} className="text-green-500"/> : <AlertCircle size={18} className="text-slate-400 dark:text-slate-500"/>}
                 Number
              </p>
              <p className="flex items-center gap-3">
                 {/[^A-Za-z0-9]/.test(password) ? <ShieldCheck size={18} className="text-green-500"/> : <AlertCircle size={18} className="text-slate-400 dark:text-slate-500"/>}
                 Symbol (!@#$)
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-3 bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-xl border border-yellow-100 dark:border-yellow-900/20">
        <InfoIcon />
        <p className="leading-relaxed">This check is performed locally on your device. No data is sent to any server.</p>
      </div>
    </div>
  );
}

const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600 dark:text-yellow-500 shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
)
