
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { FileUpload } from "@/components/files/FileUpload";
import { NotesManager } from "@/components/notes/NotesManager";
import { FlashcardsManager } from "@/components/flashcards/FlashcardsManager";
import { QuizManager } from "@/components/quiz/QuizManager";
import { ProgressOverview } from "@/components/progress/ProgressOverview";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard onNavigate={setActiveSection} />;
      case "files":
        return <FileUpload />;
      case "notes":
        return <NotesManager />;
      case "flashcards":
        return <FlashcardsManager />;
      case "quiz":
        return <QuizManager />;
      case "progress":
        return <ProgressOverview />;
      default:
        return <Dashboard onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="flex w-full">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="flex-1 p-6">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
};

export default Index;
