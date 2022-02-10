import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
const ModalSignup = ({handleSignUp, handleInputChange, handleCloseModal, signUpData, isEnabled}) => {
    return (
        <div className="modal-signup">
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
                        <input type="email" placeholder="Email" name="email" value={signUpData.email} onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" name="password" value={signUpData.password} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="dob-content">
                    <h5>Data Privacy</h5>
                    <p>Your information is protected and secured. </p>
                </div>
                <button onClick={handleSignUp} className={isEnabled ? "next-button enabled-button" : "next-button"} >
                    Signup
                </button>
            </div>
        </div>
    )
}
export default ModalSignup