import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import {  GiShoppingCart } from 'react-icons/gi'
import images from '../../constants/images';
import './Navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar shadow-lg">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Đăng nhập</a>
        <div />
        <a href="/" className="p__opensans">Giỏ hàng</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiShoppingCart color="#fff" fontSize={30} className="navbar__right slide-bottom"/>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Trang chủ</a></li>
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Đăng nhập</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
