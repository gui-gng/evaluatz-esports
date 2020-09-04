import React, { useState, useEffect } from 'react';
import './style.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookies_options =  { domain: '.evaluatz.com', path: '/' };


const TOKEN_KEY = 'jwtToken';
const USER_INFO = 'userInfo';

function Header (){
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (cookies && cookies.get(USER_INFO, cookies_options)) {
      setUser(cookies.get(USER_INFO, cookies_options) || null);
      // console.log(user);
      setIsLogged(true);
    }
  });


    return (
      <div className="evaluatz_header d-flex align-items-center justify-content-between">

        <div className="evaluatz_logo_header">
          <img alt="" src="/logo_trans.png"></img>
        </div>
        <div className="evaluatz_header_right d-flex align-items-center justify-content-between">
          {isLogged ?
          <div className="evaluatz_signin_btn"  >{user.username}</div>:
          <a href="https://accounts.evaluatz.com/auth/login?source=esports">
            <div className="evaluatz_signin_btn" >Sign Up</div> 
          </a>
           
            
          }

        </div>

      </div>
    );
  
}

export default Header;