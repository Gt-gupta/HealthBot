import React, { useState } from 'react';
import './SignUp.css';

function SignUp(){
    const [signUp,setSignUp] = useState(0);
    return (
        <div className='body'>
            <img src='/mentalHealth.jpg' alt='Picture' className='picture'/>    
            <div className='form'>
                <img src="/bot.jpg" alt="bot" className='bot' />
                <p style={{fontSize:"22px" , fontWeight:"bold"}}>WELCOME</p>
                <input type='email' className='email' style={{fontSize:"18px"}} placeholder={"Email"} required />
                <input type='password' className='password' style={{fontSize:"18px"}} placeholder={"Password"} required />
                <div className='button'>
                    <p style={{color:"white" , fontSize:"22px"}}>{signUp ? "Sign In" : "Sign Up"}</p>
                </div>
                {signUp==0 ?
                <div style={{display:'flex'}} onClick={() => setSignUp(!signUp)}>
                    <p style={{fontSize:"18px"}}>Already a member?  </p>
                    <p style = {
                        {fontSize:"18px" , color:"blue" , cursor:'pointer' , marginLeft:"5px", fontWeight:"500"}
                        }> <u>Sign In here!</u></p>
                </div> : 
                <div style={{display:'flex'}} onClick={() => setSignUp(!signUp)}>
                    <p style={{fontSize:"18px"}}>New member?  </p>
                    <p style = {
                        {fontSize:"18px" , color:"blue" , cursor:'pointer' , marginLeft:"5px", fontWeight:"500"}
                        }> <u>Sign Up here!</u></p>
                </div>
                }
            </div>
        </div>
    );
}

export default SignUp;