import React from 'react';

const Experience: React.FC = () => {
  const experienceData = [
    {
      institution: 'Defence Institute of Psychological Research (DIPR), DRDO',
      role: 'Research and Development Intern',
      description: [
        'Developed a full-stack Examination Portal during a two-month onsite internship at DRDO, leveraging technologies like React and Node.js.',
        'Optimized database queries, reducing page load times by 40%, improving user experience and operational efficiency.',
        'Implemented cutting-edge technologies like Next.js, TypeScript, and MongoDB for scalable backend and dynamic frontend development.',
        'Collaborated with a multidisciplinary team to align project outcomes with organizational goals.',
      ],
      logo: '/img/DRDO.png', // Replace with the actual path to the logo
      website: 'https://www.drdo.gov.in/',
      period: 'December 2023 – February 2024',
    },
    {
      institution: 'Onstralytics',
      role: 'Full Stack Development Intern',
      description: [
        'Engineered and maintained the company’s website using WordPress, React.js, and TypeScript, ensuring seamless user experience and responsiveness.',
        'Led a team of 4 in database hosting and management, optimizing workflows and enhancing data security.',
        'Streamlined backend processes by integrating SQL, PHP, and Laravel frameworks, resulting in faster data access and system performance.',
        'Implemented efficient solutions for scalable and secure database management to support growing business needs.',
      ],
      logo: '/img/OnS.png', // Replace with the actual path to the logo
      website: 'https://onstralytics.com/',
      period: 'January 2023 – July 2023',
    },
  ];

  const clubData = [
    {
      club: "CINTEL's NEXT GEN AI | SRMIST",
      role: 'Web & App Development Member',
      description: [
        'Contributed to the development of the department’s website, showcasing strong technical and creative expertise.',
        'Volunteered in workshops and mentored over 80 students in Front-end Development, fostering collaboration and growth.',
        'Actively collaborated with cross-functional teams to implement AI-driven features on the department website.',
      ],
      logo: '/img/nextgen.jpeg', // Replace with the actual path to the logo
    },
    
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-700 text-white dark:bg-white dark:text-black transition duration-300">
      {/* Experience Section */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-8">Work Experience</h1>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="flex items-center gap-6">
              {/* Logo */}
              <div className="flex-shrink-0 w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center dark:bg-white">
                <img src={exp.logo} alt={`${exp.institution} logo`} className="w-full h-full rounded-full" />
              </div>
              {/* Experience Details */}
              <div className="bg-gray-800 dark:bg-white rounded-lg p-6 w-full shadow-md">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-white dark:text-gray-600">{exp.institution}</h2>
                  <span className="text-white dark:text-gray-400 font-medium">{exp.period}</span>
                </div>
                <p className="text-lg font-semibold text-white dark:text-gray-500">{exp.role}</p>
                <ul className="mt-4 space-y-2 text-white dark:text-gray-400 list-disc pl-5">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-400"
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

      {/* Clubs and Organizations Section */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-8">Clubs and Organizations</h1>
        <div className="space-y-8">
          {clubData.map((club, index) => (
            <div key={index} className="flex items-center gap-6">
              {/* Logo */}
              <div className="flex-shrink-0 w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center dark:bg-white">
                <img src={club.logo} alt={`${club.club} logo`} className="w-full h-full rounded-full" />
              </div>
              {/* Club Details */}
              <div className="bg-gray-800 dark:bg-white rounded-lg p-6 w-full shadow-md">
                <h2 className="text-2xl font-semibold text-white dark:text-gray-600">{club.club}</h2>
                <p className="text-lg font-semibold text-white dark:text-gray-500">{club.role}</p>
                <ul className="mt-4 space-y-2 text-white dark:text-gray-400 list-disc pl-5">
                  {club.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
