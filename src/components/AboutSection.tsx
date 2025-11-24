import snakeImage from 'figma:asset/386da8066c766ef7e0862648aaa356324523b48f.png';

export function AboutSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Metal Texture Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1666392420593-5d04ba140113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbWV0YWwlMjB0ZXh0dXJlfGVufDF8fHx8MTc2MzU4NDYzMHww&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Snake Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 opacity-5">
        <img 
          src={snakeImage} 
          alt="" 
          className="w-full h-auto"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 
          className="text-center mb-12"
          style={{
            textShadow: '0 0 20px #B00000, 0 0 40px #B00000',
            color: '#C0C0C0',
          }}
        >
          Sobre a Banda
        </h2>
        
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Nascida das cinzas da cena underground, <span className="text-[#B00000]">Silver Death</span> emerge como uma força 
            implacável de metal extremo. Combinando riffs devastadores com letras que exploram os aspectos mais sombrios 
            da existência humana, a banda conquistou sua legião de seguidores através de apresentações viscerais e 
            álbuns que redefinem os limites do gênero.
          </p>
          
          <p className="text-lg leading-relaxed">
            Com <span className="text-[#C0C0C0]">três álbuns</span> aclamados pela crítica e turnês que deixaram rastros 
            de destruição por todo o continente, Silver Death não é apenas uma banda — é uma <span className="text-[#B00000]">declaração 
            de guerra</span> contra a mediocridade sonora.
          </p>
          
          <p className="text-lg leading-relaxed text-[#C0C0C0]">
            A cobra de prata, mascote da banda, simboliza a dualidade entre beleza letal e poder destrutivo — 
            a essência do som que define cada composição.
          </p>
        </div>
        
        {/* Divider */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#B00000]" />
          <div className="w-2 h-2 rotate-45 bg-[#B00000]" style={{ boxShadow: '0 0 10px #B00000' }} />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#B00000]" />
        </div>
      </div>
    </section>
  );
}
