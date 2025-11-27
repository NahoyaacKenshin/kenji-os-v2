import { Facebook, Github } from 'lucide-react';
import logoUrl from '/public/pfp.png';

export default function Bio() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.3)] border border-cyan-500/20 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
            Kenji Agustine Caayohan
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            I'm an Undergraduate Student persuing a degree in Bachelor of Science in Information Technology.
          </p>
          
          <div className="mb-4">
            <p className="text-sm text-cyan-400/70 mb-3 font-mono">kenjicaayohan55@gmail.com</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/kenken.caayohan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href="https://github.com/NahoyaacKenshin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all hover:scale-110">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-full h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            <img
              src={logoUrl || "/public/pfp.png"}
              alt="Kenji Agustine Caayohan"
              className="w-full h-full object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}