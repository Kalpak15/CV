// // import { useEffect, useRef } from 'react';

// // function Skills() {
// //   const sectionRef = useRef(null);
  
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           entry.target.classList.add('fade-in');
// //           observer.unobserve(entry.target);
// //         }
// //       },
// //       { threshold: 0.1 }
// //     );
    
// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }
    
// //     return () => {
// //       if (sectionRef.current) {
// //         observer.unobserve(sectionRef.current);
// //       }
// //     };
// //   }, []);

// //   const skills = [
// //     { name: "HTML/CSS", level: 95 },
// //     { name: "JavaScript", level: 90 },
// //     { name: "React", level: 85 },
// //     { name: "Node.js", level: 80 },
// //     { name: "MongoDB", level: 75 },
// //     { name: "TypeScript", level: 70 },
// //   ];

// //   return (
// //     <section id="skills" className="py-24 bg-black" ref={sectionRef}>
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-4xl font-bold mb-16 text-center">
// //           <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">My Skills</span>
// //         </h2>
        
// //         <div className="grid md:grid-cols-2 gap-16">
// //           <div>
// //             <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
            
// //             <div className="space-y-6">
// //               {skills.map((skill, index) => (
// //                 <div key={skill.name} className="skill-item">
// //                   <div className="flex justify-between mb-2">
// //                     <span className="text-gray-300">{skill.name}</span>
// //                     <span className="text-purple-400">{skill.level}%</span>
// //                   </div>
// //                   <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
// //                     <div 
// //                       className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full skill-progress-bar" 
// //                       style={{ 
// //                         width: `${skill.level}%`, 
// //                         animationDelay: `${index * 0.1}s` 
// //                       }}
// //                     ></div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
          
// //           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
// //             {["React", "Express.js", "MongoDB", "MySql", "Tailwind CSS"].map((tech) => (
// //               <div 
// //                 key={tech}
// //                 className="aspect-square flex flex-col items-center justify-center bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 tech-card"
// //               >
// //                 <div className="w-16 h-16 mb-4 flex items-center justify-center">
// //                   {/* Replace with actual tech icons */}
// //                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
// //                 </div>
// //                 <h4 className="text-gray-300 font-medium">{tech}</h4>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Skills;

// import { useEffect, useRef } from 'react';

// function Skills() {
//   const sectionRef = useRef(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('fade-in');
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );
    
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
    
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   // Technical Skills with proficiency levels
//   const technicalSkills = [
//     { name: "HTML/CSS", level: 95 },
//     { name: "JavaScript", level: 90 },
//     { name: "C++", level: 95 },
//     { name: "React", level: 85 },
//     { name: "Python", level: 85 },
//     { name: "Node.js", level: 80 },
//     { name: "SQL", level: 80 },
//     { name: "MongoDB", level: 75 },
//     { name: "TypeScript", level: 70 },
//     { name: "C", level: 75 },
//   ];

//   // Categorized skills for the cards
//   const skillCategories = [
//     {
//       category: "Frameworks & Libraries",
//       items: ["React.js", "Express.js", "Tailwind CSS", "Pandas", "NumPy"]
//     },
//     {
//       category: "Databases",
//       items: ["MySQL", "MongoDB", "PostgreSQL"]
//     },
//     {
//       category: "Developer Tools",
//       items: ["VS Code", "Git", "PyCharm", "Eclipse IDE"]
//     },
//     {
//       category: "Core Competencies",
//       items: ["DSA", "OOP", "DBMS", "Problem Solving"]
//     },
//     {
//       category: "Platforms",
//       items: ["Google Cloud Platform", "Android Studio"]
//     }
//   ];

//   return (
//     <section ref={sectionRef} className="py-16 bg-gray-900 text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-16 text-purple-500">My Skills</h2>
        
//         <div className="mb-12">
//           <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {technicalSkills.map((skill, index) => (
//               <div key={index} className="mb-4">
//                 <div className="flex justify-between mb-1">
//                   <span className="font-medium">{skill.name}</span>
//                   <span>{skill.level}%</span>
//                 </div>
//                 <div className="w-full bg-gray-700 rounded-full h-2.5">
//                   <div 
//                     className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full" 
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skillCategories.map((category, idx) => (
//             <div key={idx} className="bg-gray-800 rounded-lg p-6 shadow-lg">
//               <h3 className="text-xl font-semibold mb-4 text-purple-400">{category.category}</h3>
//               <div className="flex flex-wrap gap-2">
//                 {category.items.map((item, itemIdx) => (
//                   <span 
//                     key={itemIdx} 
//                     className="bg-gray-700 text-purple-300 px-3 py-1 rounded-full text-sm"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;


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

  // Technical Skills with proficiency levels
  const technicalSkills = [
    { 
      name: "HTML/CSS", 
      level: 95, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
    },
    { 
      name: "JavaScript", 
      level: 90, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
    },
    { 
      name: "C++", 
      level: 95, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
    },
    { 
      name: "React", 
      level: 85, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
    },
    { 
      name: "Python", 
      level: 85, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
    },
    { 
      name: "Node.js", 
      level: 80, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
    },
    { 
      name: "SQL", 
      level: 80, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
    },
    { 
      name: "MongoDB", 
      level: 75, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
    },
    { 
      name: "TypeScript", 
      level: 70, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
    },
    { 
      name: "C", 
      level: 75, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" 
    },
  ];

  // Categorized skills for the cards with icons
  const skillCategories = [
    {
      category: "Frameworks & Libraries",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      items: [
        { 
          name: "React.js", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
        },
        { 
          name: "Express.js", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" 
        },
        { 
          name: "Tailwind CSS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
        },
        { 
          name: "Pandas", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" 
        },
        { 
          name: "NumPy", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" 
        }
      ]
    },
    {
      category: "Databases",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      items: [
        { 
          name: "MySQL", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
        },
        { 
          name: "MongoDB", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
        },
        { 
          name: "PostgreSQL", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
        }
      ]
    },
    {
      category: "Developer Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      items: [
        { 
          name: "VS Code", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
        },
        { 
          name: "Git", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
        },
        { 
          name: "PyCharm", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" 
        },
        { 
          name: "Eclipse IDE", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" 
        }
      ]
    },
    {
      category: "Core Competencies",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      items: [
        { 
          name: "DSA", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
        },
        { 
          name: "OOP", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
        },
        { 
          name: "DBMS", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
        },
        { 
          name: "Problem Solving", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
        }
      ]
    },
    {
      category: "Platforms",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      items: [
        { 
          name: "Google Cloud Platform", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" 
        },
        { 
          name: "Android Studio", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" 
        }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-purple-500">My Skills</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <div className="flex items-center">
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`} 
                      className="w-5 h-5 mr-2"
                    />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={category.icon} 
                  alt={`${category.category} icon`} 
                  className="w-6 h-6 mr-2"
                />
                <h3 className="text-xl font-semibold text-purple-400">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIdx) => (
                  <span 
                    key={itemIdx} 
                    className="bg-gray-700 text-purple-300 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    <img 
                      src={item.icon} 
                      alt={`${item.name} icon`}
                      className="w-4 h-4 mr-1" 
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;