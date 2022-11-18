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
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [toggleMenu, setToggleMenu] = React.useState(false);
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <nav
      className={`app__navbar shadow-lg ${
        pathname === "/" ? "app__navbar_fixed" : ""
      }`}
    >
      <div className="app__navbar-logo">
        <Link to="/">
        <img src={images.logopizza} alt="app__logo" style={{ width: "120px"}} />
          <img src={images.gericht} alt="app__logo" />
        </Link>
      </div>
      <div className="app__navbar-login">
        <Link to="/cart" className="p__opensans font_cart border border-1 ">
          Giỏ hàng{" "}
          <Badge className="badge_font_cart">{cartState.cartItems.length}</Badge>
        </Link>
        {currentUser ? (
          <Dropdown className=" app__navbar-dropdown">
            
            <Dropdown.Toggle>{currentUser.name} <img
                src={currentUser.avatar}
                alt=""
                className="avatarBar border"
              /></Dropdown.Toggle>
            
            <Dropdown.Menu>
            <Dropdown.Item  as={Link} to="/user">
                Thông tin cá nhân
              </Dropdown.Item>
              <Dropdown.Item  as={Link} to="/orders">
                Theo dõi đơn hàng
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  dispatch(logoutUser());
                }}
              >
                Đăng xuất
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link to="/login" className="p__opensans">
            Đăng nhập
          </Link>
        )}
      </div>
      <div className="app__navbar-smallscreen">
        <Link to="/cart" className="navbar__right">
          <GiShoppingCart
            color="#fff"
            fontSize={30}
            className=" slide-bottom icon_cart"
          />
          <Badge className="badge_cart">{cartState.cartItems.length}</Badge>
        </Link>
        {currentUser ? (
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
            style={{ marginLeft: "12px" }}
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
                <Link to="/orders" onClick={() => setToggleMenu(false)}>
                  Đơn hàng
                </Link>
              </li>
              <li>
                <div
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
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
