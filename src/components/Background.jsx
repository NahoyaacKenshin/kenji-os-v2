export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
    </div>
  );
}