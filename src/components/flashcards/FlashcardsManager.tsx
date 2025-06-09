
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, Brain } from "lucide-react";
import { FlashcardStudySession } from "./FlashcardStudySession";
import { FlashcardStats } from "./FlashcardStats";
import { FlashcardGrid } from "./FlashcardGrid";

interface FlashcardOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  difficulty: "easy" | "medium" | "hard";
  subject: string;
  mastery: number;
  nextReview: string;
  timesStudied: number;
  correctAnswers: number;
  type: "text" | "equation";
  options?: FlashcardOption[];
}

export const FlashcardsManager = () => {
  const [studyMode, setStudyMode] = useState(false);

  const [flashcards] = useState<Flashcard[]>([
    {
      id: 1,
      question: "¿Cuál es la ecuación general de una elipse con centro en el origen?",
      answer: "x²/a² + y²/b² = 1, donde 'a' y 'b' son los semiejes mayor y menor respectivamente.",
      difficulty: "medium",
      subject: "Matemáticas",
      mastery: 75,
      nextReview: "2024-01-16",
      timesStudied: 12,
      correctAnswers: 9,
      type: "equation",
      options: [
        { id: "a", text: "x²/a² + y²/b² = 1", isCorrect: true },
        { id: "b", text: "x²/a² - y²/b² = 1", isCorrect: false },
        { id: "c", text: "(x-h)²/a² + (y-k)²/b² = 1", isCorrect: false },
        { id: "d", text: "x² + y² = r²", isCorrect: false }
      ]
    },
    {
      id: 2,
      question: "¿Qué emperador romano estableció el sistema del dominado?",
      answer: "Diocleciano (284-305 d.C.) estableció el sistema del dominado, transformando el principado en una monarquía absoluta.",
      difficulty: "hard",
      subject: "Historia",
      mastery: 60,
      nextReview: "2024-01-17",
      timesStudied: 8,
      correctAnswers: 5,
      type: "text"
    },
    {
      id: 3,
      question: "¿Qué establece el principio de incertidumbre de Heisenberg?",
      answer: "Es imposible determinar simultáneamente y con precisión absoluta la posición y el momento de una partícula.",
      difficulty: "hard",
      subject: "Física",
      mastery: 45,
      nextReview: "2024-01-15",
      timesStudied: 6,
      correctAnswers: 3,
      type: "text"
    }
  ]);

  if (studyMode) {
    return (
      <FlashcardStudySession 
        flashcards={flashcards} 
        onExit={() => setStudyMode(false)} 
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-up">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-800 font-poppins">Flashcards Inteligentes</h1>
        <p className="text-muted-foreground">
          Sistema de repetición espaciada personalizado con IA
        </p>
      </div>

      <FlashcardStats 
        totalCards={flashcards.length}
        averageMastery={60}
        cardsToReview={8}
        streakDays={7}
      />

      <div className="flex justify-center gap-4">
        <Button onClick={() => setStudyMode(true)} size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
          <Play className="w-5 h-5 mr-2" />
          Comenzar Estudio
        </Button>
        <Button variant="outline" size="lg">
          <RotateCcw className="w-5 h-5 mr-2" />
          Repasar Errores
        </Button>
        <Button variant="outline" size="lg">
          <Brain className="w-5 h-5 mr-2" />
          Generar Nuevas
        </Button>
      </div>

      <FlashcardGrid flashcards={flashcards} />
    </div>
  );
};
