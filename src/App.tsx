import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Roadmap } from './components/Roadmap';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AmbientBackground } from './components/AmbientBackground';
import { CustomCursor } from './components/CustomCursor';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#080A10] text-[#F4F6FC] selection:bg-[#5B8CFF]/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Interactive and ambient lighting & grid backdrop */}
      <AmbientBackground />

      {/* Non-intrusive cursor accent for desktop */}
      <CustomCursor />

      {/* Floating navigation header */}
      <Navbar />

      {/* Main Page Content Flow */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <StatsStrip />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Roadmap />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
