import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, File, Presentation, Music, Folder, Star, Trash2, Download, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export const FileUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const {
    toast
  } = useToast();
  const [files] = useState([{
    id: 1,
    name: "Matemáticas Avanzadas.pdf",
    type: "pdf",
    size: "2.4 MB",
    folder: "Matemáticas",
    favorite: true,
    uploadDate: "2024-01-15"
  }, {
    id: 2,
    name: "Historia Universal.docx",
    type: "doc",
    size: "1.8 MB",
    folder: "Historia",
    favorite: false,
    uploadDate: "2024-01-14"
  }, {
    id: 3,
    name: "Clase Física Cuántica.mp3",
    type: "audio",
    size: "45.2 MB",
    folder: "Física",
    favorite: true,
    uploadDate: "2024-01-13"
  }]);
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };
  const handleFiles = (fileList: FileList) => {
    setUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          toast({
            title: "¡Archivo subido exitosamente!",
            description: "El procesamiento con IA comenzará en unos momentos."
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };
  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="w-6 h-6 text-red-500" />;
      case "doc":
        return <File className="w-6 h-6 text-blue-500" />;
      case "ppt":
        return <Presentation className="w-6 h-6 text-orange-500" />;
      case "audio":
        return <Music className="w-6 h-6 text-purple-500" />;
      default:
        return <File className="w-6 h-6 text-muted-foreground" />;
    }
  };
  return <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-800 font-poppins">Gestión de Archivos</h1>
        <p className="text-gray-600">
          Sube tus materiales de estudio y deja que KarAI genere contenido inteligente
        </p>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Subir Archivos</TabsTrigger>
          <TabsTrigger value="manage">Gestionar Archivos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-gray-800">Subir Nuevo Material</CardTitle>
              <CardDescription>
                Formatos soportados: PDF, DOC, DOCX, PPT, PPTX, TXT, MP3, WAV
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${dragActive ? "border-primary bg-primary/5" : "border-border bg-muted/20"}`} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  Arrastra tus archivos aquí o haz clic para seleccionar
                </h3>
                <p className="text-muted-foreground mb-4">
                  Tamaño máximo: 50MB por archivo
                </p>
                <Input type="file" multiple accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.mp3,.wav" className="hidden" id="file-upload" onChange={e => e.target.files && handleFiles(e.target.files)} />
                <Label htmlFor="file-upload">
                  <Button variant="outline" className="cursor-pointer">
                    Seleccionar Archivos
                  </Button>
                </Label>
              </div>

              {uploading && <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Subiendo archivo...</span>
                    <span className="text-primary">{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>}

              <div className="space-y-4">
                <Label htmlFor="folder" className="text-gray-700">Carpeta de Destino</Label>
                <Input id="folder" placeholder="Ej: Matemáticas, Historia, Ciencias..." defaultValue="General" className="bg-background border-border" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Mis Archivos</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Folder className="w-4 h-4 mr-2" />
                Nueva Carpeta
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map(file => <Card key={file.id} className="bg-card border-border hover:shadow-lg transition-all duration-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {getFileIcon(file.type)}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate text-gray-800">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{file.size}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-amber-500 hover:text-amber-600">
                      <Star className={`w-4 h-4 ${file.favorite ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Folder className="w-3 h-3" />
                      <span>{file.folder}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Subido el {file.uploadDate}
                    </p>
                  </div>

                  <div className="flex gap-1 mt-4">
                    <Button variant="ghost" size="sm" className="flex-1 text-blue-600">
                      <Eye className="w-3 h-3 mr-1" />
                      Ver
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 text-blue-600">
                      <Download className="w-3 h-3 mr-1" />
                      Descargar
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </TabsContent>
      </Tabs>
    </div>;
};