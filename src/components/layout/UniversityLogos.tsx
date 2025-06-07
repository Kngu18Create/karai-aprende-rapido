
export const UniversityLogos = () => {
  const universities = [
    { name: "Universidad Nacional de Asunción", country: "Paraguay", logo: "🏛️" },
    { name: "Universidad Católica Nuestra Señora de la Asunción", country: "Paraguay", logo: "🎓" },
    { name: "Universidad de Buenos Aires", country: "Argentina", logo: "🏫" },
    { name: "Universidade de São Paulo", country: "Brasil", logo: "🎯" },
    { name: "Universidad Nacional de Colombia", country: "Colombia", logo: "📚" },
    { name: "Universidad de Chile", country: "Chile", logo: "⭐" },
    { name: "Universidad de la República", country: "Uruguay", logo: "🔬" },
    { name: "Pontificia Universidad Javeriana", country: "Colombia", logo: "✨" },
    { name: "Universidad Torcuato Di Tella", country: "Argentina", logo: "💡" },
    { name: "UNICAMP", country: "Brasil", logo: "🚀" },
    { name: "Universidad de los Andes", country: "Colombia", logo: "🏔️" },
    { name: "Universidad Católica del Uruguay", country: "Uruguay", logo: "📖" }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedUniversities = [...universities, ...universities];

  return (
    <section id="university-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Confiado por estudiantes en 500+ universidades
        </h2>
        <div className="university-slider">
          <div className="university-track">
            {duplicatedUniversities.map((university, index) => (
              <div key={`${university.name}-${index}`} className="university-logo">
                <div className="flex flex-col items-center gap-2">
                  <div className="text-3xl">{university.logo}</div>
                  <div className="text-center">
                    <div className="text-xs font-semibold text-slate-200 leading-tight">
                      {university.name.length > 30 
                        ? university.name.substring(0, 30) + "..."
                        : university.name
                      }
                    </div>
                    <div className="text-xs text-blue-400 mt-1">
                      {university.country}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-8 mt-12 text-slate-400">
          <div className="flex items-center gap-2">
            <div className="text-blue-400 text-lg">👥</div>
            <span className="text-sm">+50,000 estudiantes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-emerald-400 text-lg">📈</div>
            <span className="text-sm">95% mejora en calificaciones</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-amber-400 text-lg">⭐</div>
            <span className="text-sm">4.9/5 valoración</span>
          </div>
        </div>
      </div>
    </section>
  );
};
