import React, { useState } from 'react';

const Achievements: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievements = [
    {
      title: 'Project Excellence',
      description: 'Awarded for delivering exceptional quality in over 100 projects across various domains.',
      image: '/img/eth scalling.jpg', // Replace with your actual image path
      date: 'Oct 27, 2019',
      link: 'https://drive.google.com/your-project-certificate',
    },
    {
      title: ' Leadership',
      description: 'Recognized for outstanding leadership and management in cross-functional teams.',
      image: '/img/team-leadership.jpg', // Replace with your actual image path
      date: ' 2019',
      link: 'https://drive.google.com/your-team-leadership-certificate',
    },
    {
      title: 'Innovation Award',
      description: 'Achieved innovation excellence in AI-driven solutions for critical business challenges.',
      image: '/img/innovation-award.jpg', // Replace with your actual image path
      date: 'Oct 27, 2019',
      link: 'https://drive.google.com/your-innovation-certificate',
    },
  ];

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? achievements.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Current Slide */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
          }}
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="w-screen h-screen flex-shrink-0 bg-white flex flex-col items-center justify-center p-6"
            >
              <div className="overflow-hidden w-full h-3/5">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-6 w-full text-center">
                <h2 className="text-5xl font-bold text-gray-800 mb-4">
                  {achievement.title}
                </h2>
                <p className="text-gray-600 text-xl mb-6">
                  {achievement.description}
                </p>
                <span className="text-gray-500 text-lg">{achievement.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-x-0 bottom-8 flex justify-between px-8">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded"
            onClick={prevSlide}
          >
            Previous
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded"
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="mt-6 flex justify-center space-x-3">
        {achievements.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentSlide === index
                ? 'bg-blue-500'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
