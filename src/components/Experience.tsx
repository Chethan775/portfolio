import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

export default function Experience({ darkMode }: ExperienceProps) {
  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300`}>
            <div className="flex items-start gap-4">
              <div className={`${darkMode ? 'bg-blue-500/10' : 'bg-blue-100'} p-3 rounded-lg flex-shrink-0`}>
                <Briefcase className="text-blue-500" size={24} />
              </div>

              <div className="flex-1">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  Web Development Intern
                </h3>

                <p className="text-blue-500 font-semibold mb-4">Anudeep Foundation</p>

                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Developed an E-commerce website for small businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Worked on frontend and backend integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Improved website UI/UX</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
