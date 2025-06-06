
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  ClipboardList, 
  Play, 
  CheckCircle, 
  XCircle, 
  Clock,
  Trophy,
  Target,
  Brain,
  RotateCcw
} from "lucide-react";

export const QuizManager = () => {
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutos

  const [availableQuizzes] = useState([
    {
      id: 1,
      title: "Geometría Analítica - Cónicas",
      description: "Conceptos fundamentales sobre elipses, parábolas e hipérbolas",
      questions: 10,
      difficulty: "medium",
      estimatedTime: "8 min",
      subject: "Matemáticas",
      completed: false
    },
    {
      id: 2,
      title: "Imperio Romano - Historia Política",
      description: "Desde Augusto hasta la crisis del siglo III",
      questions: 15,
      difficulty: "hard",
      estimatedTime: "12 min",
      subject: "Historia",
      completed: true,
      lastScore: 85
    },
    {
      id: 3,
      title: "Mecánica Cuántica Básica",
      description: "Principios fundamentales y postulados",
      questions: 8,
      difficulty: "hard",
      estimatedTime: "10 min",
      subject: "Física",
      completed: false
    }
  ]);

  const [currentQuiz] = useState({
    title: "Geometría Analítica - Cónicas",
    questions: [
      {
        id: 1,
        question: "¿Cuál es la ecuación estándar de una elipse con centro en el origen?",
        options: [
          "x²/a² + y²/b² = 1",
          "x²/a² - y²/b² = 1", 
          "(x-h)² + (y-k)² = r²",
          "y = ax² + bx + c"
        ],
        correctAnswer: 0,
        explanation: "La ecuación estándar de una elipse con centro en el origen es x²/a² + y²/b² = 1, donde 'a' y 'b' son los semiejes."
      },
      {
        id: 2,
        question: "¿Qué característica distingue a una hipérbola de una elipse?",
        options: [
          "El número de focos",
          "La diferencia vs suma de distancias a los focos",
          "La orientación de los ejes",
          "El tamaño de los semiejes"
        ],
        correctAnswer: 1,
        explanation: "En una hipérbola, la diferencia de distancias a los focos es constante, mientras que en una elipse es la suma."
      }
    ]
  });

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  const handleAnswerSubmit = () => {
    setShowFeedback(true);
    if (parseInt(selectedAnswer) === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer("");
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completado
      setQuizMode(false);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "text-green-600 bg-green-100";
      case "medium": return "text-yellow-600 bg-yellow-100";
      case "hard": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (quizMode) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header del quiz */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">{currentQuiz.title}</h2>
            <p className="text-muted-foreground">
              Pregunta {currentQuestionIndex + 1} de {currentQuiz.questions.length}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-mono">{formatTime(timeRemaining)}</span>
            </div>
            <Button variant="outline" onClick={() => setQuizMode(false)}>
              Salir
            </Button>
          </div>
        </div>

        {/* Progreso */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progreso</span>
            <span>{Math.round(((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100)}%</span>
          </div>
          <Progress value={((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100} className="h-2" />
        </div>

        {/* Pregunta */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup
              value={selectedAnswer}
              onValueChange={setSelectedAnswer}
              disabled={showFeedback}
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className={`flex-1 p-3 rounded-lg border cursor-pointer transition-colors ${
                      showFeedback && index === currentQuestion.correctAnswer
                        ? "bg-green-50 border-green-200 text-green-800"
                        : showFeedback && selectedAnswer === index.toString() && index !== currentQuestion.correctAnswer
                        ? "bg-red-50 border-red-200 text-red-800"
                        : "hover:bg-muted"
                    }`}
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {showFeedback && (
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${
                  parseInt(selectedAnswer) === currentQuestion.correctAnswer
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    {parseInt(selectedAnswer) === currentQuestion.correctAnswer ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                    <span className="font-semibold">
                      {parseInt(selectedAnswer) === currentQuestion.correctAnswer ? "¡Correcto!" : "Incorrecto"}
                    </span>
                  </div>
                  <p className="text-sm">{currentQuestion.explanation}</p>
                </div>

                <Button onClick={handleNextQuestion} className="w-full">
                  {currentQuestionIndex < currentQuiz.questions.length - 1 ? "Siguiente Pregunta" : "Finalizar Quiz"}
                </Button>
              </div>
            )}

            {!showFeedback && (
              <Button 
                onClick={handleAnswerSubmit} 
                disabled={!selectedAnswer}
                className="w-full"
              >
                Confirmar Respuesta
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Puntuación actual */}
        <div className="text-center">
          <p className="text-lg">
            Puntuación actual: <span className="font-bold">{score}/{currentQuestionIndex + (showFeedback ? 1 : 0)}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold gradient-text">Quizzes Inteligentes</h1>
        <p className="text-muted-foreground">
          Evaluaciones personalizadas generadas automáticamente desde tu contenido
        </p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <ClipboardList className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">{availableQuizzes.length}</p>
            <p className="text-sm text-muted-foreground">Quizzes disponibles</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">85%</p>
            <p className="text-sm text-muted-foreground">Puntuación promedio</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Quizzes completados</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">2h 30m</p>
            <p className="text-sm text-muted-foreground">Tiempo estudiando</p>
          </CardContent>
        </Card>
      </div>

      {/* Botones de acción */}
      <div className="flex justify-center gap-4">
        <Button size="lg">
          <Brain className="w-5 h-5 mr-2" />
          Generar Quiz Nuevo
        </Button>
        <Button variant="outline" size="lg">
          <RotateCcw className="w-5 h-5 mr-2" />
          Quiz Aleatorio
        </Button>
      </div>

      {/* Lista de quizzes */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Quizzes Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableQuizzes.map((quiz) => (
            <Card key={quiz.id} className="card-hover">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getDifficultyColor(quiz.difficulty)}>
                    {quiz.difficulty === "easy" ? "Fácil" : 
                     quiz.difficulty === "medium" ? "Intermedio" : "Difícil"}
                  </Badge>
                  <Badge variant="outline">{quiz.subject}</Badge>
                </div>
                <CardTitle className="text-base">{quiz.title}</CardTitle>
                <CardDescription className="text-sm">
                  {quiz.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <span>{quiz.questions} preguntas</span>
                  <span>{quiz.estimatedTime}</span>
                </div>

                {quiz.completed && quiz.lastScore && (
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                    <span>Última puntuación: {quiz.lastScore}%</span>
                  </div>
                )}

                <Button 
                  className="w-full" 
                  variant={quiz.completed ? "outline" : "default"}
                  onClick={() => setQuizMode(true)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  {quiz.completed ? "Repetir Quiz" : "Comenzar Quiz"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
