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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {activeTab === 'bio' && <Bio />}
        {activeTab === 'about' && <AboutMe />}
        {activeTab === 'portfolio' && <Portfolio />}
      </div>

      <Background />
    </div>
  );
}