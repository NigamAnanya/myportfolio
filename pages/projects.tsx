// import React, { useState } from 'react';

// const allProjects = [
//   {
//     title: 'Personal Portfolio',
//     date: 'November 2024 -  Present',
//     description:
//       'With the rise of cutting-edge web technologies and user-driven applications, I decided to develop innovative solutions that bridge technical capabilities and user engagement. My portfolio reflects my journey in building projects that solve real-world problems effectively and efficiently.',
//     image: '/img/Ananya Pic.jpeg', // Replace with actual image path
//     tags: ['Next.js', 'Typescript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe', 'Shadcn UI', 'Magic UI'],
//     website: '#',
//     source: '#',
//   },
//   {
//     title: 'Magic UI',
//     date: 'June 2023 - Present',
//     description: 'Designed, developed, and sold animated UI components for developers.',
//     image: '/img/Ananya Pic.jpeg', // Replace with actual image path
//     tags: ['Next.js', 'Typescript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe', 'Shadcn UI', 'Magic UI'],
//     website: '#',
//     source: '#',
//   },
//   {
//     title: 'Project XYZ',
//     date: 'Mar 2023 - Aug 2023',
//     description:
//       'A project management tool that helps teams organize tasks efficiently and collaborate seamlessly.',
//     image: '/path/to/project-xyz-image.jpg', // Replace with actual image path
//     tags: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
//     website: '#',
//     source: '#',
//   },
//   {
//     title: 'E-Commerce Platform',
//     date: 'Dec 2022 - Present',
//     description: 'An advanced e-commerce platform built with modern web technologies.',
//     image: '/path/to/e-commerce-image.jpg', // Replace with actual image path
//     tags: ['React', 'Typescript', 'Firebase', 'Redux', 'TailwindCSS'],
//     website: '#',
//     source: '#',
//   },
//   // Add more projects as needed
// ];

// const Projects: React.FC = () => {
//   const [visibleProjects, setVisibleProjects] = useState(2); // Initial number of projects to show

//   const showMoreProjects = () => {
//     setVisibleProjects((prev) => prev + 2); // Load two more projects each time "More Projects" is clicked
//   };

//   return (
//     <div className="min-h-screen p-8 bg-gray-50">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Projects</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {allProjects.slice(0, visibleProjects).map((project, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
//           >
//             <div
//               className="h-40 bg-cover bg-center"
//               style={{
//                 backgroundImage: `url(${project.image})`,
//                 backgroundColor: index % 2 === 0 ? '#f87171' : '#f3f4f6',
//               }}
//             ></div>
//             <div className="p-6">
//               <h2 className="text-2xl font-bold text-gray-800 mb-1">{project.title}</h2>
//               <p className="text-gray-500 mb-4">{project.date}</p>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tags.map((tag, idx) => (
//                   <span
//                     key={idx}
//                     className="bg-gray-200 text-gray-700 text-sm font-medium py-1 px-2 rounded"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex space-x-4">
//                 {project.website && (
//                   <a
//                     href={project.website}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-gray-800 text-white py-2 px-4 rounded flex items-center hover:bg-gray-700 transition"
//                   >
//                     Website
//                   </a>
//                 )}
//                 {project.source && (
//                   <a
//                     href={project.source}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-black text-white py-2 px-4 rounded flex items-center hover:bg-gray-700 transition"
//                   >
//                     Source
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {visibleProjects < allProjects.length && (
//         <div className="text-center mt-8">
//           <button
//             onClick={showMoreProjects}
//             className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
//           >
//             More Projects
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Projects;


import React, { useState } from 'react';

const allProjects = [
  {
    title: 'Personal Portfolio',
    date: 'November 2024 - Present',
    description: `
      With the rise of cutting-edge web technologies and user-driven applications, I decided to develop innovative solutions that bridge technical capabilities and user engagement. My portfolio reflects my journey in building projects that solve real-world problems effectively and efficiently.
    `,
    image: '/img/portfolio.png', // Replace with actual image path
    tags: ['Next.js', 'Typescript', 'Tailwind CSS'],
    website: 'https://ananyanigam.vercel.app/',
    source: 'https://github.com/NigamAnanya/myportfolio',
  },
  {
    title: 'EvaluaTech',
    date: 'December 2023 - Januarary 2024',
    description: `
      Developed an Online Examination System facilitating user login, real test environment, and demo test to enhance user preparation. 
      Incorporated an administrative module for question management, enabling authorities to add or modify questions & view user reports. 
      Revamped typing precision with TypeScript, designed user interfaces with ReactJS, optimized server-side efficiency with Node.js and 
      Express.JS. Deployed MongoDB for scalable data storage, reinforcing a resilient and flexible database infrastructure.
    `,    
    image: '/img/exam.png', // Replace with actual image path
    tags: ['Next.js', 'Typescript', 'MongoDB', 'Node.js', 'TailwindCSS', 'Express.js'],
    source: 'https://github.com/NigamAnanya/EvaluaTech',
  },
  {
    title: 'Recylink',
    date: 'December 2023',
    description: `
     A platform linking users and authorities for waste management, driven by a deep learning model. 
     It streamlines reporting and categorizes waste for efficient collection and transport to treatment facilities.
    `,
    image: 'img/Recylink pic.png', // Replace with actual image path
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Roboflow API'],
    website: 'https://recylinksih.vercel.app/',
    source: 'https://github.com/NigamAnanya/Recylink',
  },

  {
    title: 'Sentiment-Analysis-on-Movie-Reviews ',
    date: 'July 2024',
    description: `
    This project involves building a Sentiment Analysis model that classifies movie reviews as positive or negative using Natural Language Processing (NLP) techniques. The dataset used is the IMDB movie reviews dataset, which contains labeled reviews with corresponding sentiment labels.
    The project explores text preprocessing, feature extraction, and machine learning algorithms to deliver an efficient solution for sentiment classification.
    `,
    image: 'img/Sentiment.png', // Replace with actual image path
    tags: ['Machine Learning', 'Python', 'Pandas', 'Matplotlib', 'Data Preprocessing', 'sklearn', 'Naive Bayes'],
    source: 'https://github.com/NigamAnanya/Sentiment-Analysis-on-Movie-Reviews',
  },
  {
    title: 'Fake News Detection',
    date: 'July 2024',
    description: `
     This project focuses on building a robust machine learning model to classify news articles as either real or fake, addressing the challenge of misinformation. By leveraging Natural Language Processing (NLP) techniques, .
     the project transforms unstructured text data into actionable insights, enabling effective classification of news credibility.
    `,
    image: 'img/fake.png', // Replace with actual image path
    tags: ['Python', 'Pandas', 'Matplotlib', 'scikit-learn', 'Machine Learning Algorithms', 'naive Bayes', 'SVM', 'Data Preprocessing'],
    source: 'https://github.com/NigamAnanya/Fake-New-Detection',
  },
  {
    title: 'Shop Nav',
    date: 'November 2023',
    description: `
     ShopNav is a sleek, user-friendly e-commerce platform designed to enhance the online shopping experience. 
     Built using modern web technologies, it offers a seamless interface for browsing products, managing cart items, and completing purchases efficiently.
    `,
    image: 'img/shop.png', // Replace with actual image path
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'scikit-learn', 'Vercel'],
    website: 'https://shop-nav.vercel.app/',
    source: 'https://github.com/NigamAnanya/Shop-Nav',
  },
];

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(2); // Initial number of projects to show

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 2); // Load two more projects each time "More Projects" is clicked
  };

  return (
    <div className="min-h-screen p-8 border-gray-600 dark:border-gray-300">
      <h1 className="text-4xl font-bold text-center dark:text-gray-800 mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {allProjects.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden border bg-gray-700 text-white dark:bg-white dark:text-black "
          >
            {/* Image Section */}
            <div className="relative group overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:-translate-y-1/3"
              />
            </div>

            {/* Description Section */}
            <div className="p-6">
              <h2 className="text-2xl font-bold bg-gray-700 text-white dark:bg-white dark:text-black mb-1">{project.title}</h2>
              <p className="bg-gray-700 text-white dark:bg-white dark:text-black mb-4">{project.date}</p>
              <p className="tebg-gray-700 text-white dark:bg-white dark:text-black mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-700 text-sm font-medium py-1 px-2 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white py-2 px-4 rounded flex items-center hover:bg-gray-700 transition"
                  >
                    Website
                  </a>
                )}
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white py-2 px-4 rounded flex items-center hover:bg-gray-700 transition"
                  >
                    Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleProjects < allProjects.length && (
        <div className="text-center mt-8">
          <button
            onClick={showMoreProjects}
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            More Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
