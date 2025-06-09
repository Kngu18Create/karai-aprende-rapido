
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Plus, 
  Search, 
  Star, 
  Brain,
  Eye,
  Edit,
  Trash2,
  Hash,
  List,
  CheckSquare
} from "lucide-react";

export const NotesManager = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const [notes] = useState([
    {
      id: 1,
      title: "📐 Geometría Analítica - Cónicas",
      content: "# Secciones Cónicas\n\n## Definición\nLas **cónicas** son curvas que resultan de la intersección de un plano con un cono circular recto...",
      source: "Matemáticas Avanzadas.pdf",
      tags: ["matemáticas", "geometría", "cónicas"],
      favorite: true,
      createdAt: "2024-01-15",
      aiGenerated: true
    },
    {
      id: 2,
      title: "🏛️ Roma Imperial - Economía",
      content: "# El Sistema Económico Romano\n\n## Características principales:\n- **Agricultura**: Base de la economía\n- **Comercio**: Red mediterránea...",
      source: "Historia Universal.docx",
      tags: ["historia", "roma", "economía"],
      favorite: false,
      createdAt: "2024-01-14",
      aiGenerated: true
    },
    {
      id: 3,
      title: "⚛️ Mecánica Cuántica - Principios",
      content: "# Fundamentos de la Mecánica Cuántica\n\n## Postulados fundamentales\n1. **Dualidad onda-partícula**\n2. **Principio de incertidumbre**...",
      source: "Clase Física Cuántica.mp3",
      tags: ["física", "cuántica", "postulados"],
      favorite: true,
      createdAt: "2024-01-13",
      aiGenerated: true
    }
  ]);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const renderNotePreview = (content: string) => {
    const lines = content.split('\n').slice(0, 3);
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h3 key={index} className="font-bold text-sm text-gray-800">{line.replace('# ', '')}</h3>;
      } else if (line.startsWith('## ')) {
        return <h4 key={index} className="font-semibold text-xs text-muted-foreground">{line.replace('## ', '')}</h4>;
      } else if (line.includes('**')) {
        return <p key={index} className="text-xs text-muted-foreground">{line}</p>;
      }
      return <p key={index} className="text-xs text-muted-foreground">{line}</p>;
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-800 font-poppins">Mis Notas Inteligentes</h1>
        <p className="text-muted-foreground">
          Notas enriquecidas generadas automáticamente por IA con formato avanzado
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Buscar notas por título o etiquetas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-background border-border"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Nueva Nota
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Brain className="w-4 h-4 mr-2" />
            Generar con IA
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map((note) => (
          <Card key={note.id} className="bg-card border-border hover:shadow-lg transition-all duration-200 h-fit">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-base leading-6 line-clamp-2 text-slate-800">
                  {note.title}
                </CardTitle>
                <div className="flex gap-1 ml-2">
                  {note.aiGenerated && (
                    <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-600">
                      <Brain className="w-3 h-3 mr-1" />
                      IA
                    </Badge>
                  )}
                  {note.favorite && (
                    <Star className="w-4 h-4 text-blue-500 fill-current" />
                  )}
                </div>
              </div>
              <CardDescription className="text-xs">
                Desde: {note.source}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-1 min-h-[60px]">
                {renderNotePreview(note.content)}
              </div>

              <div className="flex flex-wrap gap-1">
                {note.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs border-border">
                    <Hash className="w-2 h-2 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <List className="w-3 h-3" />
                  <span>Listas</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckSquare className="w-3 h-3" />
                  <span>Tablas</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-mono">Σ</span>
                  <span>LaTeX</span>
                </div>
              </div>

              <div className="flex gap-1 pt-2">
                <Button variant="ghost" size="sm" className="flex-1 text-blue-600">
                  <Eye className="w-3 h-3 mr-1" />
                  Ver
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 text-blue-600">
                  <Edit className="w-3 h-3 mr-1" />
                  Editar
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Creado el {note.createdAt}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredNotes.length === 0 && (
        <Card className="text-center py-12 bg-card border-border">
          <CardContent>
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-slate-800">No se encontraron notas</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm ? "Intenta con otros términos de búsqueda" : "Sube archivos para generar tus primeras notas con IA"}
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Brain className="w-4 h-4 mr-2" />
              Generar Notas con IA
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
