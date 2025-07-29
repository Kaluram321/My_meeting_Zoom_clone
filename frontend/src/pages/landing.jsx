import {Link}from 'react-router-dom';

import React from 'react'

import "../App.css"
export default function LandingPage(){
    return(
        <div className='landingPageContainer'>
     
        <nav>
            <div className='naveHeader'>
                <h2>My Meeting</h2>
            </div>
            <div className='navlist'>
                <p>Join as Guest</p>
                <p>Register</p>
                <div role='button'>
                    <p>Login</p>
                </div>
            </div>
        </nav>
     <div className="landingMainContainer">
        <div>
            <h1><span style={{color:"red"}}>Connect</span> with your loved one</h1>
            <p>cover distance by My Meeting Call</p>
           <div role='button'>
            <Link to={"/auth"}>Get Started</Link>
           </div>
        </div>
       
        <div>
        <img src="/calling.png" alt=""/>
        </div>


     </div>
      

        </div>
    )
}
