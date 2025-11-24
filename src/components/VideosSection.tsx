import { Play } from 'lucide-react';
import snakeImage from 'figma:asset/386da8066c766ef7e0862648aaa356324523b48f.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

const videos = [
  {
    title: 'Venomous Apocalypse (Official Music Video)',
    views: '2.3M',
    thumbnail: 'metal concert stage',
  },
  {
    title: 'Death\'s Silver Embrace (Live at Bloodfest)',
    views: '1.8M',
    thumbnail: 'metal band performance',
  },
  {
    title: 'Behind the Serpent - Documentary',
    views: '956K',
    thumbnail: 'dark studio recording',
  },
];

export function VideosSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Snake Background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 opacity-5 pointer-events-none">
        <img 
          src={snakeImage} 
          alt="" 
          className="w-full h-auto"
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 
          className="text-center mb-16"
          style={{
            textShadow: '0 0 20px #B00000, 0 0 40px #B00000',
            color: '#C0C0C0',
          }}
        >
          Vídeos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative bg-black border-2 border-[#B00000] overflow-hidden transition-all duration-300 hover:border-[#ff0000] hover:shadow-[0_0_40px_rgba(176,0,0,0.6)] hover:scale-105"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)',
              }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-black/50 overflow-hidden">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1?w=600&h=400`}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#B00000] flex items-center justify-center transition-all duration-300 group-hover:bg-[#ff0000] group-hover:scale-110" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', boxShadow: '0 0 30px #B00000' }}>
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg mb-2 group-hover:text-[#B00000] transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-[#C0C0C0]">{video.views} visualizações</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
