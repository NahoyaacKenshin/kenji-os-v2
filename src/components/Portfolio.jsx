import fcfsUrl from '/public/fcfs.png';
import ecomUrl from '/public/ecom.png';
import cardsUrl from '/public/cards.png';

export default function Portfolio() {

    const projects = [
        {
            id: 1,
            title: "CPU Scheduling",
            image: "/public/fcfs.png",
            description: "First Come First Serve",
            link: "https://cpu-scheduling-fcfs.vercel.app/"
        },
        {
            id: 2,
            title: "Project 2",
            image: "/path/to/image2.jpg",
            description: "Project description",
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
            description: "Practice Activity",
            link: "https://product-card-apps-dev.vercel.app/"
        }
    ];

    const imgMap = {
        fcfs: fcfsUrl,
        ecom: ecomUrl,
        cards: cardsUrl,
    };


    return (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.3)] border border-cyan-500/20 p-8">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                My Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        className="aspect-square bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all cursor-pointer border border-cyan-500/20 hover:border-cyan-400/50 hover:scale-105 group overflow-hidden block"
                    >
                        {/* Image */}
                        <div className="relative w-full h-full">
                            <img
                                src={imgMap[project.id] || project.image}
                                alt={project.title}
                                className="w-full h-full object-cover brightness-75"

                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                                <h3 className="text-cyan-400 font-mono font-semibold text-lg mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm text-center">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

