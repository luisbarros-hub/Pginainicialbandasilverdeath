import { Music, ExternalLink } from 'lucide-react';

const songs = [
  {
    title: 'Venomous Apocalypse',
    album: 'Serpent Throne',
    duration: '5:47',
    spotify: '#',
    youtube: '#',
  },
  {
    title: 'Steel and Venom',
    album: 'Serpent Throne',
    duration: '4:23',
    spotify: '#',
    youtube: '#',
  },
  {
    title: 'Death\'s Silver Embrace',
    album: 'Forged in Darkness',
    duration: '6:12',
    spotify: '#',
    youtube: '#',
  },
  {
    title: 'Scales of Fury',
    album: 'Forged in Darkness',
    duration: '5:01',
    spotify: '#',
    youtube: '#',
  },
];

export function MusicSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-center mb-16"
          style={{
            textShadow: '0 0 20px #B00000, 0 0 40px #B00000',
            color: '#C0C0C0',
          }}
        >
          Músicas
        </h2>
        
        <div className="space-y-4">
          {songs.map((song, index) => (
            <div
              key={index}
              className="group relative bg-black border-2 border-[#B00000] p-6 transition-all duration-300 hover:border-[#ff0000] hover:shadow-[0_0_30px_rgba(176,0,0,0.5)]"
              style={{
                clipPath: 'polygon(0 0, 98% 0, 100% 100%, 2% 100%)',
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#B00000] flex items-center justify-center" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl text-white group-hover:text-[#B00000] transition-colors">
                      {song.title}
                    </h3>
                    <p className="text-sm text-[#C0C0C0]">{song.album} • {song.duration}</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={song.spotify}
                    className="px-6 py-2 bg-[#1DB954] text-white uppercase text-sm tracking-wider transition-all duration-300 hover:bg-[#1ed760] hover:scale-105 flex items-center gap-2"
                  >
                    Spotify
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  
                  <a
                    href={song.youtube}
                    className="px-6 py-2 bg-[#FF0000] text-white uppercase text-sm tracking-wider transition-all duration-300 hover:bg-[#ff3333] hover:scale-105 flex items-center gap-2"
                  >
                    YouTube
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
