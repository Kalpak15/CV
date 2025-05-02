// // import { useState, useEffect } from 'react';

// // function Navbar() {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 50);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   return (
// //     <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
// //       <div className="container mx-auto px-4 flex justify-between items-center">
// //         <a href="#" className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
// //           Portfolio
// //         </a>
        
// //         <button 
// //           className="md:hidden text-white p-2" 
// //           onClick={() => setMenuOpen(!menuOpen)}
// //         >
// //           <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
// //           <div className={`w-6 h-0.5 bg-white my-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
// //           <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
// //         </button>
        
// //         <nav className={`md:block ${menuOpen ? 'block absolute top-full left-0 w-full bg-black/90 p-4' : 'hidden'}`}>
// //           <ul className="md:flex space-y-4 md:space-y-0 md:space-x-6">
// //             {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
// //               <li key={item} className="group">
// //                 <a 
// //                   href={`#${item.toLowerCase()}`} 
// //                   className="text-white relative font-medium"
// //                   onClick={() => setMenuOpen(false)}
// //                 >
// //                   {item}
// //                   <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // }

// // export default Navbar;

// import { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'}`}>
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <span className="text-purple-400 text-2xl font-bold">Portfolio</span>
//           <div className="ml-2 h-3 w-3 bg-purple-500 rounded-full opacity-80"></div>
//         </div>
        
//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-8">
//           {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
//             <a 
//               key={item} 
//               href={`#${item.toLowerCase()}`}
//               className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
//             >
//               {item}
//             </a>
//           ))}
//         </div>
        
//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button 
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-300 hover:text-purple-400 focus:outline-none"
//           >
//             {menuOpen ? (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
      
//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-black/95 backdrop-blur-md">
//           <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//             {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
//               <a 
//                 key={item} 
//                 href={`#${item.toLowerCase()}`}
//                 className="text-gray-300 hover:text-purple-400 transition-colors duration-300 py-2 border-b border-gray-800"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black py-3' : 'bg-black py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-purple-500 text-3xl font-bold">Portfolio</span>
          <div className="ml-2 h-3 w-3 bg-purple-600 rounded-full"></div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-16">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-purple-400 transition-colors duration-300 text-lg"
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-purple-400 focus:outline-none"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-purple-400 transition-colors duration-300 py-2 border-b border-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;