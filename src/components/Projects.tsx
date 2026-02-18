'use client';

import Image from 'next/image';

const projects = [
  {
    title: 'Boomer - Live Campus Platform',
    description: [
      'Led development, production, and deployment of a fully functional campus platform used by 30% of students',
      'Won 1st Place in Entrepreneurship Venture Design Challenge 2024',
      'Won 3rd Place at Planet Forest Hackathon at Lake Forest College 2025',
    ],
    tech: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'],
    image: '/screengrabs/boomer.png',
    github: 'https://github.com/Alnather/Boomer',
    live: 'https://boomer-ten.vercel.app/',
    featured: true,
  },
  {
    title: 'Game AI: Navigation Systems',
    description: [
      'Developed Python/C++ behavior-tree AI achieving <0.01s reaction times',
      'Outperformed human navigation by 85%',
      'Optimized A* pathfinding, reducing computation overhead by 80% on large maps',
    ],
    tech: ['Python', 'C++', 'Behavior Trees', 'A* Algorithm'],
    image: '/screengrabs/gamenavigation.png',
    github: 'https://github.com/alnather',
    live: null,
    featured: true,
    comingSoon: true,
  },
  {
    title: 'Canon Recruiting',
    description: [
      'Commercial website for a recruiting firm',
      'Built with modern design principles',
      'Focused on user experience and performance',
    ],
    tech: ['Web Development', 'JavaScript', 'CSS', 'Responsive Design'],
    image: '/screengrabs/cannon_recruiting.png',
    github: null,
    live: 'https://canonrecruiting.com',
    featured: true,
  },
  {
    title: 'Brand Constellations - Diagnostic Tool',
    description: [
      'Brand personality diagnostic tool with 35-question assessment across 7 dimensions',
      'Custom radar chart visualization for archetype analysis',
      'Firebase backend with real-time scoring engine',
    ],
    tech: ['Next.js 14', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    image: '/screengrabs/brand_diagnostic.png',
    github: null,
    live: 'https://diagnostic.brandconstellations.com/',
    featured: true,
  },
  {
    title: 'Scissor Films Studio',
    description: [
      'Commercial website for a film production studio',
      'Managed all technical operations',
      'Improved system uptime to 99% as IT System Administrator',
    ],
    tech: ['Web Development', 'JavaScript', 'CSS', 'Performance'],
    image: '/screengrabs/scissorfilms.png',
    github: null,
    live: 'https://www.scissorfilms.com/',
    featured: true,
  },
  {
    title: 'James Marquardt Portfolio',
    description: [
      'WordPress portfolio website with custom styling and optimizations for a professional client',
    ],
    tech: ['WordPress', 'PHP', 'CSS', 'SEO'],
    image: '/screengrabs/jamesmarquardt.jpg',
    github: null,
    live: 'https://www.jamesmarquardt.com/',
    featured: false,
  },
  {
    title: 'HAMOC - Audio Archive',
    description: [
      'Rebuilt key site components for the Haitian American Museum of Chicago',
      'Improved load times by 35% and increased visitor engagement by 25%',
      'Focused on the audio archive section',
    ],
    tech: ['WordPress', 'PHP', 'Performance', 'Audio Integration'],
    image: '/screengrabs/hamoc.png',
    github: null,
    live: 'https://hamoc.org/',
    featured: false,
  },
  {
    title: 'Guitar Helper Assistant',
    description: [
      'AI-powered guitar learning assistant',
      'Uses voice recognition for chord and song practice',
      'Integrates with OpenAI API for intelligent responses',
    ],
    tech: ['JavaScript', 'OpenAI API', 'Web Speech API', 'Node.js'],
    image: '/screengrabs/guitar_assistant.png',
    github: 'https://github.com/Alnather/guitar-assistant',
    live: null,
    featured: false,
  },
];

export default function Projects() {
  const getProjectLink = (project: typeof projects[0]) => {
    if (project.comingSoon) return null;
    return project.live || project.github;
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I&apos;ve worked on. Each one represents a unique 
          challenge and learning experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const projectLink = getProjectLink(project);
            const CardWrapper = projectLink ? 'a' : 'div';
            const cardProps = projectLink
              ? { href: projectLink, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <CardWrapper
                key={index}
                {...cardProps}
                className={`group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  projectLink ? 'cursor-pointer' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  {project.comingSoon && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <ul className="text-gray-600 text-sm mb-4 space-y-1">
                    {project.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.github && (
                      project.comingSoon ? (
                        <span className="flex items-center gap-2 text-gray-400 text-sm cursor-not-allowed">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Code - Coming Soon
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.github!, '_blank');
                          }}
                          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm cursor-pointer bg-transparent border-none p-0"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Code
                        </button>
                      )
                    )}
                    {project.live && !project.comingSoon && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.live!, '_blank');
                        }}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm cursor-pointer bg-transparent border-none p-0"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </button>
                    )}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/alnather"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-all font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
