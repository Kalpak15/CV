

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Award, FileCheck, ExternalLink } from 'lucide-react';

function AchievementsCertifications() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const achievementsRef = useRef(null);
  const certificationsRef = useRef(null);
  const particlesRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('achievements');

  // Generate particles - same as About component
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
      
      const title = titleRef.current;
      const achievements = achievementsRef.current;
      const certifications = certificationsRef.current;
      
      if (title) {
        title.style.transform = `translate3d(${x * 15}px, ${y * 15}px, 0)`;
      }
      
      if (achievements) {
        achievements.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
      }
      
      if (certifications) {
        certifications.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
      }
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

  // Achievement data - replace with your own
  const achievements = [
    {
      id: 1,
      title: "400+ Coding Problems",
      organization: "Leetode ",
      year: "2023",
      description: "Solved on LeetCode , improving algorithmic problem-solving skills.",
      icon: <Award className="w-8 h-8 text-purple-400" />
    },
    {
      id: 1,
      title: "100+ Coding Problems",
      organization: "GeeksForGeeks ",
      year: "2023",
      description: "Solved on GeeksForGeeks , improving algorithmic problem-solving skills.",
      icon: <Award className="w-8 h-8 text-purple-400" />
    },
    {
      id: 1,
      title: "Internal Hackthon Finalist",
      organization: "Vidyalankar Institue Of Technology",
      year: "Augest 2024",
      description: "Finalist of Internal Hackathon Held By Vidyalankar Instite Of Technology",
      icon: <Award className="w-8 h-8 text-purple-400" />
    },
    // {
    //   id: 3,
    //   title: "Hackathon Winner",
    //   organization: "Global Code Festival",
    //   year: "2021",
    //   description: "First place winner in the annual hackathon for developing an innovative accessibility tool.",
    //   icon: <Award className="w-8 h-8 text-blue-400" />
    // },
    // {
    //   id: 4,
    //   title: "Outstanding Project Lead",
    //   organization: "Digital Solutions Inc.",
    //   year: "2020",
    //   description: "Recognized for leadership excellence in managing cross-functional teams and delivering projects ahead of schedule.",
    //   icon: <Award className="w-8 h-8 text-purple-400" />
    // }
  ];

  // Certification data - replace with your own
  const certifications = [
    {
      id: 1,
      title: "Web Developement in Python",
      organization: "C-DAC",
      date: "June 2022",
      credentialId: "B364423",
      link: "https://drive.google.com/file/d/1sNtqAe2H7mzPuPBYgITlDgkbVcZaMXz4/view?usp=sharing",
      icon: <FileCheck className="w-8 h-8 text-purple-400" />
    },
    {
      id: 2,
      title: "Internal College Hackathon",
      organization: "Vidyalanakar Institute Of Technology",
      date: "Augest 2024",
      credentialId: "-",
      link: "https://drive.google.com/file/d/1-NieXb2erGc2Ojqh_4I3kRcP0l6y6102/view?usp=sharing",
      icon: <FileCheck className="w-8 h-8 text-pink-400" />
    },
    {
      id: 3,
      title: "GDG on Campus Solution",
      organization: "Vidyalanakar Institute Of Technology",
      date: "April 2025",
      credentialId: "-",
      link: "https://drive.google.com/file/d/1GpsOf4oeKSwKt4q3OduyALX_-erRFgZG/view?usp=sharing",
      icon: <FileCheck className="w-8 h-8 text-pink-400" />
    },
    // {
    //   id: 3,
    //   title: "JavaScript Algorithms & Data Structures",
    //   organization: "freeCodeCamp",
    //   date: "August 2020",
    //   credentialId: "FCC-JADS-2020",
    //   link: "https://freecodecamp.org/certification/FCC-JADS-2020",
    //   icon: <FileCheck className="w-8 h-8 text-blue-400" />
    // }
  ];

  // This direct approach ensures links open properly
  const handleCertificateClick = (url) => {
    // Using setTimeout to avoid potential React event handling issues
    setTimeout(() => {
      const newWindow = window.open(url, '_blank');
      if (newWindow) newWindow.opener = null; // Security best practice
    }, 0);
  };

  return (
    <section 
      id="achievements" 
      className="min-h-screen bg-black relative overflow-hidden flex items-center"
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
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 
          ref={titleRef}
          className={`text-5xl font-bold mb-16 text-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text relative inline-block">
            Achievements & Certifications
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 animate-line-grow"></span>
          </span>
        </h2>
        
        {/* Tab Navigation */}
        <div 
          className={`flex justify-center mb-12 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="inline-flex rounded-full p-1 bg-black/50 backdrop-blur-sm border border-purple-500/20">
            <button 
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'achievements' 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/20' 
                : 'text-gray-300 hover:text-white'}`}
            >
              Achievements
            </button>
            <button 
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === 'certifications' 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/20' 
                : 'text-gray-300 hover:text-white'}`}
            >
              Certifications
            </button>
          </div>
        </div>
        
        {/* Achievements Content */}
        <div 
          ref={achievementsRef}
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ease-out ${activeTab === 'achievements' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute pointer-events-none'}`}
          style={{ transitionDelay: activeTab === 'achievements' ? '700ms' : '0ms' }}
        >
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id}
              className={`achievement-card p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 relative overflow-hidden group transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full opacity-5 blur-lg transform -translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-black/50 border border-purple-500/20">
                  {achievement.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-400">{achievement.organization}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
                    <span className="text-purple-400">{achievement.year}</span>
                  </div>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Certifications Content */}
        <div 
          ref={certificationsRef}
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ease-out ${activeTab === 'certifications' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute pointer-events-none'}`}
          style={{ transitionDelay: activeTab === 'certifications' ? '700ms' : '0ms' }}
        >
          {certifications.map((certification, index) => (
            <div 
              key={certification.id}
              className={`certification-card p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden group transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-5 blur-lg transform -translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-black/50 border border-blue-500/20">
                  {certification.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{certification.title}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-400">{certification.organization}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                    <span className="text-blue-400">{certification.date}</span>
                  </div>
                  
                  <div className="text-gray-500 text-sm mb-3">
                    Credential ID: {certification.credentialId}
                  </div>
                  
                  {/* Certificate link using button instead of anchor for better control */}
                  <button 
                    onClick={() => handleCertificateClick(certification.link)}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer bg-transparent border-0 p-0 font-normal"
                  >
                    View Certificate 
                    <ExternalLink className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom CSS - same as About section */}
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
        
        @keyframes float-up {
          0% { transform: translateY(100vh) translateX(0) scale(1); }
          50% { transform: translateY(50vh) translateX(20px) scale(1.2); }
          100% { transform: translateY(0) translateX(0) scale(0.8); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

export default AchievementsCertifications;