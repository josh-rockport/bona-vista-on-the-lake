export default function Location() {
  const locations = [
    {
      title: "Parks",
      distance: "Just downstairs",
      description: "Many parks in the area perfect for morning walks and outdoor relaxation.",
      icon: "🌳"
    },
    {
      title: "Schools",
      distance: "1 km away",
      description: "Perfect for families with young children and grandchildren visiting.",
      icon: "🏫"
    },
    {
      title: "Shopping",
      distance: "2 km away",
      description: "Easy access to groceries, pharmacies, bakeries, coffee shops, and much more.",
      icon: "🛍️"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1D] mb-4 text-center">
          In The Neighbourhood
        </h2>
        <p className="text-xl text-[#1D1D1D]/70 text-center mb-16 max-w-2xl mx-auto">
          Everything you need is just moments away from your doorstep
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-lg bg-[#F8F9FA] hover:bg-[#A8DADC]/10 transition-colors duration-300"
            >
              <div className="text-6xl mb-4">{location.icon}</div>
              <h3 className="text-2xl font-bold text-[#1D1D1D] mb-2">
                {location.title}
              </h3>
              <p className="text-[#E63946] font-semibold mb-3 text-lg">
                {location.distance}
              </p>
              <p className="text-[#1D1D1D]/70 leading-relaxed">
                {location.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
