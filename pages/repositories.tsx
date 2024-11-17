// import { GetStaticProps } from 'next';
// import React, { useState } from 'react';

// type Repository = {
//   id: number;
//   name: string;
//   html_url: string;
//   description: string | null;
//   stargazers_count: number;
//   forks_count: number;
//   language: string | null;
// };

// type RepositoriesProps = {
//   repos: Repository[];
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const token = process.env.GITHUB_TOKEN;

//   if (!token) {
//     console.error("GitHub token is missing. Please set it in your .env.local file.");
//     return { props: { repos: [] } };
//   }

//   try {
//     // Fetch Repositories Data
//     const reposRes = await fetch('https://api.github.com/users/NigamAnanya/repos?per_page=100&sort=updated', {
//       headers: {
//         Authorization: `token ${token}`,
//       },
//     });

//     if (!reposRes.ok) {
//       console.error('Failed to fetch repositories data:', reposRes.statusText);
//       return { props: { repos: [] } };
//     }

//     const repos: Repository[] = await reposRes.json();

//     return {
//       props: {
//         repos,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return { props: { repos: [] } };
//   }
// };

// const Repositories: React.FC<RepositoriesProps> = ({ repos }) => {
//   const [displayedReposCount, setDisplayedReposCount] = useState(4);

//   // Show more repositories by increasing the count by 4 on each button click
//   const showMoreRepositories = () => {
//     setDisplayedReposCount((prevCount) => prevCount + 4);
//   };

//   const displayedRepos = repos.slice(0, displayedReposCount);

//   return (
//     <div className="w-full min-h-screen p-8 bg-gray-900 dark:bg-white text-white dark:text-black flex flex-col items-center">
//       <div className="space-y-12 max-w-6xl w-full">

//         {/* GitHub Stats and Streaks Section */}
//         <div>
//           <h2 className="text-3xl text-left mb-6">GitHub Stats and Streaks</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
//             {/* GitHub Stats */}
//             <div className="bg-gray-800 dark:bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto">
//               <img src="https://github-readme-stats.vercel.app/api?username=NigamAnanya&show_icons=true&theme=dark" alt="GitHub Stats" className="w-full" />
//             </div>

//             {/* GitHub Streaks and Trophies */}
//             <div className="bg-gray-800 dark:bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto">
//               <img src="https://github-readme-streak-stats.herokuapp.com/?user=NigamAnanya&theme=dark" alt="GitHub Streak Stats" className="w-full" />
//             </div>
//           </div>
//           <hr className="my-8 border-gray-600 dark:border-gray-300" />
//         </div>

//         {/* Most Used Languages and Tools Section */}
//         <div>
//           <h2 className="text-3xl text-left mb-6">Most Used Languages and Tools</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
//             {/* Most Used Languages */}
//             <div className="bg-gray-800 dark:bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto">
//               <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=NigamAnanya&layout=compact&theme=dark" alt="Most Used Languages" className="w-full" />
//             </div>

//             {/* Languages and Tools */}
//             <div className="bg-gray-800 dark:bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto flex flex-wrap justify-center gap-4">
//               <span className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded">JavaScript</span>
//               <span className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded">TypeScript</span>
//               <span className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded">React</span>
//               <span className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded">Node.js</span>
//               <span className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded">Python</span>
//               <span className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded">Tailwind CSS</span>
//               <span className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded">Git</span>
//               <span className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded">HTML</span>
//               <span className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded">CSS</span>
//             </div>
//           </div>
//           <hr className="my-8 border-gray-600 dark:border-gray-300" />
//         </div>

//         {/* Repositories Section */}
//         <div>
//           <h2 className="text-3xl text-left mb-6">Repositories</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {displayedRepos.map((repo) => (
//               <div key={repo.id} className="bg-gray-800 dark:bg-gray-100 border border-gray-600 dark:border-gray-300 p-6 rounded-lg shadow-md">
//                 <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
//                   <h3 className="text-lg font-semibold text-blue-500 hover:underline">{repo.name}</h3>
//                 </a>
//                 <p className="text-gray-400 dark:text-gray-600 mt-2">{repo.description}</p>
//                 <div className="flex items-center justify-between mt-4 text-sm text-gray-500 dark:text-gray-400">
//                   <span>⭐ {repo.stargazers_count}</span>
//                   <span>🍴 {repo.forks_count}</span>
//                   {repo.language && <span>{repo.language}</span>}
//                 </div>
//               </div>
//             ))}
//           </div>
//           {displayedReposCount < repos.length && (
//             <button
//               onClick={showMoreRepositories}
//               className="text-blue-500 hover:underline mt-4 inline-block"
//             >
//               Show more repositories
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Repositories;

import { GetStaticProps } from 'next';
import React, { useState } from 'react';

type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

type RepositoriesProps = {
  repos: Repository[];
};

export const getStaticProps: GetStaticProps = async () => {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.error("GitHub token is missing. Please set it in your .env.local file.");
    return { props: { repos: [] } };
  }

  try {
    // Fetch Repositories Data
    const reposRes = await fetch('https://api.github.com/users/NigamAnanya/repos?per_page=100&sort=updated', {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!reposRes.ok) {
      console.error('Failed to fetch repositories data:', reposRes.statusText);
      return { props: { repos: [] } };
    }

    const repos: Repository[] = await reposRes.json();

    return {
      props: {
        repos,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { repos: [] } };
  }
};

const Repositories: React.FC<RepositoriesProps> = ({ repos }) => {
  const [displayedReposCount, setDisplayedReposCount] = useState(4);

  // Show more repositories by increasing the count by 4 on each button click
  const showMoreRepositories = () => {
    setDisplayedReposCount((prevCount) => prevCount + 4);
  };

  const displayedRepos = repos.slice(0, displayedReposCount);

  return (
    <div className="w-full min-h-screen p-8 bg-gray-900 dark:bg-white text-white dark:text-black flex flex-col items-center">
      <div className="space-y-12 max-w-6xl w-full">

        {/* GitHub Stats and Streaks Section */}
        <div>
          <h2 className="text-3xl text-left mb-6">GitHub Stats and Streaks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {/* GitHub Stats */}
            <div className="bg-gray-800 dark:bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto">
              <img src="https://github-readme-stats.vercel.app/api?username=NigamAnanya&show_icons=true&theme=dark" alt="GitHub Stats" className="w-full" />
            </div>

            {/* GitHub Streaks and Trophies */}
            <div className="bg-gray-800 dark:bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto">
              <img src="https://github-readme-streak-stats.herokuapp.com/?user=NigamAnanya&theme=dark" alt="GitHub Streak Stats" className="w-full" />
            </div>
          </div>
          <hr className="my-8 border-gray-600 dark:border-gray-300" />
        </div>

        {/* Most Used Languages and Tools Section */}
        <div>
          <h2 className="text-3xl text-left mb-6">Languages, Frameworks, and Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {/* Languages and Databases */}
            <div className="bg-gray-800 dark:bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4">Languages and Databases</h3>
              <div className="flex justify-center flex-wrap gap-4">
                <img src="/img/python.png" alt="Python" className="h-8" />
                <img src="/img/html.png" alt="Java" className="h-8" />
                <img src="/img/CSS.png" alt="HTML" className="h-8" />
                <img src="/img/js.png" alt="CSS" className="h-8" />
                <img src="/img/tss.png" alt="MySQL" className="h-8" />
                <img src="/img/mysql.png" alt="PostgreSQL" className="h-8" />
                <img src="/img/mongo.png" alt="PostgreSQL" className="h-8" />
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-gray-800 dark:bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4">Frameworks</h3>
              <div className="flex justify-center flex-wrap gap-4">
                <img src="/img/nextjs.jpg" alt="Django" className="h-8" />
                <img src="/img/react.png" alt="Node.js" className="h-8" />
                <img src="/img/node.jpg" alt="Bootstrap" className="h-8" />
                <img src="/img/tailwind.png" alt="TensorFlow" className="h-8" />
                <img src="/img/expresss.png" alt="PyTorch" className="h-8" />
                
              </div>
            </div>

            {/* Tools */}
            <div className="bg-gray-800 dark:bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4">Tools</h3>
              <div className="flex justify-center flex-wrap gap-4">
                <img src="/img/git.png" alt="Git" className="h-8" />
                <img src="/img/aws.png" alt="AWS" className="h-8" />
                <img src="/img/HEROKU.png" alt="Heroku" className="h-8" />
                <img src="/img/JUPYTER.png" alt="Jupyter" className="h-8" />
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-600 dark:border-gray-300" />
        </div>

        {/* Repositories Section */}
        <div>
          <h2 className="text-3xl text-left mb-6">Repositories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedRepos.map((repo) => (
              <div key={repo.id} className="bg-gray-800 dark:bg-gray-100 border border-gray-600 dark:border-gray-300 p-6 rounded-lg shadow-md">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-lg font-semibold text-blue-500 hover:underline">{repo.name}</h3>
                </a>
                <p className="text-gray-400 dark:text-gray-600 mt-2">{repo.description}</p>
                <div className="flex items-center justify-between mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🍴 {repo.forks_count}</span>
                  {repo.language && <span>{repo.language}</span>}
                </div>
              </div>
            ))}
          </div>
          {displayedReposCount < repos.length && (
            <button
              onClick={showMoreRepositories}
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              Show more repositories
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Repositories;
