import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Calendar, MapPin, ExternalLink, Code, Users, Award, TrendingUp } from 'lucide-react';

function Experience() {
  const [loaded, setLoaded] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  // Experience data
  const experiences = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      duration: "Jan 2023 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Led development of scalable web applications using React, Node.js, and AWS. Implemented microservices architecture resulting in 40% improved performance.",
      achievements: [
        "Built and deployed 5+ production applications serving 10k+ users",
        "Reduced application load time by 60% through optimization",
        "Mentored 3 junior developers and led code review processes",
        "Implemented CI/CD pipelines reducing deployment time by 75%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB", "TypeScript"],
      current: true
    },
    {
      id: 2,
      company: "Digital Innovations Ltd.",
      position: "Full Stack Developer",
      duration: "Jun 2021 - Dec 2022",
      location: "New York, NY",
      type: "Full-time",
      description: "Developed and maintained multiple client-facing applications using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.",
      achievements: [
        "Developed responsive web applications for 15+ clients",
        "Integrated third-party APIs improving functionality by 50%",
        "Optimized database queries reducing response time by 45%",
        "Participated in agile development processes and sprint planning"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "Django", "JavaScript"],
      current: false
    },
    {
      id: 3,
      company: "StartupCo",
      position: "Frontend Developer",
      duration: "Jan 2020 - May 2021",
      location: "Austin, TX",
      type: "Contract",
      description: "Worked in a fast-paced startup environment building user interfaces and implementing responsive designs. Focused on user experience and performance optimization.",
      achievements: [
        "Created pixel-perfect UI components from Figma designs",
        "Improved user engagement by 35% through UX enhancements",
        "Implemented responsive design supporting all device types",
        "Collaborated with design team to establish component library"
      ],
      technologies: ["React", "Sass", "JavaScript", "Figma", "Git", "Webpack"],
      current: false
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoaded(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for custom cursor
  useEffect(() => {
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

  // Auto-scroll through experiences
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExperience((prev) => (prev + 1) % experiences.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [experiences.length]);

  return (
    <section 
      id="experience" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black py-20"
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

      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="animate-blurFloat absolute top-1/4 -left-10 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="animate-blurFloat animation-delay-2000 absolute -bottom-24 -right-10 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="animate-blurFloat animation-delay-4000 absolute top-1/3 right-1/4 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 grid-bg"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text relative inline-block">
              Experience
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 animate-line-grow"></span>
            </span>
          </h2>
          <p 
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '400ms' }}
          >
            My professional journey building innovative solutions and leading development teams
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Timeline Navigation */}
            <div 
              className={`lg:w-1/3 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="sticky top-8">
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <div
                      key={exp.id}
                      className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                        activeExperience === index 
                          ? 'bg-white/10 backdrop-blur-md border border-purple-500/30 shadow-lg shadow-purple-500/20' 
                          : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                      }`}
                      onClick={() => setActiveExperience(index)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-3 h-3 rounded-full ${exp.current ? 'bg-green-400 animate-pulse' : 'bg-purple-400'}`}></div>
                        <h3 className="font-semibold text-white">{exp.company}</h3>
                      </div>
                      <p className="text-sm text-gray-300 mb-1">{exp.position}</p>
                      <p className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </p>
                      {activeExperience === index && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-r-full"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Details */}
            <div 
              className={`lg:w-2/3 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl shadow-purple-500/10">
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-white">{experiences[activeExperience].position}</h3>
                    {experiences[activeExperience].current && (
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30 animate-pulse">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-semibold text-lg">{experiences[activeExperience].company}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="w-4 h-4" />
                      {experiences[activeExperience].duration}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="w-4 h-4" />
                      {experiences[activeExperience].location}
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {experiences[activeExperience].description}
                  </p>
                </div>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {experiences[activeExperience].achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10 animate-float"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-400" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeExperience].technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white border border-purple-500/30 rounded-full text-sm font-medium hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300 animate-float"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div 
          className={`flex justify-center mt-12 gap-2 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '1000ms' }}
        >
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveExperience(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeExperience === index 
                  ? 'bg-purple-500 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .grid-bg {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 80%);
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
          animation: blurFloat 20s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Experience;