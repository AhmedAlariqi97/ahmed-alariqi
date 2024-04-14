import React from 'react';
import './header.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = () => {

  const [showModal, setshowModal] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
   if (theme === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
   } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
   }
    
  }, [theme])
  

  return (
    <header className='flex'>
       <button onClick={() => { setshowModal(true) }} 
       className='menu icon-menu flex'></button>
      <div />
      <nav>
        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="#skill">Skills</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <button onClick={() => { 
        //  setTheme("light")
        //send value to local storage
        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")

        //get value from localstorage
        setTheme(localStorage.getItem("currentMode"))
       }} className='mode flex'>
        { theme === "dark" ? (<span className='icon-moon'></span>) : (<span className='icon-sun'></span>)}
      </button>



      {showModal && (
          <div className='fixed'> 
              <ul className='modal'>
                <li>
                  <button className='icon-close' onClick={() => { setshowModal(false) }}/>
                   
                </li>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
              </ul>
          </div>
      )}
    </header>
  )
}

export default Header;