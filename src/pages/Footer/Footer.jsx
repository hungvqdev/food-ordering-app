import React from 'react';
import { FiFacebook, FiGithub } from 'react-icons/fi';
import { GoMail } from "react-icons/go";
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot; Chúng tôi tiếp tục phát triển và hoàn thiện mỗi ngày để có thể luôn hoàn thành tốt sứ mệnh “Trao Niềm Vui, Chia Sẻ Hạnh Phúc” cho mọi vị khách.&quot;</p>
      </div>

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Liên hệ với chúng tôi</h1>
        <p className="p__opensans">127 Văn Cao, Liễu Giai, Ba Đình, Hà Nội</p>
        <p className="p__opensans">+84 7666 8xxx</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons"> 
          <a href="https://www.facebook.com/hungvq.84/"><FiFacebook /></a>
          <a href="https://github.com/hungvqdev/food-ordering-app"><FiGithub/></a>
          <a href="mailto: hungvq.dev@gmail.com"><GoMail /></a>
          
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">giờ làm việc</h1>
        <p className="p__opensans footer_p">Thứ hai - thứ sáu:</p>
        <p className="p__opensans">11:00 AM - 11:00 PM</p>
        <p className="p__opensans footer_p">thứ bảy - chủ nhật:</p>
        <p className="p__opensans">07:00 am - 11:00 pM</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Copyright © 2022 Pizza Gericht</p>
    </div>

  </div>
);

export default Footer;
