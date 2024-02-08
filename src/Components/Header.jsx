import Hamburger from 'hamburger-react'
import React from 'react'
import '../Style/Header.css'
import header__person from '../img/header__prson.png'
import { useState, useRef } from 'react'
import { useClick } from '../useClick'
import HeaderModalBall from '../Smal Components/HeaderModalBall'
function Header() {
    // video
    const [ isMenuOpen, setMenuOpen ] =  useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
      };
    const menuRef = useRef(null);
    useClick(menuRef,()=>{
        if(isMenuOpen) setTimeout(()=> setMenuOpen(false),50);
    });

    // bell
    const [isMenuOpenBell, setMenuOpenBell] = useState(false)
    const toggleMenuBell = ()=>{
        setMenuOpenBell(!isMenuOpenBell);
    };
    const menRefBell = useRef(null);
    useClick(menRefBell,()=>{
        if(isMenuOpenBell)setTimeout(()=>setMenuOpenBell(false),50)
    });
    // person
    const [isMenuOpenPerson, setMenuOpenPerson] = useState(false)
    const toggleMenuPerson = ()=>{
        setMenuOpenPerson(!isMenuOpenPerson);
    };
    const menRefPerson = useRef(null);
    useClick(menRefPerson,()=>{
        if(isMenuOpenPerson)setTimeout(()=>setMenuOpenPerson(false),50)
    });
// SaideBAr
    const [addClass, setClass] = useState(false)
    const [isMenuOpenSaidbar, setMenuOpenSaidbar] = useState(false)
    const toggleMenuSaidBard = ()=>{
        setMenuOpenSaidbar(!isMenuOpenSaidbar)
        setClass(!addClass)
    }

      return (
       <header>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <div onClick={toggleMenuSaidBard}>
                     <Hamburger color='white'/>
                    </div>
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
                <svg onClick={toggleMenuBell} className='header__bell' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6zm-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10z"/></svg>
                <img onClick={toggleMenuPerson} className='header__person' src={header__person} alt="foto" />
{/*-------------------------------------------------------------------------Header modal video--------------------------------------------  */}
                <div className={`header__modal__video ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
                    <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3"/><path fill="currentColor" d="M20.5 28v-6.062l5.25 3.03L31 28l-5.25 3.031l-5.25 3.031z"/><path d="M6 15h36m-9-9l-6 9m-6-9l-6 9"/></g></svg> Добавить Видео
                    </h2>
                    <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.365 6.127h11.447v6.232a1 1 0 0 1-1 1H2.366a1 1 0 0 1-1-1zm-.001 0L12.42 3.164l-.48-1.79a1 1 0 0 0-1.225-.708L1.591 3.112a1 1 0 0 0-.707 1.224zm2.626 4.69h1.278m-.871-5.503l.64-3.126m2.972 2.158l.64-3.126"/></svg> 
                    Начать эфир 
                    </h2>
                </div>
{/*------------------------------------------------------------------------- Header modal ball -------------------------------------------------  */}
                <div className={`header__modal__ball ${isMenuOpenBell ? "active" : ""}`} ref={menRefBell}>
                    <HeaderModalBall/>
                    <HeaderModalBall/>
                    <HeaderModalBall/>
                </div>
{/* ------------------------------------------------------------------------ Header modal acaunt (person)-------------------------------------------------------- */}
                <div className={`header__modal__person ${isMenuOpenPerson ? "active" : ""}`} ref={menRefPerson}>
                    <div className='Person__modal__header'>
                        <div className='Person__modal__header__wrapper'>
                            <img src={header__person} alt="foto" />
                            <div>
                                <h3>User</h3>
                                <h3>@User</h3>
                            </div>
                        </div>
                        <a href="!#">Посмотреть канал</a>
                    </div>
                </div>
                </div>
            </div>
            <div className={`SaidBar ${isMenuOpenSaidbar ? "open__menu" : ""}`}>
                <div className={`SaidBard__grid ${addClass ? "saidbar__flex": ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/></svg>
                    <h2 className={`SaidBard__grid__h2 ${addClass ? "Open__menu" : ""}`}>
                        Глава 
                    </h2>
                </div>
                <div className={`SaidBard__grid ${addClass ? "saidbar__flex": ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 2a1 1 0 0 0-1 1v2h-2V3a1 1 0 0 0-2 0v1H8V3a1 1 0 0 0-2 0v2H4V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1M6 17H4v-2h2Zm0-4H4v-2h2Zm0-4H4V7h2Zm10 9H8v-5h8Zm0-7H8V6h8Zm4 6h-2v-2h2Zm0-4h-2v-2h2Zm0-4h-2V7h2Z"/></svg>
                    <h2 className={`SaidBard__grid__h2 ${addClass ? "Open__menu" : ""}`}>
                        Shorts
                    </h2>
                </div>
                <div className={`SaidBard__grid ${addClass ? "saidbar__flex": ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m164.44 105.34l-48-32A8 8 0 0 0 104 80v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 129.05V95l25.58 17ZM216 40H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 128H40V56h176zm16 40a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8"/></svg>
                    <h2 className={`SaidBard__grid__h2 ${addClass ? "Open__menu" : ""}`}>
                        Подписки
                    </h2>
                </div>
                <div className={`SaidBard__grid ${addClass ? "saidbar__flex2": ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M4.5 3A2.5 2.5 0 0 0 2 5.5v7A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 13.5 3zM7 6.756a.75.75 0 0 1 1.171-.62l3.61 2.451a.5.5 0 0 1 .001.827l-3.61 2.458A.75.75 0 0 1 7 11.252zM6.5 17a2.496 2.496 0 0 1-2-1H14a3 3 0 0 0 3-3V5.5c.607.456 1 1.182 1 2V13a4 4 0 0 1-4 4z"/></svg>
                    <h2 className={`SaidBard__grid__h2 ${addClass ? "Open__menu" : ""}`}>
                        Вы
                    </h2>
                </div>
                <div className={`saideBar__lin ${addClass ? "saidbar__lin__open": ""}`}>
                </div>
                <div className={`saidbar__you ${addClass ? "saidbar__you__open" : ""}`}>
                    <h2>
                        Вы <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m19 12l12 12l-12 12"/></svg>
                    </h2>
                    <div className='saidbar__flex saidbar__open__menu2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none"><g clip-path="url(#healthiconsPersonNegative0)"><path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24 26c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10s4.477 10 10 10m0 2c-6.007 0-18 3.035-18 8v6h36v-6c0-4.965-11.992-8-18-8" clip-rule="evenodd"/></g><defs><clipPath id="healthiconsPersonNegative0"><path d="M0 0h48v48H0z"/></clipPath></defs></g></svg>
                    <h3>
                        Мой канал
                    </h3>
                    </div>
                    <div className='saidbar__flex saidbar__open__menu2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1-7.59V4h2v5.59l3.95 3.95l-1.41 1.41z"/></svg>
                    <h3>
                        История
                    </h3>
                    </div>
                    <div className='saidbar__flex saidbar__open__menu2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z"/><path fill="currentColor" d="M9 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842L9.77 16.005a.5.5 0 0 1-.77-.42Z"/></svg>
                    <h3>
                        Ваши видео
                    </h3>
                    </div>
                    <div className='saidbar__flex saidbar__open__menu2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69A7.941 7.941 0 0 1 11 4.07M5.69 7.1L4.26 5.68A9.949 9.949 0 0 0 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9M4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43A7.868 7.868 0 0 1 4.07 13m1.61 6.74A9.981 9.981 0 0 0 11 21.95v-2.02a7.941 7.941 0 0 1-3.9-1.62zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12"/></svg>
                    <h3>
                        Смотреть позже
                    </h3>
                    </div>
                    <div className='saidbar__flex saidbar__open__menu2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 9v12H1V9zm4 12a2 2 0 0 1-2-2V9c0-.55.22-1.05.59-1.41L14.17 1l1.06 1.06c.27.27.44.64.44 1.05l-.03.32L14.69 8H21a2 2 0 0 1 2 2v2c0 .26-.05.5-.14.73l-3.02 7.05C19.54 20.5 18.83 21 18 21zm0-2h9.03L21 12v-2h-8.79l1.13-5.32L9 9.03z"/></svg>
                    <h3>
                        Понравшиеся 
                    </h3>
                    </div>
                </div>
                <div className={`saideBar__lin ${addClass ? "saidbar__lin__open": ""}`}>
                </div>
                <div className={`saidbar__you2 ${addClass ? "saidbar__you__open" : ""}`}>
                   <h2 >
                        Подписки
                   </h2>
                   <h2 className='saidbar__middle__text'>
                        Подписки нет
                   </h2>
                </div>
                <div className={`saideBar__lin ${addClass ? "saidbar__lin__open": ""}`}>
                </div>
            </div>  
       </header>
    )
}

export default Header