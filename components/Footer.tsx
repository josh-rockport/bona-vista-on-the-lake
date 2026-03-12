import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1D] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bonavista On The Lake</h3>
            <p className="text-white/70 leading-relaxed">
              50+ Luxury Living Facility
              <br />
              European-inspired design meets Canadian quality
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://rockportgroup.ca/residential/bonavista-on-the-lake" 
                  className="text-white/70 hover:text-[#E63946] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Floor Plans & Amenities
                </a>
              </li>
              <li>
                <a 
                  href="https://rockportgroup.ca/residential" 
                  className="text-white/70 hover:text-[#E63946] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  All Properties
                </a>
              </li>
              <li>
                <a 
                  href="https://rockportgroup.ca" 
                  className="text-white/70 hover:text-[#E63946] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rockport Investment Group
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Managed By</h3>
            <p className="text-white/70 mb-3">Rockport Investment Group Inc.</p>
            <a 
              href="https://rockportgroup.ca" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <div className="text-white text-2xl font-bold">
                ROCKPORT
              </div>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Rockport Investment Group Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
