import { useEffect, useRef } from 'react';

function About() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
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

  return (
    <section id="about" className="py-24 bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden transform hover:rotate-3 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm"></div>
              <img 
                src="/api/placeholder/400/400" 
                alt="Your profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full opacity-20 blur-xl"></div>
          </div>
          
          <div className="about-content">
            <h3 className="text-2xl font-bold mb-6 text-white">
              I'm a <span className="text-purple-400">Full Stack Developer</span> based in [Your Location]
            </h3>
            
            <p className="text-gray-300 mb-6">
              I specialize in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using React and modern backend technologies.
            </p>
            
            <p className="text-gray-300 mb-8">
              With [X] years of experience in web development, I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always strive to write elegant and efficient code.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 bg-gray-800 rounded-full text-gray-300">
                <span className="text-purple-400">20+</span> Projects Completed
              </div>
              <div className="px-4 py-2 bg-gray-800 rounded-full text-gray-300">
                <span className="text-blue-400">5+</span> Years Experience
              </div>
              <div className="px-4 py-2 bg-gray-800 rounded-full text-gray-300">
                <span className="text-pink-400">100%</span> Client Satisfaction
              </div>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 transform hover:-translate-y-1"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;