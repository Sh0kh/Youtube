import React from 'react'
import '../Style/HeaderModalBall.css'
import header__foto__logo from '../img/header__prson.png'
import headerModalBall__foto from '../img/headerModalBallCardFoto.jpg'
// import header__person from '../img/header__prson.png'
function HeaderModalBall({title, time, content}) {
  return (
    <div className='headerModalBall'>
        <div className='headerModalBall__wrapper'>
            <div className='headerModalBall__logo'>
                <img src={header__foto__logo} alt="foto" />
                <div className='headerModalBall__text'>
                  <h2>
                      {title} Nick
                  </h2>
                  <h5>
                     {time} 2 day ago
                  </h5>   
                </div>  
            </div>
            <div className='headerModalBall__foto'>
                <img src={headerModalBall__foto} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeaderModalBall