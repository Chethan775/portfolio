import { Folder, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const projects = [
    {
      title: 'AI Resume Analyzer',
      description: 'A Python-based AI tool that analyzes resumes and provides improvement suggestions using NLP.',
      tags: ['Python', 'NLP', 'AI'],
    },
    {
      title: 'Chatbot Web Application',
      description: 'Built an AI-powered chatbot integrated into a web interface.',
      tags: ['AI', 'JavaScript', 'React'],
    },
    {
      title: 'Student Performance Prediction System',
      description: 'Machine learning model to predict student outcomes based on data.',
      tags: ['Python', 'Machine Learning', 'Data Analysis'],
    },
    {
      title: 'E-Commerce Website',
      description: 'Full stack website with login, product catalog, and cart system.',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Task Management App',
      description: 'Web app for managing daily tasks with authentication and database storage.',
      tags: ['React', 'Node.js', 'MySQL'],
    },
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${darkMode ? 'border-gray-700 hover:border-blue-500' : 'border-gray-200 hover:border-blue-400'} cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${darkMode ? 'bg-blue-500/10' : 'bg-blue-100'} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Folder className="text-blue-500" size={24} />
                </div>
                <ExternalLink
                  className={`${darkMode ? 'text-gray-600' : 'text-gray-400'} group-hover:text-blue-500 transition-colors duration-300`}
                  size={20}
                />
              </div>

              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-blue-500 transition-colors duration-300`}>
                {project.title}
              </h3>

              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 leading-relaxed`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-sm ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'} rounded-full border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
                  >
                    {tag}
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
