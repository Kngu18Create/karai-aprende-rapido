
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Brain, 
  Trophy, 
  Clock,
  TrendingUp,
  FileText,
  Zap
} from "lucide-react";

interface DashboardProps {
  onNavigate: (section: string) => void;
}

export const Dashboard = ({ onNavigate }: DashboardProps) => {
  const stats = [
    { title: "Notas Creadas", value: "24", icon: FileText, color: "text-blue-600" },
    { title: "Flashcards Estudiadas", value: "156", icon: Brain, color: "text-purple-600" },
    { title: "Quizzes Completados", value: "8", icon: Trophy, color: "text-green-600" },
    { title: "Tiempo de Estudio", value: "12h", icon: Clock, color: "text-orange-600" },
  ];

  const recentActivity = [
    { action: "Completaste el quiz de Matemáticas", time: "Hace 2 horas" },
    { action: "Nuevas flashcards de Historia creadas", time: "Hace 4 horas" },
    { action: "Archivo 'Física Cuántica.pdf' procesado", time: "Ayer" },
    { action: "Racha de estudio: 7 días consecutivos", time: "Ayer" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-text">
          ¡Bienvenido a KarAI! 🚀
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Tu plataforma inteligente de aprendizaje. Sube tus materiales y deja que la IA 
          genere notas, flashcards y quizzes personalizados para maximizar tu rendimiento.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-hover cursor-pointer" onClick={() => onNavigate("files")}>
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Subir Material</CardTitle>
            <CardDescription>
              Sube PDFs, documentos o audios para generar contenido automáticamente
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="card-hover cursor-pointer" onClick={() => onNavigate("flashcards")}>
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <CardTitle>Estudiar Flashcards</CardTitle>
            <CardDescription>
              Repasa conceptos clave con nuestro sistema de repetición espaciada
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="card-hover cursor-pointer" onClick={() => onNavigate("quiz")}>
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle>Hacer Quiz</CardTitle>
            <CardDescription>
              Pon a prueba tus conocimientos con quizzes generados automáticamente
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Progreso Semanal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Objetivo semanal</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Flashcards completadas</span>
                <span>90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Quizzes realizados</span>
                <span>60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
