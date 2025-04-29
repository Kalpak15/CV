import { useEffect, useRef } from 'react';

function Skills() {
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

  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "TypeScript", level: 70 },
  ];

  return (
    <section id="skills" className="py-24 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">My Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full skill-progress-bar" 
                      style={{ 
                        width: `${skill.level}%`, 
                        animationDelay: `${index * 0.1}s` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["React", "Node.js", "MongoDB", "TypeScript", "Next.js", "Tailwind CSS"].map((tech) => (
              <div 
                key={tech}
                className="aspect-square flex flex-col items-center justify-center bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 tech-card"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  {/* Replace with actual tech icons */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
                </div>
                <h4 className="text-gray-300 font-medium">{tech}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;