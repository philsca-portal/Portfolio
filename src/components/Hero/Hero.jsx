import React, { useState } from 'react'
import './Hero.css'

import Modal from './Modal.jsx'

import image from '../../img/me.png'
import reactImage from '../../img/react.png'
import phpImage from '../../img/php.jpg';
import mysqlImage from '../../img/mysql.png';
import javascriptImage from '../../img/js.png';
import htmlImage from '../../img/html.png';
import cssImage from '../../img/css.png';
import firebaseImage from '../../img/firebase.png';
import javaImage from '../../img/java.jpg';
import apiImage from '../../img/api.png';
import blobImage from '../../img/blob.png';
import myResume from '../../file/RESUME.pdf';

const Hero = ({ heroRef }) => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }
  
  return (
    <section className='container' id='hero' ref={heroRef}>
      <div className='blob-container'>
        <img className='blob' src={blobImage} alt="Blob img"/>
      </div>
      <div className='div-one'>
        <div className='static-text-one'>Bryan Revilla Tabajonda</div>
        <div className='container-two'>
          <div className='static-text-two'>I'm a</div>
            <ul className='dynamic-text'>
              <li><span>Student</span></li>
              <li><span>Coder</span></li>
            </ul>
        </div>
        <div className='static-text-three'>
          <p>"Constantly seeking new challenges and opportunities to hone my skills and expand my knowledge in the ever-evolving world of technology."</p>
        </div>
        <div className='button'>
          <button className='download-button'><p><a href={myResume} download="Resume- TABAJONDA,BRYAN R.">Download my Resume</a></p></button>
          <button className='contact-button' onClick={toggleModal}><p>Contact Me</p>
          </button>
        </div>
        {modal && (<Modal data={toggleModal}/>)}
      </div>
      <div className='try'>
        <div className='div-two'>
            <div className='shadow'></div>
            <img className='react-img' src={reactImage} alt="React img"/>
            <img className='php-img' src={phpImage} alt="Php img" />
            <img className='mysql-img' src={mysqlImage} alt="Mysql img"/>
            <img className='js-img' src={javascriptImage} alt="Js img" />
            <img className='html-img' src={htmlImage} alt="Html img" />
            <img className='java-img' src={javaImage} alt="Java img" />
            <img className='api-img' src={apiImage} alt="Api img" />
            <img className='firebase-img' src={firebaseImage} alt="Firebase img" />
            <img className='css-img' src={cssImage} alt="Css img" />
            <img className='me' src={image} alt="my Portrait"/>
        </div>
      </div>
    </section>
  )
}

export default Hero
