export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <span>©</span>
            <span>{currentYear}</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Nahoyaax</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span>Made using</span>
            <span className="text-cyan-600 dark:text-cyan-400">React</span>
            <span>+</span>
            <span className="text-blue-600 dark:text-blue-400">Vite</span>
            <span>+</span>
            <span className="text-cyan-600 dark:text-cyan-300">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

