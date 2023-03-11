import React from "react";

function Header() {
  return (
    <header className="header--wrapper">
      
      <div className="header--container">
        <img
          className="beije--logo"
          src="./icons/beijelogo.png"
          alt="beije-logo"
        />

        <div>
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
        </div>

        <div className="icon--container">
          <img className="icon" src="./icons/cart.png" alt="" />
          <img className="icon" src="./icons/profile.png" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
