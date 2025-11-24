import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MusicSection } from './components/MusicSection';
import { VideosSection } from './components/VideosSection';
import { TourSection } from './components/TourSection';
import { MerchSection } from './components/MerchSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <VideosSection />
      <TourSection />
      <MerchSection />
      <Footer />
    </div>
  );
}
