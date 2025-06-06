
import { 
  LayoutDashboard, 
  Upload, 
  FileText, 
  Brain, 
  ClipboardList, 
  TrendingUp,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "files", label: "Subir Archivos", icon: Upload },
  { id: "notes", label: "Mis Notas", icon: FileText },
  { id: "flashcards", label: "Flashcards", icon: Brain },
  { id: "quiz", label: "Quizzes", icon: ClipboardList },
  { id: "progress", label: "Progreso", icon: TrendingUp },
];

export const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  return (
    <div className="w-64 min-h-screen bg-white/80 backdrop-blur-sm border-r border-border shadow-sm">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">KarAI</span>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                activeSection === item.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
