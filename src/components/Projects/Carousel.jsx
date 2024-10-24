import React, { useState } from "react";
import SlideUI from "./SlideUI";
import './Carousel.css'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

const Carousel = () => {

    const Projects = {
        "slides": [
            {
<<<<<<< HEAD
                "src": "https://firebasestorage.googleapis.com/v0/b/kolab-d9acc.appspot.com/o/WEATHER.png?alt=media&token=414160c9-9a93-4643-a3bc-de28d1e877a9",
=======
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
>>>>>>> fe2ad3089f281d5837dec33ad4c9e939d3b9a3a9
                "title": "WeatherAPI.com + Next.js: Your Ultimate Weather Resource",
                "techstack": "Next.js (TypeScript), Weather API",
                "githublink": "https://github.com/philsca-portal/Weather-web.git",
                "demolink": "https://weather-web-seven-hazel.vercel.app"
            },
            {
<<<<<<< HEAD
                "src": "https://firebasestorage.googleapis.com/v0/b/kolab-d9acc.appspot.com/o/SERVER%20HUNTER.png?alt=media&token=6f868401-12be-48fe-b04b-c3eab84e650d",
=======
                "src": "https://lh3.googleusercontent.com/drive-viewer/AKGpihaulM6qMbpbXX8iIoeFwBqrwIprGQN8mfpq76XAXpsvoasXtk3ypE4WEGk6UkDT8P749S9AQC4iBSfHkkC0F0cpD8mDpYBD-g=s1600-v0",
                "title": "Basic CRUD application built with Next.js with Authentication.",
                "techstack": "Next.js (TypeScript), MySQL(PlanetScale), Shadcn UI, and Clerk(Authentication).",
                "githublink": "https://github.com/philsca-portal/next13-CRUD.git",
                "demolink": "https://next13-crud.vercel.app/"
            },
            {
                "src": "https://lh3.googleusercontent.com/d/1zJ1ocDBnmhlQC0VAT-wSnNOs6cSvfa_F",
>>>>>>> fe2ad3089f281d5837dec33ad4c9e939d3b9a3a9
                "title": "Inspired landing page for Server Hunter.",
                "techstack": "Next.js , Tailwind css, Spline, Shadcn UI.",
                "githublink": "https://github.com/philsca-portal/server-hunter.git",
                "demolink": "https://server-hunter.vercel.app/"
            },
            {
<<<<<<< HEAD
                "src": "https://firebasestorage.googleapis.com/v0/b/kolab-d9acc.appspot.com/o/AUGMENTED-WEBSITE.png?alt=media&token=51a125e6-a9b8-49a3-a070-f91e3715c9f7",
                "title": "Augmented Reality Web-Admin.",
                "techstack": "Next.js , Tailwind css, Firebase Realtime Database & Storage, Tensorflow, Shadcn UI.",
                "githublink": "",
                "demolink": "https://augmented-reality-web-nu.vercel.app/"
            },
            {
                "src": "https://firebasestorage.googleapis.com/v0/b/kolab-d9acc.appspot.com/o/AUGMENTED-MOBILE.png?alt=media&token=f7beea0c-fbd0-4753-8ad5-3cd1f39d33e9",
                "title": "Augmented Reality Mobile App.",
                "techstack": "Expo React Native , Nativewind, Firebase Realtime Database & Storage, CHATGPT API, React-viro.",
                "githublink": "",
                "demolink": ""
            },
            {
                "src": "https://firebasestorage.googleapis.com/v0/b/kolab-d9acc.appspot.com/o/KOLAB-WEBSITE.png?alt=media&token=0e59b741-7f07-404e-9968-42944ef8f2ad",
                "title": "KOLAB: A Task Managment System.",
                "techstack": "Next.js , Tailwind css, Spline, Shadcn UI, Express.js, Socket.io, Prisma etc.",
                "githublink": "",
                "demolink": "https://kolab-front-end.vercel.app/"
            },
            {
                "src": "https://firebasestorage.googleapis.com/v0/b/kolab-d9acc.appspot.com/o/INVENTORY-WEBSITE.png?alt=media&token=5f57b498-1831-4712-8e01-eb6a4742b036",
                "title": "Inventory Management System Web-Admin.",
                "techstack": "Next.js , Tailwind css, Shadcn UI, Firebase Realtime Database & Storage.",
                "githublink": "",
                "demolink": "https://inventory-system-one-xi.vercel.app/"
            },
            {
                "src": "https://firebasestorage.googleapis.com/v0/b/kolab-d9acc.appspot.com/o/INVENTORY-MOBILE.png?alt=media&token=4a056b1e-4a8e-4abe-91a7-40d6e5ec0a9f",
                "title": "Inventory Management System Mobile App.",
                "techstack": "Expo React Native , Nativewind, Firebase Realtime Database & Storage.",
                "githublink": "",
                "demolink": ""
            },
            {
                "src": "https://firebasestorage.googleapis.com/v0/b/kolab-d9acc.appspot.com/o/REQUEST-WEBSITE.png?alt=media&token=c83062aa-d761-413e-a8d3-9c285ea0b493",
                "title": "Document Request System Web-Admin.",
                "techstack": "Next.js , Tailwind css, Shadcn UI, Firebase Realtime Database & Storage.",
                "githublink": "",
                "demolink": "https://philsca-document-request-system.vercel.app/auth"
            },
            {
                "src": "https://firebasestorage.googleapis.com/v0/b/kolab-d9acc.appspot.com/o/REQUEST-MOBILE.png?alt=media&token=780f005e-869a-48fc-9d44-ba64b554c75f",
                "title": "Document Request System Mobile App.",
                "techstack": "Expo React Native , Nativewind, Firebase Realtime Database & Storage, CHATGPT API, React-viro.",
                "githublink": "",
                "demolink": ""
            }
=======
                "src": "https://lh3.googleusercontent.com/drive-viewer/AKGpihZAj8x_B2DSvsgXdmCxPOu-IVniLQafMtRj8ng0LtgNjYJazp0eeYq_4FmcDu-Yk8XvPJkl3WBXmQ3A2bZjlCRpAzG-0IorDnc=s1600-v0",
                "title": "Kolab: A task-managment project.",
                "techstack": "Next.js , Tailwind css, Spline, Shadcn UI, Express.js, Socket.io, Prisma etc.",
                "demolink": "https://kolab-front-end.vercel.app/"
            }  
>>>>>>> fe2ad3089f281d5837dec33ad4c9e939d3b9a3a9
        ]
    }

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === Projects.slides.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? Projects.slides.length - 1 : slide - 1);
    }

    return (
        <div className="carousel">
            <SlArrowLeft className="arrow arrow-left" onClick={() => prevSlide()} />
            {Projects.slides.map((item, key) => {
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
            <SlArrowRight className="arrow arrow-right" onClick={() => nextSlide()} />
            <span className="indicators">
                {Projects.slides.map((_, index) => {
                    return (
                        <button key={index} onClick={() => setSlide(index)} className={slide === index ? 'indicator' : 'indicator indicator-inactive'}></button>
                    );
                })}
            </span>
        </div>
    )
}

export default Carousel;
