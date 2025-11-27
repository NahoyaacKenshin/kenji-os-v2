import { Menu, X } from 'lucide-react';

export default function Navigation({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-cyan-500/20 bg-slate-900/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="py-4">
            <img 
              src="/public/logo.png" 
              alt="Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Menu items */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => setActiveTab('bio')}
              className={`py-4 px-2 font-medium transition-all relative ${
                activeTab === 'bio' ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-300'
              }`}
            >
              BIO
              {activeTab === 'bio' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`py-4 px-2 font-medium transition-all relative ${
                activeTab === 'about' ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-300'
              }`}
            >
              ABOUT ME
              {activeTab === 'about' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`py-4 px-2 font-medium transition-all relative ${
                activeTab === 'portfolio' ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-300'
              }`}
            >
              PORTFOLIO
              {activeTab === 'portfolio' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20">
            <button
              onClick={() => { setActiveTab('bio'); setMobileMenuOpen(false); }}
              className={`block w-full text-left py-3 px-4 font-medium transition-all ${
                activeTab === 'bio' ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-400 hover:text-cyan-300 hover:bg-slate-800/50'
              }`}
            >
              BIO
            </button>
            <button
              onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }}
              className={`block w-full text-left py-3 px-4 font-medium transition-all ${
                activeTab === 'about' ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-400 hover:text-cyan-300 hover:bg-slate-800/50'
              }`}
            >
              ABOUT ME
            </button>
            <button
              onClick={() => { setActiveTab('portfolio'); setMobileMenuOpen(false); }}
              className={`block w-full text-left py-3 px-4 font-medium transition-all ${
                activeTab === 'portfolio' ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-400 hover:text-cyan-300 hover:bg-slate-800/50'
              }`}
            >
              PORTFOLIO
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}