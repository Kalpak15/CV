
import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, ChevronRight, Code, ChevronUp } from 'lucide-react';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const particlesRef = useRef(null);
  
  // Generate particles - modified to match About component behavior
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = particlesRef.current;
      if (!particlesContainer) return;
      
      // Clear existing particles
      particlesContainer.innerHTML = '';
      
      // Create particles
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.3;
        
        // Random animation duration
        // Using longer durations to match the About component's slower animation
        const duration = Math.random() * 20 + 10;
        
        // Random animation delay
        const delay = Math.random() * 5;
        
        // Set styles
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = opacity;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
      }
    };
    
    createParticles();
    
    // Regenerate particles on resize
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  // Initial animations
  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
    
    // Track mouse position for the custom cursor
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };
    
    const handleMouseLeave = () => {
      setCursorVisible(false);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Parallax effect - same as About component
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      if (titleRef.current) {
        titleRef.current.style.transform = `translate3d(${x * 15}px, ${y * 15}px, 0)`;
      }
      
      // Apply parallax effect to cards too
      cardsRef.current.forEach((card, index) => {
        if (card) {
          // Different depths for each card for a layered effect
          const depth = 10 - (index % 3) * 3;
          card.style.transform = `translate3d(${x * depth * -1}px, ${y * depth * -1}px, 0) rotateY(${x * 2}deg) rotateX(${y * -2}deg)`;
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          setShowButton(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
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
    {
      id: 4,
      title: "Resume Analyzer",
      description: "An intelligent tool that compares resumes against job requirements, highlights missing skills, and recommends learning resources to enhance applicant profiles. Built to assist HRs in filtering and evaluating candidates efficiently.",
      tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
      image: "assets/resume.svg",
      demoUrl: "https://github.com/Kalpak15/CarrierNavigator.git",
      githubUrl: "https://github.com/Kalpak15/CarrierNavigator.git"
    }    
  ];

  // Get initial projects or all projects when "View All" is clicked
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  // Improved animation states with CSS classes and JS
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
    <section 
      id="projects" 
      className="py-32 min-h-screen bg-black relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Custom cursor - same as About */}
      <div 
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: cursorVisible ? 1 : 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)'
        }}
      ></div>
      
      {/* Floating particles - same as About */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden"></div>
      
      {/* Animated background - same as About */}
      <div className="absolute inset-0 w-full h-full">
        <div className="animate-blurFloat absolute top-1/4 -left-10 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="animate-blurFloat animation-delay-2000 absolute -bottom-24 -right-10 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="animate-blurFloat animation-delay-4000 absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        {/* Animated grid - same as About */}
        <div className="absolute inset-0 grid-bg"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={titleRef}
          className={`text-5xl font-bold mb-16 text-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text relative inline-block">
            Personal Projects
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 animate-line-grow"></span>
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`relative group transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: `${500 + (index * 150)}ms`,
                perspective: '1000px'
              }}
              ref={el => cardsRef.current[index] = el}
              onMouseEnter={() => handleCardEnter(project.id, index)}
              onMouseLeave={() => handleCardLeave(index)}
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 blur-sm transition-opacity duration-300 glow-effect"></div>
              
              <div className="relative h-80 rounded-xl overflow-hidden bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 shadow-xl shadow-purple-900/10 transform transition-all duration-500 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-sm text-white font-medium rounded-full flex items-center transform transition-transform duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="relative z-10 flex items-center">
                        <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="absolute top-0 left-0 w-full h-full bg-white/30 skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
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
              className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 transform hover:-translate-y-1 relative overflow-hidden group transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
              style={{transitionDelay: '1100ms'}}
            >
              <span className="relative z-10 flex items-center">
                {showAllProjects ? (
                  <>
                    Show Less
                    <ChevronUp className="w-5 h-5 ml-1" />
                  </>
                ) : (
                  <>
                    View All Projects
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-white/30 skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </button>
          )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      {/* <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1300ms' }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center backdrop-blur-sm relative overflow-hidden group cursor-pointer">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">Scroll Down</span>
        </div>
        <ChevronUp className="w-6 h-6 text-white/70 mt-2 animate-pulse" />
      </div> */}
      
      {/* Custom CSS - modified to match About section */}
      <style jsx>{`
        .grid-bg {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 80%);
        }
        
        @keyframes blurFloat {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-5%, 5%) scale(1.1); }
          66% { transform: translate(5%, -5%) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        
        .animate-blurFloat {
          animation: blurFloat 15s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes line-grow {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: left; }
          50.1% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
        
        .animate-line-grow {
          animation: line-grow 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .particle {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          opacity: 0.3;
          animation: float-up 15s linear infinite;
        }
        
        /* Modified float-up animation to match About component */
        @keyframes float-up {
          0% { transform: translateY(100vh) translateX(0) scale(1); }
          50% { transform: translateY(50vh) translateX(20px) scale(1.2); }
          100% { transform: translateY(0) translateX(0) scale(0.8); opacity: 0; }
        }
        
        .card-active .glow-effect {
          opacity: 0.4;
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