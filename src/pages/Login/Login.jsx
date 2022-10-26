import React from "react";
import { SubHeading } from "../../components";
import "./Login.css";

const Login = () => {
  return (
    <div className="login_bg">
      <div className="login">
        <div className="content">  
          <p>
            Chúng tôi luôn mong muốn mang đến trải nhiệm dịch vụ tốt nhất cho khách hàng, hãy đăng ký và theo dõi để được nhận nhiều ưa đãi từ nhà hàng
          </p>
          <a href="/register">
          <div className="button custom__button ">
                      Đăng ký
          </div>
          </a>
          
        </div>
        <div className="form-login mt-5">
          <div className="form-content">
            <div className="login-form p-4">
              <div className="p__cormorant text-center " style={{ fontSize: "29px"}}>Đăng nhập</div>
              <SubHeading />
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box"> 
                    <input
                      type="text"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Mật khẩu"
                      required
                    />
                  </div>
                  <div class="text mt-3 mb-3 " >
                    <a href="#">Quên mật khẩu?</a>
                  </div>
                 
                  <div class="button input-box custom__button ">
                      Đăng nhập
                  </div>
                  <div class="text sign-up-text mb-4 ">
                    Bạn chưa có tài khoản ? <a href="/register"><b>Đăng ký ngay</b></a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
