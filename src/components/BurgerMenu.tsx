import React from 'react';
import {  scaleDown as Menu } from 'react-burger-menu';


const BurgerMenu: React.FC = () => {
  return (

    <Menu >
      <a className="burger--menu--item" href="/">
      Ürünler <img src="" alt="" />
      </a>
      <a className="burger--menu--item" href="/">
      Biz Kimiz
      </a>
      <a className="burger--menu--item" href="/">
      Bağış Kültürü
      </a>
      <a className="burger--menu--item" href="/">
        Blog
      </a>
      <a className="burger--menu--item" href="/">
      Kendi Paketini Oluştur!
      </a>
    </Menu>
  );
};

export default BurgerMenu;