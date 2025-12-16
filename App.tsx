import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Shield, BookOpen, AlertCircle, Award, Settings, Sun, Moon } from 'lucide-react';
import { Language, UserProgress, Theme } from './types';
import { UI_TEXT } from './constants';
import Home from './pages/Home';
import Awareness from './pages/Awareness';
import Quiz from './pages/Quiz';
import Emergency from './pages/Emergency';
import Tools from './pages/Tools';
import About from './pages/About';
import Symptoms from './pages/Symptoms';

export const LanguageContext = React.createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  userProgress: UserProgress;
  updateProgress: (p: UserProgress) => void;
  theme: Theme;
  toggleTheme: () => void;
}>({
  lang: 'en',
  setLang: () => {},
  userProgress: { xp: 0, completedLevels: [], certificates: [] },
  updateProgress: () => {},
  theme: 'light',
  toggleTheme: () => {},
});

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { lang, setLang, theme, toggleTheme } = React.useContext(LanguageContext);
  const location = useLocation();
  const isEmergency = location.pathname === '/emergency';

  return (
    <div className={`min-h-screen pb-24 transition-colors duration-300 ${isEmergency ? 'bg-red-50 dark:bg-red-950/20' : 'bg-slate-50 dark:bg-slate-950'}`}>
      {/* Top Bar */}
      <header className={`sticky top-0 z-50 px-4 py-3 flex justify-between items-center backdrop-blur-md transition-colors duration-300 border-b ${
        isEmergency 
          ? 'bg-red-600/95 text-white border-red-500 shadow-red-200/50' 
          : 'bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-800 shadow-sm'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`p-1.5 rounded-lg ${isEmergency ? 'bg-red-700' : 'bg-blue-600'}`}>
            <img src="/logo.png" alt="GorilX Logo" className="w-6 h-6 object-contain" />
          </div>
          <h1 className="font-bold text-xl tracking-tight">GorilX</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isEmergency 
                ? 'text-red-100 hover:bg-red-700' 
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button 
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-colors ${
              isEmergency 
                ? 'border-red-400 text-white bg-red-700' 
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {lang === 'en' ? 'हिंदी' : 'ENG'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto p-4 animate-fade-in">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className={`fixed bottom-0 left-0 right-0 border-t backdrop-blur-md z-40 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200'
      }`}>
        <div className="max-w-md mx-auto flex justify-around items-center h-20 px-2">
          <NavLink to="/" className={({ isActive }) => `flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-200 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}>
            {({ isActive }) => (
              <>
                <Shield size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium mt-1">{UI_TEXT.home[lang]}</span>
              </>
            )}
          </NavLink>
          
          <NavLink to="/awareness" className={({ isActive }) => `flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-200 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}>
            {({ isActive }) => (
              <>
                <BookOpen size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium mt-1">{UI_TEXT.learn[lang]}</span>
              </>
            )}
          </NavLink>
          
          <NavLink to="/emergency" className={({ isActive }) => `flex flex-col items-center justify-center w-16 h-16 -mt-8 rounded-full shadow-lg border-4 transition-transform duration-200 ${
            isActive ? 'scale-110 bg-red-600 border-red-50 dark:border-slate-900 text-white' : 'bg-red-500 border-slate-50 dark:border-slate-900 text-white hover:bg-red-600'
          }`}>
            <AlertCircle size={32} />
          </NavLink>
          
          <NavLink to="/quiz" className={({ isActive }) => `flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-200 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}>
            {({ isActive }) => (
              <>
                <Award size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium mt-1">{UI_TEXT.quiz[lang]}</span>
              </>
            )}
          </NavLink>
          
          <NavLink to="/tools" className={({ isActive }) => `flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-200 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}>
            {({ isActive }) => (
              <>
                <Settings size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium mt-1">{UI_TEXT.tools[lang]}</span>
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });
  
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('gorilx_progress');
    return saved ? JSON.parse(saved) : { xp: 0, completedLevels: [], certificates: [] };
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const updateProgress = (newProgress: UserProgress) => {
    setUserProgress(newProgress);
    localStorage.setItem('gorilx_progress', JSON.stringify(newProgress));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, userProgress, updateProgress, theme, toggleTheme }}>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/about" element={<About />} />
            <Route path="/symptoms" element={<Symptoms />} />
          </Routes>
        </Layout>
      </HashRouter>
    </LanguageContext.Provider>
  );
}