export default function Features() {
  const features = [
    {
      title: "9-Foot Ceilings",
      description: "Soaring smooth drywall ceilings create an open, airy atmosphere throughout your suite.",
      icon: "⬆️"
    },
    {
      title: "Extensive Soundproofing",
      description: "Advanced sound insulation throughout ensures your home remains a peaceful, private retreat.",
      icon: "🔇"
    },
    {
      title: "Private Balconies",
      description: "Glass-railed balconies with stunning views of the city, parks, or countryside.",
      icon: "🏞️"
    },
    {
      title: "European Design",
      description: "Luxurious finishes including thick quartz countertops and sleek contemporary cabinetry.",
      icon: "✨"
    },
    {
      title: "Spa-Like Ensuites",
      description: "Walk-in glass showers designed for comfort and relaxation.",
      icon: "🚿"
    },
    {
      title: "Secure Access",
      description: "FOB security entrances and card access for your peace of mind.",
      icon: "🔐"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1D] mb-4 text-center">
          Luxury Features
        </h2>
        <p className="text-xl text-[#1D1D1D]/70 text-center mb-16 max-w-2xl mx-auto">
          Experience the perfect blend of European sophistication and Canadian practicality
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[#A8DADC]/20"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-[#1D1D1D] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#1D1D1D]/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
