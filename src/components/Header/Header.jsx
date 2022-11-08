import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="chào mừng đến" /> 
      <h2 className="app__header-h1">pizza gerícht</h2>
      <p className="p__opensans" style={{ margin: '1.5rem 0' }}>Với sứ mệnh “Mang đến niềm vui, sẻ chia hạnh phúc”, chúng tôi đã và đang nỗ lực từng ngày để mang đến những trải nghiệm ẩm thực tốt nhất cho tất cả những vị khách thân yêu của mình. </p>
      <a href="/#menu">
            <button className="custom__button" >Khám phá thực đơn -></button> 
          </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
