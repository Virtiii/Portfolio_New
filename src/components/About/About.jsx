import React, { useState } from "react";
import SkillsImg from "../../assets/women.jpeg";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={SkillsImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase font-bold"
              >
                about me
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Virti Shah
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                I am an undergraduate student at DJ Sanghvi College of Engineering, pursuing a bachelor's degree in Information Technology. I am highly passionate about technology and love to challenge myself continuously. My goal is to become self-sufficient and to actively promote and support women in the field of technology to help them achieve their potential.
                {showMore && (
                  <>
                    <br /><br />
                    I'm an avid coder with a passion for web development and data analytics. I constantly push myself to become a better version of myself so that I can be a valuable asset in making a difference.
                    <br /><br />
                    Additionally I also serve as a Marketing Head for a team at my college. 
                  </>
                )}
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                onClick={handleToggle}
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
