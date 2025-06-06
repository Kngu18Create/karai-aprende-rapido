
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Brain, 
  Trophy, 
  Clock,
  TrendingUp,
  Zap,
  Heart,
  Star,
  Sparkles,
  ArrowRight
} from "lucide-react";

interface DashboardProps {
  onNavigate: (section: string) => void;
}

export const Dashboard = ({ onNavigate }: DashboardProps) => {
  const stats = [
    { 
      title: "Notas Creadas", 
      value: "24", 
      icon: BookOpen, 
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      emoji: "📚"
    },
    { 
      title: "Flashcards Estudiadas", 
      value: "156", 
      icon: Brain, 
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      emoji: "🧠"
    },
    { 
      title: "Quizzes Completados", 
      value: "8", 
      icon: Trophy, 
      color: "text-green-600",
      bgColor: "bg-green-100",
      emoji: "🏆"
    },
    { 
      title: "Tiempo de Estudio", 
      value: "12h", 
      icon: Clock, 
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      emoji: "⏰"
    },
  ];

  const recentActivity = [
    { 
      action: "Completaste el quiz de Matemáticas con 95% de acierto", 
      time: "Hace 2 horas",
      emoji: "🎯",
      type: "success"
    },
    { 
      action: "Nuevas flashcards de Historia Latinoamericana creadas", 
      time: "Hace 4 horas",
      emoji: "✨",
      type: "info"
    },
    { 
      action: "Archivo 'Física Cuántica.pdf' procesado exitosamente", 
      time: "Ayer",
      emoji: "📄",
      type: "info"
    },
    { 
      action: "¡Racha de estudio: 7 días consecutivos! 🔥", 
      time: "Ayer",
      emoji: "🔥",
      type: "achievement"
    },
  ];

  const quickActions = [
    {
      title: "Subir Material",
      description: "Sube PDFs, documentos o audios para generar contenido automáticamente",
      action: "files",
      icon: BookOpen,
      emoji: "📁",
      gradient: "from-orange-400 to-red-400"
    },
    {
      title: "Estudiar Flashcards",
      description: "Repasa conceptos clave con nuestro sistema de repetición espaciada",
      action: "flashcards",
      icon: Brain,
      emoji: "🧠",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "Hacer Quiz",
      description: "Pon a prueba tus conocimientos con quizzes generados automáticamente",
      action: "quiz",
      icon: Zap,
      emoji: "⚡",
      gradient: "from-green-400 to-blue-400"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-up">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-orange-500" />
          <h1 className="text-4xl font-bold gradient-text">
            ¡Bienvenido de vuelta! 👋
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tu plataforma inteligente de aprendizaje está lista. Continúa donde lo dejaste 
          y sigue construyendo tu conocimiento con el poder de la IA.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge className="bg-green-100 text-green-700 border-green-200">
            <Heart className="w-3 h-3 mr-1" />
            Racha de 7 días
          </Badge>
          <Badge className="bg-orange-100 text-orange-700 border-orange-200">
            <Star className="w-3 h-3 mr-1" />
            Nivel Intermedio
          </Badge>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => (
          <Card 
            key={index} 
            className="card-hover cursor-pointer border-0 warm-shadow overflow-hidden group"
            onClick={() => onNavigate(action.action)}
          >
            <CardHeader className="text-center pb-4">
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-r ${action.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 text-2xl">{action.emoji}</div>
              </div>
              <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
                {action.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {action.description}
              </CardDescription>
            </CardHeader>
            <div className="px-6 pb-6">
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-orange-50 group-hover:border-orange-200 transition-colors"
              >
                Comenzar
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="card-hover border-0 warm-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold flex items-center gap-2">
                    {stat.value}
                    <span className="text-lg">{stat.emoji}</span>
                  </p>
                </div>
                <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Section */}
        <Card className="border-0 warm-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              Progreso Semanal
              <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                ¡Excelente!
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Objetivo semanal 🎯</span>
                  <span className="text-orange-600 font-semibold">75%</span>
                </div>
                <Progress value={75} className="h-3 bg-orange-100" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Flashcards completadas 🧠</span>
                  <span className="text-green-600 font-semibold">90%</span>
                </div>
                <Progress value={90} className="h-3 bg-green-100" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Quizzes realizados ⚡</span>
                  <span className="text-blue-600 font-semibold">60%</span>
                </div>
                <Progress value={60} className="h-3 bg-blue-100" />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-green-50 p-4 rounded-xl border border-orange-100">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-orange-500" />
                <span className="font-semibold text-orange-900">¡Sigue así!</span>
              </div>
              <p className="text-sm text-orange-700">
                Estás a solo 3 flashcards de completar tu objetivo semanal. 💪
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Activity Section */}
        <Card className="border-0 warm-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-500" />
              Actividad Reciente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      activity.type === 'success' ? 'bg-green-100' :
                      activity.type === 'achievement' ? 'bg-orange-100' :
                      'bg-blue-100'
                    }`}>
                      {activity.emoji}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium group-hover:text-orange-600 transition-colors">
                      {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              variant="ghost" 
              className="w-full mt-4 text-orange-600 hover:bg-orange-50"
              onClick={() => onNavigate("progress")}
            >
              Ver todo el progreso
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Motivational Section */}
      <Card className="border-0 warm-shadow bg-gradient-to-r from-orange-50 to-green-50">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="text-4xl">🌟</div>
            <h3 className="text-xl font-bold text-orange-900">
              "El aprendizaje nunca agota la mente"
            </h3>
            <p className="text-orange-700 max-w-md mx-auto">
              Cada día es una nueva oportunidad para crecer. ¡Sigue adelante con tu viaje de aprendizaje!
            </p>
            <div className="flex justify-center gap-2">
              <Button 
                onClick={() => onNavigate("flashcards")}
                className="warm-gradient text-white"
              >
                <Brain className="w-4 h-4 mr-2" />
                Continuar Estudiando
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
