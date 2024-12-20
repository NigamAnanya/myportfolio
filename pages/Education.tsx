import React from 'react';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: 'Indian Institute Of Technology – Ropar ',
      degree: 'Minor in Artificial Intelligence',
      description: [
        'I am currently pursuing a minor in Artificial Intelligence at IIT Ropar, focusing on foundational and advanced AI topics. So far, I am learning ',
        'AI Fundamentals: Core concepts, including search algorithms, problem-solving methods, and heuristic approaches.',
        'Machine Learning Techniques: Introduction to various machine learning algorithms and neural network basics.',
        'Natural Language Processing: Basics of NLP for text analysis and language understanding.',
      ],
      logo: '/img/iit.jpg',
      website: 'https://www.iitrpr.ac.in/',
      period: '2024 - 2025',
    },
    {
      institution: 'SRM Institute of Science and Technology',
      degree: 'B.Tech. in Computer Engineering',
      description: [
        'I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.',
        'Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.',
        'I have secured a CGPA of 9.15 out of 10',
      ],
      logo: '/img/Srmseal.png', 
      website: 'https://www.srmist.edu.in/',
      period: '2021 - 2025',
    },
  ];

  const certificationData = [
    {
      title: 'Microsoft Certified: Azure AI Fundamentals',
      issuer: 'Microsoft',
      date: 'July 2024',
      link: 'https://drive.google.com/file/d/1L5B8uLCma_slftQvHyZ22bijY6_5u_Vx/view?usp=sharing',
    },
    {
      title: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
      issuer: 'Oracle Certified Professional',
      date: 'July 2024',
      link: 'https://drive.google.com/file/d/1MnmoYIYOcCYvMthYXZ3lQodZ1R7vLsb-/view?usp=sharing',
    },
    {
      title: 'Micro-Certification - Welcome to ServiceNow',
      issuer: 'ServiceNow',
      date: 'June 2024',
      link: 'https://drive.google.com/file/d/1vgG1mLPHTs0y-slQs0exYJky2u2RmRlQ/view?usp=sharing',
    },
    {
      title: 'Object-Oriented Data Structures in C++',
      issuer: 'Coursera',
      date: 'July 2023',
      link: 'https://drive.google.com/file/d/1n72zM7rQDAGQD557kmQB-eK8V5D2evV4/view?usp=sharing',
    },
    
    {
      title: 'Introduction to Packet Tracer',
      issuer: 'Cisco Networking Academy',
      date: 'May 2023',
      link: 'https://drive.google.com/file/d/17r0_SRIQVJJNs0AJLXGkYyATcZsUR8qh/view?usp=sharing',
    },
    {
      title: 'AWS Academy Machine Learning Foundations',
      issuer: 'AWS Academy Graduate',
      date: 'April 2023',
      link: 'https://drive.google.com/file/d/1tkQ5UXMEkKv4bWthz4b0yvxGxekLYuZ3/view?usp=sharing',
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-700 text-white dark:bg-white dark:text-black transition duration-300">
      {/* Education Section */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-8">Degrees Received</h1>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="flex-shrink-0 w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center dark:bg-white">
                <img src={edu.logo} alt={`${edu.institution} logo`} className="w-full h-full rounded-full" />
              </div>
              <div className="bg-gray-800 dark:bg-white rounded-lg p-6 w-full shadow-md">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-white dark:text-gray-600">{edu.institution}</h2>
                  <span className="text-white dark:text-gray-400 font-medium">{edu.period}</span>
                </div>
                <p className="text-lg font-semibold text-white dark:text-gray-500">{edu.degree}</p>
                <ul className="mt-4 space-y-2 text-white dark:text-gray-400 list-disc pl-5">
                  {edu.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                <a
                  href={edu.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-400"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <hr className="my-12 border-blue-400 dark:border-gray-700" />

      {/* Certifications Section */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-8">Certifications</h1>
        <div className="space-y-6">
          {certificationData.map((cert, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-800 dark:bg-white p-6 rounded-lg shadow-md">
              <div>
                <h2 className="text-xl font-semibold text-white dark:text-gray-600">{cert.title}</h2>
                <p className="text-white dark:text-gray-400">Issued by: {cert.issuer}</p>
                <p className="text-white dark:text-gray-400">Date: {cert.date}</p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-400"
              >
                View Certification
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
