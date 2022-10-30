import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { FaSignInAlt } from "react-icons/fa";
import images from "../../constants/images";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Dropdown } from "react-bootstrap";
import { logoutUser } from "../../actions/userActions";

const Navbar = () => {
  const dispatch = useDispatch()
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <nav className="app__navbar shadow-lg">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <div className="app__navbar-login">
        {currentUser ? (
          <Dropdown className="p__opensans app__navbar-dropdown">
            <Dropdown.Toggle>{currentUser.name}</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Hồ Sơ</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={() => {dispatch(logoutUser())}}>Đăng xuất</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <a href="/login" className="p__opensans">
            Đăng nhập
          </a>
        )}

        <div />
        <a href="/cart" className="p__opensans">
          Giỏ hàng {cartState.cartItems.length}
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <a href="/cart" className="navbar__right">
          <GiShoppingCart
            color="#fff"
            fontSize={30}
            className=" slide-bottom"
          />
          <Badge color="danger" position="top-start" shape="rounded-pill">
            {cartState.cartItems.length}
          </Badge>
        </a>
        {currentUser ? (
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
        ) : (
          <a href="/login" className="navbar__right">
            <FaSignInAlt color="#fff" fontSize={28} className=" slide-bottom" />
          </a>
        )}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Hồ sơ
                </a>
              </li>
              <li>
                <div onClick={() => {dispatch(logoutUser())}}>
                  Đăng xuất
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
