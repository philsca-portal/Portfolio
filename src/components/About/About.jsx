import React from 'react'
import './About.css'
import Image from '../../img/portrait.png';
import exclamationImage from '../../img/exclamation-mark.png';
import graduate from '../../img/graduate.png';
import course from '../../img/book.png';
import honor from '../../img/honor-icon.png';
import philsca from '../../img/philsca-icon.png';
import ics from '../../img/ics-icon.png';
import rocket from '../../img/rocket-icon.png';

const About = ({ aboutRef, rocketRef, rocketisVisible }) => {
  return (
    <div>
      <section className='container1' id='about' ref={aboutRef}>
        <div className="ghost-div"></div>
        <div className='div1'>
          <ul>
            <li className='about'>About</li>
            <li className='me'>Me</li>
          </ul>
        </div>
        <div className="div-wrap">
          <div className='div2'>
              <img  className='exclamation' src={exclamationImage} alt="Icon from freeicon.com" />
              <img  className='exclamation1' src={exclamationImage} alt="Icon from freeicon.com" />
              <img className='portrait' src={Image} alt="Pointing img" />
              <div className="box">
                <div className="circle"></div>
                  <div className="words">
                    <div className='short'></div>
                    <div className='long'></div>
                    <div className='long'></div>
                  </div>
                  <div className="paragraph">
                    <p></p>
                    <p></p>
                  </div>
              </div>
              <div className="outline1"></div>
              <div className="outline2"></div>
          </div>
          <div className='div3'>
            <div className='box-container'>
              <div className="box-one boxes">
                <img src={graduate} alt='graduate img' className='graduate-img'/>
                <h3>GRADUATED AT</h3>
                <div className='icon-p'>
                  <img src={philsca} alt='philsca img'/>
                  <p>Philippine State College of Aeronautics</p>
                </div>
              </div>
              <div className="box-two boxes">
                <img src={course} alt='course img' className='course-img'/>
                <h3>COURSE</h3>
                <div className='icon-p'>
                  <img src={ics} alt='philsca img'/>
                  <p>BS in Aviation Information Technology</p>
                </div>
              </div>
              <div className="box-three boxes">
                <img src={honor} alt='honor img' className='honor-img'/>
                <h3>HONOR</h3>
                <div className='icon-p'>
                 <p className='p-rocket' ref={rocketRef}>
                    <span className={`rocket ${rocketisVisible? 'animate-rocket': ''}`}>
                      <img src={rocket} alt='rocket img'/>
                    </span>
                 </p>
                  <p>Academic Distinction</p>
                </div>
              </div>
            </div>
            <div className='paragraph-container'>
              <p>
                Coding isn't just a skill for me; it's my greatest passion, an art form where I express my creativity and solve the world's challenges through lines of code.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
