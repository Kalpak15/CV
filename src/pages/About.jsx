
// import { useEffect, useRef, useState } from 'react';
// import { ChevronDown, Download } from 'lucide-react';

// function About() {
//   const [loaded, setLoaded] = useState(false);
//   const aboutRef = useRef(null);
//   const titleRef = useRef(null);
//   const contentRef = useRef(null);
//   const imageRef = useRef(null);
//   const statsRef = useRef(null);
//   const particlesRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [cursorVisible, setCursorVisible] = useState(false);

//   // Generate particles - same as Hero component
//   useEffect(() => {
//     const createParticles = () => {
//       const particlesContainer = particlesRef.current;
//       if (!particlesContainer) return;
      
//       // Clear existing particles
//       particlesContainer.innerHTML = '';
      
//       // Create particles
//       for (let i = 0; i < 50; i++) {
//         const particle = document.createElement('div');
//         particle.className = 'particle';
        
//         // Random position
//         const x = Math.random() * 100;
//         const y = Math.random() * 100;
        
//         // Random size
//         const size = Math.random() * 3 + 1;
        
//         // Random opacity
//         const opacity = Math.random() * 0.5 + 0.3;
        
//         // Random animation duration
//         const duration = Math.random() * 20 + 10;
        
//         // Random animation delay
//         const delay = Math.random() * 5;
        
//         // Set styles
//         particle.style.left = `${x}%`;
//         particle.style.top = `${y}%`;
//         particle.style.width = `${size}px`;
//         particle.style.height = `${size}px`;
//         particle.style.opacity = opacity;
//         particle.style.animationDuration = `${duration}s`;
//         particle.style.animationDelay = `${delay}s`;
        
//         particlesContainer.appendChild(particle);
//       }
//     };
    
//     createParticles();
    
//     // Regenerate particles on resize
//     window.addEventListener('resize', createParticles);
//     return () => window.removeEventListener('resize', createParticles);
//   }, []);

//   // Initial animations
//   useEffect(() => {
//     setTimeout(() => setLoaded(true), 300);
    
//     // Track mouse position for the custom cursor
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//       setCursorVisible(true);
//     };
    
//     const handleMouseLeave = () => {
//       setCursorVisible(false);
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseleave', handleMouseLeave);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   // Parallax effect - same as Hero component
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       const x = (clientX / window.innerWidth) - 0.5;
//       const y = (clientY / window.innerHeight) - 0.5;
      
//       const title = titleRef.current;
//       const content = contentRef.current;
//       const image = imageRef.current;
      
//       if (title) {
//         title.style.transform = `translate3d(${x * 15}px, ${y * 15}px, 0)`;
//       }
      
//       if (content) {
//         content.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
//       }
      
//       if (image) {
//         image.style.transform = `translate3d(${x * -15}px, ${y * -15}px, 0) rotateY(${x * 3}deg) rotateX(${y * -3}deg)`;
//       }
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Intersection Observer for fade-in effect
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setLoaded(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );
    
//     if (aboutRef.current) {
//       observer.observe(aboutRef.current);
//     }
    
//     return () => {
//       if (aboutRef.current) {
//         observer.unobserve(aboutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section 
//       id="about" 
//       className="min-h-screen bg-black relative overflow-hidden flex items-center"
//       ref={aboutRef}
//     >
//       {/* Custom cursor - same as Hero */}
//       <div 
//         className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
//         style={{
//           left: `${mousePosition.x}px`,
//           top: `${mousePosition.y}px`,
//           transform: 'translate(-50%, -50%)',
//           opacity: cursorVisible ? 1 : 0,
//           backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)'
//         }}
//       ></div>
      
//       {/* Floating particles - same as Hero */}
//       <div ref={particlesRef} className="absolute inset-0 overflow-hidden"></div>
      
//       {/* Animated background - same as Hero */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="animate-blurFloat absolute top-1/4 -left-10 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
//         <div className="animate-blurFloat animation-delay-2000 absolute -bottom-24 -right-10 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
//         <div className="animate-blurFloat animation-delay-4000 absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
//         {/* Animated grid - same as Hero */}
//         <div className="absolute inset-0 grid-bg"></div>
//       </div>
      
//       <div className="container mx-auto px-4 py-16 relative z-10">
//         <h2 
//           ref={titleRef}
//           className={`text-5xl font-bold mb-16 text-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
//           style={{ transitionDelay: '300ms' }}
//         >
//           <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text relative inline-block">
//             About Me
//             <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 animate-line-grow"></span>
//           </span>
//         </h2>
        
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div 
//             ref={imageRef}
//             className={`relative w-full mx-auto md:w-4/5 lg:w-3/4 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
//             style={{ transitionDelay: '500ms', perspective: '1000px' }}
//           >
//             {/* Circular profile container - MODIFIED WITH FULL CIRCLE IMAGE */}
//             <div className="relative mx-auto" style={{ width: "380px", height: "380px" }}>
//               {/* Circular background with light gradient */}
//               <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-50 to-blue-50 shadow-lg"></div>
              
//               {/* Profile photo container - MODIFIED TO FILL ENTIRE CIRCLE AND PROPERLY POSITION FACE */}
//               <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
//                 <img 
//                   src="kalpak_photo.jpg" 
//                   alt="Profile" 
//                   className="w-full h-full object-cover"
//                   style={{
//                     objectPosition: "center 0%",  // Position shifted down to show full face/head
//                     transform: "scale(1.05)"  // Slightly enlarged to ensure full coverage
//                   }}
//                 />
//               </div>
              
//               {/* Small decorative circles - KEPT THESE AS THEY'RE OUTSIDE THE MAIN CIRCLE */}
//               <div className="absolute left-6 bottom-8 w-3 h-3 rounded-full bg-yellow-500"></div>
//               <div className="absolute left-16 bottom-2 w-2 h-2 rounded-full bg-white"></div>
//             </div>
//           </div>
          
//           <div 
//             ref={contentRef}
//             className={`about-content transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
//             style={{ transitionDelay: '700ms' }}
//           >
//             <h3 className="text-2xl font-bold mb-6 text-white">
//               {/* I'm a <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">Full Stack Developer</span> based in [Your Location] */}
//             </h3>
            
//             <p className="text-gray-300 mb-4">
//               I’m a passionate and driven Informtion Technology student at Vidyalankar Institute of Technology, aiming to become a skilled Software Development Engineer (SDE). With a strong foundation in Data Structures and Algorithms (DSA), I enjoy solving complex problems and writing clean, efficient code.
//             </p>
            
//             <p className="text-gray-300 mb-4">
//               I have hands-on experience with both frontend and backend development — building user interfaces using React.js and developing scalable backend systems. My knowledge spans multiple programming languages, and I constantly strive to deepen my understanding of system design and backend architecture.
//             </p>
            
//             <p className="text-gray-300 mb-4">
//               As a backend enthusiast with full-stack capabilities, I’m always exploring new technologies and best practices to improve performance, reliability, and user experience. I'm excited to contribute to impactful projects and grow in a challenging, innovation-driven environment.
//             </p>
            
//             <div 
//               ref={statsRef}
//               className={`flex flex-wrap gap-4 mb-8 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
//               style={{ transitionDelay: '900ms' }}
//             >
//               <div className="px-4 py-2 bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-full text-gray-300 hover:border-purple-500/60 transition-all duration-300 transform hover:-translate-y-1">
//                 <span className="text-purple-400">7+</span> Personal Projects Built
//               </div>
//               {/* <div className="px-4 py-2 bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-full text-gray-300 hover:border-pink-500/60 transition-all duration-300 transform hover:-translate-y-1">
//                 <span className="text-pink-400">5+</span> Years Experience
//               </div> */}
//               <div className="px-4 py-2 bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-full text-gray-300 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-1">
//                 <span className="text-blue-400">100%</span> Commitment to Learning

//               </div>
//             </div>
            
//             <div className={`transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1100ms' }}>
//               <a 
//                 href="https://drive.google.com/file/d/1PKFP2-X64NI-3RZaYeugswBF8NtLzWz9/view?usp=sharing" 
//                 className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
//               >
//                 <span className="relative z-10 flex items-center">
//                   Download Resume
//                   <Download className="w-4 h-4 ml-2" />
//                 </span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                 <span className="absolute top-0 left-0 w-full h-full bg-white/30 skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Scroll indicator */}
//       {/* <div 
//         className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
//         style={{ transitionDelay: '1300ms' }}
//       >
//         <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center backdrop-blur-sm relative overflow-hidden group cursor-pointer">
//           <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
//           <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">Scroll Down</span>
//         </div>
//         <ChevronDown className="w-6 h-6 text-white/70 mt-2 animate-pulse" />
//       </div> */}
      
//       {/* Custom CSS - same as Hero section */}
//       <style jsx>{`
//         .grid-bg {
//           background-size: 50px 50px;
//           background-image: 
//             linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
//           mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 80%);
//         }
        
//         @keyframes blurFloat {
//           0% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(-5%, 5%) scale(1.1); }
//           66% { transform: translate(5%, -5%) scale(0.9); }
//           100% { transform: translate(0, 0) scale(1); }
//         }
        
//         .animate-blurFloat {
//           animation: blurFloat 15s ease-in-out infinite;
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
        
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
        
//         @keyframes line-grow {
//           0% { transform: scaleX(0); transform-origin: left; }
//           50% { transform: scaleX(1); transform-origin: left; }
//           50.1% { transform: scaleX(1); transform-origin: right; }
//           100% { transform: scaleX(0); transform-origin: right; }
//         }
        
//         .animate-line-grow {
//           animation: line-grow 5s ease-in-out infinite;
//           animation-delay: 1s;
//         }
        
//         .particle {
//           position: absolute;
//           background-color: white;
//           border-radius: 50%;
//           opacity: 0.3;
//           animation: float-up 15s linear infinite;
//         }
        
//         @keyframes float-up {
//           0% { transform: translateY(100vh) translateX(0) scale(1); }
//           50% { transform: translateY(50vh) translateX(20px) scale(1.2); }
//           100% { transform: translateY(0) translateX(0) scale(0.8); opacity: 0; }
//         }
//       `}</style>
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
      
      // Create fewer particles on mobile
      const particleCount = window.innerWidth < 768 ? 25 : 50;
      
      // Create particles
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size (smaller on mobile)
        const baseSize = window.innerWidth < 768 ? 1.5 : 3;
        const size = Math.random() * baseSize + 1;
        
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
    
    // Track mouse position for the custom cursor (only on desktop)
    const handleMouseMove = (e) => {
      if (window.innerWidth >= 768) { // Only show cursor on desktop
        setMousePosition({ x: e.clientX, y: e.clientY });
        setCursorVisible(true);
      }
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

  // Parallax effect - disabled on mobile for better performance
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Only apply parallax on desktop
      if (window.innerWidth < 768) return;
      
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
      className="min-h-screen bg-black relative overflow-hidden flex items-center py-8 md:py-16"
      ref={aboutRef}
    >
      {/* Custom cursor - only show on desktop */}
      <div 
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: cursorVisible ? 1 : 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)'
        }}
      ></div>
      
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden"></div>
      
      {/* Animated background - reduced on mobile */}
      <div className="absolute inset-0 w-full h-full">
        <div className="animate-blurFloat absolute top-1/4 -left-10 w-48 h-48 md:w-96 md:h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 md:opacity-30"></div>
        <div className="animate-blurFloat animation-delay-2000 absolute -bottom-24 -right-10 w-48 h-48 md:w-96 md:h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 md:opacity-30"></div>
        <div className="animate-blurFloat animation-delay-4000 absolute bottom-1/3 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 md:opacity-30"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 grid-bg"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 relative z-10">
        <h2 
          ref={titleRef}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-16 text-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text relative inline-block">
            About Me
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 animate-line-grow"></span>
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div 
            ref={imageRef}
            className={`relative w-full mx-auto order-1 md:order-none transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '500ms', perspective: '1000px' }}
          >
            {/* Circular profile container - responsive sizing */}
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Circular background with light gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-50 to-blue-50 shadow-lg"></div>
              
              {/* Profile photo container */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="Kalpak_photo1.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center 0%",
                    transform: "scale(1.05)"
                  }}
                />
              </div>
              
              {/* Small decorative circles - adjusted for mobile */}
              <div className="absolute left-3 sm:left-6 bottom-4 sm:bottom-8 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="absolute left-8 sm:left-16 bottom-1 sm:bottom-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className={`about-content order-2 md:order-none transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-white">
              {/* Mobile-friendly title can be added here if needed */}
            </h3>
            
            <p className="text-gray-300 mb-3 md:mb-4 text-sm sm:text-base leading-relaxed">
              I'm a passionate and driven Information Technology student at Vidyalankar Institute of Technology, aiming to become a skilled Software Development Engineer (SDE). With a strong foundation in Data Structures and Algorithms (DSA), I enjoy solving complex problems and writing clean, efficient code.
            </p>
            
            <p className="text-gray-300 mb-3 md:mb-4 text-sm sm:text-base leading-relaxed">
              I have hands-on experience with both frontend and backend development — building user interfaces using React.js and developing scalable backend systems. My knowledge spans multiple programming languages, and I constantly strive to deepen my understanding of system design and backend architecture.
            </p>
            
            <p className="text-gray-300 mb-4 md:mb-4 text-sm sm:text-base leading-relaxed">
              As a backend enthusiast with full-stack capabilities, I'm always exploring new technologies and best practices to improve performance, reliability, and user experience. I'm excited to contribute to impactful projects and grow in a challenging, innovation-driven environment.
            </p>
            
            <div 
              ref={statsRef}
              className={`flex flex-wrap gap-2 sm:gap-4 mb-6 md:mb-8 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '900ms' }}
            >
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-full text-gray-300 hover:border-purple-500/60 transition-all duration-300 transform hover:-translate-y-1 text-xs sm:text-sm">
                <span className="text-purple-400">7+</span> Personal Projects Built
              </div>
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-full text-gray-300 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-1 text-xs sm:text-sm">
                <span className="text-blue-400">100%</span> Commitment to Learning
              </div>
            </div>
            
            <div className={`transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1100ms' }}>
              <a 
                href="https://drive.google.com/file/d/1ShICcTj3WZBZGRXGIZTfuQk4BM4RQC7B/view?usp=sharing" 
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 transform hover:-translate-y-1 relative overflow-hidden group text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center">
                  Download Resume
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full bg-white/30 skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS - same as Hero section */}
      <style jsx>{`
        .grid-bg {
          background-size: 30px 30px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 80%);
        }
        
        @media (min-width: 768px) {
          .grid-bg {
            background-size: 50px 50px;
          }
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
        
        /* Reduce animations on mobile for better performance */
        @media (max-width: 767px) {
          .animate-blurFloat {
            animation-duration: 20s;
          }
          
          .particle {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
