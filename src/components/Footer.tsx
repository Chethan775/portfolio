import { Heart, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-white'} py-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-6">
            <a href="https://github.com/Chethan775" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300 hover:scale-110`}>
              <span className="sr-only">GitHub</span>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aichethan" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-300 hover:scale-110`}>
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={24} />
            </a>
            <a href="mailto:schethan775@gmail.com" className={`${darkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-600 hover:text-red-500'} transition-colors duration-300 hover:scale-110`}>
              <span className="sr-only">Email</span>
              <Mail size={24} />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-center flex items-center gap-2`}>
              © 2026 Chethan S | AI & Full Stack Developer
            </p>
            <p className={`${darkMode ? 'text-gray-500' : 'text-gray-500'} text-sm flex items-center gap-1`}>
              Made with <Heart size={16} className="text-red-500 fill-red-500" /> and passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
