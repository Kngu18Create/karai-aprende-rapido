import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  X, 
  Pause,
  SkipForward,
  RefreshCw
} from "lucide-react";

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

interface FlashcardStudySessionProps {
  flashcards: Flashcard[];
  onExit: () => void;
}

export const FlashcardStudySession = ({ flashcards, onExit }: FlashcardStudySessionProps) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentCard = flashcards[currentCardIndex];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "text-emerald-600 bg-emerald-50 border-emerald-200";
      case "medium": return "text-blue-600 bg-blue-50 border-blue-200";
      case "hard": return "text-purple-600 bg-purple-50 border-purple-200";
      default: return "text-muted-foreground bg-muted";
    }
  };

  const handleFlip = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(!isFlipped);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleAnswer = (correct: boolean) => {
    setShowAnswer(false);
    setUserAnswer("");
    setSelectedOption(null);
    setIsFlipped(false);
    setIsAnimating(false);
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      onExit();
      setCurrentCardIndex(0);
    }
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    const option = currentCard.options?.find(opt => opt.id === optionId);
    if (option) {
      setShowAnswer(true);
    }
  };

  const checkAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Sesión de Estudio</h2>
          <p className="text-muted-foreground">
            Tarjeta {currentCardIndex + 1} de {flashcards.length}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onExit}>
            <Pause className="w-4 h-4 mr-2" />
            Pausar
          </Button>
          <Button variant="outline" onClick={() => setCurrentCardIndex((prev) => (prev + 1) % flashcards.length)}>
            <SkipForward className="w-4 h-4 mr-2" />
            Saltar
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-700 font-medium">Progreso de la sesión</span>
          <span className="text-blue-600 font-bold">{Math.round(((currentCardIndex + 1) / flashcards.length) * 100)}%</span>
        </div>
        <Progress value={((currentCardIndex + 1) / flashcards.length) * 100} className="h-3" />
      </div>

      <div className="flex justify-center">
        <div className="flashcard-container">
          <div 
            className={`flashcard ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
          >
            <div className="flashcard-front bg-card border-border">
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <div className="space-y-2">
                  <Badge className={getDifficultyColor(currentCard.difficulty)}>
                    {currentCard.difficulty === "easy" ? "Fácil" : 
                     currentCard.difficulty === "medium" ? "Intermedio" : "Difícil"}
                  </Badge>
                  <Badge variant="outline" className="border-blue-500 text-blue-600">{currentCard.subject}</Badge>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Dominio</p>
                  <p className="text-lg font-bold text-blue-600">{currentCard.mastery}%</p>
                </div>
              </div>
              
              <div className="flex-1 flex items-center justify-center px-4">
                <h3 className="text-xl font-semibold text-slate-800 text-center leading-relaxed">
                  {currentCard.question}
                </h3>
              </div>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <RefreshCw className="w-4 h-4" />
                  <span>Toca para ver la respuesta</span>
                </div>
              </div>
            </div>

            <div className="flashcard-back bg-card border-border">
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <Badge variant="outline" className="border-blue-500 text-blue-600">{currentCard.subject}</Badge>
                <div className="text-xs text-muted-foreground">
                  {currentCard.correctAnswers}/{currentCard.timesStudied} aciertos
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-center space-y-4 px-4">
                <div className="text-center">
                  <h4 className="font-semibold mb-3 text-blue-600">Respuesta:</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{currentCard.answer}</p>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex gap-3 justify-center">
                <Button 
                  variant="outline" 
                  className="border-red-200 text-red-600 hover:bg-red-50 flex-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAnswer(false);
                  }}
                >
                  <X className="w-4 h-4 mr-2" />
                  Incorrecta
                </Button>
                <Button 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAnswer(true);
                  }}
                >
                  <Check className="w-4 h-4 mr-2" />
                  Correcta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isFlipped && (
        <Card className="max-w-2xl mx-auto bg-card border-border animate-scale-up">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-4 text-center text-slate-800">
              Modo de práctica alternativo
            </h4>
            
            {currentCard.type === "equation" && currentCard.options ? (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Selecciona la respuesta correcta:
                </p>
                {currentCard.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    className={`w-full p-3 text-left rounded-lg border transition-all duration-200 ${
                      showAnswer && option.isCorrect
                        ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                        : showAnswer && selectedOption === option.id && !option.isCorrect
                        ? "bg-red-50 border-red-200 text-red-800"
                        : "border-border bg-muted/20 hover:bg-muted/50 text-slate-800"
                    }`}
                    disabled={showAnswer}
                  >
                    <span className="font-medium mr-2 text-blue-600">{option.id.toUpperCase()})</span>
                    {option.text}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <Input
                  placeholder="Escribe tu respuesta aquí..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="text-center bg-background border-border"
                />
                <Button onClick={checkAnswer} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Check className="w-4 h-4 mr-2" />
                  Verificar Respuesta
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <Card className="max-w-2xl mx-auto bg-card border-border">
        <CardContent className="p-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-muted-foreground">Estudiada</p>
              <p className="font-semibold text-slate-800">{currentCard.timesStudied} veces</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Aciertos</p>
              <p className="font-semibold text-slate-800">{currentCard.correctAnswers}/{currentCard.timesStudied}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Próxima revisión</p>
              <p className="font-semibold text-xs text-slate-800">{currentCard.nextReview}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
