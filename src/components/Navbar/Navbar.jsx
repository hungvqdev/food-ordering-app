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
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch()
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <nav className="app__navbar shadow-lg">
      
      <div className="app__navbar-logo">
        <Link to="/"><img src={images.gericht} alt="app__logo" /></Link>
      </div>
      <div className="app__navbar-login">
        {currentUser ? (
          <Dropdown className="p__opensans app__navbar-dropdown">
            <Dropdown.Toggle>{currentUser.name}</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Hồ Sơ</Dropdown.Item>
              <Dropdown.Item  onClick={() => {dispatch(logoutUser())}}>Đăng xuất</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link to="/login" className="p__opensans">
            Đăng nhập
          </Link>
        )}

        <div />
        <Link to="/cart" className="p__opensans">
          Giỏ hàng {cartState.cartItems.length}
        </Link>
      </div>
      <div className="app__navbar-smallscreen">
        <Link to="/cart" className="navbar__right">
          <GiShoppingCart
            color="#fff"
            fontSize={30}
            className=" slide-bottom"
          />
          <Badge color="danger" position="top-start" shape="rounded-pill">
            {cartState.cartItems.length}
          </Badge>
        </Link>
        {currentUser ? (
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
        ) : (
          <Link to="/login" className="navbar__right">
            <FaSignInAlt color="#fff" fontSize={28} className=" slide-bottom" />
          </Link>
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
