import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Shield, Eye, Heart, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-6 pb-6 animate-fade-in">
      {/* Header with Back Button */}
      <div className="flex items-center gap-3 mb-2">
        <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors">
          <ChevronLeft size={24} />
        </Link>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">About This Project</h2>
      </div>

      <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
        
        {/* Intro */}
        <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="mb-4">
            This application is an independent <strong>Cyber Safety Awareness Platform</strong> designed to help individuals understand, prevent, and respond to common cyber threats in a simple and practical way.
          </p>
          <p className="mb-4">
            The primary goal of this project is public awareness and digital safety education, especially for everyday internet users who may not have technical backgrounds. The platform focuses on prevention, clarity, and immediate guidance during cyber-related incidents.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
            This app is built as a Progressive Web App (PWA) so that essential information remains accessible even in low-connectivity or offline situations.
          </p>
        </section>

        {/* Purpose and Vision */}
        <section>
          <h3 className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white mb-4">
            <Eye size={20} className="text-blue-600 dark:text-blue-400" />
            Purpose and Vision
          </h3>
          <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/10 dark:to-slate-900 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/30">
            <p className="mb-4">Cybercrime is increasing rapidly, while awareness and preparedness often lag behind. This project aims to:</p>
            <ul className="space-y-3 list-disc list-inside ml-1 text-slate-800 dark:text-slate-200">
              <li>Educate users about cyber safety using real-world scenarios</li>
              <li>Reduce financial, emotional, and privacy harm caused by online fraud</li>
              <li>Provide clear, immediate steps during suspected cyber incidents</li>
              <li>Complement existing cybercrime reporting and law-enforcement systems</li>
            </ul>
            <p className="mt-6 text-sm opacity-80 border-t border-blue-100 dark:border-blue-800/30 pt-4">
              This tool is designed to support citizens, and in the future, it may also serve as a supporting awareness resource for institutions and government initiatives.
            </p>
          </div>
        </section>

        {/* Non-Commercial */}
        <section>
          <h3 className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white mb-4">
            <Heart size={20} className="text-red-500" />
            Non-Commercial and Ethical Commitment
          </h3>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="mb-4 font-medium text-slate-900 dark:text-white">This application is not built for profit.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/10 p-2 rounded-lg">
                <Shield size={16} /> No ads
              </div>
              <div className="flex items-center gap-2 text-sm text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/10 p-2 rounded-lg">
                <Shield size={16} /> No data collection
              </div>
              <div className="flex items-center gap-2 text-sm text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/10 p-2 rounded-lg">
                <Shield size={16} /> No tracking
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Any future paid or premium cybersecurity tools developed under this project (such as advanced security or antivirus-related solutions) will have their revenue fully reinvested into:
            </p>
            <ul className="grid grid-cols-1 gap-2 text-sm text-slate-600 dark:text-slate-400 pl-4 border-l-2 border-slate-200 dark:border-slate-700">
              <li>Product development and maintenance</li>
              <li>Cyber safety research</li>
              <li>Public awareness initiatives</li>
              <li>Social causes related to digital safety and security</li>
            </ul>
            <p className="mt-5 font-medium italic text-slate-900 dark:text-white text-sm">The intent is long-term impact, not commercial exploitation.</p>
          </div>
        </section>

        {/* Transparency */}
        <section>
          <h3 className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white mb-4">
            <Globe size={20} className="text-amber-500" />
            Transparency and Disclaimer
          </h3>
          <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 text-amber-900 dark:text-amber-100/90">
            <ul className="space-y-2 list-disc list-inside">
              <li>This platform is independently developed</li>
              <li>It does not claim official authority</li>
              <li>It does not replace government cybercrime portals or law-enforcement services</li>
              <li>It is meant for awareness, prevention, and first-response guidance only</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-amber-200 dark:border-amber-800/30">
               <p className="font-bold text-sm">Users are always encouraged to report incidents through official government channels.</p>
            </div>
          </div>
        </section>

        {/* Developer Info */}
        <section className="text-center pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Developed by</p>
          <p className="font-bold text-xl text-slate-900 dark:text-white">Piyush Joshi</p>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">RashmiOS</p>
          <p className="mt-6 text-xs text-slate-400 dark:text-slate-500 max-w-xs mx-auto leading-relaxed">
            This project reflects a commitment to responsible technology, ethical development, and contributing positively to society through cybersecurity awareness.
          </p>
        </section>

      </div>
    </div>
  );
}