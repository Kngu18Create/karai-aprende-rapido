
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  RotateCcw, 
  Check, 
  X, 
  Star,
  Play,
  Pause,
  SkipForward,
  TrendingUp,
  Clock,
  Target,
  RefreshCw
} from "lucide-react";

interface FlashcardOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export const FlashcardsManager = () => {
  const [studyMode, setStudyMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [flashcards] = useState([
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

  const currentCard = flashcards[currentCardIndex];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "text-green-400 bg-green-900/20 border-green-500/30";
      case "medium": return "text-cyan-400 bg-cyan-900/20 border-cyan-500/30";
      case "hard": return "text-purple-400 bg-purple-900/20 border-purple-500/30";
      default: return "text-muted-foreground bg-muted";
    }
  };

  const handleFlip = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
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
      setStudyMode(false);
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

  if (studyMode) {
    return (
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
        {/* Header de estudio */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">Sesión de Estudio</h2>
            <p className="text-slate-400">
              Tarjeta {currentCardIndex + 1} de {flashcards.length}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setStudyMode(false)} className="button-secondary">
              <Pause className="w-4 h-4 mr-2" />
              Pausar
            </Button>
            <Button variant="outline" onClick={() => setCurrentCardIndex((prev) => (prev + 1) % flashcards.length)} className="button-secondary">
              <SkipForward className="w-4 h-4 mr-2" />
              Saltar
            </Button>
          </div>
        </div>

        {/* Progreso */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-white font-medium">Progreso de la sesión</span>
            <span className="text-blue-400 font-bold">{Math.round(((currentCardIndex + 1) / flashcards.length) * 100)}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full progress-gradient transition-all duration-500 ease-out" 
              style={{width: `${((currentCardIndex + 1) / flashcards.length) * 100}%`}}
            />
          </div>
        </div>

        {/* Fixed Flashcard with proper 3D flip */}
        <div className="flex justify-center">
          <div className="flashcard-container">
            <div 
              className={`flashcard ${isFlipped ? 'flipped' : ''}`}
              onClick={handleFlip}
            >
              {/* Frente - Pregunta */}
              <div className="flashcard-front glass-card">
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="space-y-2">
                    <Badge className={getDifficultyColor(currentCard.difficulty)}>
                      {currentCard.difficulty === "easy" ? "Fácil" : 
                       currentCard.difficulty === "medium" ? "Intermedio" : "Difícil"}
                    </Badge>
                    <Badge variant="outline" className="border-blue-500 text-blue-400">{currentCard.subject}</Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Dominio</p>
                    <p className="text-lg font-bold text-white">{currentCard.mastery}%</p>
                  </div>
                </div>
                
                <div className="flex-1 flex items-center justify-center px-4">
                  <h3 className="text-xl font-semibold text-white text-center leading-relaxed">
                    {currentCard.question}
                  </h3>
                </div>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <RefreshCw className="w-4 h-4" />
                    <span>Toca para ver la respuesta</span>
                  </div>
                </div>
              </div>

              {/* Reverso - Respuesta */}
              <div className="flashcard-back glass-card">
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <Badge variant="outline" className="border-blue-500 text-blue-400">{currentCard.subject}</Badge>
                  <div className="text-xs text-slate-400">
                    {currentCard.correctAnswers}/{currentCard.timesStudied} aciertos
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center space-y-4 px-4">
                  <div className="text-center">
                    <h4 className="font-semibold mb-3 text-blue-400">Respuesta:</h4>
                    <p className="text-sm text-slate-200 leading-relaxed">{currentCard.answer}</p>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex gap-3 justify-center">
                  <Button 
                    variant="outline" 
                    className="bg-red-900/20 border-red-500/30 text-red-400 hover:bg-red-900/40 flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAnswer(false);
                    }}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Incorrecta
                  </Button>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white flex-1"
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

        {/* Modo alternativo: Input de respuesta o opciones múltiples */}
        {!isFlipped && (
          <Card className="max-w-2xl mx-auto glass-card animate-scale-up">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4 text-center text-white">
                Modo de práctica alternativo
              </h4>
              
              {currentCard.type === "equation" && currentCard.options ? (
                <div className="space-y-3">
                  <p className="text-sm text-slate-400 text-center mb-4">
                    Selecciona la respuesta correcta:
                  </p>
                  {currentCard.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(option.id)}
                      className={`w-full p-3 text-left rounded-lg border transition-all duration-200 ${
                        selectedOption === option.id
                          ? option.isCorrect
                            ? "border-green-500 bg-green-900/20 text-green-400"
                            : "border-red-500 bg-red-900/20 text-red-400"
                          : "border-slate-600 bg-slate-800/50 hover:bg-slate-700/50 text-white"
                      }`}
                      disabled={showAnswer}
                    >
                      <span className="font-medium mr-2 text-blue-400">{option.id.toUpperCase()})</span>
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
                    className="text-center bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                  <Button onClick={checkAnswer} className="w-full button-primary">
                    <Check className="w-4 h-4 mr-2" />
                    Verificar Respuesta
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Estadísticas de la tarjeta */}
        <Card className="max-w-2xl mx-auto glass-card">
          <CardContent className="p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-slate-400">Estudiada</p>
                <p className="font-semibold text-white">{currentCard.timesStudied} veces</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Aciertos</p>
                <p className="font-semibold text-white">{currentCard.correctAnswers}/{currentCard.timesStudied}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Próxima revisión</p>
                <p className="font-semibold text-xs text-white">{currentCard.nextReview}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-up">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold gradient-text">Flashcards Inteligentes</h1>
        <p className="text-slate-400">
          Sistema de repetición espaciada personalizado con IA
        </p>
      </div>

      {/* Estadísticas generales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card card-hover">
          <CardContent className="p-4 text-center">
            <Brain className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{flashcards.length}</p>
            <p className="text-sm text-slate-400">Flashcards totales</p>
          </CardContent>
        </Card>
        <Card className="glass-card card-hover">
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">60%</p>
            <p className="text-sm text-slate-400">Dominio promedio</p>
          </CardContent>
        </Card>
        <Card className="glass-card card-hover">
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">8</p>
            <p className="text-sm text-slate-400">Para revisar hoy</p>
          </CardContent>
        </Card>
        <Card className="glass-card card-hover">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">7</p>
            <p className="text-sm text-slate-400">Días de racha</p>
          </CardContent>
        </Card>
      </div>

      {/* Acciones principales */}
      <div className="flex justify-center gap-4">
        <Button onClick={() => setStudyMode(true)} size="lg" className="button-primary px-8">
          <Play className="w-5 h-5 mr-2" />
          Comenzar Estudio
        </Button>
        <Button variant="outline" size="lg" className="button-secondary">
          <RotateCcw className="w-5 h-5 mr-2" />
          Repasar Errores
        </Button>
        <Button variant="outline" size="lg" className="button-secondary">
          <Brain className="w-5 h-5 mr-2" />
          Generar Nuevas
        </Button>
      </div>

      {/* Lista de flashcards */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Mis Flashcards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {flashcards.map((card) => (
            <Card key={card.id} className="glass-card card-hover">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className={getDifficultyColor(card.difficulty)}>
                    {card.difficulty === "easy" ? "Fácil" : 
                     card.difficulty === "medium" ? "Intermedio" : "Difícil"}
                  </Badge>
                  <Badge variant="outline" className="border-blue-500 text-blue-400">{card.subject}</Badge>
                </div>
                <CardTitle className="text-sm line-clamp-2 text-white">{card.question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Dominio</span>
                    <span className="text-white">{card.mastery}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full progress-gradient transition-all duration-300" 
                      style={{width: `${card.mastery}%`}}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                  <span>Estudiada: {card.timesStudied}x</span>
                  <span>Aciertos: {card.correctAnswers}</span>
                </div>
                
                <p className="text-xs text-slate-400">
                  Próxima revisión: {card.nextReview}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
