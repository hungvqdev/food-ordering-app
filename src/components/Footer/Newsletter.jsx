import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Bản tin" />
      <h1 className="headtext__cormorant">Theo dõi bản tin của chúng tôi</h1>
      <p className="p__opensans">để không bỏ lỡ thông tin khuyến mãi, luôn nhận được chương trình ưu đãi đặc biệt.</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Hãy nhập email của bạn" />
      <button type="button" className="custom__button">Đăng ký</button>
    </div>
  </div>
);

export default Newsletter;
