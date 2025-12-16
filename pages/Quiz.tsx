
import React, { useContext, useState, useRef } from 'react';
import { Lock, Award, Play, RefreshCw, CheckCircle, XCircle, Download } from 'lucide-react';
import { LanguageContext } from '../App';
import { UI_TEXT, QUIZ_LEVELS } from '../constants';
import { QuizLevel } from '../types';

export default function Quiz() {
  const { lang, userProgress, updateProgress } = useContext(LanguageContext);
  const [activeLevel, setActiveLevel] = useState<QuizLevel | null>(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  
  // Certificate State
  const [userName, setUserName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startQuiz = (level: QuizLevel) => {
    setActiveLevel(level);
    setCurrentQIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setShowCertificate(false);
  };

  const handleAnswer = (index: number) => {
    if (isAnswerChecked) return;
    setSelectedOption(index);
    setIsAnswerChecked(true);
    
    // Score only increases if answer is correct
    if (activeLevel && index === activeLevel.questions[currentQIndex].correctIndex) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (!activeLevel) return;
    if (currentQIndex < activeLevel.questions.length - 1) {
      setCurrentQIndex(c => c + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    if (!activeLevel) return;
    setShowResult(true);
    
    const passed = score >= activeLevel.minScoreToPass;
    
    if (passed) {
      // Calculate XP based on Correct Answers * XP per Question
      const xpGained = score * activeLevel.xpPerQuestion;

      const isAlreadyCompleted = userProgress.completedLevels.includes(activeLevel.id);
      if (!isAlreadyCompleted) {
        updateProgress({
          ...userProgress,
          xp: userProgress.xp + xpGained,
          completedLevels: [...userProgress.completedLevels, activeLevel.id]
        });
      }
    }
  };

  const generateCertificate = () => {
    if (!userName.trim() || !activeLevel) return;
    setShowCertificate(true);
    
    // Slight delay to allow canvas to render in DOM
    setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;

      // 1. Background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      // 2. Decorative Border (Double Line)
      ctx.strokeStyle = "#1e293b"; // Slate 800
      ctx.lineWidth = 4;
      ctx.strokeRect(15, 15, width - 30, height - 30);
      
      ctx.strokeStyle = "#2563EB"; // Blue 600
      ctx.lineWidth = 2;
      ctx.strokeRect(22, 22, width - 44, height - 44);

      // 3. Corner Ornaments
      ctx.fillStyle = "#2563EB";
      const cornerSize = 40;
      // Top Left
      ctx.fillRect(15, 15, cornerSize, 4);
      ctx.fillRect(15, 15, 4, cornerSize);
      // Top Right
      ctx.fillRect(width - 15 - cornerSize, 15, cornerSize, 4);
      ctx.fillRect(width - 15 - 4, 15, 4, cornerSize);
      // Bottom Left
      ctx.fillRect(15, height - 15 - 4, cornerSize, 4);
      ctx.fillRect(15, height - 15 - cornerSize, 4, cornerSize);
      // Bottom Right
      ctx.fillRect(width - 15 - cornerSize, height - 15 - 4, cornerSize, 4);
      ctx.fillRect(width - 15 - 4, height - 15 - cornerSize, 4, cornerSize);

      // 4. Load and Draw Logo
      const logoImg = new Image();
      logoImg.src = '/logo.png';
      logoImg.onload = () => {
         // Draw logo centered at top
         const logoSize = 80;
         ctx.drawImage(logoImg, width / 2 - logoSize / 2, 60, logoSize, logoSize);
         continueDrawing();
      };
      // Fallback if logo fails or takes too long (though onload handles it usually)
      logoImg.onerror = () => continueDrawing();

      const continueDrawing = () => {
          // 5. Header Text
          ctx.textAlign = "center";
          
          ctx.font = "bold 28px serif";
          ctx.fillStyle = "#1e293b";
          ctx.fillText("CERTIFICATE OF ACHIEVEMENT", width / 2, 180);

          // 6. Subheader
          ctx.font = "16px sans-serif";
          ctx.fillStyle = "#64748B";
          ctx.fillText("This certificate is proudly presented to", width / 2, 220);

          // 7. User Name (The Highlight)
          ctx.font = "italic bold 42px serif";
          ctx.fillStyle = "#2563EB"; // Blue
          ctx.fillText(userName, width / 2, 280);
          
          // Underline for name
          ctx.beginPath();
          ctx.moveTo(width / 2 - 150, 295);
          ctx.lineTo(width / 2 + 150, 295);
          ctx.strokeStyle = "#e2e8f0";
          ctx.lineWidth = 1;
          ctx.stroke();

          // 8. Description
          ctx.font = "18px sans-serif";
          ctx.fillStyle = "#334155";
          ctx.fillText("For successfully completing the cyber safety course:", width / 2, 340);
          
          ctx.font = "bold 24px sans-serif";
          ctx.fillStyle = "#0f172a";
          ctx.fillText(`${activeLevel.title.en}`, width / 2, 380);

          // Score Percentage
          const percentage = Math.round((score / activeLevel.questions.length) * 100);
          ctx.font = "bold 18px sans-serif";
          ctx.fillStyle = "#2563EB";
          ctx.fillText(`Score Achieved: ${percentage}%`, width / 2, 410);

          // 9. Footer (Date and ID)
          const dateStr = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
          ctx.font = "14px sans-serif";
          ctx.fillStyle = "#94A3B8";
          
          // Date Left
          ctx.textAlign = "left";
          ctx.fillText(`Date: ${dateStr}`, 60, 470);
          ctx.fillStyle = "#2563EB";
          ctx.fillText("GorilX App", 60, 490);

          // Signature Right
          ctx.textAlign = "right";
          ctx.fillStyle = "#94A3B8";
          ctx.fillText(`ID: ${Date.now().toString().slice(-6)}`, width - 60, 470);
          
          // Fake Signature
          ctx.font = "italic 20px cursive"; // Try cursive if available
          ctx.fillStyle = "#1e293b";
          ctx.fillText("Piyush Joshi", width - 60, 490);

          // Save ID to history logic
          const newCert = {
            id: Date.now().toString(),
            name: userName,
            level: activeLevel.title.en,
            date: dateStr,
            scorePercent: percentage
          };
          
          const exists = userProgress.certificates.find(c => c.level === newCert.level && c.name === newCert.name);
          if(!exists) {
              updateProgress({
                ...userProgress,
                certificates: [...userProgress.certificates, newCert]
              });
          }
      };

    }, 100);
  };

  const downloadCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `GorilX-Certificate-${userName}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  if (activeLevel && !showResult) {
    const question = activeLevel.questions[currentQIndex];
    return (
      <div className="h-full flex flex-col">
        {/* Progress */}
        <div className="flex items-center gap-3 mb-6 text-sm">
          <span className="font-bold text-slate-800 dark:text-slate-200">Q {currentQIndex + 1}</span>
          <div className="flex-1 h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentQIndex + 1) / activeLevel.questions.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-slate-500 dark:text-slate-400">/ {activeLevel.questions.length}</span>
        </div>

        {/* Question */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6 transition-colors">
          <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-6 leading-snug">{question.question[lang]}</h3>
          <div className="space-y-3">
            {question.options[lang].map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={isAnswerChecked}
                className={`w-full p-4 rounded-xl text-left border-2 transition-all duration-200 ${
                  isAnswerChecked
                    ? idx === question.correctIndex
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-400 font-medium'
                      : idx === selectedOption
                        ? 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-50 dark:text-slate-400'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10'
                }`}
              >
                <div className="flex justify-between items-center gap-3">
                  <span className="flex-1">{opt}</span>
                  {isAnswerChecked && idx === question.correctIndex && <CheckCircle size={20} className="text-green-600 dark:text-green-400 flex-shrink-0"/>}
                  {isAnswerChecked && idx === selectedOption && idx !== question.correctIndex && <XCircle size={20} className="text-red-600 dark:text-red-400 flex-shrink-0"/>}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Explanation & Next */}
        {isAnswerChecked && (
          <div className="animate-fade-in">
             <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-2xl mb-6 text-sm text-blue-900 dark:text-blue-100 border border-blue-100 dark:border-blue-800/50">
               <span className="font-bold block mb-1">Explanation: </span>{question.explanation[lang]}
             </div>
             <button
              onClick={nextQuestion}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none transition-all transform active:scale-95"
             >
               {UI_TEXT.next[lang]}
             </button>
          </div>
        )}
      </div>
    );
  }

  if (activeLevel && showResult) {
    const passed = score >= activeLevel.minScoreToPass;
    const potentialXP = score * activeLevel.xpPerQuestion;

    return (
      <div className="text-center py-8">
        <div className={`w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-6 animate-fade-in ${passed ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'}`}>
          {passed ? <Award size={56} /> : <RefreshCw size={56} />}
        </div>
        <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">{passed ? UI_TEXT.completed[lang] : UI_TEXT.retry[lang]}</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          You scored <span className={`font-bold ${passed ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>{score}</span> out of {activeLevel.questions.length}
        </p>
        
        {passed && (
          <div className="mb-8 inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-4 py-2 rounded-full font-bold text-sm">
             +{potentialXP} XP Earned
          </div>
        )}

        {passed ? (
          <div className="space-y-4 animate-fade-in">
             {!showCertificate ? (
               <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">{UI_TEXT.generateCertificate[lang]}</h3>
                  <input 
                    type="text" 
                    placeholder={UI_TEXT.enterName[lang]}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full p-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl mb-4 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white"
                  />
                  <button 
                    onClick={generateCertificate}
                    disabled={!userName.trim()}
                    className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl disabled:opacity-50 hover:bg-blue-700 transition-colors"
                  >
                    {UI_TEXT.submit[lang]}
                  </button>
               </div>
             ) : (
                <div className="space-y-4">
                   <div className="border-4 border-slate-100 dark:border-slate-800 shadow-xl rounded-xl overflow-hidden bg-white">
                      <canvas ref={canvasRef} width={800} height={530} className="w-full h-auto bg-white" />
                   </div>
                   <button 
                    onClick={downloadCertificate}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-200 dark:shadow-none"
                  >
                    <Download size={20} /> {UI_TEXT.download[lang]}
                  </button>
                </div>
             )}
             <button onClick={() => setActiveLevel(null)} className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400">{UI_TEXT.home[lang]}</button>
          </div>
        ) : (
          <button onClick={() => startQuiz(activeLevel)} className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 rounded-2xl shadow-lg transition-transform hover:scale-105">
            {UI_TEXT.retry[lang]}
          </button>
        )}
      </div>
    );
  }

  // Level Selection
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{UI_TEXT.quiz[lang]}</h2>
      <div className="grid gap-4">
        {QUIZ_LEVELS.map((level, idx) => {
          const isLocked = idx > 0 && !userProgress.completedLevels.includes(QUIZ_LEVELS[idx-1].id);
          const isCompleted = userProgress.completedLevels.includes(level.id);

          return (
            <button
              key={level.id}
              onClick={() => !isLocked && startQuiz(level)}
              disabled={isLocked}
              className={`text-left p-5 rounded-2xl border-2 transition-all relative overflow-hidden group ${
                isLocked 
                  ? 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60' 
                  : isCompleted
                    ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-900/30'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className={`font-bold text-lg ${isCompleted ? 'text-green-800 dark:text-green-400' : 'text-slate-800 dark:text-slate-200'}`}>
                    {level.title[lang]}
                  </h3>
                  <div className="flex items-center gap-3 text-sm mt-1.5">
                    <span className="text-amber-600 dark:text-amber-500 font-bold bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded text-xs">
                      {level.xpPerQuestion} XP / Question
                    </span>
                    {isCompleted && <span className="text-green-600 dark:text-green-500 font-medium flex items-center gap-1"><CheckCircle size={14}/> {UI_TEXT.completed[lang]}</span>}
                  </div>
                </div>
                {isLocked ? (
                  <div className="bg-slate-200 dark:bg-slate-800 p-2 rounded-full">
                    <Lock size={20} className="text-slate-400 dark:text-slate-500" />
                  </div>
                ) : (
                  <div className={`p-2 rounded-full transition-transform group-hover:scale-110 ${isCompleted ? 'bg-green-200 dark:bg-green-900/30' : 'bg-blue-100 dark:bg-blue-900/30'}`}>
                    <Play size={20} className={`ml-0.5 ${isCompleted ? 'text-green-700 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`} />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
