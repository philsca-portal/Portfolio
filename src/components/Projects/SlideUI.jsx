import './SlideUI.css'
import incognito from '../../img/incognito.gif'
import useincognito from '../../img/use-incognito.png'
import incognitoarrow from '../../img/incognito-arrow.gif'

const SlideUI = ({src, title, techstack, githubLink, demoLink}) => {

    return(
        <>
        <div className="slide-container">
            <div className='slide-content'>
                <img src={src} className='background'/>
                <h3>{title}</h3>
                <h5>Techstack: {techstack}</h5>
                <div className='button-container'>
                    <button className='link'><a href={githubLink} target="_blank">Github</a></button>
                    <button className='link1'><a href={demoLink} target="_blank">Live Demo</a></button>
                    <span className='span-incognito'>
                        <div>
                            <img src={useincognito} alt='Use-incognito Img' className='use-incognito' />
                            <img src={incognitoarrow} alt='Arrow-incognito Img' className='arrow-incognito' />
                            <img src={incognito} alt='Incognito Img' className='incognito'/>
                        </div>
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default SlideUI;