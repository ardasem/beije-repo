import React from "react";
import {useState,useEffect} from 'react'
import Menu from './BurgerMenu'

function Header() {

  //Bu useEffect de sayfayi responsive olarak yazabilmek icin window size width ini otomatik olarak guncelliyor.
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(()=>{
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize',handleResize)

  },[]);

// header uzerinde 3 div ,1 de gerektiginde kullanmak icin burger menu bulunmakta. Logo , nav linkleri ve iconlar bu kisimda.
  return (
    <header className="header--wrapper">
      
      <div className="header--container">
        <img
          className="beije--logo"
          src="./icons/beijelogo.png"
          alt="beije-logo"
        />

        {windowSize > 1050 && <nav>
          <ul className="nav--pages">
            <a className="nav--link" href="">
              Ürünler
            </a>
            <a className="nav--link" href="">
              Biz Kimiz
            </a>
            <a className="nav--link" href="">
              Bağış Kültürü
            </a>
            <a className="nav--link" href="">
              Blog
            </a>
            <a className="nav--link" href="">
              Kendi Paketini Oluştur!
            </a>
          </ul>
        </nav>}

        <div className="icon--container" >
          <img className="icon" src="./icons/cart.png" alt="" />
          <img className="icon" src="./icons/profile.png" alt="" />
        </div>

        {windowSize < 1050 &&  <Menu/> }
      </div>
    </header>
  );
}

export default Header;
