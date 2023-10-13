import React, { useState } from "react";
import SlideUI from "./SlideUI";
import './Carousel.css'
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl'

const Carousel = () => {
    
    const Projects = {
        "slides": [
            {
                "src": "https://gdurl.com/Wrg7/",
                "title": "Admin Website of Ekolekta android application (PHP)",
                "techstack": "PHP, mySQL, Firebase, HTML, CSS, and JavaScript",
                "githublink": "https://github.com/philsca-portal/E-KOLEKTA.git",
                "demolink": "https://e-kolekta.000webhostapp.com/"
            },
            {
                "src": "https://gdurl.com/HyqC/",
                "title": "Android Application For Waste Management for The Aviation Community in Barangay 183 Villamor, Pasay City",
                "techstack": "Java, mySQL, Firebase, XML, Tensorflow, Google Teachable Machine",
                "githublink": "https://github.com/philsca-portal/E-KOLEKTA-APP.git",
                "demolink": ""
            },
            {
                "src": "https://gdurl.com/KlCFU/",
                "title": "JJRGB Delivery Services is an information management and booking system for JJRGB Delivery Services with consumer and administrative perspective",
                "techstack": "PHP, mySQL, HTML, CSS, and JavaScript",
                "githublink": "https://github.com/philsca-portal/Delivery-service-web.git",
                "demolink": "https://delivery-service-web.000webhostapp.com/"
            },
            {
                "src": "https://gdurl.com/v791/",
                "title": "Admin Website of JJRGB Delivery Services",
                "techstack": "PHP, mySQL, HTML, CSS, and JavaScript",
                "githublink": "https://github.com/philsca-portal/Delivery-service-web.git",
                "demolink": "https://delivery-service-web.000webhostapp.com/"
            },
            {
                "src": "https://gdurl.com/iqYY/",
                "title": "Basic CRUD application built with Next.js with Authentication.",
                "techstack": "Next.js (TypeScript), MySQL(PlanetScale), Shadcn UI, and Clerk(Authentication).",
                "githublink": "https://github.com/philsca-portal/next13-CRUD.git",
                "demolink": "https://next13-crud.vercel.app/"
            }         
        ]
    }

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === Projects.slides.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0? Projects.slides.length - 1 : slide - 1);
    }
    
    return(
        <div className="carousel">
            <SlArrowLeft className="arrow arrow-left" onClick={() => prevSlide()}/>
            {Projects.slides.map((item,key) => {
                return (
                    <div key={key} className={slide === key? '' : 'slide-hidden'}>                   
                        <SlideUI src={item.src} 
                                title={item.title} 
                                techstack={item.techstack}
                                githubLink={item.githublink}
                                demoLink={item.demolink}
                        />
                    </div>
                )
            })}
            <SlArrowRight className="arrow arrow-right" onClick={() => nextSlide()}/>
            <span className="indicators">
                {Projects.slides.map((_,index) => {
                   return (
                    <button key={index} onClick={() => setSlide(index)} className={slide === index? 'indicator' : 'indicator indicator-inactive'}></button>
                   ); 
                })}
            </span>
        </div>
    )
}

export default Carousel;