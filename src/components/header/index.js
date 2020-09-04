import React, { useState, useEffect } from 'react';
import './style.css';


function Header (){
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
  
  });


    return (
      <div className="evaluatz_header d-flex align-items-center justify-content-between">

        <div className="evaluatz_logo_header">
          <img alt="" src="/logo_trans.png"></img>
        </div>
        <div className="evaluatz_header_right d-flex align-items-center justify-content-between">
          {isLogged ?
          <div className="evaluatz_signin_btn"  >{user}</div>:
          <a href="https://accounts.evaluatz.com/auth/login?">
            <div className="evaluatz_signin_btn" >Sign Up</div> 
          </a>
           
            
          }

        </div>

      </div>
    );
  
}

export default Header;