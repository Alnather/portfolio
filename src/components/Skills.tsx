const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'C++', level: 80 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Firebase', level: 85 },
      { name: 'WordPress', level: 80 },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'Azure', level: 80 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'Linux', level: 75 },
      { name: 'TensorFlow', level: 70 },
      { name: 'Redis', level: 65 },
    ],
  },
];

const technologies = [
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Azure', icon: '☁️' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'C++', icon: '⚡' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'Linux', icon: '🐧' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life.
        </p>

        {/* Tech Icons Grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-gray-700 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
