import { useState } from 'react';
import Navigation from './components/Navigation';
import Bio from './components/Bio';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Background from './components/Background';
import '/src/global.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('bio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <Background />
      
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="animate-fade-in">
            {activeTab === 'bio' && <Bio />}
            {activeTab === 'about' && <AboutMe />}
            {activeTab === 'portfolio' && <Portfolio />}
          </div>
        </div>
      </main>
    </div>
  );
}