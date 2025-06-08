import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Brain, Clock, Zap, Users, Trophy, ArrowRight, Sparkles, Heart, Star } from "lucide-react";
interface WelcomeProps {
  onGetStarted: () => void;
}
export const Welcome = ({
  onGetStarted
}: WelcomeProps) => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const features = [{
    icon: BookOpen,
    title: "Notas Inteligentes",
    description: "Convierte cualquier archivo o audio en notas organizadas automáticamente",
    emoji: "📚"
  }, {
    icon: Brain,
    title: "Flashcards Personalizadas",
    description: "Sistema de repetición espaciada que se adapta a tu ritmo de aprendizaje",
    emoji: "🧠"
  }, {
    icon: Zap,
    title: "Quizzes Adaptativos",
    description: "Evaluaciones inteligentes que identifican tus fortalezas y áreas de mejora",
    emoji: "⚡"
  }];
  const benefits = [{
    text: "Ahorra hasta 70% del tiempo de estudio",
    icon: Clock
  }, {
    text: "Mejora la retención con técnicas científicas",
    icon: Brain
  }, {
    text: "Personalización basada en tu progreso",
    icon: Trophy
  }];
  const testimonials = [{
    text: "KarAI transformó mi manera de estudiar. Ahora puedo enfocarme en entender conceptos en lugar de solo tomar notas.",
    author: "María González",
    role: "Estudiante de Medicina",
    avatar: "👩‍⚕️"
  }, {
    text: "Increíble cómo puede generar flashcards tan precisas desde mis clases grabadas. Es como tener un asistente personal.",
    author: "Carlos Ruiz",
    role: "Estudiante de Ingeniería",
    avatar: "👨‍💻"
  }, {
    text: "Los quizzes adaptativos me ayudaron a identificar exactamente qué temas necesitaba repasar para mi examen final.",
    author: "Ana Martínez",
    role: "Estudiante de Derecho",
    avatar: "👩‍⚖️"
  }];
  return <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="w-full p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 warm-gradient rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">KarAI</span>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
              Beta
            </Badge>
          </div>
          <Button onClick={onGetStarted} variant="outline" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg transition-all duration-200">
            Ir al Dashboard
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-balance">
                Aprende más rápido con{" "}
                <span className="gradient-text">Inteligencia Artificial</span>
              </h1>
              <p className="text-xl text-muted-foreground text-balance leading-relaxed">
                KarAI transforma tus materiales de estudio en notas organizadas, 
                flashcards inteligentes y quizzes personalizados. 
                <span className="text-foreground font-medium"> ¡El futuro del aprendizaje está aquí!</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={onGetStarted} size="lg" className="warm-gradient text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Sparkles className="w-5 h-5 mr-2" />
                Comenzar Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-white flex items-center justify-center text-sm">👨‍🎓</div>
                  <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-sm">👩‍🎓</div>
                  <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white flex items-center justify-center text-sm">👨‍💻</div>
                </div>
                <span className="text-sm text-muted-foreground">+2,000 estudiantes</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                <span className="text-sm text-muted-foreground ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <Card className="mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <CardContent className="mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-orange-600" />
                      <div className="flex-1">
                        <div className="h-3 bg-orange-100 rounded-full">
                          <div className="h-3 bg-orange-500 rounded-full w-3/4 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-lg p-4 space-y-2 bg-slate-300">
                      <h4 className="font-semibold text-orange-900">📚 Conceptos Clave Identificados</h4>
                      <div className="space-y-1">
                        <Badge variant="secondary" className="bg-orange-100 text-orange-700">Photosíntesis</Badge>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 ml-2">Clorofila</Badge>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 ml-2">ATP</Badge>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Brain className="w-4 h-4 mr-2" />
                        Flashcards
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Zap className="w-4 h-4 mr-2" />
                        Quiz
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold">¿Cómo te ayuda KarAI?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Herramientas inteligentes diseñadas para maximizar tu potencial de aprendizaje
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => <Card key={index} onMouseEnter={() => setHoveredFeature(index)} onMouseLeave={() => setHoveredFeature(null)} className="mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <CardContent className="mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <div className="relative">
                  <div className="w-16 h-16 warm-gradient rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">{feature.emoji}</div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <Card className="glass-effect border-0 warm-shadow">
          <CardContent className="p-12mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">
                    Diseñado para <span className="text-orange-600">estudiantes como tú</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Ya seas estudiante universitario, profesional en formación o autodidacta, 
                    KarAI se adapta a tu estilo de aprendizaje.
                  </p>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="text-lg font-medium">{benefit.text}</span>
                    </div>)}
                </div>

                <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl">
                  <Heart className="w-6 h-6 text-red-500" />
                  <span className="font-medium text-orange-900">
                    Gratis para estudiantes. Siempre.
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="p-6 bg-orange-50 border-orange-200">
                    <div className="text-3xl font-bold text-orange-600">2.5x</div>
                    <div className="text-sm text-orange-700">Más rápido</div>
                  </Card>
                  <Card className="p-6 bg-green-50 border-green-200">
                    <div className="text-3xl font-bold text-green-600">90%</div>
                    <div className="text-sm text-green-700">Retención</div>
                  </Card>
                </div>
                <div className="space-y-4 pt-8">
                  <Card className="p-6 bg-blue-50 border-blue-200">
                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-blue-700">Disponible</div>
                  </Card>
                  <Card className="p-6 bg-purple-50 border-purple-200">
                    <div className="text-3xl font-bold text-purple-600">∞</div>
                    <div className="text-sm text-purple-700">Materiales</div>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold">Lo que dicen nuestros estudiantes</h2>
          <p className="text-xl text-muted-foreground">
            Miles de estudiantes ya están aprendiendo más rápido con KarAI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className="mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <CardContent className="mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <div className="text-lg leading-relaxed">"{testimonial.text}"</div>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </section>

      {/* CTA Final */}
      <section className="mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
        <Card className="glass-effect border-0 warm-shadow">
          <CardContent className="mt-6 p-4 border border-purple-500/20 rounded-xl bg-black">
            <div className="mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <h2 className="text-4xl font-bold">
                ¿Listo para transformar tu manera de estudiar?
              </h2>
              <p className="mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                Únete a miles de estudiantes que ya están aprendiendo más rápido con KarAI
              </p>
            </div>

            <Button onClick={onGetStarted} size="lg" className="warm-gradient text-white font-semibold px-12 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Sparkles className="w-6 h-6 mr-3" />
              Comenzar mi Viaje de Aprendizaje
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>

            <p className="mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
              No se requiere tarjeta de crédito • Configuración en 2 minutos • Cancela cuando quieras
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-orange-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 warm-gradient rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold gradient-text">KarAI</span>
            <span className="text-sm text-muted-foreground">Beta</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 KarAI. Hecho con ❤️ para estudiantes de todo el mundo.
          </p>
        </div>
      </footer>
    </div>;
};