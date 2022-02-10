import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLongArrowAltLeft } from 'react-icons/fa'
const ModalLogin = ({ handleCloseModal, handleInputChange, loginData, isEnabled, handleLogin, setIsLogin }) => {
    return (
        <div className="modal-signup">
            <div className="modal-container">
                <div className="modal-box">
                    <div className="close" onClick={handleCloseModal}><span>&times;</span></div>
                </div>
                <div className="ico-tweet">
                    <AiOutlineTwitter />
                </div>
                <div>
                    <FaLongArrowAltLeft className="arrow" onClick={() => setIsLogin(false)} />
                </div>
                <div className="header">
                    <h3>Login to your account</h3>
                </div>
                <div className="form-box">
                    <div>
                        <input type="email" placeholder="Email" name="email" value={loginData.email} onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" name="password" value={loginData.password} onChange={handleInputChange} />
                    </div>
                </div>
                <button onClick={handleLogin} className={isEnabled ? "next-button enabled-button" : "next-button"} >
                    Login
                </button>
            </div>
        </div>
    )
}
export default ModalLogin