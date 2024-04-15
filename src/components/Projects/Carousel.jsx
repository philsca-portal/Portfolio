import React, { useState } from "react";
import SlideUI from "./SlideUI";
import './Carousel.css'
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl'

const Carousel = () => {
    
    const Projects = {
        "slides": [
            {
                "src": "https://lh3.googleusercontent.com/drive-viewer/AKGpihZxMqSGpTq3licmdYLcFE6QmJJmDl9sdYmynZ6t6mIEigcwkXt5sHdsu7GS19kaVT-NxUAG-lk2muBpO5Y1fmv4Tr_J0a8Rcjg=s1600-v00",
                "title": "Admin Website of Ekolekta android application (PHP)",
                "techstack": "PHP, mySQL, Firebase, HTML, CSS, and JavaScript",
                "githublink": "https://github.com/philsca-portal/E-KOLEKTA.git",
                "demolink": "https://e-kolekta.000webhostapp.com/"
            },
            {
                "src": "https://lh3.googleusercontent.com/drive-viewer/AKGpihZ-__it6NqAw3W4AE-0KHoQoSnNil-XfTi-XMeT8_uuWHRtJpvN7r5DO-GW48InEVTDM2UNYtYTKkKptuJ5SdKfpUpc5EwEKTs=s1600-v0",
                "title": "Android Application For Waste Management for The Aviation Community in Barangay 183 Villamor, Pasay City",
                "techstack": "Java, mySQL, Firebase, XML, Tensorflow, Google Teachable Machine",
                "githublink": "https://github.com/philsca-portal/E-KOLEKTA-APP.git",
                "demolink": ""
            },
            {
                "src": "https://lh3.googleusercontent.com/drive-viewer/AKGpihaLnaT6pA84FNPg4QleB5rwq3KoUuczZACBmOum5zIPO7FQrLhOMfSwxLKMRkrg9BmKazc2OJs6SKgAfUuX6ho5DXpoSx7kIgA=s1600-v0",
                "title": "JJRGB Delivery Services is an information management and booking system for JJRGB Delivery Services with consumer and administrative perspective",
                "techstack": "PHP, mySQL, HTML, CSS, and JavaScript",
                "githublink": "https://github.com/philsca-portal/Delivery-service-web.git",
                "demolink": "https://delivery-service-web.000webhostapp.com/"
            },
            {
                "src": "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRmAW7Bin1TajUEjL5atFbjd45AZ9lL2h4dhrT-V37K5IZS0WEzgZxVm73YDgiwoIn2rMP5uPPoL04pXeTxcQRNFjpBBQ=s1600",
                "title": "Admin Website of JJRGB Delivery Services",
                "techstack": "PHP, mySQL, HTML, CSS, and JavaScript",
                "githublink": "https://github.com/philsca-portal/Delivery-service-web.git",
                "demolink": "https://delivery-service-web.000webhostapp.com/"
            },
            {
                "src": "https://lh3.googleusercontent.com/drive-viewer/AKGpihZ_tbPUFeHvqQE19kzFT2erFbsjebN9Pr878Dl41nWcLq-Np4W9grgyvK5GVdLpTTnQouJfyJQkj1QtVGzQ4TL6o_xoe5IMOg=s1600-v0",
                "title": "WeatherAPI.com + Next.js: Your Ultimate Weather Resource",
                "techstack": "Next.js (TypeScript), Weather API",
                "githublink": "https://github.com/philsca-portal/Weather-web.git",
                "demolink": "https://weather-web-seven-hazel.vercel.app"
            },
            {
                "src": "https://lh3.googleusercontent.com/drive-viewer/AKGpihaulM6qMbpbXX8iIoeFwBqrwIprGQN8mfpq76XAXpsvoasXtk3ypE4WEGk6UkDT8P749S9AQC4iBSfHkkC0F0cpD8mDpYBD-g=s1600-v0",
                "title": "Basic CRUD application built with Next.js with Authentication.",
                "techstack": "Next.js (TypeScript), MySQL(PlanetScale), Shadcn UI, and Clerk(Authentication).",
                "githublink": "https://github.com/philsca-portal/next13-CRUD.git",
                "demolink": "https://next13-crud.vercel.app/"
            },
            {
                "src": "https://lh3.googleusercontent.com/d/1zJ1ocDBnmhlQC0VAT-wSnNOs6cSvfa_F",
                "title": "Inspired landing page for Server Hunter.",
                "techstack": "Next.js , Tailwind css, Spline, Shadcn UI.",
                "githublink": "https://github.com/philsca-portal/server-hunter.git",
                "demolink": "https://server-hunter.vercel.app/"
            },
            {
                "src": "https://lh3.googleusercontent.com/drive-viewer/AKGpihZAj8x_B2DSvsgXdmCxPOu-IVniLQafMtRj8ng0LtgNjYJazp0eeYq_4FmcDu-Yk8XvPJkl3WBXmQ3A2bZjlCRpAzG-0IorDnc=s1600-v0",
                "title": "Kolab: A task-managment project.",
                "techstack": "Next.js , Tailwind css, Spline, Shadcn UI, Express.js, Socket.io, Prisma etc.",
                "demolink": "https://kolab-front-end.vercel.app/"
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
                    <div key={key} className={slide === key ? '' : 'slide-hidden'}>                   
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
