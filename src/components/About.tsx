export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            I&apos;m a Computer Science graduate from Lake Forest College with a 3.95 GPA, 
            passionate about building software that makes a real impact. From full-stack 
            web applications to game AI systems, I love tackling complex challenges with 
            clean, efficient code.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            My experience spans cybersecurity, web development, and AI — I&apos;ve worked 
            on everything from securing 2000+ college accounts to building a campus 
            platform used by 30% of students. I&apos;m seeking opportunities to contribute 
            to meaningful projects and grow as a software engineer.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-1">3.95</div>
            <div className="text-gray-600 text-sm">GPA</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-1">4+</div>
            <div className="text-gray-600 text-sm">Internships</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-1">3x</div>
            <div className="text-gray-600 text-sm">Competition Wins</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
            <div className="text-gray-600 text-sm">Websites Built</div>
          </div>
        </div>
      </div>
    </section>
  );
}
