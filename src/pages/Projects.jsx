import { useState, useEffect, useRef } from 'react';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A complete admin dashboard for e-commerce stores with analytics and inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Social Media App",
      description: "A full-stack social media platform with real-time messaging and post functionality.",
      tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A collaborative project management tool with drag-and-drop task boards and team features.",
      tech: ["React", "Express", "MongoDB", "Socket.io"],
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      githubUrl: "#"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">Featured Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="relative group project-card"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-64 rounded-xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-800/80 text-xs text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.demoUrl} 
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-sm text-white font-medium rounded-full hover:shadow-lg transition duration-300"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="px-4 py-2 border border-white/30 text-sm text-white font-medium rounded-full hover:bg-white/10 transition duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 transform hover:-translate-y-1"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;