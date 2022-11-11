import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./NavbarAdmin.css";
import { BiHome, BiUser, BiLogOut, BiArchive, BiFileBlank } from "react-icons/bi";

const NavbarAdmin = () => {
  return (
    <div className="nav_admin">
      <div className="logo_admin">
        <Link to="/">
          <img
            src={images.logopizza}
            alt="app__logo"
            style={{ width: "150px" }}
          />
        </Link>
      </div>
      <div className="nav_link_admin mt-5">
        <Link to='/admin'>
          <div className="nav_link-item_admin">
            <div>
              <BiHome style={{ fontSize: "30px" }} />
            </div>
            <span>Dashboard</span>
          </div>
        </Link>
      </div>
      <hr />

      <div className="nav_link_admin mt-2">
        <Link to='/admin/users'>
          <div className="nav_link-item_admin">
            <div>
              <BiUser style={{ fontSize: "30px" }} />
            </div>
            <span>Nguời dùng</span>
          </div>
        </Link>
      </div>

      <div className="nav_link_admin mt-2">
        <Link to='/admin/orders'>
          <div className="nav_link-item_admin">
            <div>
              <BiArchive style={{ fontSize: "30px" }} />
            </div>
            <span>Sản phẩm</span>
          </div>
        </Link>
      </div>

      <div className="nav_link_admin mt-2">
        <Link to='/admin'>
          <div className="nav_link-item_admin active_admin">
            <div>
              <BiFileBlank style={{ fontSize: "30px" }} />
            </div>
            <span>Đơn hàng</span>
          </div>
        </Link>
      </div>
      <hr/>

      <div className="nav_link_admin ">
        <Link to='/admin'>
          <div className="nav_link-item_admin">
            <div>
              <BiLogOut style={{ fontSize: "30px" }} />
            </div>
            <span>Đăng xuất</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavbarAdmin;
