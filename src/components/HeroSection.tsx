import { Play, Calendar } from 'lucide-react';
import logoImage from 'figma:asset/22c50847552cde674450c806ee2ba4c49820b891.png';
import snakeImage from 'figma:asset/386da8066c766ef7e0862648aaa356324523b48f.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Crowd */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1756978303719-57095d8bd250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGNvbmNlcnQlMjBjcm93ZHxlbnwxfHx8fDE3NjM1ODE0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          opacity: 0.15,
        }}
      />
      
      {/* Red Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
      <div className="absolute inset-0 bg-gradient-radial from-[#B00000]/20 via-transparent to-transparent" />
      
      {/* Snake Mascot - Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
        <img 
          src={snakeImage} 
          alt="Snake Mascot" 
          className="w-full h-full object-cover object-left"
          style={{
            filter: 'drop-shadow(0 0 60px #B00000)',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-12 animate-pulse-slow">
          <img 
            src={logoImage} 
            alt="Silver Death Logo" 
            className="mx-auto max-w-md w-full"
            style={{
              filter: 'drop-shadow(0 0 40px #B00000) drop-shadow(0 0 80px #B00000)',
            }}
          />
        </div>
        
        {/* Tagline */}
        <p className="text-[#C0C0C0] text-xl mb-12 tracking-widest">
          BRUTALITY FORGED IN SILVER
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-6 justify-center">
          <button 
            className="group relative px-8 py-4 bg-[#B00000] text-white uppercase tracking-wider transition-all duration-300 hover:bg-[#ff0000] hover:scale-105"
            style={{
              clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
              boxShadow: '0 0 30px #B00000, inset 0 0 20px rgba(0,0,0,0.5)',
            }}
          >
            <Play className="inline-block mr-2 w-5 h-5" />
            Ouça Agora
          </button>
          
          <button 
            className="group relative px-8 py-4 bg-transparent border-2 border-[#C0C0C0] text-[#C0C0C0] uppercase tracking-wider transition-all duration-300 hover:bg-[#C0C0C0] hover:text-black hover:scale-105"
            style={{
              clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
              boxShadow: '0 0 20px rgba(192, 192, 192, 0.3)',
            }}
          >
            <Calendar className="inline-block mr-2 w-5 h-5" />
            Próximos Shows
          </button>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
