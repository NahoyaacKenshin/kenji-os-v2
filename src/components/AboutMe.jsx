export default function AboutMe() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.3)] border border-cyan-500/20 p-8">
      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8">
        About Me
      </h2>

      {/* Personal Info */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Personal Information</h3>
        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
          <div className="flex gap-2">
            <span className="text-cyan-400/70">Full Name:</span>
            <span>Kenji Agustine O. Caayohan</span>
          </div>
          <div className="flex gap-2">
            <span className="text-cyan-400/70">Age:</span>
            <span>20 years old</span>
          </div>
          <div className="flex gap-2">
            <span className="text-cyan-400/70">Location:</span>
            <span>Cordova, Cebu</span>
          </div>
          <div className="flex gap-2">
            <span className="text-cyan-400/70">Phone:</span>
            <span>+63 926 474 7970</span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Skills</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-700/30 border border-cyan-500/20 rounded-lg p-4">
            <h4 className="text-cyan-300 font-semibold mb-3">Programming Languages</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded text-cyan-300 text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded text-cyan-300 text-sm">PHP</span>
              <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded text-cyan-300 text-sm">C#</span>
            </div>
          </div>
          <div className="bg-slate-700/30 border border-cyan-500/20 rounded-lg p-4">
            <h4 className="text-cyan-300 font-semibold mb-3">Frameworks & Tools</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded text-cyan-300 text-sm">React</span>
              <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded text-cyan-300 text-sm">Next.js</span>
              <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded text-cyan-300 text-sm">Wordpress</span>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Education</h3>
        <div className="space-y-4">
          <div className="bg-slate-700/30 border border-cyan-500/20 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-cyan-300 font-semibold">Bachelor of Science in Information Technology</h4>
              <span className="text-cyan-400/70 text-sm">Ongoing</span>
            </div>
            <p className="text-gray-400">Cordova Public College</p>
            <p className="text-gray-300 mt-2">3rd Year</p>
          </div>
          <div className="bg-slate-700/30 border border-cyan-500/20 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-cyan-300 font-semibold">TVL - ICT Computer Systems Servicing NCII</h4>
              <span className="text-cyan-400/70 text-sm">2022 - 2023</span>
            </div>
            <p className="text-gray-400">Cordova Natioanal High School</p>
            <p className="text-gray-300 mt-2">With Honors</p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Certifications</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-700/30 border border-cyan-500/20 rounded-lg p-4">
            <h4 className="text-cyan-300 font-semibold mb-2">Creative Web Design</h4>
            <p className="text-gray-400 text-sm mb-1">TESDA</p>
            <p className="text-cyan-400/70 text-sm">Issued: </p>
          </div>
          <div className="bg-slate-700/30 border border-cyan-500/20 rounded-lg p-4 opacity-0 hidden md:block">
            <h4 className="text-cyan-300 font-semibold mb-2">Google Cloud Professional</h4>
            <p className="text-gray-400 text-sm mb-1">Google Cloud Platform</p>
            <p className="text-cyan-400/70 text-sm">Issued: March 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}