import React, {useEffect, useState} from "react";
import {Navigate,NavLink} from "react-router-dom";
// import styles from "./Login.css"
import {Button} from "bootstrap";
import PasswordStrengthBar from "react-password-strength-bar";
import authAPI from "../../../API/authAPI";


const Login = (props) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [emailDirty,setEmailDirty] = useState(false)
    const [passwordDirty,setPasswordDirty] = useState(false)
    const [emailError,setEmailError] = useState("email can't be empty")
    const [passwordError,setPasswordError] = useState("wrong password")
    const [formValid,setValid] = useState(false)

    useEffect(()=>{
        if(emailError || passwordError){
            setValid(false)
        }else{
            setValid(true)
        }
    }, [emailError,passwordError])


    const emailHandler = (e) =>{
        setEmail(e.target.value)
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError("email is incorrect")
        }else{
            setEmailError("")
        }
    }
    const  passwordHandler = (e) =>{
        setPassword(e.target.value)
        if (e.target.value.length<8){
            setPasswordError("password must be longer then 8")
            if(!e.target.value){
                setPasswordError("password can't be empty")
            }
        }else{
            setPasswordError("")
        }
    }
    const blurHandler = (e) =>{
        switch (e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
    const dataSender = () => {
        authAPI.register(email,password)
    }

    return(
        <div>
            <h1>
                Registration
            </h1>
            {/*<input name='Name' type='text' placeholder='Your name'/>*/}
            {/*<br/>*/}
            {/*<input name='Surname' type='text' placeholder='Your surname'/>*/}
            {/*<br/>*/}
            {(emailDirty&&emailError)&& <div style={{color:"red"}}>{emailError}</div>}
            <input onChange={e=>(emailHandler(e))} value={email} onBlur={e=> blurHandler(e)} name='email' type='text' placeholder='Enter email'/>
            <br/>
            {(passwordDirty&&passwordError)&& <div style={{color:"red"}}>{passwordError}</div>}
            <input onChange={e=>(passwordHandler(e))} value={password} onBlur={e=> blurHandler(e)} name='password' type='password' placeholder='Enter password'/>
            <PasswordStrengthBar password={password}/>
            <br/>
            <div onClick={dataSender}>
                <NavLink to={"/login"}><button disabled={!formValid} type="submit">Log in</button></NavLink>
            </div>
        </div>
    )


}
export default Login
