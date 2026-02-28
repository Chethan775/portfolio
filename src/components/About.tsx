import { User } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <User className="text-blue-500" size={32} />
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              About Me
            </h2>
          </div>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl p-8 sm:p-12 shadow-xl`}>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              I am a Master's student in Computer Science with strong interest in{' '}
              <span className="text-blue-500 font-semibold">Artificial Intelligence</span> and{' '}
              <span className="text-blue-500 font-semibold">Full Stack Development</span>. I enjoy
              building web applications and exploring how AI can solve real-world problems. I am
              seeking an entry-level role or internship in AI or Full Stack Development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
