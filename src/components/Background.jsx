export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'grid-move 20s linear infinite'
        }}
      ></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-400/10 dark:bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-50/30 dark:via-slate-900/50 to-slate-100/50 dark:to-slate-950"></div>
    </div>
  );
}