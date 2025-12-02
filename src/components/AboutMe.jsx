import { User, Code, GraduationCap, Award, MapPin, Phone, Calendar } from 'lucide-react';

export default function AboutMe() {
  const personalInfo = [
    { icon: User, label: 'Full Name', value: 'Kenji Agustine O. Caayohan' },
    { icon: Calendar, label: 'Age', value: '20 years old' },
    { icon: MapPin, label: 'Location', value: 'Cordova, Cebu' },
    { icon: Phone, label: 'Phone', value: '+63 926 474 7970' }
  ];

  const programmingLanguages = ['JavaScript', 'PHP', 'C#'];
  const frameworksTools = ['React', 'Next.js', 'Wordpress'];

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Cordova Public College',
      period: 'Ongoing',
      details: '3rd Year'
    },
    {
      degree: 'TVL - ICT Computer Systems Servicing NCII',
      institution: 'Cordova Natioanal High School',
      period: '2022 - 2023',
      details: 'With Honors'
    }
  ];

  const certifications = [
    {
      title: 'Creative Web Design',
      issuer: 'TESDA',
      issued: ''
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
        <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
              <User className="text-cyan-400" size={24} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4"></div>
          <p className="text-slate-300 text-lg sm:text-xl mt-6 max-w-3xl leading-relaxed">
            I'm a passionate and dedicated Information Technology student who thrives on turning ideas into reality through code. My enthusiasm for web development and software engineering drives me to continuously learn, innovate, and create meaningful digital experiences.
          </p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
        <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-cyan-400" size={20} />
            <h3 className="text-xl font-bold text-cyan-400">Personal Information</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {personalInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 hover:border-cyan-500/30 rounded-xl transition-all duration-300 group/item"
                >
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover/item:bg-cyan-500/20 transition-colors">
                    <Icon className="text-cyan-400" size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-cyan-400/70 font-medium mb-1 uppercase tracking-wider">{info.label}</p>
                    <p className="text-slate-200 font-medium">{info.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
        <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-cyan-400" size={20} />
            <h3 className="text-xl font-bold text-cyan-400">Skills</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <h4 className="text-cyan-300 font-semibold mb-4 flex items-center gap-2">
                <Code size={18} />
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                {programmingLanguages.map((lang, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg text-cyan-300 text-sm font-medium hover:scale-105 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300">
              <h4 className="text-cyan-300 font-semibold mb-4 flex items-center gap-2">
                <Code size={18} />
                Frameworks & Tools
              </h4>
              <div className="flex flex-wrap gap-3">
                {frameworksTools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg text-cyan-300 text-sm font-medium hover:scale-105 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
        <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-cyan-400" size={20} />
            <h3 className="text-xl font-bold text-cyan-400">Education</h3>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-slate-800/70 transition-all duration-300 group/edu"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                  <h4 className="text-cyan-300 font-semibold text-lg group-hover/edu:text-cyan-200 transition-colors">
                    {edu.degree}
                  </h4>
                  <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-cyan-300 text-sm font-medium whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-400 mb-2">{edu.institution}</p>
                <p className="text-slate-300 font-medium">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
        <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-cyan-400" size={20} />
            <h3 className="text-xl font-bold text-cyan-400">Certifications</h3>
          </div>
          <div className="grid gap-4 max-w-2xl">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-slate-800/70 transition-all duration-300 group/cert"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover/cert:bg-cyan-500/20 transition-colors">
                    <Award className="text-cyan-400" size={18} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-cyan-300 font-semibold mb-2 group-hover/cert:text-cyan-200 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-slate-400 text-sm mb-1">{cert.issuer}</p>
                    {cert.issued && (
                      <p className="text-cyan-400/70 text-sm">Issued: {cert.issued}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}