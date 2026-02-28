import { Code, Server, Database, Brain, Wrench } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'blue',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Python', 'PHP'],
      color: 'green',
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
      color: 'purple',
    },
    {
      title: 'AI/ML',
      icon: Brain,
      skills: ['Python', 'Machine Learning basics', 'NLP'],
      color: 'red',
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'VS Code'],
      color: 'yellow',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-500', border: 'border-blue-500/20' },
      green: { bg: 'bg-green-500/10', text: 'text-green-500', border: 'border-green-500/20' },
      purple: { bg: 'bg-purple-500/10', text: 'text-purple-500', border: 'border-purple-500/20' },
      red: { bg: 'bg-red-500/10', text: 'text-red-500', border: 'border-red-500/20' },
      yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-500', border: 'border-yellow-500/20' },
    };
    return colors[color];
  };

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);

            return (
              <div
                key={category.title}
                className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
              >
                <div className={`${colors.bg} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={colors.text} size={28} />
                </div>

                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} ${darkMode ? 'text-gray-300' : 'text-gray-700'} rounded-full text-sm font-medium border ${colors.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
