import React from 'react'
import './Modal.css';
import modalIcon from '../../img/modal-icon.png';
import cancelIcon from '../../img/x-icon.png';

const Modal = (props) => {
  return (
    <div className='modal'>
      <div className="overlay" onClick={props.data}></div>
      <div className="modal-content">
        <div className='cancel-icon-container'>
          <img className='cancel-icon' onClick={props.data} src={cancelIcon} alt="x img"/>
        </div>
        <br />
        <img className='modal-icon' src={modalIcon} alt="Icon by DotFix Technologies on freeicons.io"/>
        <h2>Contact me</h2>
        <div className='messenger'>
        <label className='label' htmlFor="messenger-link">Messenger :</label>
        <p className='messenger-link'>
          <a href="https://m.me/bryan.tabajonda" target="_blank">https://m.me/bryan.tabajonda</a>
        </p>
        </div>
        <div className='gmail'>
        <label className='label' htmlFor="gmail-link">G-mail :</label>
        <p className='gmail-link'>
          <a href="https://mail.google.com/mail/?extsrc=mailto&url=mailto%3A%3Fto%3Dtabajondabryan7%40gmail.com" target="_blank">Tabajondabryan7@gmail.com</a>
        </p>
        </div>
      </div>
    </div>
  )
}

export default Modal
