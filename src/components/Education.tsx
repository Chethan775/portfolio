import { GraduationCap } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

export default function Education({ darkMode }: EducationProps) {
  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Bengaluru City University',
      period: '2023 – 2025',
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Bengaluru City University',
      period: '2020 – 2023',
    },
  ];

  return (
    <section id="education" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-x-2`}
            >
              <div className="flex items-start gap-4">
                <div className={`${darkMode ? 'bg-blue-500/10' : 'bg-blue-100'} p-3 rounded-lg flex-shrink-0`}>
                  <GraduationCap className="text-blue-500" size={24} />
                </div>

                <div className="flex-1">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                    {edu.degree}
                  </h3>

                  <p className="text-blue-500 font-semibold mb-1">{edu.institution}</p>

                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {edu.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
