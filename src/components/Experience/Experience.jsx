import React from 'react';
import experienceData from './Experience'; 
import './Experience.css'; 

const Experience = () => {
  const handleButtonClick = (url) => {
    if (url) {
      window.open(url, '_blank'); // Opens the URL in a new tab
    }
  };
  
  return (
    <div className='bg'>
    <div className="container mx-auto py-12">
     <div className="left space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
      <p
    data-aos="fade-up"
    data-aos-delay="300"
    className="text-sky-800 uppercase"
  >
    Experience
    <br /><br />
  </p>
    <div className="experience-container mx-auto py-12">
      {experienceData.map((exp) => (
        <div key={exp.id} className="card" data-aos="fade-up" data-aos-delay="400">
          <div className="lines"></div>
          <div className="imgBx">
            <img src={exp.imgSrc} alt={`${exp.name}-image`} />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                {exp.name}<br />
                <span>{exp.position}</span>
              </h2>
              <div className="data">
                <h3>{exp.posts}<br /><span>Tenure(in months)</span></h3>
              </div>
              <div className="actionBtn">
              <button onClick={() => handleButtonClick(exp.link)}>Offer Letter</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
    </div>
  );
};

export default Experience;

