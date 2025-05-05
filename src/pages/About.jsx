// // import { useEffect, useRef } from 'react';

// // function About() {
// //   const sectionRef = useRef(null);
  
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           entry.target.classList.add('fade-in');
// //           observer.unobserve(entry.target);
// //         }
// //       },
// //       { threshold: 0.1 }
// //     );
    
// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }
    
// //     return () => {
// //       if (sectionRef.current) {
// //         observer.unobserve(sectionRef.current);
// //       }
// //     };
// //   }, []);

// //   return (
// //     <section id="about" className="py-24 bg-gray-900" ref={sectionRef}>
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-4xl font-bold mb-16 text-center">
// //           <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">About Me</span>
// //         </h2>
        
// //         <div className="grid md:grid-cols-2 gap-16 items-center">
// //           <div className="relative">
// //             <div className="aspect-square rounded-2xl overflow-hidden transform hover:rotate-3 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
// //               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm"></div>
// //               <img 
// //                 src="assets\kkkkk.jpg" 
// //                 alt="Your profile" 
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //             <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full opacity-20 blur-xl"></div>
// //           </div>
          
// //           <div className="about-content">
// //             <h3 className="text-2xl font-bold mb-6 text-white">
// //               I'm a <span className="text-purple-400">Full Stack Developer</span> based in [Your Location]
// //             </h3>
            
// //             <p className="text-gray-300 mb-6">
// //               I specialize in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using React and modern backend technologies.
// //             </p>
            
// //             <p className="text-gray-300 mb-8">
// //               With [X] years of experience in web development, I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always strive to write elegant and efficient code.
// //             </p>
            
// //             <div className="flex flex-wrap gap-4 mb-8">
// //               <div className="px-4 py-2 bg-gray-800 rounded-full text-gray-300">
// //                 <span className="text-purple-400">20+</span> Projects Completed
// //               </div>
// //               <div className="px-4 py-2 bg-gray-800 rounded-full text-gray-300">
// //                 <span className="text-blue-400">5+</span> Years Experience
// //               </div>
// //               <div className="px-4 py-2 bg-gray-800 rounded-full text-gray-300">
// //                 <span className="text-pink-400">100%</span> Client Satisfaction
// //               </div>
// //             </div>
            
// //             <a 
// //               href="#" 
// //               className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 transform hover:-translate-y-1"
// //             >
// //               Download CV
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
// //               </svg>
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default About;



// //second dark theme
// import { useEffect, useRef } from 'react';

// function About() {
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

//   return (
//     <section id="about" className="min-h-screen bg-black" ref={sectionRef}>
//       <div className="container mx-auto px-4 py-16">
//         <h2 className="text-5xl font-bold mb-16 text-center">
//           <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">About Me</span>
//         </h2>
        
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="relative">
//             <div className="aspect-square rounded-2xl overflow-hidden transform hover:rotate-3 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm"></div>
//               <img 
//                 src="assets/kkkkk.jpg" 
//                 alt="Profile" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full opacity-20 blur-xl"></div>
//           </div>
          
//           <div className="about-content">
//             <h3 className="text-2xl font-bold mb-6 text-white">
//               I'm a <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">Full Stack Developer</span> based in [Your Location]
//             </h3>
            
//             <p className="text-gray-300 mb-6">
//               I specialize in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using React and modern backend technologies.
//             </p>
            
//             <p className="text-gray-300 mb-8">
//               With [X] years of experience in web development, I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always strive to write elegant and efficient code.
//             </p>
            
//             <div className="flex flex-wrap gap-4 mb-8">
//               <div className="px-4 py-2 bg-black border border-purple-500/30 rounded-full text-gray-300">
//                 <span className="text-purple-400">20+</span> Projects Completed
//               </div>
//               <div className="px-4 py-2 bg-black border border-pink-500/30 rounded-full text-gray-300">
//                 <span className="text-pink-400">5+</span> Years Experience
//               </div>
//               <div className="px-4 py-2 bg-black border border-blue-500/30 rounded-full text-gray-300">
//                 <span className="text-blue-400">100%</span> Client Satisfaction
//               </div>
//             </div>
            
//             <a 
//               href="#" 
//               className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 transform hover:-translate-y-1"
//             >
//               Download CV
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;


import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';

function About() {
  const [loaded, setLoaded] = useState(false);
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const particlesRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  // Generate particles - same as Hero component
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

  // Parallax effect - same as Hero component
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      const title = titleRef.current;
      const content = contentRef.current;
      const image = imageRef.current;
      
      if (title) {
        title.style.transform = `translate3d(${x * 15}px, ${y * 15}px, 0)`;
      }
      
      if (content) {
        content.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
      }
      
      if (image) {
        image.style.transform = `translate3d(${x * -15}px, ${y * -15}px, 0) rotateY(${x * 3}deg) rotateX(${y * -3}deg)`;
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
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      className="min-h-screen bg-black relative overflow-hidden flex items-center"
      ref={aboutRef}
    >
      {/* Custom cursor - same as Hero */}
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
      
      {/* Floating particles - same as Hero */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden"></div>
      
      {/* Animated background - same as Hero */}
      <div className="absolute inset-0 w-full h-full">
        <div className="animate-blurFloat absolute top-1/4 -left-10 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="animate-blurFloat animation-delay-2000 absolute -bottom-24 -right-10 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="animate-blurFloat animation-delay-4000 absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        {/* Animated grid - same as Hero */}
        <div className="absolute inset-0 grid-bg"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 
          ref={titleRef}
          className={`text-5xl font-bold mb-16 text-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text relative inline-block">
            About Me
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 animate-line-grow"></span>
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '500ms', perspective: '1000px' }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden transform hover:rotate-3 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm"></div>
              <img 
                src="assets/kkkkk.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              {/* Dynamic glow effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full opacity-20 blur-xl"></div>
          </div>
          
          <div 
            ref={contentRef}
            className={`about-content transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              I'm a <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">Full Stack Developer</span> based in [Your Location]
            </h3>
            
            <p className="text-gray-300 mb-6">
              I specialize in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using React and modern backend technologies.
            </p>
            
            <p className="text-gray-300 mb-8">
              With [X] years of experience in web development, I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always strive to write elegant and efficient code.
            </p>
            
            <div 
              ref={statsRef}
              className={`flex flex-wrap gap-4 mb-8 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '900ms' }}
            >
              <div className="px-4 py-2 bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-full text-gray-300 hover:border-purple-500/60 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-purple-400">20+</span> Projects Completed
              </div>
              <div className="px-4 py-2 bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-full text-gray-300 hover:border-pink-500/60 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-pink-400">5+</span> Years Experience
              </div>
              <div className="px-4 py-2 bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-full text-gray-300 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-blue-400">100%</span> Client Satisfaction
              </div>
            </div>
            
            <div className={`transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1100ms' }}>
              <a 
                href="#" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Download CV
                  <Download className="w-4 h-4 ml-2" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full bg-white/30 skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1300ms' }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center backdrop-blur-sm relative overflow-hidden group cursor-pointer">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">Scroll Down</span>
        </div>
        <ChevronDown className="w-6 h-6 text-white/70 mt-2 animate-pulse" />
      </div>
      
      {/* Custom CSS - same as Hero section */}
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

export default About;