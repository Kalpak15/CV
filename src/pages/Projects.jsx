
import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, ChevronRight, Code, ChevronUp } from 'lucide-react';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
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

  // Add more projects here as your portfolio grows
  const projects = [
    {
      id: 1,
      title: "Ride Buddy",
      description: "A full-stack website for a carpooling system enabling intercity travel. Users can book rides, share trips, and optimize travel costs.",
      tech: ["React.js", "Express.js", "MongoDB", "Railway(host)","GitHub"],
      image: "assets/carpool.jpg",
      demoUrl: "https://ridebuddy-production-v1.up.railway.app/",
      githubUrl: "https://github.com/Kalpak15/Carpooling_system.git"
    },
    {
      id: 2,
      title: "Data Download Duplication Alert System (DDAS)",
      description: "A full-stack website that prevents duplicate data downloads using file hashing and real-time alerts in multi-user environments.",
      tech: ["React.js", "Express.js", "MongoDB","Railway(host)","GitHub"],
      image: "assets/ddas.svg",
      demoUrl: "https://github.com/Kalpak15/DDAS.git",
      githubUrl: "https://github.com/Kalpak15/DDAS.git"
    },
    {
      id: 3,
      title: "Finverse – Financial Advisor",
      description: "An intelligent financial advisory platform that uses machine learning to deliver personalized insights, helping users make informed financial decisions.",
      tech: ["React", "Flask", "Python (ML)", "MongoDB", "HTML", "CSS", "GitHub"],
      image: "/assets/finverse.svg",
      demoUrl: "https://finverse-frontend.onrender.com/",
      githubUrl: "https://github.com/Kalpak15/FinVerse.git"
    },
    // Example additional projects (add your actual projects here)
    {
      id: 4,
      title: "Resume Analyzer",
      description: "An intelligent tool that compares resumes against job requirements, highlights missing skills, and recommends learning resources to enhance applicant profiles. Built to assist HRs in filtering and evaluating candidates efficiently.",
      tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
      image: "assets/resume.svg", // Replace with actual image path
      demoUrl: "https://github.com/Kalpak15/CarrierNavigator.git",
      githubUrl: "https://github.com/Kalpak15/CarrierNavigator.git"
    }    
  ];

  // Get initial projects (first 3) or all projects when "View All" is clicked
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

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

  const toggleProjectVisibility = () => {
    // Scroll to projects section when "Show Less" is clicked
    if (showAllProjects && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    setShowAllProjects(!showAllProjects);
    
    // Reset cardsRef array to accommodate the new number of cards
    cardsRef.current = [];
  };

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden relative" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-700/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-5xl font-bold mb-20 text-center relative z-10 opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationDuration: '0.8s', animationFillMode: 'forwards'}}>
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Personal Projects
          </span>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 transform scale-0 animate-scale-in" style={{animationDelay: '0.7s', animationDuration: '0.5s', animationFillMode: 'forwards'}}></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id}
              className="relative group cursor-pointer opacity-0 animate-slide-up"
              style={{
                animationDelay: `${index * 0.2}s`, 
                animationDuration: '0.7s', 
                animationFillMode: 'forwards'
              }}
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
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="px-4 py-2 border border-white/30 text-sm text-white font-medium rounded-full flex items-center backdrop-blur-sm hover:bg-white/10 transform transition-transform duration-300 hover:scale-105 active:scale-95"
                      target="_blank"
                      rel="noopener noreferrer"
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
            <button 
              onClick={toggleProjectVisibility}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full relative overflow-hidden group opacity-0 animate-bounce-in"
              style={{animationDelay: '1.2s', animationDuration: '0.5s', animationFillMode: 'forwards'}}
            >
              <span className="relative z-10 flex items-center">
                {showAllProjects ? (
                  <>
                    Show Less
                    <ChevronUp className="w-5 h-5 ml-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                ) : (
                  <>
                    View All Projects
                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute -inset-1 rounded-full animate-pulse-ring opacity-0 group-hover:opacity-70"></span>
            </button>
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