
import { useState, useEffect, useRef } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);
  const particlesRef = useRef(null);
  
  // Generate floating particles
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

  // Initial animations and mouse tracking
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

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      const title = titleRef.current;
      const contactInfo = contactInfoRef.current;
      const form = formRef.current;
      
      if (title) {
        title.style.transform = `translate3d(${x * 15}px, ${y * 15}px, 0)`;
      }
      
      if (contactInfo) {
        contactInfo.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;
      }
      
      if (form) {
        form.style.transform = `translate3d(${x * -10}px, ${y * -10}px, 0) rotateY(${x * 2}deg) rotateX(${y * -2}deg)`;
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      alert('Message sent successfully!');
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-black relative overflow-hidden flex items-center"
      ref={sectionRef}
    >
      {/* Custom cursor */}
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
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 
          ref={titleRef}
          className={`text-5xl font-bold mb-16 text-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text relative inline-block">
            Contact Me
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 animate-line-grow"></span>
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div 
            ref={contactInfoRef}
            className={`transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                  <h4 className="text-gray-300 font-medium">Email</h4>
                  <a href="mailto:kulkarnikalpak15@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">kulkarnikalpak15@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                  <h4 className="text-gray-300 font-medium">Phone</h4>
                  <a href="tel:+918208370690" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">+91 8208370690</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-purple-400 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                  <h4 className="text-gray-300 font-medium">Location</h4>
                  <p className="text-purple-400">Palghar, Maharashtra, India</p>
                </div>
              </div>
            </div>
            
            <div className={`mt-12 transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
              <h4 className="text-gray-300 font-medium mb-4">Social Media</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <span className="sr-only">GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.762-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.467-2.381 1.236-3.221-.123-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.872.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/kalpakanilkulkarni" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.854-3.063-1.854 0-2.136 1.445-2.136 2.939v5.728h-3v-11h2.893v1.504h.041c.402-.762 1.385-1.564 2.854-1.564 3.051 0 3.612 2.006 3.612 4.612v6.448z"/>
                  </svg>
                </a>
                {/* <a 
                  href="https://twitter.com" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.557 4.897 4.897 0 01-2.229-.616v.062a4.916 4.916 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.916 4.916 0 004.586 3.414A9.867 9.867 0 010 19.54a13.913 13.913 0 007.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.426-.014-.637A10.025 10.025 0 0024 4.557z"/>
                  </svg>
                </a> */}
                {/* <a 
                  href="https://instagram.com" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.906.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.936 3.236.63 4.025c-.297.765-.498 1.635-.558 2.913C.015 8.217 0 8.624 0 11.884v.232c0 3.26.015 3.667.072 4.947.06 1.278.261 2.148.558 2.913.306.789.717 1.459 1.384 2.126s1.337 1.078 2.126 1.384c.765.297 1.635.498 2.913.558 1.28.057 1.687.072 4.947.072s3.667-.015 4.947-.072c1.278-.06 2.148-.261 2.913-.558.789-.306 1.459-.717 2.126-1.384s1.078-1.337 1.384-2.126c.297-.765.498-1.635.558-2.913.057-1.28.072-1.687.072-4.947v-.232c0-3.26-.015-3.667-.072-4.947-.06-1.278-.261-2.148-.558-2.913-.306-.789-.717-1.459-1.384-2.126S20.764.936 19.975.63c-.765-.297-1.635-.498-2.913-.558C15.782.015 15.375 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.9.423.422.683.82.9 1.382.166.422.36 1.057.415 2.227.055 1.265.07 1.647.07 4.85s-.016 3.585-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.9 1.382-.422.423-.82.683-1.382.9-.422.166-1.057.36-2.227.415-1.265.055-1.647.07-4.85.07s-3.585-.016-4.85-.071c-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.9-.423-.422-.683-.82-.9-1.382-.166-.422-.36-1.057-.415-2.227-.055-1.265-.07-1.647-.07-4.85s.016-3.585.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.9-1.382.422-.423.82-.683 1.382-.9.422-.166 1.057-.36 2.227-.415 1.265-.055 1.647-.07 4.85-.07zm0 3.333a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 10.834a4.333 4.333 0 110-8.667 4.333 4.333 0 010 8.667zm6.834-11.167a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  </svg>
                </a>
                 */}
                  <a 
                    href="tel:+91 8208370690"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 animate-float"
                    style={{ animationDelay: '0.6s' }}
                  >
                    <span className="sr-only">Phone</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </a>
                 <a 
                  href="mailto:kulkarnikalapk15@gmail.com"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 animate-float"
                  style={{ animationDelay: '0.8s' }}
                >
                  <span className="sr-only">Email</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div 
            ref={formRef}
            className={`transition-all duration-1000 ease-out ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '700ms', perspective: '1000px' }}
          >
            <div className="relative p-6 bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-800 shadow-xl overflow-hidden group">
              {/* Animated border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-white relative z-10">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="group">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all duration-300 group-hover:border-purple-500/50"
                    required
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all duration-300 group-hover:border-purple-500/50"
                    required
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5" 
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none transition-all duration-300 group-hover:border-purple-500/50"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 disabled:opacity-70 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute top-0 left-0 w-full h-full bg-white/30 skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </button>
              </form>
            </div>
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

export default Contact;