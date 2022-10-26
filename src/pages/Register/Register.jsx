import React from "react";
import { SubHeading } from "../../components";
import './Register.css'

const Register = () => {
  return (
    <div className="register_bg">
      <br /> 
        <div className=" register_flex">
          <div className="form-content">
            <div className="form_register p-4">
              <div className="p__cormorant text-center " style={{ fontSize: "29px"}}>Đăng ký</div>
              <SubHeading />
              <form action="#">
                <div className="input-boxes">
                <div className="input-box"> 
                    <input
                      type="text"
                      placeholder="Tên tài khoản"
                      required
                    />
                  </div>
                  <div className="input-box"> 
                    <input
                      type="text"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      placeholder="Mật khẩu"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      placeholder="Xác nhận mật khẩu"
                      required
                    />
                  </div>
                  <div className="text mt-3 mb-3 " >
                    <a href="#">Quên mật khẩu?</a>
                  </div>
                 
                  <div className="button input-box custom__button ">
                      Đăng ký
                  </div>
                  <div className="text sign-up-text mb-4 ">
                    Bạn đã có tài khoản ? <a href="/login"><b>Đăng nhập ngay</b></a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Register;
