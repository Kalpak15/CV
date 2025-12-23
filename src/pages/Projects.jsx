

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
      features: [
        // "Real-time ride matching and booking system",
        // "Secure payment integration and cost optimization",
        // "User authentication and profile management",
        // "Interactive maps for route planning",
        // "Rating and review system for drivers and passengers"
        "Developed Ride Buddy, a full-stack ride-sharing application using React for frontend, Express.js for backend, and MongoDB for database management.",
        "Implemented secure user authentication with JWT for signup, login, and session management.",
        "Built a profile management system for users and drivers with role-based functionalities.",
        "Created a ride creation and booking system, enabling drivers to post rides and users to search/book rides.",
        "Integrated UserPay payment gateway for seamless community membership transactions.",
        "Optimized MongoDB for efficient storage and retrieval of user data, ride details, and transaction records.",
        "Designed a responsive and intuitive UI with React to enhance user experience across devices."
      ],
      tech: ["React.js", "Express.js", "MongoDB","Cloudinary","GitHub"],
      image: "assets/carpool.jpg",
      demoUrl: "https://drive.google.com/file/d/1BmpxNQqiZ8ozP2Apft4YDueLkwT2HPup/view?usp=sharing",
      githubUrl: "https://github.com/Kalpak15/Ride-Buddy-Project",
    },
    {
      id: 2,
      title: "ZeroDup",
      description: "A full-stack website that prevents duplicate data downloads using file hashing and real-time alerts in multi-user environments.",
      features: [
        // "Advanced file hashing algorithms for duplicate detection",
        // "Real-time notification system for download alerts",
        // "Multi-user environment support with role management",
        // "Dashboard analytics for download patterns",
        // "Automated cleanup and storage optimization"
        "Developed DDAS (Data Download Duplication Alert System), a full-stack application using React, Express.js, and MongoDB to prevent redundant file downloads in collaborative team environments.",
        "Implemented advanced duplication detection that analyzes both file names and content to handle cases like same name different content, different name same content, and exact duplicates across file types (txt, excel, pdf, word, png, jpg).",
        "Created a team management system with features for creating and joining teams, role-based access control (only team creators can upload files), and an integrated chat functionality for team communication.",
        "Integrated a real-time alert system that notifies users when attempting to download a file already downloaded by another team member, offering cloud viewing options to avoid re-downloading.",
        "Ensured secure user authentication using JWT for signup, login, and session management, protecting user data and team privacy.",
        "Designed a responsive and intuitive user interface using React, ensuring a seamless experience across devices."
      ],
      tech: ["React.js", "Express.js", "MongoDB","Cloudinary","GitHub"],
      image: "assets/ddas.svg",
      demoUrl: "https://drive.google.com/file/d/1dpIlLp7qPr_UdhenwIAcXxGS6aBiBqmr/view?usp=sharing",
      githubUrl: "https://github.com/Kalpak15/ZeroDup"
    },
      {
    id: 3,
    title: "ImageFix",
    description: "An AI-powered image and video enhancement system that transforms low-resolution or blurred media into high-quality, sharp, and visually clear outputs using the BSRGAN deep learning model.",
    features: [
      "Developed an end-to-end enhancement pipeline using Express.js, React, MongoDB, and the BSRGAN model for restoring image and video quality.",
      "Implemented automated frame extraction, enhancement, and reconstruction for low-resolution video inputs, ensuring temporal consistency.",
      "Integrated preprocessing techniques to remove noise, correct blur, and enhance contrast for improved perceptual quality.",
      "Built a responsive and user-friendly web interface for uploading, previewing, and downloading enhanced images and videos.",
      "Optimized model performance with GPU acceleration, achieving average enhancement times of 1.2s per image and 1.6s per video frame."
    ],
    tech: ["Python", "Express.js", "React", "MongoDB", "BSRGAN (AI Model)"],
    image: "assets/imagefix.svg",
    demoUrl: "https://drive.google.com/file/d/1sFJ2lwMxQWnqD8vDYza-7DCAGMr8KfiX/view?usp=sharing",
    githubUrl: "https://github.com/Kalpak15/IMAGE_FIX"
    } ,
       
    {
      id: 4,
      title: "ResumeForge",
      description: "An intelligent tool that compares resumes against job requirements, highlights missing skills, and recommends learning resources to enhance applicant profiles.",
      features: [
        // "AI-powered resume parsing and skill extraction",
        // "Job requirement matching and gap analysis",
        // "Personalized learning resource recommendations",
        // "ATS optimization suggestions and scoring",
        // "Bulk resume processing for HR departments"
        "Developed resumeAnalyzer, a  web application with HTML, CSS, JavaScript frontend and Flask backend, powered by a RoBERTa-based ML model for resume analysis.",
        "Engineered semantic analysis to match resumes with job descriptions and skills, generating fit scores, identifying skill gaps, and recommending relevant courses.",
        "Built a dual-purpose platform for job seekers to receive tailored resume feedback and for HRs to rank candidate resumes based on job requirements.",
        "Leveraged RoBERTa NLP model for accurate text analysis, ensuring precise resume-job matching and actionable insights.",
        "Designed an intuitive, user-friendly interface for seamless input of resumes and job details, enhancing accessibility for all users."
      ],
      tech: ["Python", "Flask", "HTML", "CSS", "JavaScript","Roberta(ML Model)"],
      image: "assets/resume.svg",
      demoUrl: "https://drive.google.com/file/d/1TOgjm5BXiL0E6W0AMPUEEzasQEucjrEE/view?usp=sharing",
      githubUrl: "https://github.com/Kalpak15/ResumeForge.git"
    } ,   
    {
      id: 5,
      title: "Finverse – Financial Advisor",
      description: "An intelligent financial advisory platform that uses machine learning to deliver personalized insights, helping users make informed financial decisions.",
      features: [
        // "AI-powered financial analysis and recommendations",
        // "Personalized investment portfolio suggestions",
        // "Risk assessment and goal tracking tools",
        // "Market trend analysis and predictions",
        // "Interactive financial planning dashboard"
        "Developed finverse, a full-stack financial advisor app using React, Express.js, and MongoDB for personalized financial guidance.",
        "Integrated an interactive chatbot and quiz powered by a RAG ML model to deliver tailored financial advice.",
        "Designed a responsive React UI, ensuring an engaging and accessible user experience across devices.",
        "Utilized MongoDB for secure and efficient storage of user data and financial interactions.",
        "Enhanced financial literacy through AI-driven recommendations and educational content."
      ],
      tech: ["React.js", "Express.js","MongoDB","Flask", "Python (ML)","RAG(ML Model)","GitHub"],
      image: "/assets/finverse.svg",
      demoUrl: "https://youtu.be/85L-xdrzxLI?si=MPEoGdItJZRGxyRC",
      githubUrl: "https://github.com/Kalpak15/FinVerse.git"
    },
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
      const featureItems = card.querySelectorAll('.feature-item');
      
      techBadges.forEach((badge, i) => {
        setTimeout(() => {
          badge.classList.add('badge-visible');
        }, i * 50);
      });
      
      featureItems.forEach((item, i) => {
        setTimeout(() => {
          item.classList.add('feature-visible');
        }, i * 100 + 200);
      });
    }
  };

  const handleCardLeave = (cardIndex) => {
    setActiveProject(null);
    const card = cardsRef.current[cardIndex];
    if (card) {
      card.classList.remove('card-active');
      const techBadges = card.querySelectorAll('.tech-badge');
      const featureItems = card.querySelectorAll('.feature-item');
      
      techBadges.forEach((badge) => {
        badge.classList.remove('badge-visible');
      });
      
      featureItems.forEach((item) => {
        item.classList.remove('feature-visible');
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
        className="fixed w-10 h-10 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
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
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
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
              
              <div className="relative h-96 rounded-xl overflow-hidden bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 shadow-xl shadow-purple-900/10 transform transition-all duration-500 hover:-translate-y-2">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6 h-56 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 transition-all duration-300 project-title">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-3 flex-grow">{project.description}</p>
                   
                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-xs text-gray-400 rounded-md">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Enhanced Hover overlay with more space */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/90 to-black/80 flex flex-col justify-start p-6 rounded-xl backdrop-blur-sm opacity-0 transition-opacity duration-300 project-overlay overflow-y-auto">
                  <div className="flex gap-3 mt-auto pt-4">
                    <a 
                      href={project.demoUrl}
                      className="flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-xs text-white font-medium rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="relative z-10 flex items-center">
                        <ExternalLink className="w-3 h-3 mr-1" /> Live Demo
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="absolute top-0 left-0 w-full h-full bg-white/30 skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex-1 px-3 py-2 border border-white/30 text-xs text-white font-medium rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transform transition-transform duration-300 hover:scale-105 active:scale-95"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code className="w-3 h-3 mr-1" /> GitHub
                    </a>
                  </div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Key Features Section */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li 
                          key={i}
                          className="text-xs text-gray-300 flex items-start feature-item opacity-0 transform translate-x-4 transition-all duration-300"
                          style={{transitionDelay: `${i * 0.1}s`}}
                        >
                          <span className="text-purple-400 mr-2 text-xs">•</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-300 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 bg-gray-800/80 text-xs font-medium text-gray-300 rounded-full border border-gray-700/50 backdrop-blur-sm tech-badge opacity-0 transform scale-0 transition-all duration-300"
                          style={{transitionDelay: `${i * 0.05}s`}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  {/* Action Buttons */}
                  {/* <div className="flex gap-3 mt-auto pt-4">
                    <a 
                      href={project.demoUrl}
                      className="flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-xs text-white font-medium rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="relative z-10 flex items-center">
                        <ExternalLink className="w-3 h-3 mr-1" /> Live Demo
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="absolute top-0 left-0 w-full h-full bg-white/30 skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex-1 px-3 py-2 border border-white/30 text-xs text-white font-medium rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transform transition-transform duration-300 hover:scale-105 active:scale-95"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code className="w-3 h-3 mr-1" /> GitHub
                    </a>
                  </div> */}
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
        
        .feature-visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

export default Projects;