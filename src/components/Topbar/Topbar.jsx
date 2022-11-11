import React from 'react'
import "./Topbar.css";
import { SlSettings, SlBell } from "react-icons/sl";
import { images } from '../../constants';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <img src={images.logopizza} alt="app__logo" style={{ width: "150px"}} />
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <SlBell />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SlSettings />
          </div>
          <img src={"https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar