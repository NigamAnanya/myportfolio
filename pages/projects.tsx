import React, { useState } from 'react';

const allProjects = [
  {
    title: 'Chat Collect',
    date: 'Jan 2024 - Feb 2024',
    description:
      'With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.',
    image: '/path/to/chat-collect-image.jpg', // Replace with actual image path
    tags: ['Next.js', 'Typescript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe', 'Shadcn UI', 'Magic UI'],
    website: '#',
    source: '#',
  },
  {
    title: 'Magic UI',
    date: 'June 2023 - Present',
    description: 'Designed, developed, and sold animated UI components for developers.',
    image: '/path/to/magic-ui-image.jpg', // Replace with actual image path
    tags: ['Next.js', 'Typescript', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'Stripe', 'Shadcn UI', 'Magic UI'],
    website: '#',
    source: '#',
  },
  {
    title: 'Project XYZ',
    date: 'Mar 2023 - Aug 2023',
    description:
      'A project management tool that helps teams organize tasks efficiently and collaborate seamlessly.',
    image: '/path/to/project-xyz-image.jpg', // Replace with actual image path
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
    website: '#',
    source: '#',
  },
  {
    title: 'E-Commerce Platform',
    date: 'Dec 2022 - Present',
    description: 'An advanced e-commerce platform built with modern web technologies.',
    image: '/path/to/e-commerce-image.jpg', // Replace with actual image path
    tags: ['React', 'Typescript', 'Firebase', 'Redux', 'TailwindCSS'],
    website: '#',
    source: '#',
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(2); // Initial number of projects to show

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 2); // Load two more projects each time "More Projects" is clicked
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {allProjects.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            <div
              className="h-40 bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundColor: index % 2 === 0 ? '#f87171' : '#f3f4f6',
              }}
            ></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">{project.title}</h2>
              <p className="text-gray-500 mb-4">{project.date}</p>
              <p className="text-gray-600 mb-4">{project.description}</p>
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
                    className="bg-black text-white py-2 px-4 rounded flex items-center hover:bg-gray-900 transition"
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
