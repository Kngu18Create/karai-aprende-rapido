
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
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      emoji: "📚"
    },
    { 
      title: "Flashcards Estudiadas", 
      value: "156", 
      icon: Brain, 
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      emoji: "🧠"
    },
    { 
      title: "Quizzes Completados", 
      value: "8", 
      icon: Trophy, 
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      emoji: "🏆"
    },
    { 
      title: "Tiempo de Estudio", 
      value: "12h", 
      icon: Clock, 
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
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
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Estudiar Flashcards",
      description: "Repasa conceptos clave con nuestro sistema de repetición espaciada",
      action: "flashcards",
      icon: Brain,
      emoji: "🧠",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Hacer Quiz",
      description: "Pon a prueba tus conocimientos con quizzes generados automáticamente",
      action: "quiz",
      icon: Zap,
      emoji: "⚡",
      gradient: "from-blue-500 to-emerald-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-up">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-blue-400" />
          <h1 className="text-4xl font-bold text-slate-50">
            ¡Bienvenido de vuelta! 👋
          </h1>
        </div>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Tu plataforma inteligente de aprendizaje está lista. Continúa donde lo dejaste 
          y sigue construyendo tu conocimiento con el poder de la IA.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            <Heart className="w-3 h-3 mr-1" />
            Racha de 7 días
          </Badge>
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
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
            className="card-professional cursor-pointer group"
            onClick={() => onNavigate(action.action)}
          >
            <CardHeader className="text-center pb-4">
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-r ${action.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 text-2xl">{action.emoji}</div>
              </div>
              <CardTitle className="text-lg text-slate-50 group-hover:text-blue-400 transition-colors">
                {action.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-slate-300">
                {action.description}
              </CardDescription>
            </CardHeader>
            <div className="px-6 pb-6">
              <Button 
                variant="outline" 
                className="w-full btn-secondary"
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
          <Card key={index} className="card-professional">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-slate-300">{stat.title}</p>
                  <p className="text-3xl font-bold flex items-center gap-2 text-slate-50">
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
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-50">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              Progreso Semanal
              <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400">
                ¡Excelente!
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-slate-300">Objetivo semanal 🎯</span>
                  <span className="text-blue-400 font-semibold">75%</span>
                </div>
                <Progress value={75} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-slate-300">Flashcards completadas 🧠</span>
                  <span className="text-emerald-400 font-semibold">90%</span>
                </div>
                <Progress value={90} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-slate-300">Quizzes realizados ⚡</span>
                  <span className="text-blue-400 font-semibold">60%</span>
                </div>
                <Progress value={60} className="h-3" />
              </div>
            </div>
            
            <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-slate-50">¡Sigue así!</span>
              </div>
              <p className="text-sm text-slate-300">
                Estás a solo 3 flashcards de completar tu objetivo semanal. 💪
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Activity Section */}
        <Card className="card-professional">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-50">
              <Clock className="w-5 h-5 text-blue-400" />
              Actividad Reciente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      activity.type === 'success' ? 'bg-emerald-500/10' :
                      activity.type === 'achievement' ? 'bg-blue-500/10' :
                      'bg-blue-500/10'
                    }`}>
                      {activity.emoji}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-50 group-hover:text-blue-400 transition-colors">
                      {activity.action}
                    </p>
                    <p className="text-xs text-slate-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              variant="ghost" 
              className="w-full mt-4 text-blue-400 hover:bg-blue-500/10"
              onClick={() => onNavigate("progress")}
            >
              Ver todo el progreso
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Motivational Section */}
      <Card className="card-professional bg-gradient-to-r from-blue-500/10 to-emerald-500/10">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="text-4xl">🌟</div>
            <h3 className="text-xl font-bold text-slate-50">
              "El aprendizaje nunca agota la mente"
            </h3>
            <p className="text-slate-300 max-w-md mx-auto">
              Cada día es una nueva oportunidad para crecer. ¡Sigue adelante con tu viaje de aprendizaje!
            </p>
            <div className="flex justify-center gap-2">
              <Button 
                onClick={() => onNavigate("flashcards")}
                className="btn-primary"
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
