import { Facebook, Instagram, Youtube, Twitter, Mail } from 'lucide-react';
import logoImage from 'figma:asset/22c50847552cde674450c806ee2ba4c49820b891.png';
import snakeImage from 'figma:asset/386da8066c766ef7e0862648aaa356324523b48f.png';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-[#B00000] py-16 px-4 overflow-hidden">
      {/* Snake Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img 
          src={snakeImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <img 
              src={logoImage} 
              alt="Silver Death" 
              className="w-32 mx-auto md:mx-0 mb-4 opacity-80"
            />
            <p className="text-[#C0C0C0] text-sm">
              Metal extremo forjado nas trevas. Desde 2015 destruindo palcos ao redor do mundo.
            </p>
          </div>
          
          {/* Links */}
          <div className="text-center">
            <h3 className="text-xl mb-4 text-[#C0C0C0]">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-[#B00000] transition-colors">Música</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#B00000] transition-colors">Shows</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#B00000] transition-colors">Merch</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#B00000] transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-xl mb-4 text-[#C0C0C0]">Redes Sociais</h3>
            <div className="flex gap-4 justify-center md:justify-end">
              <a 
                href="#" 
                className="w-10 h-10 bg-[#B00000] flex items-center justify-center transition-all duration-300 hover:bg-[#ff0000] hover:scale-110"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                  boxShadow: '0 0 15px rgba(176, 0, 0, 0.5)',
                }}
              >
                <Facebook className="w-5 h-5" />
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 bg-[#B00000] flex items-center justify-center transition-all duration-300 hover:bg-[#ff0000] hover:scale-110"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                  boxShadow: '0 0 15px rgba(176, 0, 0, 0.5)',
                }}
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 bg-[#B00000] flex items-center justify-center transition-all duration-300 hover:bg-[#ff0000] hover:scale-110"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                  boxShadow: '0 0 15px rgba(176, 0, 0, 0.5)',
                }}
              >
                <Youtube className="w-5 h-5" />
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 bg-[#B00000] flex items-center justify-center transition-all duration-300 hover:bg-[#ff0000] hover:scale-110"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                  boxShadow: '0 0 15px rgba(176, 0, 0, 0.5)',
                }}
              >
                <Twitter className="w-5 h-5" />
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 bg-[#B00000] flex items-center justify-center transition-all duration-300 hover:bg-[#ff0000] hover:scale-110"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                  boxShadow: '0 0 15px rgba(176, 0, 0, 0.5)',
                }}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#B00000] to-transparent mb-8" />
        
        {/* Copyright */}
        <div className="text-center text-[#666666] text-sm">
          <p>© 2025 Silver Death. Todos os direitos reservados.</p>
          <p className="mt-2 text-[#C0C0C0]">
            "A morte não é o fim, é apenas o começo da escuridão eterna"
          </p>
        </div>
      </div>
    </footer>
  );
}
