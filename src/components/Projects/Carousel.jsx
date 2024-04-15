import React, { useState } from "react";
import SlideUI from "./SlideUI";
import './Carousel.css'
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl'

const Carousel = () => {
    
    const Projects = {
        "slides": [
            {
                "src": "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTCEy30JoBevhEC35ZwKPHDU7aHsLaThQXY1f7c7UpMcYyg7lgsxSEATVqEkwSDy0DZFhMfxymp30f1MYmIBHQfJbr_iA=s1600",
                "title": "Admin Website of Ekolekta android application (PHP)",
                "techstack": "PHP, mySQL, Firebase, HTML, CSS, and JavaScript",
                "githublink": "https://github.com/philsca-portal/E-KOLEKTA.git",
                "demolink": "https://e-kolekta.000webhostapp.com/"
            },
            {
                "src": "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTeaZA31upNMsTf49JpQG94pxF-Ovm9teynBIT47k1sNmv6XQDzNexb1pNw84rV7QneYZNBqndRMCc-qB7_ksDeDTKaeg=s1600",
                "title": "Android Application For Waste Management for The Aviation Community in Barangay 183 Villamor, Pasay City",
                "techstack": "Java, mySQL, Firebase, XML, Tensorflow, Google Teachable Machine",
                "githublink": "https://github.com/philsca-portal/E-KOLEKTA-APP.git",
                "demolink": ""
            },
            {
                "src": "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTNlnvNSUqBjnaRqY2Q53U1Yac2mWuQiMOqAw-7Q9QrYVqh4ayCX4dmbA7wn8s7O_p8geJjz6QjMubgMfz3ZZyXYg9o8A=s1600",
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
                "src": "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSLLn3BJKChAL0olE5pOmNrFQSTrOVY9g7cGA70Rn3gfjrr4z6F1VA3qV1c4yNC6TX0vj1UNjk_gzCSMo_DT2Yk62pg=s1600",
                "title": "WeatherAPI.com + Next.js: Your Ultimate Weather Resource",
                "techstack": "Next.js (TypeScript), Weather API",
                "githublink": "https://github.com/philsca-portal/Weather-web.git",
                "demolink": "https://weather-web-seven-hazel.vercel.app"
            },
            {
                "src": "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQaCLSsMP13x5X0QWDWk6T5G10jheOVQHLbBupOB5n1zAIcfH6B4o7kk2P7zYr_VzndWFoib6Daha_nHZIRa_KdgCVN=s1600",
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
