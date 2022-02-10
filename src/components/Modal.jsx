import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai'
import './modal.css'
const Modal = ({ handleCloseModal }) => {

    return (
        <div className="modal-content">
            <div className="modal-container">
                <div className="modal-box">
                    <div className="close" onClick={handleCloseModal}><span>&times;</span></div>
                </div>
                <div className="ico-tweet">
                    <AiOutlineTwitter />
                </div>
                <div className="header">
                    <h3>Create your account</h3>
                </div>
                <div className="form-box">
                    <div>
                        <input type="email" placeholder="Email"  required/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password" required />
                    </div>
                </div>
                <div className="dob-content">
                    <h5>Data Privacy</h5>
                    <p>Your information is protected and secured. </p>
                </div>
                <button className="next-button">
                    Signup
                </button>
            </div>
        </div>
    )
}
export default Modal