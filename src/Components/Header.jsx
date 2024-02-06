import Hamburger from 'hamburger-react'
import React from 'react'
import '../Style/Header.css'
import header__person from '../img/header__prson.png'
import { useState, useRef } from 'react'
import { useClick } from '../useClick'
function Header() {
    const [ isMenuOpen, setMenuOpen ] =  useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
      };
    const menuRef = useRef(null);
    useClick(menuRef,()=>{
        if(isMenuOpen) setTimeout(()=> setMenuOpen(false),50);
    });
  return (
       <header>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <Hamburger color='white'/>
                    <div className='header__logo__wrapper'>
                    <svg className='youtube__logo' xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180"><path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg>
                    <h2>
                        Youtube
                    </h2>
                    </div>
                </div>
                <div className='header__serch'>
                <input id='header__serch' type="text" placeholder='Введите запрос' /><label htmlFor="header__serch"><svg className='header__svg' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg></label>
                </div>
                <div className='header__profil'>
                <svg onClick={toggleMenu} className='header__video' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11z"/></svg>
                <svg className='header__bell' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6zm-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10z"/></svg>
                <img className='header__person' src={header__person} alt="foto" />
                <div className={`header__modal__video ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
                    <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3"/><path fill="currentColor" d="M20.5 28v-6.062l5.25 3.03L31 28l-5.25 3.031l-5.25 3.031z"/><path d="M6 15h36m-9-9l-6 9m-6-9l-6 9"/></g></svg> Добавить Видео
                    </h2>
                    <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.365 6.127h11.447v6.232a1 1 0 0 1-1 1H2.366a1 1 0 0 1-1-1zm-.001 0L12.42 3.164l-.48-1.79a1 1 0 0 0-1.225-.708L1.591 3.112a1 1 0 0 0-.707 1.224zm2.626 4.69h1.278m-.871-5.503l.64-3.126m2.972 2.158l.64-3.126"/></svg> 
                    Начать эфир 
                    </h2>
                </div>
                </div>
            </div>
       </header>
    )
}

export default Header