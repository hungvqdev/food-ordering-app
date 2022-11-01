import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/userActions";
import { SubHeading } from "../../components";
import "./Login.css";
import { Link } from "react-router-dom";
import  Loading  from '../../components/Alert/Loading'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading } = loginState;

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href='/'
    }
  }, []);

  const login = () => {
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
  };
  return (
    <div className="login_bg">
      <div className="login">
        <div className="content">
          <p>
            Chúng tôi luôn mong muốn mang đến trải nhiệm dịch vụ tốt nhất cho
            khách hàng, hãy đăng ký và theo dõi để được nhận nhiều ưa đãi từ nhà
            hàng
          </p>
          <Link to="/register">
            <div className="button custom__button ">Đăng ký</div>
          </Link>
        </div>
        <div className="form-login mt-5">
          <div className="form-content">
            <div className="login-form p-4">
              <div
                className="p__cormorant text-center "
                style={{ fontSize: "29px" }}
              >
                Đăng nhập
              </div>
              <SubHeading />
              <div>
                <div className="input-boxes">
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      placeholder="Mật khẩu"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="text mt-3 mb-3 ">
                    <a href="/">Quên mật khẩu?</a>
                  </div>

                  <button
                    className="button input-box custom__button "
                    onClick={login}
                  >
                   {loading ? <Loading/> : 'Đăng nhập' } 
                  </button>
                  <div className="text sign-up-text mb-4 ">
                    Bạn chưa có tài khoản ?{" "}
                    <Link to="/register">
                      <b>Đăng ký ngay</b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
