import React, { useState } from "react";
import SlideUI from "./SlideUI";
import './Carousel.css'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

const Carousel = () => {

    const Projects = {
        "slides": [
            {
                "src": "https://firebasestorage.googleapis.com/v0/b/kolab-d9acc.appspot.com/o/WEATHER.png?alt=media&token=414160c9-9a93-4643-a3bc-de28d1e877a9",
                "title": "WeatherAPI.com + Next.js: Your Ultimate Weather Resource",
                "techstack": "Next.js (TypeScript), Weather API",
                "githublink": "https://github.com/philsca-portal/Weather-web.git",
                "demolink": "https://weather-web-seven-hazel.vercel.app"
            },
            {
                "src": "https://firebasestorage.googleapis.com/v0/b/kolab-d9acc.appspot.com/o/SERVER%20HUNTER.png?alt=media&token=6f868401-12be-48fe-b04b-c3eab84e650d",
                "title": "Inspired landing page for Server Hunter.",
                "techstack": "Next.js , Tailwind css, Spline, Shadcn UI.",
                "githublink": "https://github.com/philsca-portal/server-hunter.git",
                "demolink": "https://server-hunter.vercel.app/"
            },
            {
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
