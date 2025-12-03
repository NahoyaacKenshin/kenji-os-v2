import { Facebook, Github, Mail } from 'lucide-react';
import pfpUrl from '/public/pfp.png';

export default function Bio() {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
      
      <div className="relative bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl overflow-hidden transition-colors duration-300">
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12 relative z-10">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-mono text-cyan-600/80 dark:text-cyan-400/70 tracking-wider uppercase">Welcome</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                  Kenji Agustine
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 dark:from-blue-300 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                  Caayohan
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl">
              I'm an <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Undergraduate Student</span> pursuing a degree in <span className="text-blue-600 dark:text-blue-400 font-semibold">Bachelor of Science in Information Technology</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <a 
                href="mailto:kenjicaayohan55@gmail.com"
                className="group/email flex items-center gap-3 px-6 py-3 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Mail size={18} className="text-cyan-600 dark:text-cyan-400 group-hover/email:scale-110 transition-transform" />
                <span className="text-sm font-mono text-slate-700 dark:text-slate-300 group-hover/email:text-cyan-600 dark:group-hover/email:text-cyan-300">kenjicaayohan55@gmail.com</span>
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-2">
              <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Connect with me:</span>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/kenken.caayohan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group/social p-3 bg-slate-50 dark:bg-slate-800/50 hover:bg-cyan-500/10 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500/50 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="group-hover/social:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://github.com/NahoyaacKenshin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group/social p-3 bg-slate-50 dark:bg-slate-800/50 hover:bg-cyan-500/10 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500/50 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                  aria-label="GitHub"
                >
                  <Github size={20} className="group-hover/social:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-md">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-cyan-500/30 rounded-2xl blur-2xl opacity-50"></div>
              
              <div className="relative bg-gradient-to-br from-slate-100/80 to-white/80 dark:from-slate-800/80 dark:to-slate-900/80 rounded-2xl p-2 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl overflow-hidden group/image transition-colors duration-300">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <img
                    src={pfpUrl || "/public/pfp.png"}
                    alt="Kenji Agustine Caayohan"
                    className="w-full h-full object-cover object-center group-hover/image:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100/60 dark:from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover/image:border-cyan-500/30 rounded-xl transition-all duration-500"></div>
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full opacity-60 group-hover/image:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full opacity-60 group-hover/image:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
