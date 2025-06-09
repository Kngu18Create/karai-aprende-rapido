
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Award,
  Clock,
  Brain,
  FileText,
  BookOpen,
  Zap
} from "lucide-react";

export const ProgressOverview = () => {
  const weeklyGoals = [
    { name: "Notas creadas", current: 8, target: 10, unit: "notas" },
    { name: "Flashcards estudiadas", current: 125, target: 150, unit: "tarjetas" },
    { name: "Quizzes completados", current: 4, target: 6, unit: "quizzes" },
    { name: "Tiempo de estudio", current: 320, target: 420, unit: "minutos" }
  ];

  const subjects = [
    { name: "Matemáticas", progress: 85, hoursStudied: 12, color: "bg-blue-500" },
    { name: "Historia", progress: 70, hoursStudied: 8, color: "bg-green-500" },
    { name: "Física", progress: 60, hoursStudied: 6, color: "bg-purple-500" },
    { name: "Química", progress: 45, hoursStudied: 4, color: "bg-orange-500" }
  ];

  const achievements = [
    { 
      title: "Racha de Estudio", 
      description: "7 días consecutivos estudiando", 
      icon: Calendar, 
      earned: true 
    },
    { 
      title: "Maestro de Flashcards", 
      description: "100 flashcards completadas", 
      icon: Brain, 
      earned: true 
    },
    { 
      title: "Quiz Master", 
      description: "10 quizzes con 90%+ de acierto", 
      icon: Target, 
      earned: false 
    },
    { 
      title: "Generador de Notas", 
      description: "25 notas creadas con IA", 
      icon: FileText, 
      earned: false 
    }
  ];

  const studyHistory = [
    { date: "2024-01-15", minutes: 45, activity: "Flashcards de Matemáticas" },
    { date: "2024-01-14", minutes: 60, activity: "Quiz de Historia Romana" },
    { date: "2024-01-13", minutes: 30, activity: "Notas de Física Cuántica" },
    { date: "2024-01-12", minutes: 75, activity: "Repaso General" },
    { date: "2024-01-11", minutes: 40, activity: "Flashcards de Historia" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-800 font-poppins">Tu Progreso de Aprendizaje</h1>
        <p className="text-muted-foreground">
          Visualiza tu rendimiento y alcanza tus metas de estudio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border hover:shadow-lg transition-all duration-200">
          <CardContent className="p-4 text-center">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-800">156</p>
            <p className="text-sm text-muted-foreground">Conceptos dominados</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border hover:shadow-lg transition-all duration-200">
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-800">24h</p>
            <p className="text-sm text-muted-foreground">Tiempo total</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border hover:shadow-lg transition-all duration-200">
          <CardContent className="p-4 text-center">
            <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-800">7</p>
            <p className="text-sm text-muted-foreground">Días de racha</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border hover:shadow-lg transition-all duration-200">
          <CardContent className="p-4 text-center">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-800">85%</p>
            <p className="text-sm text-muted-foreground">Eficiencia promedio</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800">
            <Target className="w-5 h-5 text-blue-600" />
            Objetivos de la Semana
          </CardTitle>
          <CardDescription>
            Progreso hacia tus metas semanales de estudio
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {weeklyGoals.map((goal, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">{goal.name}</span>
                <span className="text-sm text-muted-foreground">
                  {goal.current}/{goal.target} {goal.unit}
                </span>
              </div>
              <Progress value={(goal.current / goal.target) * 100} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Progreso por Materia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subjects.map((subject, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${subject.color}`} />
                    <span className="font-medium text-gray-800">{subject.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {subject.hoursStudied}h estudiadas
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Dominio</span>
                    <span className="text-blue-600">{subject.progress}%</span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Award className="w-5 h-5 text-blue-600" />
              Logros
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  achievement.earned ? "bg-green-50 border border-green-200" : "bg-muted/20"
                }`}
              >
                <achievement.icon className={`w-6 h-6 ${
                  achievement.earned ? "text-green-600" : "text-muted-foreground"
                }`} />
                <div className="flex-1">
                  <p className={`font-medium ${
                    achievement.earned ? "text-green-800" : "text-muted-foreground"
                  }`}>
                    {achievement.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
                {achievement.earned && (
                  <Badge className="bg-green-100 text-green-800">
                    Obtenido
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Calendar className="w-5 h-5 text-blue-600" />
              Historial Reciente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {studyHistory.map((session, index) => (
              <div key={index} className="flex items-center gap-3 pb-3 border-b last:border-b-0">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate text-gray-800">{session.activity}</p>
                  <p className="text-xs text-muted-foreground">{session.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-600">{session.minutes}min</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
