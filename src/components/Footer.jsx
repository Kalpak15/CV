function Footer() {
    return (
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                Portfolio
              </a>
              <p className="text-gray-400 mt-2">Crafting digital experiences with code</p>
            </div>
            
            <div className="mt-6 md:mt-0">
              <p className="text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
export default Footer;