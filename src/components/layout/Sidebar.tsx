
import { 
  LayoutDashboard, 
  BookOpen, 
  Brain, 
  Zap, 
  TrendingUp,
  Sparkles,
  ArrowLeft
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, emoji: "🏠" },
  { id: "files", label: "Subir Archivos", icon: BookOpen, emoji: "📁" },
  { id: "notes", label: "Mis Notas", icon: BookOpen, emoji: "📝" },
  { id: "flashcards", label: "Flashcards", icon: Brain, emoji: "🧠" },
  { id: "quiz", label: "Quizzes", icon: Zap, emoji: "⚡" },
  { id: "progress", label: "Mi Progreso", icon: TrendingUp, emoji: "📊" },
];

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const handleBackToWelcome = () => {
    window.location.reload();
  };

  return (
    <div className="w-72 min-h-screen glass-effect border-r border-border accent-shadow">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 accent-gradient rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold gradient-text">KarAI</span>
              <div className="text-xs text-muted-foreground">Tu asistente de estudio</div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBackToWelcome}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all duration-300 group",
                activeSection === item.id
                  ? "accent-gradient text-white shadow-lg transform scale-[1.02]"
                  : "text-muted-foreground hover:bg-secondary hover:text-primary"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.emoji}</span>
                <item.icon className={cn(
                  "w-5 h-5",
                  activeSection === item.id ? "text-white" : "text-primary"
                )} />
              </div>
              <span className="font-medium group-hover:translate-x-1 transition-transform duration-200">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Quick Stats */}
        <div className="mt-8 p-4 bg-secondary rounded-xl border border-border">
          <div className="text-sm font-medium text-foreground mb-2">
            🎯 Progreso de hoy
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Objetivo diario</span>
              <span className="text-foreground font-medium">75%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="accent-gradient h-2 rounded-full w-3/4 shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
          <div className="text-sm text-accent font-medium mb-1">
            💡 Tip del día
          </div>
          <div className="text-xs text-muted-foreground leading-relaxed">
            "La repetición espaciada mejora la retención hasta un 90%. ¡Sigue practicando!"
          </div>
        </div>
      </div>
    </div>
  );
};
