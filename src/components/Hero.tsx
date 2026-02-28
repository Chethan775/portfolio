import { ArrowRight, Code2 } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'} pt-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-6 inline-block">
            <div className={`p-4 rounded-full ${darkMode ? 'bg-blue-500/10' : 'bg-blue-100'} animate-pulse`}>
              <Code2 className="text-blue-500" size={48} />
            </div>
          </div>

          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Hi, I'm <span className="text-blue-500">Chethan S</span>
          </h1>

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Aspiring AI & Full Stack Developer
          </h2>

          <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
            Master's student in Computer Science passionate about building AI-powered and full stack web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className={`px-8 py-4 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'} border-2 ${darkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
