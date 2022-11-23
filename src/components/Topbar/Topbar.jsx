import React, { useEffect } from "react";
import "./Topbar.css";
import { SlBell } from "react-icons/sl";
import { images } from "../../constants";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, logoutUser } from "../../actions/userActions";
import { Link } from "react-router-dom";

const Topbar = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.loginUserReducer);
  const usersState = useSelector((state) => state.getAllUsersReducer);
  const { currentUser } = userState;
  const { users } = usersState;

  const userInfo = users.find(item => item._id === currentUser._id)

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img
            src={images.logopizza}
            alt="app__logo"
            style={{ width: "150px" }}
          />
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <SlBell />
            <span className="topIconBadge">2</span>
          </div>

          <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="white">
              <span className="userTopbar">{userInfo?.name}</span>{" "}
              <img
                src={userInfo?.avatar}
                alt=""
                className="avatarBar border"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/user">
                Thông tin cá nhân
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/orders">Theo dõi đơn hàng</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  dispatch(logoutUser());
                }}
              >
                Đăng xuất
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
