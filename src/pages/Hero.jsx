// import { useEffect, useRef } from 'react';

// function Hero() {
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const ctaRef = useRef(null);

//   useEffect(() => {
//     const title = titleRef.current;
//     const subtitle = subtitleRef.current;
//     const cta = ctaRef.current;

//     title.classList.add('animate-in');
//     setTimeout(() => subtitle.classList.add('animate-in'), 300);
//     setTimeout(() => cta.classList.add('animate-in'), 600);
//   }, []);

//   return (
//     <section id="home" className="h-screen flex items-center relative overflow-hidden bg-black">
//       <div className="absolute w-full h-full">
//         <div className="animate-blob absolute top-1/4 left-1/3 w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
//         <div className="animate-blob animation-delay-2000 absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
//         <div className="animate-blob animation-delay-4000 absolute bottom-1/3 left-1/4 w-64 h-64 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
//       </div>
      
//       <div className="container mx-auto px-4 z-10">
//         <h2 ref={subtitleRef} className="text-xl md:text-2xl font-light text-gray-300 mb-4 opacity-0 transition-all duration-1000 translate-y-8">
//           Hello, I'm
//         </h2>
//         <h1 ref={titleRef} className="text-4xl md:text-7xl font-bold mb-6 opacity-0 transition-all duration-1000 translate-y-8">
//           <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">Your Name</span>
//         </h1>
//         <p className="text-xl md:text-3xl text-gray-300 max-w-2xl mb-12">
//           <span className="typing-text">Full Stack Developer</span>
//         </p>
//         <div ref={ctaRef} className="opacity-0 transition-all duration-1000 translate-y-8">
//           <a 
//             href="#contact" 
//             className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 transform hover:-translate-y-1"
//           >
//             Get In Touch
//           </a>
//           <a 
//             href="#projects" 
//             className="ml-4 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition duration-300 transform hover:-translate-y-1"
//           >
//             View Projects
//           </a>
//         </div>
//       </div>
      
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
//           <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ExternalLink, User, Mail, Code, Send } from 'lucide-react';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);
  const cursorRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const roleTextRef = useRef(null);
  const ctaRef = useRef(null);
  const particlesRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const roles = ["Full Stack Developer", "UI/UX Designer", "Tech Enthusiast"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Generate particles
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

  // Handle typing animation
  useEffect(() => {
    const roleText = roleTextRef.current;
    if (!roleText) return;
    
    const role = roles[currentRoleIndex];
    let charIndex = 0;
    let typingInterval;
    let currentText = '';
    
    const typeText = () => {
      if (charIndex < role.length) {
        currentText += role.charAt(charIndex);
        roleText.textContent = currentText;
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          let deleteInterval = setInterval(() => {
            if (currentText.length > 0) {
              currentText = currentText.slice(0, -1);
              roleText.textContent = currentText;
            } else {
              clearInterval(deleteInterval);
              setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    };
    
    typingInterval = setInterval(typeText, 100);
    
    return () => {
      clearInterval(typingInterval);
    };
  }, [currentRoleIndex, roles]);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      const title = titleRef.current;
      const subtitle = subtitleRef.current;
      
      if (title && subtitle) {
        title.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`;
        subtitle.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center relative overflow-hidden bg-black"
      ref={heroRef}
    >
      {/* Custom cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
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
      
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="animate-blurFloat absolute top-1/4 -left-10 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="animate-blurFloat animation-delay-2000 absolute -bottom-24 -right-10 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="animate-blurFloat animation-delay-4000 absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 grid-bg"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center">
          <h2 
            ref={subtitleRef} 
            className={`text-xl md:text-2xl font-light text-gray-300 mb-4 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <span className="inline-block animate-shimmer">Hello, I'm</span>
          </h2>
          
          <h1 
            ref={titleRef} 
            className={`text-5xl md:text-8xl font-bold mb-8 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text relative inline-block">
              Your Name
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 animate-line-grow"></span>
            </span>
          </h1>
          
          <div 
            className={`text-xl md:text-3xl text-gray-300 max-w-2xl mx-auto mb-12 h-12 flex items-center justify-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '900ms' }}
          >
            <span className="typing-indicator">I'm a </span>
            <span ref={roleTextRef} className="typing-text ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"></span>
            <span className="typing-cursor"></span>
          </div>
          
          <div 
            ref={ctaRef} 
            className={`transition-all duration-1000 ease-out flex flex-wrap justify-center gap-4 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '1200ms' }}
          >
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                <Send className="w-4 h-4 mr-2" />
                Get In Touch
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-white/30 skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </a>
            
            <a 
              href="#projects" 
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                <Code className="w-4 h-4 mr-2" />
                View Projects
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-white/10 skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </a>
          </div>
          
          {/* Social links */}
          <div 
            className={`mt-16 flex justify-center gap-6 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '1500ms' }}
          >
            {['github', 'linkedin', 'twitter', 'instagram'].map((social, index) => (
              <a 
                key={social} 
                href={`#${social}`}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="sr-only">{social}</span>
                {/* Using circle as placeholder */}
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1800ms' }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center backdrop-blur-sm relative overflow-hidden group cursor-pointer">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">Scroll Down</span>
        </div>
        <ChevronDown className="w-6 h-6 text-white/70 mt-2 animate-pulse" />
      </div>
      
      {/* Custom CSS */}
      <style jsx>{`
        .grid-bg {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 80%);
        }
        
        .typing-cursor {
          border-right: 2px solid white;
          animation: cursor-blink 1s infinite;
          padding-left: 2px;
          height: 1.2em;
          display: inline-block;
        }
        
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes shimmer {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
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
        
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
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

export default Hero;










// import { useEffect, useRef, useState } from 'react';
// import { ChevronDown, Code, Send } from 'lucide-react';

// export default function Hero() {
//   const [loaded, setLoaded] = useState(false);
//   const [codeRevealed, setCodeRevealed] = useState(false);
//   const [currentLine, setCurrentLine] = useState(0);
//   const [cursorChar, setCursorChar] = useState(0);
//   const [typedCode, setTypedCode] = useState(['', '', '', '', '']);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const roleTextRef = useRef(null);
//   const codeEditorRef = useRef(null);
//   const particlesRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [cursorVisible, setCursorVisible] = useState(false);
//   const roles = ["Full Stack Developer", "UI/UX Designer", "C++ Enthusiast"];
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [currentRoleText, setCurrentRoleText] = useState('');
//   const [showCursor, setShowCursor] = useState(true);

//   // Code editor content
//   const codeLines = [
//     'consistency = 1;',
//     'hardwork = 1;',
//     'while(consistency && hardwork) {',
//     '    return success;',
//     '}'
//   ];

//   // Generate particles
//   useEffect(() => {
//     const createParticles = () => {
//       const particlesContainer = particlesRef.current;
//       if (!particlesContainer) return;
      
//       // Clear existing particles
//       particlesContainer.innerHTML = '';
      
//       // Create particles
//       for (let i = 0; i < 40; i++) {
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
        
//         // Random delay
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
    
//     // Start code animation after 1.5 seconds
//     setTimeout(() => {
//       setCodeRevealed(true);
//       startTypingCode();
//     }, 1500);
    
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

//   // Cursor blinking effect
//   useEffect(() => {
//     const cursorInterval = setInterval(() => {
//       setShowCursor(prev => !prev);
//     }, 500);
    
//     return () => clearInterval(cursorInterval);
//   }, []);

//   // Code typing animation - improved version
//   const startTypingCode = () => {
//     let lineIndex = 0;
//     let charIndex = 0;
//     let newTypedCode = [...typedCode];
    
//     const typeChar = () => {
//       if (lineIndex < codeLines.length) {
//         const currentCodeLine = codeLines[lineIndex];
        
//         if (charIndex < currentCodeLine.length) {
//           newTypedCode[lineIndex] = currentCodeLine.substring(0, charIndex + 1);
//           setTypedCode([...newTypedCode]);
//           setCurrentLine(lineIndex);
//           setCursorChar(charIndex + 1);
//           charIndex++;
//           setTimeout(typeChar, 60);
//         } else {
//           // Line complete, move to next line
//           lineIndex++;
//           charIndex = 0;
          
//           if (lineIndex < codeLines.length) {
//             // Pause between lines
//             setTimeout(typeChar, 300);
//           }
//         }
//       }
//     };
    
//     // Start typing
//     typeChar();
//   };

//   // Handle typing animation for role text - improved version
//   useEffect(() => {
//     const roleText = roles[currentRoleIndex];
//     let isTyping = true;
//     let charIndex = 0;
//     let timer;
    
//     const updateText = () => {
//       if (isTyping) {
//         // Typing mode
//         if (charIndex <= roleText.length) {
//           setCurrentRoleText(roleText.substring(0, charIndex));
//           charIndex++;
          
//           // Continue typing
//           timer = setTimeout(updateText, 100);
//         } else {
//           // Finished typing, pause before erasing
//           isTyping = false;
//           timer = setTimeout(updateText, 2000);
//         }
//       } else {
//         // Erasing mode
//         if (charIndex > 0) {
//           charIndex--;
//           setCurrentRoleText(roleText.substring(0, charIndex));
          
//           // Continue erasing
//           timer = setTimeout(updateText, 50);
//         } else {
//           // Finished erasing, move to next role
//           isTyping = true;
//           setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
//         }
//       }
//     };
    
//     // Start animation
//     updateText();
    
//     return () => clearTimeout(timer);
//   }, [currentRoleIndex, roles]);

//   // Parallax effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       const x = (clientX / window.innerWidth) - 0.5;
//       const y = (clientY / window.innerHeight) - 0.5;
      
//       const title = titleRef.current;
//       const subtitle = subtitleRef.current;
//       const codeEditor = codeEditorRef.current;
      
//       if (title && subtitle && codeEditor) {
//         title.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`;
//         subtitle.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
//         codeEditor.style.transform = `translate3d(${x * -15}px, ${y * -15}px, 0)`;
//       }
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <section 
//       id="home" 
//       className="h-screen flex items-center justify-center relative overflow-hidden bg-black"
//     >
//       {/* Custom cursor */}
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
      
//       {/* Floating particles */}
//       <div ref={particlesRef} className="absolute inset-0 overflow-hidden">
//         {/* Particles will be added via JS */}
//       </div>
      
//       {/* Animated background */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="animate-pulse absolute top-1/4 -left-10 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
//         <div className="animate-pulse delay-1000 absolute -bottom-24 -right-10 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
//         <div className="animate-pulse delay-2000 absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
//         {/* Animated grid */}
//         <div className="absolute inset-0" style={{
//           backgroundSize: '50px 50px',
//           backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
//                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
//           maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 80%)'
//         }}></div>
//       </div>
      
//       {/* Code editor animation */}
//       <div 
//         ref={codeEditorRef}
//         className={`absolute right-10 top-1/2 transform -translate-y-1/2 w-96 h-80 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 transition-all duration-1000 ${codeRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
//         style={{ perspective: '1000px' }}
//       >
//         <div className="w-full h-full bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative">
//           {/* Code editor header */}
//           <div className="h-10 bg-gray-800/80 border-b border-white/10 flex items-center px-4">
//             <div className="flex space-x-2">
//               <div className="w-3 h-3 rounded-full bg-red-500"></div>
//               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//               <div className="w-3 h-3 rounded-full bg-green-500"></div>
//             </div>
//             <div className="ml-4 text-xs text-gray-400">success.cpp</div>
//           </div>
          
//           {/* Code editor content */}
//           <div className="p-6 font-mono text-sm">
//             <div className="flex flex-col">
//               {codeLines.map((line, index) => (
//                 <div key={index} className="flex">
//                   <span className="text-gray-500 w-8">{index + 1}</span>
//                   <div className="text-gray-300">
//                     <div className="min-h-6 flex">
//                       <span className="text-blue-400">{typedCode[index]}</span>
//                       {index === currentLine && (
//                         <span className={`inline-block w-0.5 h-5 bg-white mb-0.5 ml-px ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Code success animation */}
//           {typedCode[4] === codeLines[4] && (
//             <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20">
//               <div className="text-3xl font-bold text-green-400 animate-pulse">Success!</div>
//             </div>
//           )}
//         </div>
//       </div>
      
//       {/* Main content */}
//       <div className="container mx-auto px-4 z-10 relative">
//         <div className="text-center md:text-left max-w-2xl">
//           <h2 
//             ref={subtitleRef} 
//             className={`text-xl md:text-2xl font-light text-gray-300 mb-4 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
//             style={{ transitionDelay: '300ms' }}
//           >
//             <span className="inline-block animate-pulse">Hello, I'm</span>
//           </h2>
          
//           <h1 
//             ref={titleRef} 
//             className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
//             style={{ transitionDelay: '600ms' }}
//           >
//             <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text relative inline-block">
//               John Doe
//               <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 animate-pulse"></span>
//             </span>
//           </h1>
          
//           <div 
//             className={`text-xl md:text-3xl text-gray-300 mb-12 h-12 flex items-center md:justify-start justify-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
//             style={{ transitionDelay: '900ms' }}
//           >
//             <span>I'm a </span>
//             <span ref={roleTextRef} className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
//               {currentRoleText}
//             </span>
//             <span className={`inline-block w-0.5 h-8 bg-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
//           </div>
          
//           <div 
//             className={`transition-all duration-1000 ease-out flex flex-wrap md:justify-start justify-center gap-4 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
//             style={{ transitionDelay: '1200ms' }}
//           >
//             <a 
//               href="#contact" 
//               className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg transition duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
//             >
//               <span className="relative z-10 flex items-center">
//                 <Send className="w-4 h-4 mr-2" />
//                 Get In Touch
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//             </a>
            
//             <a 
//               href="#projects" 
//               className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
//             >
//               <span className="relative z-10 flex items-center">
//                 <Code className="w-4 h-4 mr-2" />
//                 View Projects
//               </span>
//             </a>
//           </div>
//         </div>
//       </div>
      
//       {/* Scroll indicator */}
//       <div 
//         className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
//         style={{ transitionDelay: '1800ms' }}
//       >
//         <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center backdrop-blur-sm relative overflow-hidden cursor-pointer">
//           <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
//           <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 whitespace-nowrap opacity-0 hover:opacity-100 hover:-translate-y-2 transition-all duration-300">Scroll Down</span>
//         </div>
//         <ChevronDown className="w-6 h-6 text-white/70 mt-2 animate-pulse" />
//       </div>

//       {/* CSS for particle animation */}
//       <style jsx>{`
//         @keyframes float-up {
//           0% { transform: translateY(100vh) translateX(0) scale(1); }
//           50% { transform: translateY(50vh) translateX(20px) scale(1.2); }
//           100% { transform: translateY(0) translateX(0) scale(0.8); opacity: 0; }
//         }
        
//         .particle {
//           position: absolute;
//           background-color: white;
//           border-radius: 50%;
//           opacity: 0.3;
//           animation: float-up 15s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

