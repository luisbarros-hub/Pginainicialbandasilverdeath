import { MapPin, Calendar, Ticket } from 'lucide-react';

const shows = [
  {
    date: '15 DEZ 2025',
    city: 'São Paulo',
    venue: 'Espaço das Américas',
    status: 'available',
  },
  {
    date: '18 DEZ 2025',
    city: 'Rio de Janeiro',
    venue: 'Circo Voador',
    status: 'available',
  },
  {
    date: '22 DEZ 2025',
    city: 'Belo Horizonte',
    venue: 'Music Hall',
    status: 'available',
  },
  {
    date: '28 DEZ 2025',
    city: 'Curitiba',
    venue: 'Teatro Positivo',
    status: 'soldout',
  },
  {
    date: '05 JAN 2026',
    city: 'Porto Alegre',
    venue: 'Bar Opinião',
    status: 'available',
  },
];

export function TourSection() {
  return (
    <section className="relative py-24 px-4">
      {/* Red Texture Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #B00000 0px, #B00000 2px, transparent 2px, transparent 10px)',
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 
          className="text-center mb-4"
          style={{
            textShadow: '0 0 20px #B00000, 0 0 40px #B00000',
            color: '#C0C0C0',
          }}
        >
          Turnê 2025/2026
        </h2>
        
        <p className="text-center text-[#B00000] text-xl mb-16 tracking-widest uppercase">
          Serpent Throne Tour
        </p>
        
        <div className="space-y-3">
          {shows.map((show, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-r from-black via-[#0a0000] to-black border border-[#B00000] p-6 transition-all duration-300 hover:border-[#ff0000] hover:shadow-[0_0_30px_rgba(176,0,0,0.4)]"
              style={{
                clipPath: 'polygon(1% 0, 99% 0, 100% 50%, 99% 100%, 1% 100%, 0 50%)',
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-6 flex-1">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-[#B00000]" />
                    <span className="text-[#C0C0C0] tracking-wider min-w-[120px]">{show.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 flex-1">
                    <MapPin className="w-6 h-6 text-[#B00000]" />
                    <div>
                      <p className="text-white text-lg">{show.city}</p>
                      <p className="text-sm text-[#C0C0C0]">{show.venue}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  {show.status === 'available' ? (
                    <button className="px-8 py-3 bg-[#B00000] text-white uppercase tracking-wider transition-all duration-300 hover:bg-[#ff0000] hover:scale-105 flex items-center gap-2" style={{ boxShadow: '0 0 20px rgba(176, 0, 0, 0.5)' }}>
                      <Ticket className="w-5 h-5" />
                      Ingressos
                    </button>
                  ) : (
                    <div className="px-8 py-3 bg-[#333333] text-[#666666] uppercase tracking-wider cursor-not-allowed">
                      Esgotado
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
