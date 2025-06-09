
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  difficulty: "easy" | "medium" | "hard";
  subject: string;
  mastery: number;
  nextReview: string;
  timesStudied: number;
  correctAnswers: number;
  type: "text" | "equation";
}

interface FlashcardGridProps {
  flashcards: Flashcard[];
}

export const FlashcardGrid = ({ flashcards }: FlashcardGridProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "text-emerald-600 bg-emerald-50 border-emerald-200";
      case "medium": return "text-blue-600 bg-blue-50 border-blue-200";
      case "hard": return "text-purple-600 bg-purple-50 border-purple-200";
      default: return "text-muted-foreground bg-muted";
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-800">Mis Flashcards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {flashcards.map((card) => (
          <Card key={card.id} className="bg-card border-border hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <Badge className={getDifficultyColor(card.difficulty)}>
                  {card.difficulty === "easy" ? "Fácil" : 
                   card.difficulty === "medium" ? "Intermedio" : "Difícil"}
                </Badge>
                <Badge variant="outline" className="border-blue-500 text-blue-600">{card.subject}</Badge>
              </div>
              <CardTitle className="text-sm line-clamp-2 text-slate-800">{card.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Dominio</span>
                  <span className="text-slate-800">{card.mastery}%</span>
                </div>
                <Progress value={card.mastery} className="h-2" />
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
  );
};
