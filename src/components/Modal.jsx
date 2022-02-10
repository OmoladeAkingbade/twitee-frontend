import React, { useState } from 'react';
import './modal.css'
import ModalSignup from './ModalSignup';
import ModalLogin from './ModalLogin';
const Modal = ({ handleCloseModal }) => {
    const [signUpData, setSignUpDate] = useState({ email: '', password: '' })
    const [loginData, setLoginData] = useState({ email: '', password: '' })
    const [isEnabled, setIsEnabled] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const handleSignUp = (e) => {
        e.preventDefault()
        e.target.disabled = true
        if (signUpData.email && signUpData.password) {
            e.target.disabled = false
            // do something 
            setIsLogin(true)
        } else {
        }
    }
    const handleLogin = (e) => {
        e.preventDefault()
    }
    console.log(signUpData)
    const handleLoginChange = (e) => {
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData, [name]: value }
        setLoginData(newData)
        if (value) {
            setIsEnabled(true)
        } else {
            setIsEnabled(false)
        }
    }
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        const newData = { ...signUpData, [name]: value }
        setSignUpDate(newData)
        if (value) {
            setIsEnabled(true)
        } else {
            setIsEnabled(false)
        }
    }
    return (
        <>
            {isLogin ? <ModalLogin setLoginData={setLoginData} loginData={loginData} handleInputChange={handleLoginChange} handleCloseModal={handleCloseModal} isEnabled={isEnabled} setIsEnabled={setIsEnabled} handleLogin={handleLogin} setIsLogin={setIsLogin} /> :
                <ModalSignup handleInputChange={handleInputChange} handleSignUp={handleSignUp} handleCloseModal={handleCloseModal} setIsEnabled={setIsEnabled} signUpData={signUpData} isEnabled={isEnabled} />}
        </>
    )
}
export default Modal