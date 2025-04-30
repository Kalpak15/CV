// import { useState, useEffect, useRef } from 'react';

// function Projects() {
//   const [activeProject, setActiveProject] = useState(null);
//   const sectionRef = useRef(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('fade-in');
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );
    
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
    
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Dashboard",
//       description: "A complete admin dashboard for e-commerce stores with analytics and inventory management.",
//       tech: ["React", "Node.js", "MongoDB", "Chart.js"],
//       image: "/api/placeholder/600/400",
//       demoUrl: "#",
//       githubUrl: "#"
//     },
//     {
//       id: 2,
//       title: "Social Media App",
//       description: "A full-stack social media platform with real-time messaging and post functionality.",
//       tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
//       image: "/api/placeholder/600/400",
//       demoUrl: "#",
//       githubUrl: "#"
//     },
//     {
//       id: 3,
//       title: "Task Management System",
//       description: "A collaborative project management tool with drag-and-drop task boards and team features.",
//       tech: ["React", "Express", "MongoDB", "Socket.io"],
//       image: "/api/placeholder/600/400",
//       demoUrl: "#",
//       githubUrl: "#"
//     },
//   ];

//   return (
//     <section id="projects" className="py-24 bg-gray-900" ref={sectionRef}>
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-16 text-center">
//           <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">Featured Projects</span>
//         </h2>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div 
//               key={project.id}
//               className="relative group project-card"
//               onMouseEnter={() => setActiveProject(project.id)}
//               onMouseLeave={() => setActiveProject(null)}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="h-64 rounded-xl overflow-hidden">
//                 <img 
//                   src={project.image} 
//                   alt={project.title} 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//               </div>
              
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-xl">
//                 <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                 <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech) => (
//                     <span key={tech} className="px-2 py-1 bg-gray-800/80 text-xs text-gray-300 rounded-full">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex gap-4">
//                   <a 
//                     href={project.demoUrl} 
//                     className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-sm text-white font-medium rounded-full hover:shadow-lg transition duration-300"
//                   >
//                     Live Demo
//                   </a>
//                   <a 
//                     href={project.githubUrl} 
//                     className="px-4 py-2 border border-white/30 text-sm text-white font-medium rounded-full hover:bg-white/10 transition duration-300"
//                   >
//                     GitHub
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="text-center mt-16">
//           <a 
//             href="#" 
//             className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 transform hover:-translate-y-1"
//           >
//             View All Projects
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;



import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, ChevronRight, Code } from 'lucide-react';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  
  useEffect(() => {
    // Reveal animation for the section
    setTimeout(() => {
      setShowButton(true);
    }, 1800);
    
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const speed = 0.05 + (index * 0.01);
          const yPos = scrollPosition * speed;
          card.style.transform = `translateY(-${yPos}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A complete admin dashboard for e-commerce stores with analytics and inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Social Media App",
      description: "A full-stack social media platform with real-time messaging and post functionality.",
      tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A collaborative project management tool with drag-and-drop task boards and team features.",
      tech: ["React", "Express", "MongoDB", "Socket.io"],
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      githubUrl: "#"
    },
  ];

  // Animation states with CSS classes and JS
  const handleCardEnter = (id, cardIndex) => {
    setActiveProject(id);
    const card = cardsRef.current[cardIndex];
    if (card) {
      card.classList.add('card-active');
      const techBadges = card.querySelectorAll('.tech-badge');
      techBadges.forEach((badge, i) => {
        setTimeout(() => {
          badge.classList.add('badge-visible');
        }, i * 50);
      });
    }
  };

  const handleCardLeave = (cardIndex) => {
    setActiveProject(null);
    const card = cardsRef.current[cardIndex];
    if (card) {
      card.classList.remove('card-active');
      const techBadges = card.querySelectorAll('.tech-badge');
      techBadges.forEach((badge) => {
        badge.classList.remove('badge-visible');
      });
    }
  };

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden relative" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-700/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-5xl font-bold mb-20 text-center relative z-10 opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationDuration: '0.8s', animationFillMode: 'forwards'}}>
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Featured Projects
          </span>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 transform scale-0 animate-scale-in" style={{animationDelay: '0.7s', animationDuration: '0.5s', animationFillMode: 'forwards'}}></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="relative group cursor-pointer opacity-0 animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`, animationDuration: '0.7s', animationFillMode: 'forwards'}}
              ref={el => cardsRef.current[index] = el}
              onMouseEnter={() => handleCardEnter(project.id, index)}
              onMouseLeave={() => handleCardLeave(index)}
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 blur-sm transition-opacity duration-300 glow-effect"></div>
              
              <div className="relative h-80 rounded-xl overflow-hidden bg-gray-800 border border-gray-700 shadow-xl shadow-purple-900/10 transform transition-all duration-500 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 transition-all duration-300 project-title">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent flex flex-col justify-end p-6 rounded-xl backdrop-blur-sm opacity-0 transition-opacity duration-300 project-overlay">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-gray-800/80 text-xs font-medium text-gray-300 rounded-full border border-gray-700/50 backdrop-blur-sm tech-badge opacity-0 transform scale-0 transition-all duration-300"
                        style={{transitionDelay: `${i * 0.05}s`}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.demoUrl}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-sm text-white font-medium rounded-full flex items-center transform transition-transform duration-300 hover:scale-105 active:scale-95"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="px-4 py-2 border border-white/30 text-sm text-white font-medium rounded-full flex items-center backdrop-blur-sm hover:bg-white/10 transform transition-transform duration-300 hover:scale-105 active:scale-95"
                    >
                      <Code className="w-4 h-4 mr-1" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          {showButton && (
            <a 
              href="#"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full relative overflow-hidden group opacity-0 animate-bounce-in"
              style={{animationDelay: '1.2s', animationDuration: '0.5s', animationFillMode: 'forwards'}}
            >
              <span className="relative z-10 flex items-center">
                View All Projects
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute -inset-1 rounded-full animate-pulse-ring opacity-0 group-hover:opacity-70"></span>
            </a>
          )}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.7; }
          70% { transform: scale(1.1); opacity: 0; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        
        .animate-fade-in {
          animation-name: fade-in;
        }
        
        .animate-scale-in {
          animation-name: scale-in;
        }
        
        .animate-slide-up {
          animation-name: slide-up;
        }
        
        .animate-bounce-in {
          animation-name: bounce-in;
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 1.5s cubic-bezier(0.24, 0, 0.38, 1) infinite;
        }
        
        .card-active .glow-effect {
          opacity: 0.6;
        }
        
        .card-active .project-overlay {
          opacity: 1;
        }
        
        .card-active .project-title {
          color: transparent;
          background-clip: text;
          background-image: linear-gradient(to right, var(--tw-gradient-stops));
          --tw-gradient-from: #a855f7;
          --tw-gradient-to: #3b82f6;
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        
        .badge-visible {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
      `}</style>
    </section>
  );
}

export default Projects;