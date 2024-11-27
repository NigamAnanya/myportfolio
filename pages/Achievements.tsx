import React, { useState } from 'react';

// Mock data for achievements
const achievements = [
  {
    title: 'Scaling Ethereum 2024 ',
    description: 'Winner of Avail track for best project built with Avail DA ',
    image: '/img/eth scalling.jpg', // Replace with your actual image path
    date: 'April 27, 2024',
    certificateLink: 'https://drive.google.com/file/d/1g25wRL-7vlLIe5zY_xmxkTgMmpnwX4kw/view?usp=sharing',
  },
  {
    title: 'Smart India Hackathon ',
    description: ' All India finalist',
    image: '/img/SIH2.jpg', // Replace with your actual image path
    date: 'December, 2023',
    certificateLink: 'https://drive.google.com/file/d/1A3D4M0VjE-QZ2lXxGxoWJrhUrnkH_s2x/view?usp=sharing',
  },
  {
    title: 'SRM Ideathon 4.0',
    description: 'First prize winner ',
    image: '/img/Idea.jpg', // Replace with your actual image path
    date: 'March 2, 2024',
    certificateLink: 'https://drive.google.com/file/d/1e6Vrq_b6CALenUrVbO87U_s_kGaQxaTx/view?usp=sharing',
  },
];

const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  // Function to open the modal with selected achievement details
  const openAchievementDetails = (achievement) => {
    setSelectedAchievement(achievement);
  };

  // Function to close the modal
  const closeAchievementDetails = () => {
    setSelectedAchievement(null);
  };

  return (
    <div className="min-h-screen bg-gray-700 text-white dark:bg-white dark:text-black flex flex-col items-center justify-start pt-12"> {/* Shift everything up by adjusting padding */}
      <h1 className="text-6xl font-bold mb-16 text-center">Select the achievement</h1> {/* Increased bottom margin for more space */}

      {/* Cards for each achievement */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 w-full max-w-8xl px-6"> {/* Increased gap between cards */}
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl cursor-pointer flex flex-col justify-between transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => openAchievementDetails(achievement)}
          >
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-72 object-cover rounded-lg mb-6"
            />
            <h2 className="text-3xl font-semibold text-gray-800">{achievement.title}</h2>
            <p className="text-gray-700 text-xl mt-4">{achievement.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for Achievement Details */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white w-3/4 md:w-2/3 lg:w-1/2 p-10 rounded-lg shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">{selectedAchievement.title}</h2>
            <div className="overflow-hidden mb-6">
              <img
                src={selectedAchievement.image}
                alt={selectedAchievement.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <p className="text-2xl text-gray-700 mb-6">{selectedAchievement.description}</p>
            <p className="text-lg text-gray-500 mb-6">Date: {selectedAchievement.date}</p>
            <a
              href={selectedAchievement.certificateLink}
              className="text-blue-500 hover:underline text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
            <div className="mt-8">
              <button
                className="bg-red-500 text-white px-8 py-4 rounded-lg text-xl"
                onClick={closeAchievementDetails}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
