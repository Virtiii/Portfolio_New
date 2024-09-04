import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from "react-slick";
import projects from "./Proj"; // Adjust the import path as per your project structure
import './Projects.css';

const Projects = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="projects-container">
            <div className="background-overlay container mx-auto py-12" >
            {/* <div className="space-y-6 xl:pr-41 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 "> */}
            <div className="space-y-3 xl:pr-37 p-7 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase font-bold"
              >
                projects
              </p>
                <Slider {...settings}>
                    {projects.map((item) => (
                        <div className="proj-imgbx" key={item.id}  data-aos="fade-up" data-aos-delay="700">
                            <div className="card-top">
                                <img src={item.imageUrl} alt={item.title} />
                                <h1>{item.name}</h1>
                            </div>
                            <div className="proj-txtx">
                                <br />
                                <h2>{item.techStack}</h2><br />
                                <h2>{item.description}</h2>
                                <br />
                                <h2>{item.timeline}</h2>
                                {item.githubLink && <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                                    <br />
                                    <button>Explore</button>
                                </a>}
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>
            </div>
        </div>
    );
};

export default Projects;


