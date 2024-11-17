// import React from 'react';

// const Education: React.FC = () => {
//   const educationData = [
//     {
//       institution: 'Indian Institute Of Technology – Ropar ',
//       degree: 'Minor in Artificial Intelligence',
//       description: [
//         'I am currently pursuing a minor in Artificial Intelligence at IIT Ropar, focusing on foundational and advanced AI topics. So far, I am learning ',
//         'AI Fundamentals: Core concepts, including search algorithms, problem-solving methods, and heuristic approaches.',
//         'Machine Learning Techniques: Introduction to various machine learning algorithms and neural network basics.',
//         'Natural Language Processing: Basics of NLP for text analysis and language understanding.',
//       ],
//       logo: '/img/iit.jpg', // Replace with the actual path to your logo
//       website: 'https://www.iitrpr.ac.in/',
//       period: '2024 - 2025',
//     },
//     {
//       institution: 'SRM Institute of Science and Technology',
//       degree: 'B.Tech. in Computer Engineering',
//       description: [
//         'I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.',
//         'Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.',
//         'I have secured a CGPA of 9.15 out of 10',
//       ],
//       logo: '/img/Srmseal.png', // Replace with the actual path to your logo
//       website: 'https://www.srmist.edu.in/',
//       period: '2021 - 2025',
//     },
//   ];

//   const certificationData = [
//     {
//       title: 'AWS Certified Solutions Architect',
//       issuer: 'Amazon Web Services',
//       date: 'March 2022',
//       link: 'https://aws.amazon.com/certification/',
//     },
//     {
//       title: 'Certified Kubernetes Administrator',
//       issuer: 'The Linux Foundation',
//       date: 'July 2021',
//       link: 'https://www.cncf.io/certification/cka/',
//     },
//   ];

//   return (
//     <div className="min-h-screen p-8 bg-gray-900 text-white dark:bg-white dark:text-black transition duration-300">
//       {/* Education Section */}
//       <section>
//         <h1 className="text-4xl font-bold text-center mb-8">Degrees Received</h1>
//         <div className="space-y-8">
//           {educationData.map((edu, index) => (
//             <div key={index} className="flex items-center gap-6">
//               <div className="flex-shrink-0 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center dark:bg-white">
//                 <img src={edu.logo} alt={`${edu.institution} logo`} className="w-full h-full rounded-full" />
//               </div>
//               <div className="bg-blue-200 dark:bg-white rounded-lg p-6 w-full shadow-md">
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-400">{edu.institution}</h2>
//                   <span className="text-blue-900 dark:text-blue-400 font-medium">{edu.period}</span>
//                 </div>
//                 <p className="text-lg font-semibold text-blue-800 dark:text-blue-300">{edu.degree}</p>
//                 <ul className="mt-4 space-y-2 text-blue-700 dark:text-blue-200 list-disc pl-5">
//                   {edu.description.map((desc, idx) => (
//                     <li key={idx}>{desc}</li>
//                   ))}
//                 </ul>
//                 <a
//                   href={edu.website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-4 bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600"
//                 >
//                   Visit Website
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Divider */}
//       <hr className="my-12 border-blue-400 dark:border-gray-700" />

//       {/* Certifications Section */}
//       <section>
//         <h1 className="text-4xl font-bold text-center mb-8">Certifications</h1>
//         <div className="space-y-6">
//           {certificationData.map((cert, index) => (
//             <div key={index} className="flex justify-between items-center bg-blue-100 dark:bg-white p-6 rounded-lg shadow-md">
//               <div>
//                 <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300">{cert.title}</h2>
//                 <p className="text-blue-700 dark:text-blue-200">Issued by: {cert.issuer}</p>
//                 <p className="text-blue-700 dark:text-blue-200">Date: {cert.date}</p>
//               </div>
//               <a
//                 href={cert.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600"
//               >
//                 View Certification
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Education;


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
      logo: '/img/iit.jpg', // Replace with the actual path to your logo
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
      logo: '/img/Srmseal.png', // Replace with the actual path to your logo
      website: 'https://www.srmist.edu.in/',
      period: '2021 - 2025',
    },
  ];

  const certificationData = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'March 2022',
      link: 'https://aws.amazon.com/certification/',
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'The Linux Foundation',
      date: 'July 2021',
      link: 'https://www.cncf.io/certification/cka/',
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white dark:bg-white dark:text-black transition duration-300">
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
