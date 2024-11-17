import React from 'react';

const Experience: React.FC = () => {
  const experienceData = [
    {
      title: 'Machine Learning Engineer',
      company: 'TikTok Inc.',
      description: 'Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.',
      logo: '/img/tiktok-logo.png', // Replace with actual path to your logo
      period: 'June 2023 - Present',
      location: 'San Jose, CA, USA',
    },
    {
      title: 'Associate AI Engineer',
      company: 'Legato Health Technology',
      description: 'I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Recurrence Prediction. Our goal is to make AI systems that scale and remove doctor dependency as much as possible.',
      logo: '/img/legato-logo.png', // Replace with actual path to your logo
      period: 'June 2020 - Aug 2021',
      location: 'Hyderabad, Telangana',
    },
    {
      title: 'Android and ML Developer',
      company: 'Muffito Incorporation',
      description: 'I have created a complete Android Application for locating pubs, bars, and beverage shops around you. I have also worked on the implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecture of mobile and web applications as well as admin panel for the company.',
      logo: '/img/muffito-logo.png', // Replace with actual path to your logo
      period: 'May 2018 - Oct 2018',
      location: 'Pune, Maharashtra',
    },
    {
      title: 'Android Developer',
      company: 'FreeCopy Pvt. Ltd.',
      description: 'FreeCopy is a startup from the Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learned the design thinking of UI from the perspective of People.',
      logo: '/img/freecopy-logo.png', // Replace with actual path to your logo
      period: 'Nov 2017 - Dec 2017',
      location: 'Ahmedabad, Gujarat',
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen p-8">
      <section>
        <h1 className="text-4xl font-bold text-center mb-8">Experience</h1>
        <div className="space-y-12 relative">
          {experienceData.map((exp, index) => (
            <div key={index} className="flex items-start gap-6 relative">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full rounded-full" />
              </div>
              <div className="bg-blue-200 rounded-lg p-6 w-full shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-blue-900">{exp.title}</h2>
                  <span className="text-blue-700 text-sm text-right">
                    {exp.period}
                    <br />
                    {exp.location}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-blue-800">{exp.company}</h3>
                <p className="text-blue-700 mt-2">{exp.description}</p>
              </div>
              {index < experienceData.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-12 bg-blue-300" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
