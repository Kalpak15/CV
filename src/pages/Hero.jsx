// import { useEffect, useRef, useState } from 'react';
// import { ChevronDown, ExternalLink, User, Mail, Code, Send } from 'lucide-react';

// function Hero() {
//   const [loaded, setLoaded] = useState(false);
//   const [codeRevealed, setCodeRevealed] = useState(false);
//   const [currentLine, setCurrentLine] = useState(0);
//   const [typedCode, setTypedCode] = useState(['', '', '', '', '']);
//   const heroRef = useRef(null);
//   const cursorRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const roleTextRef = useRef(null);
//   const codeEditorRef = useRef(null);
//   const ctaRef = useRef(null);
//   const particlesRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [cursorVisible, setCursorVisible] = useState(false);
//   const [typingComplete, setTypingComplete] = useState(false);
//   const roles = ["Full Stack Developer", "UI/UX Designer", "C++ Enthusiast"];
//   const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//   const [currentRoleText, setCurrentRoleText] = useState('');
//   const [showCursor, setShowCursor] = useState(true);

//   // Code editor content - removed type keywords
//   const codeLines = [
//     'success = 0;',
//     'consistency = 1;',
//     'hardwork = 1;',
//     'while(consistency && hardwork) {',
//     '    success++;',
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
    
//     // Start code animation after a short delay
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

//   // Code typing animation with infinite loop
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
//           charIndex++;
//           setTimeout(typeChar, 60);
//         } else {
//           // Line complete, move to next line
//           lineIndex++;
//           charIndex = 0;
          
//           if (lineIndex < codeLines.length) {
//             // Pause between lines
//             setTimeout(typeChar, 300);
//           } else {
//             // All typing complete, show success for 2 seconds then restart
//             setTypingComplete(true);
//             setTimeout(() => {
//               setTypingComplete(false);
//               newTypedCode = ['', '', '', '', ''];
//               setTypedCode([...newTypedCode]);
//               setCurrentLine(0);
//               lineIndex = 0;
//               charIndex = 0;
//               setTimeout(typeChar, 500); // Restart after a short delay
//             }, 2000);
//           }
//         }
//       }
//     };
    
//     // Start typing
//     typeChar();
//   };

//   // Handle typing animation for role text - fixed role text animation
//   useEffect(() => {
//     let isTyping = true;
//     let charIndex = 0;
//     let timer;
//     const roleText = roles[currentRoleIndex];
    
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
//     timer = setTimeout(updateText, 500);
    
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
      
//       if (title && subtitle) {
//         title.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`;
//         subtitle.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
//       }
      
//       if (codeEditor) {
//         codeEditor.style.transform = `translate3d(${x * -15}px, ${y * -15}px, 0) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
//       }
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <section 
//       id="home" 
//       className="h-screen flex items-center justify-center relative overflow-hidden bg-black"
//       ref={heroRef}
//     >
//       {/* Custom cursor */}
//       <div 
//         ref={cursorRef}
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
//       <div ref={particlesRef} className="absolute inset-0 overflow-hidden"></div>
      
//       {/* Animated background */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="animate-blurFloat absolute top-1/4 -left-10 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
//         <div className="animate-blurFloat animation-delay-2000 absolute -bottom-24 -right-10 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
//         <div className="animate-blurFloat animation-delay-4000 absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
//         {/* Animated grid */}
//         <div className="absolute inset-0 grid-bg"></div>
//       </div>
      
//       {/* Code editor animation - removed int and bool type keywords */}
//       <div 
//         ref={codeEditorRef}
//         className={`absolute md:right-10 md:top-1/2 bottom-1/3 right-1/2 transform md:-translate-y-1/2 md:translate-x-0 translate-x-1/2 w-80 md:w-96 h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 transition-all duration-1000 md:flex hidden ${codeRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
//         style={{ perspective: '1000px' }}
//       >
//         <div className="w-full h-full bg-gray-900/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative">
//           {/* Code editor header */}
//           <div className="h-10 bg-gray-800/90 border-b border-white/10 flex items-center px-4">
//             <div className="flex space-x-2">
//               <div className="w-3 h-3 rounded-full bg-red-500"></div>
//               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//               <div className="w-3 h-3 rounded-full bg-green-500"></div>
//             </div>
//             <div className="ml-4 text-xs text-gray-400">success.cpp</div>
//           </div>
          
//           {/* Code editor content - removed the "int" and "bool" type declarations */}
//           <div className="p-6 font-mono text-sm overflow-y-auto h-full">
//             <div className="flex flex-col">
//               {codeLines.map((line, index) => (
//                 <div key={index} className="flex mb-1">
//                   <span className="text-gray-500 w-8">{index + 1}</span>
//                   <div className="text-gray-300">
//                     <div className="min-h-6 flex">
//                       {index === 0 && (
//                         <span className={typedCode[0].length > 0 ? "text-blue-400" : ""}>{typedCode[0]}</span>
//                       )}
//                       {index === 1 && (
//                         <span className={typedCode[1].length > 0 ? "text-blue-400" : ""}>{typedCode[1]}</span>
//                       )}
//                       {index === 2 && (
//                         <span className={typedCode[2].length > 0 ? "text-blue-400" : ""}>{typedCode[2]}</span>
//                       )}
//                       {index === 3 && (
//                         <span className={typedCode[3].length > 0 ? "text-purple-400" : ""}>{typedCode[3]}</span>
//                       )}
//                       {index === 4 && (
//                         <span className={typedCode[4].length > 0 ? "text-yellow-400" : ""}>{typedCode[4]}</span>
//                       )}
//                       {index === 5 && (
//                         <span className={typedCode[5] ? "text-purple-400" : ""}>{typedCode[5]}</span>
//                       )}
                      
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
//           {typingComplete && (
//             <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20 animate-fadeIn">
//               <div className="text-3xl font-bold text-green-400 animate-pulse">Success++!</div>
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
//             <span className="inline-block animate-shimmer">Hello, I'm</span>
//           </h2>
          
//           {/* Improved name styling */}
//           <h1 
//             ref={titleRef} 
//             className={`text-5xl md:text-8xl font-bold mb-8 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
//             style={{ transitionDelay: '600ms' }}
//           >
//             <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text relative inline-block">
//               Kalpak Kulkarni
//               <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 animate-line-grow"></span>
//             </span>
//           </h1>
          
//           {/* Fixed role text animation */}
//           <div 
//             className={`text-xl md:text-3xl text-gray-300 mb-12 h-12 flex items-center md:justify-start justify-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
//             style={{ transitionDelay: '900ms' }}
//           >
//             <span className="typing-indicator">I'm a </span>
//             <span 
//               ref={roleTextRef} 
//               className="typing-text ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
//             >
//               {currentRoleText}
//             </span>
//             <span className={`inline-block w-0.5 h-8 bg-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
//           </div>
          
//           <div 
//             ref={ctaRef} 
//             className={`transition-all duration-1000 ease-out flex flex-wrap md:justify-start justify-center gap-4 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
//             style={{ transitionDelay: '1200ms' }}
//           >
//             <a 
//               href="#contact" 
//               className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
//             >
//               <span className="relative z-10 flex items-center">
//                 <Send className="w-4 h-4 mr-2" />
//                 Get In Touch
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               <span className="absolute top-0 left-0 w-full h-full bg-white/30 skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
//             </a>
            
//             <a 
//               href="#projects" 
//               className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
//             >
//               <span className="relative z-10 flex items-center">
//                 <Code className="w-4 h-4 mr-2" />
//                 View Projects
//               </span>
//               <span className="absolute top-0 left-0 w-full h-full bg-white/10 skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
//             </a>
//           </div>
          
//           {/* Mobile code display - removed type declarations here too */}
//           <div 
//             className={`md:hidden mt-12 w-full max-w-xs mx-auto bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden relative transition-all duration-1000 ${codeRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
//             style={{ transitionDelay: '1500ms' }}
//           >
//             <div className="h-8 bg-gray-800/80 border-b border-white/10 flex items-center px-3">
//               <div className="flex space-x-1">
//                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
//                 <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
//                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
//               </div>
//               <div className="ml-3 text-xs text-gray-400">success.cpp</div>
//             </div>
            
//             <div className="p-3 font-mono text-xs overflow-y-auto max-h-32">
//               <div className="flex flex-col">
//                 {codeLines.map((line, index) => (
//                   <div key={index} className="flex mb-1">
//                     <span className="text-gray-500 w-5">{index + 1}</span>
//                     <div className="text-gray-300">
//                       <div className="flex">
//                         {index === 0 && (
//                           <span className={typedCode[0].length > 0 ? "text-blue-400" : ""}>{typedCode[0]}</span>
//                         )}
//                         {index === 1 && (
//                           <span className={typedCode[1].length > 0 ? "text-blue-400" : ""}>{typedCode[1]}</span>
//                         )}
//                         {index === 2 && (
//                           <span className={typedCode[2].length > 0 ? "text-blue-400" : ""}>{typedCode[2]}</span>
//                         )}
//                         {index === 3 && (
//                           <span className={typedCode[3].length > 0 ? "text-purple-400" : ""}>{typedCode[3]}</span>
//                         )}
//                         {index === 4 && (
//                           <span className={typedCode[4].length > 0 ? "text-yellow-400" : ""}>{typedCode[4]}</span>
//                         )}
//                         {index === 5 && (
//                           <span className={typedCode[5] ? "text-purple-400" : ""}>{typedCode[5]}</span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {typingComplete && (
//               <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20 animate-fadeIn">
//                 <div className="text-xl font-bold text-green-400 animate-pulse">Success++!</div>
//               </div>
//             )}
//           </div>
          
//           {/* Social links */}
//           <div 
//             className={`mt-16 md:mt-12 flex justify-center md:justify-start gap-6 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
//             style={{ transitionDelay: '1500ms' }}
//           >
//             {['github', 'linkedin', 'twitter', 'instagram'].map((social, index) => (
//               <a 
//                 key={social} 
//                 href={`#${social}`}
//                 className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 animate-float"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <span className="sr-only">{social}</span>
//                 {/* Using circle as placeholder */}
//                 <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500"></div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
      
//       {/* Scroll indicator */}
//       <div 
//         className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
//         style={{ transitionDelay: '1800ms' }}
//       >
//         <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center backdrop-blur-sm relative overflow-hidden group cursor-pointer">
//           <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
//           <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">Scroll Down</span>
//         </div>
//         <ChevronDown className="w-6 h-6 text-white/70 mt-2 animate-pulse" />
//       </div>
      
//       {/* Custom CSS */}
//       <style jsx>{`
//         .grid-bg {
//           background-size: 50px 50px;
//           background-image: 
//             linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
//           mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 80%);
//         }
        
//         .typing-cursor {
//           border-right: 2px solid white;
//           animation: cursor-blink 1s infinite;
//           padding-left: 2px;
//           height: 1.2em;
//           display: inline-block;
//         }
        
//         @keyframes cursor-blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
        
//         @keyframes shimmer {
//           0% { opacity: 0.5; }
//           50% { opacity: 1; }
//           100% { opacity: 0.5; }
//         }
        
//         .animate-shimmer {
//           animation: shimmer 3s ease-in-out infinite;
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
        
//         @keyframes float {
//           0% { transform: translateY(0); }
//           50% { transform: translateY(-8px); }
//           100% { transform: translateY(0); }
//         }
        
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-in-out forwards;
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

// export default Hero;



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
  const roles = ["Full Stack Developer", "UI/UX Designer", "C++ Enthusiast"];
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

  // FIXED: Improved role text animation for better completion
  useEffect(() => {
    let isTyping = true;
    let charIndex = 0;
    let timer;
    const roleText = roles[currentRoleIndex];
    
    const updateText = () => {
      if (isTyping) {
        // Typing mode
        if (charIndex <= roleText.length) {
          setCurrentRoleText(roleText.substring(0, charIndex));
          charIndex++;
          
          // Continue typing - slowed down for better readability
          timer = setTimeout(updateText, 70);
        } else {
          // Finished typing, pause before erasing (increased pause time)
          isTyping = false;
          timer = setTimeout(updateText, 3000);
        }
      } else {
        // Erasing mode
        if (charIndex > 0) {
          charIndex--;
          setCurrentRoleText(roleText.substring(0, charIndex));
          
          // Continue erasing - slowed down slightly
          timer = setTimeout(updateText, 40);
        } else {
          // Finished erasing, move to next role with a pause before starting
          isTyping = true;
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          // Add pause before starting next role
          timer = setTimeout(updateText, 800);
        }
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
          
          {/* FIXED: Improved name styling with proper whitespace handling and width */}
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
          
          {/* FIXED: Improved role text animation container with better height and width handling */}
          <div 
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
          </div>
          
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
              href="https://x.com"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 animate-float"
              style={{ animationDelay: '0.4s' }}
            >
              <span className="sr-only">X</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
          </div>
        </div>
      </div> {/* Added closing </div> here for the "Main content" container */}
      
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