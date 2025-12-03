import { ExternalLink, Code } from 'lucide-react';
import fcfsUrl from '/public/fcfs.png';
import ecomUrl from '/public/ecom.png';
import cardsUrl from '/public/cards.png';

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "CPU Scheduling",
            image: "/public/fcfs.png",
            description: "FCFS, SJF & Priority Scheduling Algorithms",
            link: "https://cpu-scheduling-fcfs.vercel.app/"
        },
        {
            id: 3,
            title: "Ecommerce App",
            image: "/public/ecom.png",
            description: "Application Development Midterm Project",
            link: "https://apps-dev-midterm-proj.vercel.app/"
        },
        {
            id: 4,
            title: "Product Cards",
            image: "/public/cards.png",
            description: "Application Development Practice Activity",
            link: "https://product-card-apps-dev.vercel.app/"
        }
    ];

    const imgMap = {
        1: fcfsUrl,
        3: ecomUrl,
        4: cardsUrl,
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                <div className="relative bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl p-8 lg:p-12 transition-colors duration-300">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
                            <Code className="text-cyan-600 dark:text-cyan-400" size={24} />
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                            My Projects
                        </h2>
                    </div>
                    <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4"></div>
                    <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl">
                        A collection of my recent work showcasing my skills in web development and software engineering.
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                        
                        <div className="relative aspect-square bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-500 group-hover:scale-[1.02]">
                            {/* Image */}
                            <div className="relative w-full h-full">
                                {imgMap[project.id] ? (
                                    <img
                                        src={imgMap[project.id]}
                                        alt={project.title}
                                        className="w-full h-full object-cover brightness-75 transition-all duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                                        <Code className="text-slate-400 dark:text-slate-700" size={64} />
                                    </div>
                                )}
                                
                                {/* Subtle bottom gradient for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent dark:from-slate-900/70 dark:via-slate-900/20"></div>
                                
                                {/* Content overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                                    <div className="transform translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl lg:text-2xl font-bold text-white dark:text-cyan-400 group-hover:text-cyan-300 dark:group-hover:text-cyan-300 transition-colors drop-shadow-lg">
                                                {project.title}
                                            </h3>
                                            <div className="p-2 bg-white/20 dark:bg-cyan-500/20 rounded-lg border border-white/30 dark:border-cyan-500/30 group-hover:bg-white/30 dark:group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all duration-300">
                                                <ExternalLink className="text-white dark:text-cyan-400" size={18} />
                                            </div>
                                        </div>
                                        <p className="text-slate-100 dark:text-slate-300 text-sm lg:text-base leading-relaxed drop-shadow-md">
                                            {project.description}
                                        </p>
                                        
                                        {/* Decorative line */}
                                        <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>

                                {/* Hover effect border */}
                                <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/30 rounded-2xl transition-all duration-500"></div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
