// import React from "react";
// import satelitImg from "../../assets/Skills2.jpg";

// const About = () => {
//   return (
//     <>
//       <section className="bg-primary text-white py-20">
//         <div className="container ">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
//             <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
//               <p
//                 data-aos="fade-up"
//                 data-aos-delay="300"
//                 className="text-sky-800 uppercase"
//               >
//                 skills
//               </p>
//               <h1
//                 data-aos="fade-up"
//                 data-aos-delay="500"
//                 className="uppercase text-5xl"
//               >
//                 About
//               </h1>
//               <p data-aos="fade-up" data-aos-delay="700">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
//                 molestiae reprehenderit expedita corporis, non doloremque.
//                 Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
//                 amet consectetur adipisicing elit. Eos molestiae reprehenderit
//                 expedita corporis, non doloremque. Consequatur consectetur
//                 quisquam qui sunt.
//               </p>
//               <button
//                 data-aos="fade-up"
//                 data-aos-delay="900"
//                 className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
//               >
//                 View All
//               </button>
//             </div>
//             <div data-aos="zoom-in">
//               <img
//                 src={satelitImg}
//                 alt=""
//                 className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;


import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import backgroundVideo from "../../assets/2.mp4";

const timelineData = [
  { title: "Data Analysis", description: "Python, SQL, Excel" },
  { title: "Programming Languages", description: "Python, C++, SQL, C, Java" },
  { title: "Web Development", description: "HTML, CSS, JavaScript, React.js" },
  { title: "Database Tools", description: "MySQL, Oracle, NetBeans, GitHub" },
  { title: "Data Visualization", description: "Tableau, Power BI, Canva" },
  { title: "Soft Skills", description: "Time Management, Team Player, Communication" }
];

const About = () => {
  return (
    // <section
    //   className="relative bg-cover bg-center py-20"
    //   style={{
    //     // backgroundImage: `url(${backgroundImg})`, 
    //     backgroundAttachment: 'fixed',
    //     minHeight: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //   }}
    // >
      <section
      className="relative py-20"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video> */}
      <div className="container mx-auto py-12">
        <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-sky-800 uppercase font-bold"
          >
            Skills
          </p>
          <VerticalTimeline>
            {timelineData.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff', backdropFilter: 'blur(5px)' }}
                contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.2)' }}
                iconStyle={{ background: '#06b6d4', color: '#fff', width: '20px', height: '20px' , marginLeft: '-10px', }} 
              >
                <h3 className="vertical-timeline-element-title font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;
