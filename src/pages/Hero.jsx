
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ExternalLink, User, Mail, Code, Send } from 'lucide-react';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [codeRevealed, setCodeRevealed] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [typedCode, setTypedCode] = useState(['', '', '', '', '']);
  const heroRef = useRef(null);
  const cursorRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const roleTextRef = useRef(null);
  const codeEditorRef = useRef(null);
  const ctaRef = useRef(null);
  const particlesRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const roles = ["Full Stack Developer", "Cloud Engineer", "DevOps Engineer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentRoleText, setCurrentRoleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Code editor content - removed type keywords
  const codeLines = [
    'success = 0;',
    'consistency = 1;',
    'hardwork = 1;',
    'while(consistency && hardwork) {',
    '    success++;',
    '}'
  ];

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
    
    // Start code animation after a short delay
    setTimeout(() => {
      setCodeRevealed(true);
      startTypingCode();
    }, 1500);
    
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

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Code typing animation with infinite loop
  const startTypingCode = () => {
    let lineIndex = 0;
    let charIndex = 0;
    let newTypedCode = [...typedCode];
    
    const typeChar = () => {
      if (lineIndex < codeLines.length) {
        const currentCodeLine = codeLines[lineIndex];
        
        if (charIndex < currentCodeLine.length) {
          newTypedCode[lineIndex] = currentCodeLine.substring(0, charIndex + 1);
          setTypedCode([...newTypedCode]);
          setCurrentLine(lineIndex);
          charIndex++;
          setTimeout(typeChar, 60);
        } else {
          // Line complete, move to next line
          lineIndex++;
          charIndex = 0;
          
          if (lineIndex < codeLines.length) {
            // Pause between lines
            setTimeout(typeChar, 300);
          } else {
            // All typing complete, show success for 2 seconds then restart
            setTypingComplete(true);
            setTimeout(() => {
              setTypingComplete(false);
              newTypedCode = ['', '', '', '', ''];
              setTypedCode([...newTypedCode]);
              setCurrentLine(0);
              lineIndex = 0;
              charIndex = 0;
              setTimeout(typeChar, 500); // Restart after a short delay
            }, 2000);
          }
        }
      }
    };
    
    // Start typing
    typeChar();
  };

  // Updated role text animation to type continuously without erasing
  useEffect(() => {
    let charIndex = 0;
    let timer;
    const roleText = roles[currentRoleIndex];

    const updateText = () => {
      if (charIndex <= roleText.length) {
        setCurrentRoleText(roleText.substring(0, charIndex));
        charIndex++;
        timer = setTimeout(updateText, 70); // Typing speed
      } else {
        // Finished typing, pause for 3 seconds, then move to the next role
        setTimeout(() => {
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          charIndex = 0; // Reset charIndex for the next role
          setTimeout(updateText, 500); // Short pause before typing next role
        }, 3000); // Pause duration after typing
      }
    };

    // Start animation
    timer = setTimeout(updateText, 500);

    return () => clearTimeout(timer);
  }, [currentRoleIndex, roles]);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      const title = titleRef.current;
      const subtitle = subtitleRef.current;
      const codeEditor = codeEditorRef.current;
      
      if (title && subtitle) {
        title.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`;
        subtitle.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
      }
      
      if (codeEditor) {
        codeEditor.style.transform = `translate3d(${x * -15}px, ${y * -15}px, 0) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
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
      
      {/* Code editor animation - removed int and bool type keywords */}
      <div 
        ref={codeEditorRef}
        className={`absolute md:right-10 md:top-1/2 bottom-1/3 right-1/2 transform md:-translate-y-1/2 md:translate-x-0 translate-x-1/2 w-80 md:w-96 h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 transition-all duration-1000 md:flex hidden ${codeRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
        style={{ perspective: '1000px' }}
      >
        <div className="w-full h-full bg-gray-900/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative">
          {/* Code editor header */}
          <div className="h-10 bg-gray-800/90 border-b border-white/10 flex items-center px-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-xs text-gray-400">success.cpp</div>
          </div>
          
          {/* Code editor content - removed the "int" and "bool" type declarations */}
          <div className="p-6 font-mono text-sm overflow-y-auto h-full">
            <div className="flex flex-col">
              {codeLines.map((line, index) => (
                <div key={index} className="flex mb-1">
                  <span className="text-gray-500 w-8">{index + 1}</span>
                  <div className="text-gray-300">
                    <div className="min-h-6 flex">
                      {index === 0 && (
                        <span className={typedCode[0].length > 0 ? "text-blue-400" : ""}>{typedCode[0]}</span>
                      )}
                      {index === 1 && (
                        <span className={typedCode[1].length > 0 ? "text-blue-400" : ""}>{typedCode[1]}</span>
                      )}
                      {index === 2 && (
                        <span className={typedCode[2].length > 0 ? "text-blue-400" : ""}>{typedCode[2]}</span>
                      )}
                      {index === 3 && (
                        <span className={typedCode[3].length > 0 ? "text-purple-400" : ""}>{typedCode[3]}</span>
                      )}
                      {index === 4 && (
                        <span className={typedCode[4].length > 0 ? "text-yellow-400" : ""}>{typedCode[4]}</span>
                      )}
                      {index === 5 && (
                        <span className={typedCode[5] ? "text-purple-400" : ""}>{typedCode[5]}</span>
                      )}
                      {index === currentLine && (
                        <span className={`inline-block w-0.5 h-5 bg-white mb-0.5 ml-px ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Code success animation */}
          {typingComplete && (
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20 animate-fadeIn">
              <div className="text-3xl font-bold text-green-400 animate-pulse">Success++!</div>
            </div>
          )}
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center md:text-left max-w-3xl">
          <h2 
            ref={subtitleRef} 
            className={`text-xl md:text-2xl font-light text-gray-300 mb-4 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <span className="inline-block animate-shimmer">Hello, I'm</span>
          </h2>
          
          <h1 
            ref={titleRef} 
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-1000 ease-out whitespace-nowrap ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text relative inline-block">
              Kalpak Kulkarni
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 animate-line-grow"></span>
            </span>
          </h1>
          
          {/* <div 
            className={`text-xl md:text-3xl text-gray-300 mb-12 h-16 flex items-center md:justify-start justify-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '900ms' }}
          >
            <span className="typing-indicator">I'm a </span>
            <div className="min-w-40 ml-2">
              <span 
                ref={roleTextRef} 
                className="typing-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              >
                {currentRoleText}
              </span>
              <span className={`inline-block w-0.5 h-8 bg-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
            </div>
          </div> */}
          
          <div 
            ref={ctaRef} 
            className={`transition-all duration-1000 ease-out flex flex-wrap md:justify-start justify-center gap-4 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
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
          
          {/* Mobile code display - removed type declarations here too */}
          <div 
            className={`md:hidden mt-12 w-full max-w-xs mx-auto bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative transition-all duration-1000 ${codeRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: '1500ms' }}
          >
            <div className="h-8 bg-gray-800/80 border-b border-white/10 flex items-center px-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-3 text-xs text-gray-400">success.cpp</div>
            </div>
            
            <div className="p-3 font-mono text-xs overflow-y-auto max-h-32">
              <div className="flex flex-col">
                {codeLines.map((line, index) => (
                  <div key={index} className="flex mb-1">
                    <span className="text-gray-500 w-5">{index + 1}</span>
                    <div className="text-gray-300">
                      <div className="flex">
                        {index === 0 && (
                          <span className={typedCode[0].length > 0 ? "text-blue-400" : ""}>{typedCode[0]}</span>
                        )}
                        {index === 1 && (
                          <span className={typedCode[1].length > 0 ? "text-blue-400" : ""}>{typedCode[1]}</span>
                        )}
                        {index === 2 && (
                          <span className={typedCode[2].length > 0 ? "text-blue-400" : ""}>{typedCode[2]}</span>
                        )}
                        {index === 3 && (
                          <span className={typedCode[3].length > 0 ? "text-purple-400" : ""}>{typedCode[3]}</span>
                        )}
                        {index === 4 && (
                          <span className={typedCode[4].length > 0 ? "text-yellow-400" : ""}>{typedCode[4]}</span>
                        )}
                        {index === 5 && (
                          <span className={typedCode[5] ? "text-purple-400" : ""}>{typedCode[5]}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {typingComplete && (
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20 animate-fadeIn">
                <div className="text-xl font-bold text-green-400 animate-pulse">Success++!</div>
              </div>
            )}
          </div>
          
          {/* Social links */}
          <div 
            className={`mt-16 md:mt-12 flex justify-center md:justify-start gap-6 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '1500ms' }}
          >
            <a 
              href="https://github.com"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 animate-float"
              style={{ animationDelay: '0s' }}
            >
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.762-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.467-2.381 1.236-3.221-.123-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.872.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 animate-float"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.854-3.063-1.854 0-2.136 1.445-2.136 2.939v5.728h-3v-11h2.893v1.504h.041c.402-.762 1.385-1.564 2.854-1.564 3.051 0 3.612 2.006 3.612 4.612v6.448z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 animate-float"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.906.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.936 3.236.63 4.025c-.297.765-.498 1.635-.558 2.913C.015 8.217 0 8.624 0 11.884v.232c0 3.26.015 3.667.072 4.947.06 1.278.261 2.148.558 2.913.306.789.717 1.459 1.384 2.126s1.337 1.078 2.126 1.384c.765.297 1.635.498 2.913.558 1.28.057 1.687.072 4.947.072s3.667-.015 4.947-.072c1.278-.06 2.148-.261 2.913-.558.789-.306 1.459-.717 2.126-1.384s1.078-1.337 1.384-2.126c.297-.765.498-1.635.558-2.913.057-1.28.072-1.687.072-4.947v-.232c0-3.26-.015-3.667-.072-4.947-.06-1.278-.261-2.148-.558-2.913-.306-.789-.717-1.459-1.384-2.126S20.764.936 19.975.63c-.765-.297-1.635-.498-2.913-.558C15.782.015 15.375 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.9.423.422.683.82.9 1.382.166.422.36 1.057.415 2.227.055 1.265.07 1.647.07 4.85s-.016 3.585-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.9 1.382-.422.423-.82.683-1.382.9-.422.166-1.057.36-2.227.415-1.265.055-1.647.07-4.85.07s-3.585-.016-4.85-.071c-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.9-.423-.422-.683-.82-.9-1.382-.166-.422-.36-1.057-.415-2.227-.055-1.265-.07-1.647-.07-4.85s.016-3.585.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.9-1.382.422-.423.82-.683 1.382-.9.422-.166 1.057-.36 2.227-.415 1.265-.055 1.647-.07 4.85-.07zm0 3.333a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 10.834a4.333 4.333 0 110-8.667 4.333 4.333 0 010 8.667zm6.834-11.167a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
              </svg>
            </a>
            <a 
              href="https://leetcode.com/u/kulkarnikalpak15/"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 animate-float"
              style={{ animationDelay: '0.8s' }}
            >
              <span className="sr-only">LeetCode</span>
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.514 1.357.514 1.871 0 .514-.513.514-1.356 0-1.87l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.516-1.356.002-1.87-.514-.514-1.356-.514-1.87 0l-10.1 10.1c-.493.493-.77 1.15-.77 1.846 0 .714.276 1.37.77 1.863l4.347 4.373c1.051 1.051 2.437 1.613 3.908 1.613 1.471 0 2.857-.562 3.907-1.613l2.7-2.608c.514-.514.514-1.357 0-1.87-.514-.514-1.357-.514-1.871 0z" />
              </svg> */}
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="30"
                  viewBox="0,0,256,256"
                  style={{ fill: '#EBEBEB' }}
                >
                  <g
                    fill="#ebebeb"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: 'normal' }}
                  >
                    <g transform="scale(16,16)">
                      <path
                        d="M10.44727,0.26563c-0.13004,0.00413 -0.25335,0.05878 -0.34375,0.15234l-4.44727,4.44922l-2.56055,2.55859c-0.05137,0.05015 -0.09134,0.11076 -0.11719,0.17773c-1.20865,1.37039 -1.19195,3.4604 0.11719,4.76953l2.56055,2.56055c1.36138,1.36138 3.58588,1.36138 4.94727,0l2.25,-2.25c0.12632,-0.12664 0.17547,-0.31106 0.12895,-0.48378c-0.04653,-0.17271 -0.18167,-0.30748 -0.35451,-0.35354c-0.17284,-0.04605 -0.35712,0.00361 -0.48342,0.13028l-2.25,2.25c-0.97862,0.97862 -2.55263,0.97862 -3.53125,0l-2.56055,-2.56055c-0.97862,-0.97862 -0.97862,-2.55459 0,-3.5332l2.56055,-2.55859c0.97862,-0.97862 2.55263,-0.97862 3.53125,0l2.25,2.25c0.19524,0.19578 0.51223,0.19622 0.70801,0.00098c0.19578,-0.19524 0.19622,-0.51223 0.00098,-0.70801l-2.25,-2.25c-0.69283,-0.69282 -1.60914,-1.02407 -2.52148,-1.01172l2.73047,-2.73047c0.14893,-0.14387 0.19378,-0.36466 0.11278,-0.55523c-0.08099,-0.19058 -0.27107,-0.31152 -0.47802,-0.30414zM7.32813,9.40039c-0.18031,-0.00254 -0.34803,0.09219 -0.43893,0.24794c-0.0909,0.15575 -0.0909,0.34837 0,0.50412c0.0909,0.15575 0.25862,0.25049 0.43893,0.24794h6.90039c0.18031,0.00254 0.34803,-0.09219 0.43893,-0.24794c0.0909,-0.15575 0.0909,-0.34837 0,-0.50412c-0.0909,-0.15575 -0.25862,-0.25049 -0.43893,-0.24794z"
                      />
                    </g>
                  </g>
                </svg>
            </a>
            <a 
              href="https://www.geeksforgeeks.org/user/kulkarniko6yz/"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 animate-float"
              style={{ animationDelay: '1s' }}
            >
              <span className="sr-only">GeeksforGeeks</span>
              <svg fill="#ded9d9" width="154px" height="154px" viewBox="-2.16 -2.16 28.32 28.32" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#ded9d9" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z"></path></g></svg>
            </a>
          </div>
        </div>
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
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
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