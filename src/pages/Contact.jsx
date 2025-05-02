// import { useState, useEffect, useRef } from 'react';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
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

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       console.log('Form submitted:', formData);
//       setFormData({ name: '', email: '', message: '' });
//       setIsSubmitting(false);
//       alert('Message sent successfully!');
//     }, 1500);
//   };

//   return (
//     <section id="contact" className="py-24 bg-black" ref={sectionRef}>
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-16 text-center">
//           <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">Get In Touch</span>
//         </h2>
        
//         <div className="grid md:grid-cols-2 gap-16">
//           <div>
//             <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            
//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-purple-400">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="text-gray-300 font-medium">Email</h4>
//                   <a href="mailto:your.email@example.com" className="text-purple-400 hover:underline">kulkarnikalpak15@gmail.com</a>
//                 </div>
//               </div>
              
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-purple-400">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="text-gray-300 font-medium">Phone</h4>
//                   <a href="tel:+1234567890" className="text-purple-400 hover:underline">+91 8208370690</a>
//                 </div>
//               </div>
              
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-purple-400">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="text-gray-300 font-medium">Location</h4>
//                   <p className="text-purple-400">Palghar ,Maharashtra, India</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="mt-12">
//               <h4 className="text-gray-300 font-medium mb-4">Social Media</h4>
//               <div className="flex space-x-4">
//                 {['github', 'linkedin', 'twitter', 'instagram'].map((social) => (
//                   <a 
//                     key={social}
//                     href="#" 
//                     className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300"
//                   >
//                     <span className="sr-only">{social}</span>
//                     <div className="w-5 h-5 rounded-full bg-current"></div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           <div>
//             <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
//                 <input 
//                   type="text" 
//                   id="name" 
//                   name="name" 
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
//                 <input 
//                   type="email" 
//                   id="email" 
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
//                 <textarea 
//                   id="message" 
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="5" 
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
//                   required
//                 ></textarea>
//               </div>
              
//               <button 
//                 type="submit" 
//                 disabled={isSubmitting}
//                 className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 disabled:opacity-70"
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;





import { useState, useEffect, useRef } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    <section id="contact" className="py-24 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">Get In Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-purple-400 hover:underline">kulkarnikalpak15@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-purple-400 hover:underline">+91 8208370690</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Location</h4>
                  <p className="text-purple-400">Palghar, Maharashtra, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-gray-300 font-medium mb-4">Social Media</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300"
                >
                  <span className="sr-only">GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.762-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.467-2.381 1.236-3.221-.123-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.872.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.854-3.063-1.854 0-2.136 1.445-2.136 2.939v5.728h-3v-11h2.893v1.504h.041c.402-.762 1.385-1.564 2.854-1.564 3.051 0 3.612 2.006 3.612 4.612v6.448z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300"
                >
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.557 4.897 4.897 0 01-2.229-.616v.062a4.916 4.916 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.916 4.916 0 004.586 3.414A9.867 9.867 0 010 19.54a13.913 13.913 0 007.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.426-.014-.637A10.025 10.025 0 0024 4.557z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300"
                >
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.906.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.936 3.236.63 4.025c-.297.765-.498 1.635-.558 2.913C.015 8.217 0 8.624 0 11.884v.232c0 3.26.015 3.667.072 4.947.06 1.278.261 2.148.558 2.913.306.789.717 1.459 1.384 2.126s1.337 1.078 2.126 1.384c.765.297 1.635.498 2.913.558 1.28.057 1.687.072 4.947.072s3.667-.015 4.947-.072c1.278-.06 2.148-.261 2.913-.558.789-.306 1.459-.717 2.126-1.384s1.078-1.337 1.384-2.126c.297-.765.498-1.635.558-2.913.057-1.28.072-1.687.072-4.947v-.232c0-3.26-.015-3.667-.072-4.947-.06-1.278-.261-2.148-.558-2.913-.306-.789-.717-1.459-1.384-2.126S20.764.936 19.975.63c-.765-.297-1.635-.498-2.913-.558C15.782.015 15.375 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.9.423.422.683.82.9 1.382.166.422.36 1.057.415 2.227.055 1.265.07 1.647.07 4.85s-.016 3.585-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.9 1.382-.422.423-.82.683-1.382.9-.422.166-1.057.36-2.227.415-1.265.055-1.647.07-4.85.07s-3.585-.016-4.85-.071c-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.9-.423-.422-.683-.82-.9-1.382-.166-.422-.36-1.057-.415-2.227-.055-1.265-.07-1.647-.07-4.85s.016-3.585.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.9-1.382.422-.423.82-.683 1.382-.9.422-.166 1.057-.36 2.227-.415 1.265-.055 1.647-.07 4.85-.07zm0 3.333a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 10.834a4.333 4.333 0 110-8.667 4.333 4.333 0 010 8.667zm6.834-11.167a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition duration-300 disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;