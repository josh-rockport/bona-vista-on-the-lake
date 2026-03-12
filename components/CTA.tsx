'use client';

export default function CTA() {
  return (
    <section className="py-24 md:py-32 px-4 bg-gradient-to-br from-[#A8DADC] via-[#E9C9B1]/30 to-[#F8F9FA]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1D] mb-6">
          Discover Your Perfect Suite
        </h2>
        <p className="text-xl md:text-2xl text-[#1D1D1D]/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Explore floor plans, amenities, and schedule your personal tour of Bonavista On The Lake
        </p>
        
        <a
          href="https://rockportgroup.ca/residential/bonavista-on-the-lake"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#E63946] hover:bg-[#E63946]/90 text-white font-bold text-lg md:text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'cta_click', {
                event_category: 'engagement',
                event_label: 'View Full Property Details'
              });
            }
          }}
        >
          View Full Property Details
        </a>
        
        <p className="text-sm text-[#1D1D1D]/60 mt-8">
          1 Bedrooms starting at $1,600/month
        </p>
      </div>
    </section>
  );
}
