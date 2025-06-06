
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
  Target
} from "lucide-react";

export const FlashcardsManager = () => {
  const [studyMode, setStudyMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

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
      correctAnswers: 9
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
      correctAnswers: 5
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
      correctAnswers: 3
    }
  ]);

  const currentCard = flashcards[currentCardIndex];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "text-green-600 bg-green-100";
      case "medium": return "text-yellow-600 bg-yellow-100";
      case "hard": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const handleAnswer = (correct: boolean) => {
    // Aquí iría la lógica de repetición espaciada
    setShowAnswer(false);
    setUserAnswer("");
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setStudyMode(false);
      setCurrentCardIndex(0);
    }
  };

  const checkAnswer = () => {
    setShowAnswer(true);
  };

  if (studyMode) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header de estudio */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Sesión de Estudio</h2>
            <p className="text-muted-foreground">
              Tarjeta {currentCardIndex + 1} de {flashcards.length}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setStudyMode(false)}>
              <Pause className="w-4 h-4 mr-2" />
              Pausar
            </Button>
            <Button variant="outline" onClick={() => setCurrentCardIndex((prev) => (prev + 1) % flashcards.length)}>
              <SkipForward className="w-4 h-4 mr-2" />
              Saltar
            </Button>
          </div>
        </div>

        {/* Progreso */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progreso de la sesión</span>
            <span>{Math.round(((currentCardIndex + 1) / flashcards.length) * 100)}%</span>
          </div>
          <Progress value={((currentCardIndex + 1) / flashcards.length) * 100} className="h-2" />
        </div>

        {/* Flashcard */}
        <Card className="min-h-[400px]">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <Badge className={getDifficultyColor(currentCard.difficulty)}>
                  {currentCard.difficulty === "easy" ? "Fácil" : 
                   currentCard.difficulty === "medium" ? "Intermedio" : "Difícil"}
                </Badge>
                <Badge variant="outline">{currentCard.subject}</Badge>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Dominio</p>
                <p className="text-lg font-bold">{currentCard.mastery}%</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">{currentCard.question}</h3>
              
              {!showAnswer && (
                <div className="space-y-4">
                  <Input
                    placeholder="Escribe tu respuesta aquí..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="text-center"
                  />
                  <Button onClick={checkAnswer} className="w-full">
                    <Check className="w-4 h-4 mr-2" />
                    Verificar Respuesta
                  </Button>
                </div>
              )}

              {showAnswer && (
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Respuesta correcta:</h4>
                    <p className="text-sm">{currentCard.answer}</p>
                  </div>
                  
                  {userAnswer && (
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Tu respuesta:</h4>
                      <p className="text-sm">{userAnswer}</p>
                    </div>
                  )}

                  <div className="flex gap-4 justify-center">
                    <Button 
                      variant="outline" 
                      className="text-red-600 border-red-200"
                      onClick={() => handleAnswer(false)}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Incorrecta
                    </Button>
                    <Button 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleAnswer(true)}
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Correcta
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Estadísticas de la tarjeta */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Estudiada</p>
                <p className="font-semibold">{currentCard.timesStudied} veces</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Aciertos</p>
                <p className="font-semibold">{currentCard.correctAnswers}/{currentCard.timesStudied}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Próxima revisión</p>
                <p className="font-semibold text-xs">{currentCard.nextReview}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold gradient-text">Flashcards Inteligentes</h1>
        <p className="text-muted-foreground">
          Sistema de repetición espaciada personalizado con IA
        </p>
      </div>

      {/* Estadísticas generales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">{flashcards.length}</p>
            <p className="text-sm text-muted-foreground">Flashcards totales</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">60%</p>
            <p className="text-sm text-muted-foreground">Dominio promedio</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm text-muted-foreground">Para revisar hoy</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">7</p>
            <p className="text-sm text-muted-foreground">Días de racha</p>
          </CardContent>
        </Card>
      </div>

      {/* Acciones principales */}
      <div className="flex justify-center gap-4">
        <Button onClick={() => setStudyMode(true)} size="lg" className="px-8">
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

      {/* Lista de flashcards */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Mis Flashcards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {flashcards.map((card) => (
            <Card key={card.id} className="card-hover">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className={getDifficultyColor(card.difficulty)}>
                    {card.difficulty === "easy" ? "Fácil" : 
                     card.difficulty === "medium" ? "Intermedio" : "Difícil"}
                  </Badge>
                  <Badge variant="outline">{card.subject}</Badge>
                </div>
                <CardTitle className="text-sm line-clamp-2">{card.question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Dominio</span>
                    <span>{card.mastery}%</span>
                  </div>
                  <Progress value={card.mastery} className="h-1" />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <span>Estudiada: {card.timesStudied}x</span>
                  <span>Aciertos: {card.correctAnswers}</span>
                </div>
                
                <p className="text-xs text-muted-foreground">
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
