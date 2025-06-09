
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Clock, TrendingUp } from "lucide-react";

interface FlashcardStatsProps {
  totalCards: number;
  averageMastery: number;
  cardsToReview: number;
  streakDays: number;
}

export const FlashcardStats = ({ 
  totalCards, 
  averageMastery, 
  cardsToReview, 
  streakDays 
}: FlashcardStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="bg-card border-border hover:shadow-lg transition-all duration-200">
        <CardContent className="p-4 text-center">
          <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-slate-800">{totalCards}</p>
          <p className="text-sm text-muted-foreground">Flashcards totales</p>
        </CardContent>
      </Card>
      <Card className="bg-card border-border hover:shadow-lg transition-all duration-200">
        <CardContent className="p-4 text-center">
          <Target className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-slate-800">{averageMastery}%</p>
          <p className="text-sm text-muted-foreground">Dominio promedio</p>
        </CardContent>
      </Card>
      <Card className="bg-card border-border hover:shadow-lg transition-all duration-200">
        <CardContent className="p-4 text-center">
          <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-slate-800">{cardsToReview}</p>
          <p className="text-sm text-muted-foreground">Para revisar hoy</p>
        </CardContent>
      </Card>
      <Card className="bg-card border-border hover:shadow-lg transition-all duration-200">
        <CardContent className="p-4 text-center">
          <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-slate-800">{streakDays}</p>
          <p className="text-sm text-muted-foreground">Días de racha</p>
        </CardContent>
      </Card>
    </div>
  );
};
