
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
  ArrowRight,
  Upload
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
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      emoji: "📚"
    },
    { 
      title: "Flashcards Estudiadas", 
      value: "156", 
      icon: Brain, 
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      emoji: "🧠"
    },
    { 
      title: "Quizzes Completados", 
      value: "8", 
      icon: Trophy, 
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      emoji: "🏆"
    },
    { 
      title: "Tiempo de Estudio", 
      value: "12h", 
      icon: Clock, 
      color: "text-purple-500",
      bgColor: "bg-purple-50",
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
      icon: Upload,
      emoji: "📁",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Estudiar Flashcards",
      description: "Repasa conceptos clave con nuestro sistema de repetición espaciada",
      action: "flashcards",
      icon: Brain,
      emoji: "🧠",
      gradient: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      title: "Hacer Quiz",
      description: "Pon a prueba tus conocimientos con quizzes generados automáticamente",
      action: "quiz",
      icon: Zap,
      emoji: "⚡",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-up">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-blue-500" />
          <h1 className="text-4xl font-bold text-gray-800 font-poppins">
            ¡Bienvenido de vuelta! 👋
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tu plataforma inteligente de aprendizaje está lista. Continúa donde lo dejaste 
          y sigue construyendo tu conocimiento con el poder de la IA.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge className="bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100">
            <Heart className="w-3 h-3 mr-1" />
            Racha de 7 días
          </Badge>
          <Badge className="bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100">
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
            className="card-modern cursor-pointer group border-l-4 border-l-blue-500 hover:border-l-blue-600"
            onClick={() => onNavigate(action.action)}
          >
            <CardHeader className="text-center pb-4">
              <div className="relative">
                <div className={`w-16 h-16 ${action.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className={`w-8 h-8 ${action.textColor}`} />
                </div>
                <div className="absolute -top-1 -right-1 text-2xl">{action.emoji}</div>
              </div>
              <CardTitle className={`text-lg ${action.textColor} group-hover:${action.textColor} transition-colors font-poppins`}>
                {action.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-gray-600">
                {action.description}
              </CardDescription>
            </CardHeader>
            <div className="px-6 pb-6">
              <Button 
                className={`w-full bg-gradient-to-r ${action.gradient} text-white hover:shadow-lg transition-all duration-200`}
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
          <Card key={index} className="stat-card-modern">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="stat-label-modern">{stat.title}</p>
                  <p className="flex items-center gap-2">
                    <span className="stat-number-modern">{stat.value}</span>
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
        <Card className="card-modern">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800 font-poppins">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Progreso Semanal
              <Badge className="bg-emerald-50 text-emerald-600 border-emerald-200">
                ¡Excelente!
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">Objetivo semanal 🎯</span>
                  <span className="text-blue-500 font-semibold">75%</span>
                </div>
                <Progress value={75} className="h-3 bg-gray-100" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">Flashcards completadas 🧠</span>
                  <span className="text-emerald-500 font-semibold">90%</span>
                </div>
                <Progress value={90} className="h-3 bg-gray-100" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">Quizzes realizados ⚡</span>
                  <span className="text-purple-500 font-semibold">60%</span>
                </div>
                <Progress value={60} className="h-3 bg-gray-100" />
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-blue-500" />
                <span className="font-semibold text-gray-800">¡Sigue así!</span>
              </div>
              <p className="text-sm text-gray-600">
                Estás a solo 3 flashcards de completar tu objetivo semanal. 💪
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Activity Section */}
        <Card className="card-modern">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800 font-poppins">
              <Clock className="w-5 h-5 text-blue-500" />
              Actividad Reciente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      activity.type === 'success' ? 'bg-emerald-50' :
                      activity.type === 'achievement' ? 'bg-blue-50' :
                      'bg-gray-50'
                    }`}>
                      {activity.emoji}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              variant="ghost" 
              className="w-full mt-4 text-blue-500 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => onNavigate("progress")}
            >
              Ver todo el progreso
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Motivational Section */}
      <Card className="card-modern bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="text-4xl">🌟</div>
            <h3 className="text-xl font-bold text-gray-800 font-poppins">
              "El aprendizaje nunca agota la mente"
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Cada día es una nueva oportunidad para crecer. ¡Sigue adelante con tu viaje de aprendizaje!
            </p>
            <div className="flex justify-center gap-2">
              <Button 
                onClick={() => onNavigate("flashcards")}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg transition-all duration-200"
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
