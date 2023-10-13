import './Skill.css'

import blobImage from '../../img/Stacked_blob.png'
import skillme from '../../img/skill-me.png'
import brain from '../../img/brain.png'
import backend from '../../img/backend.png'
import frontend from '../../img/frontend.png'
import checkyellow from '../../img/check-yellow.png'
import checkblue from '../../img/check-blue.png'

const Skill = ({ skillRef }) => {
  return (
    <section className='container2' id='skill' ref={skillRef}>
      <div className="ghost-div"></div>
      <div className='div2'>
        <ul>
          <li className='my'>My</li>
          <li className='skill'>Skills</li>
        </ul>
      </div>
      <div className='blob-container1'>
        <div className='shadow'></div>
        <img className='blob-img' src={blobImage} alt="Blob img"/>
        <img className='brain' src={brain} alt='Brain img' />
        <img className='skill-me' src={skillme} alt='Skill me img' />
      </div>
      <div className='box-line-connection-left'></div>
      <div className='box-arrow-left'></div>
      <div className="triangle-bottom1"></div>
      <div className='left-box'>
        <ul className='frontend-ul'>
          <li className='frontend-li'>
            <div className='ghost'>
              <img className="check-yellow" src={checkyellow} alt='Check img'/>
              <span>HTML: Intermediate</span>
            </div>
            <div className="progress-loader">
                <div className="progress"></div>
            </div>
          </li>
          <li className='frontend-li'>
            <div className='ghost'>
              <img className="check-yellow" src={checkyellow} alt='Check img'/>
              <span>CSS: Intermediate</span>
            </div>
            <div className="progress-loader">
                <div className="progress"></div>
            </div>
          </li>
          <li className='frontend-li'>
            <div className='ghost'>
              <img className="check-yellow" src={checkyellow} alt='Check img'/>
              <span>React.js: Intermediate</span>
            </div>
            <div className="progress-loader">
                <div className="progress"></div>
            </div>
          </li>
          <li className='frontend-li'>
            <div className='ghost'>
              <img className="check-yellow" src={checkyellow} alt='Check img'/>
              <span>Tailwind: Intermediate</span>
            </div>
            <div className="progress-loader">
                <div className="progress"></div>
            </div>
          </li>
          <li className='frontend-li'>
            <div className='ghost'>
              <img className="check-yellow" src={checkyellow} alt='Check img'/>
              <span>Shadcn UI: Intermediate</span>
            </div>
            <div className="progress-loader">
                <div className="progress"></div>
            </div>
          </li>
          <li className='frontend-li'>
            <div className='ghost'>
              <img className="check-yellow" src={checkyellow} alt='Check img'/>
              <span>Next UI: Beginner</span>
            </div>
            <div className="progress-loader">
                <div className="progress-beginner"></div>
            </div>
          </li>
        </ul>
      </div>
      <img className='frontend-img' src={frontend} alt='Frontend Img'/>
      <div className='box-line-connection-right'></div>
      <div className='box-arrow-right'></div>
      <div className="triangle-bottom2"></div>
      <div className='right-box'>
      <ul className='backend-ul'>
          <li className='backend-li'>
            <div className='ghost1'>
              <img className="check-blue" src={checkblue} alt='Check img'/>
              <span>Node.js: Intermediate</span>
            </div>
            <div className="progress-loader-blue">
                <div className="progress-blue"></div>
            </div>
          </li>
          <li className='backend-li'>
            <div className='ghost1'>
              <img className="check-blue" src={checkblue} alt='Check img'/>
              <span>PHP: Intermediate</span>
            </div>
            <div className="progress-loader-blue">
                <div className="progress-blue"></div>
            </div>
          </li>
          <li className='backend-li'>
            <div className='ghost1'>
              <img className="check-blue" src={checkblue} alt='Check img'/>
              <span>C#: Intermediate</span>
            </div>
            <div className="progress-loader-blue">
                <div className="progress-blue"></div>
            </div>
          </li>
          <li className='backend-li'>
            <div className='ghost1'>
              <img className="check-blue" src={checkblue} alt='Check img'/>
              <span>Typescript: Beginner</span>
            </div>
            <div className="progress-loader-blue">
                <div className="progress-blue-beginner"></div>
            </div>
          </li>
          <li className='backend-li'>
            <div className='ghost1'>
              <img className="check-blue" src={checkblue} alt='Check img'/>
              <span>MongoDB: Intermediate</span>
            </div>
            <div className="progress-loader-blue">
                <div className="progress-blue"></div>
            </div>
          </li>
          <li className='backend-li'>
            <div className='ghost1'>
              <img className="check-blue" src={checkblue} alt='Check img'/>
              <span>MySQL: Intermediate</span>
            </div>
            <div className="progress-loader-blue">
                <div className="progress-blue"></div>
            </div>
          </li>
          <li className='backend-li'>
            <div className='ghost1'>
              <img className="check-blue" src={checkblue} alt='Check img'/>
              <span>ORACLE: Beginner</span>
            </div>
            <div className="progress-loader-blue">
                <div className="progress-blue-beginner"></div>
            </div>
          </li>
          <li className='backend-li'>
            <div className='ghost1'>
              <img className="check-blue" src={checkblue} alt='Check img'/>
              <span>Firebase: Beginner</span>
            </div>
            <div className="progress-loader-blue">
                <div className="progress-blue-beginner"></div>
            </div>
          </li>
          <li className='backend-li'>
            <div className='ghost1'>
              <img className="check-blue" src={checkblue} alt='Check img'/>
              <span>ClerkAuth: Intermediate</span>
            </div>
            <div className="progress-loader-blue">
                <div className="progress-blue"></div>
            </div>
          </li>
        </ul>
      </div>
      <img className='backend-img' src={backend} alt='Backend Img'/>
    </section>
  )
}

export default Skill
