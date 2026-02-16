const experiences = [
  {
    type: 'education',
    title: 'Bachelor of Arts in Computer Science',
    organization: 'Lake Forest College',
    period: 'Jan 2022 - Dec 2025',
    description:
      'GPA: 3.95. Focused on software engineering, AI, and systems programming.',
    highlights: [
      'Coursework: AI, Data Structures & Algorithms, Database Systems, Operating Systems, Software Engineering, Cryptography',
      '1st Place - Entrepreneurship Venture Design Challenge 2024',
      '1st Place - Public Policy Challenge 2023',
      '3rd Place - Planet Forest Hackathon 2025 (ForesterSwap)',
      'President, Arab Student Association 2024/2025 - Led restructuring, grew community to 50+ members',
    ],
  },
  {
    type: 'work',
    title: 'CyberSecurity Intern',
    organization: 'Lake Forest College',
    period: 'Jan 2025 - Dec 2025',
    description:
      'Conducted threat analysis and security monitoring across college infrastructure.',
    highlights: [
      'Managed security for Microsoft 365 and Azure across 2000+ college accounts',
      'Automated Nessus and Defender reporting, decreasing review time by 25%',
    ],
  },
  {
    type: 'work',
    title: 'Programming Intern',
    organization: 'Lake Forest College',
    period: 'May 2025 - Aug 2025',
    description:
      'Developed internal tools and improved accessibility compliance workflows.',
    highlights: [
      'Created WCAG compliance scripts that flagged violations with 95% accuracy',
      'Built Python automation tools reducing manual data-processing time by 40%',
    ],
  },
  {
    type: 'work',
    title: 'Cloud Networking Specialist',
    organization: 'Habitat For Humanity',
    period: 'Aug 2023 - Dec 2023',
    description:
      'Streamlined workflows and technical operations for volunteer teams.',
    highlights: [
      'Increased operational efficiency by 15% through workflow optimization',
    ],
  },
  {
    type: 'work',
    title: 'Website Developer',
    organization: 'Haitian American Museum of Chicago',
    period: 'Jan 2023 - May 2023',
    description:
      'Rebuilt key site components and optimized the audio archive section.',
    highlights: [
      'Improved load times by 35% and visitor engagement by 25%',
    ],
  },
  {
    type: 'work',
    title: 'IT System Administrator',
    organization: 'Scissor Films Studio',
    period: 'Jun 2020 - Dec 2021',
    description:
      'Managed all technical operations for a remote studio environment.',
    highlights: [
      'Improved system uptime to 99%',
      'Set up hardware/software environments supporting 30% more concurrent workloads',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Experience & Education
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          My journey in computer science and software development.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-200"></div>

          {experiences.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow z-10"></div>

              {/* Content Card */}
              <div
                className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        item.type === 'education'
                          ? 'bg-green-100 text-green-700'
                          : item.type === 'work'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {item.type === 'education'
                        ? '🎓 Education'
                        : item.type === 'work'
                        ? '💼 Work'
                        : '🚀 Project'}
                    </span>
                    <span className="text-gray-500 text-sm">{item.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">
                    {item.organization}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-blue-600 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resume Download */}
        <div className="text-center mt-12">
          <a
            href="/Ahmed_Hani_Yousef_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium"
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
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}
