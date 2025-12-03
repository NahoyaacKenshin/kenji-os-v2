import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logoUrl from '/public/logo.png';
import darkLogoUrl from '/public/dark-logo.png';

export default function Navigation({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen }) {
  const { isDark, toggleTheme } = useTheme();
  const navItems = [
    { id: 'bio', label: 'BIO' },
    { id: 'about', label: 'ABOUT ME' },
    { id: 'portfolio', label: 'PORTFOLIO' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-slate-200/20 dark:shadow-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="py-4 group">
            <div className="relative">
              <img 
                src={isDark ? (logoUrl || "/public/logo.png") : (darkLogoUrl || "/public/dark-logo.png")}
                alt="Logo" 
                className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 blur-xl transition-all duration-300 rounded-lg"></div>
            </div>
          </div>
          
          {/* Desktop Menu items */}
          <div className="hidden md:flex gap-1 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative py-4 px-6 font-semibold text-sm tracking-wider transition-all duration-300 group ${
                  activeTab === item.id 
                    ? 'text-cyan-500 dark:text-cyan-400' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Active indicator */}
                {activeTab === item.id && (
                  <>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"></div>
                    <div className="absolute inset-0 bg-cyan-500/5 rounded-t-lg"></div>
                  </>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-800/30 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log('Toggle button clicked, current theme:', isDark ? 'dark' : 'light');
                toggleTheme();
              }}
              className="ml-2 p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle Button for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-cyan-500 dark:text-cyan-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              <span className="font-semibold text-sm tracking-wider">LEARN MORE</span>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-slate-200/50 dark:border-slate-800/50 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                className={`block w-full text-left py-3 px-4 font-semibold text-sm tracking-wider rounded-lg transition-all duration-300 ${
                  activeTab === item.id 
                    ? 'text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}