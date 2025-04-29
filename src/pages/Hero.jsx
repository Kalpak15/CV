import { useEffect, useRef } from 'react';

function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    title.classList.add('animate-in');
    setTimeout(() => subtitle.classList.add('animate-in'), 300);
    setTimeout(() => cta.classList.add('animate-in'), 600);
  }, []);

  return (
    <section id="home" className="h-screen flex items-center relative overflow-hidden bg-black">
      <div className="absolute w-full h-full">
        <div className="animate-blob absolute top-1/4 left-1/3 w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="animate-blob animation-delay-2000 absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="animate-blob animation-delay-4000 absolute bottom-1/3 left-1/4 w-64 h-64 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <h2 ref={subtitleRef} className="text-xl md:text-2xl font-light text-gray-300 mb-4 opacity-0 transition-all duration-1000 translate-y-8">
          Hello, I'm
        </h2>
        <h1 ref={titleRef} className="text-4xl md:text-7xl font-bold mb-6 opacity-0 transition-all duration-1000 translate-y-8">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">Your Name</span>
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 max-w-2xl mb-12">
          <span className="typing-text">Full Stack Developer</span>
        </p>
        <div ref={ctaRef} className="opacity-0 transition-all duration-1000 translate-y-8">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 transform hover:-translate-y-1"
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="ml-4 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition duration-300 transform hover:-translate-y-1"
          >
            View Projects
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;