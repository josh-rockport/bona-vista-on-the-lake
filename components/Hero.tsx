import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/1590-ext.png"
          alt="Bonavista On The Lake luxury apartment building exterior"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Bonavista On The Lake
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 mb-4 font-light">
          50+ Luxury Living Facility
        </p>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
          Where European elegance meets Canadian resilience. Built for cold winters and hot summers, 
          enhanced with luxurious design and finesse.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://rockportgroup.ca/residential/bonavista-on-the-lake"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E63946] hover:bg-[#E63946]/90 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View Full Property Details
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg 
          className="w-8 h-8 text-white/80" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
