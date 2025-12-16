
export type Language = 'en' | 'hi';
export type Theme = 'light' | 'dark';

export interface Translation {
  [key: string]: {
    en: string;
    hi: string;
  };
}

export interface Scenario {
  id: string;
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  dos: { en: string[]; hi: string[] };
  donts: { en: string[]; hi: string[] };
  iconName: string;
}

export interface MythReality {
  id: string;
  myth: { en: string; hi: string };
  reality: { en: string; hi: string };
}

export interface QuizQuestion {
  id: number;
  question: { en: string; hi: string };
  options: { en: string[]; hi: string[] };
  correctIndex: number;
  explanation: { en: string; hi: string };
}

export interface QuizLevel {
  id: 'beginner' | 'intermediate' | 'advanced';
  title: { en: string; hi: string };
  xpPerQuestion: number; // Changed from flat xpReward
  questions: QuizQuestion[];
  minScoreToPass: number;
}

export interface EmergencyType {
  id: string;
  title: { en: string; hi: string };
  steps: { en: string[]; hi: string[] };
  evidence: { en: string[]; hi: string[] };
}

export interface Symptom {
  id: string;
  title: { en: string; hi: string };
  indication: { en: string; hi: string };
  confirmation: { en: string[]; hi: string[] }; // Steps to check/confirm
  action: { en: string[]; hi: string[] }; // Solution
  iconName: string;
}

export interface UserProgress {
  xp: number;
  completedLevels: string[]; // 'beginner', 'intermediate', etc.
  certificates: {
    level: string;
    date: string;
    id: string;
    name: string;
    scorePercent?: number;
  }[];
}
