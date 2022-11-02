import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/userActions";
import { SubHeading } from "../../components";
import "./Login.css";
import { Link } from "react-router-dom";
import  Loading  from '../../components/Alert/Loading'
import { useForm } from "react-hook-form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading } = loginState;
  const { register, handleSubmit, formState: { errors } } = useForm();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href='/'
    }
  }, []);

  const login = () => {
    console.log(errors,' ok')
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
              <form onSubmit={handleSubmit(login)}>
                <div className="input-boxes">
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Email"
                      {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      
                    />
                    
                  </div>
                  {errors.email?.type === 'required' && <p className="valid_error">Hãy nhập Email</p>}
                  {errors.email?.type === 'pattern' && <p className="valid_error">Email k hợp lệ</p>}
                  
                  <div className="input-box">
                    <input
                      type="password"
                      placeholder="Mật khẩu"
                      {...register("password", { required: true, minLength: 4, maxLength: 16 })} 
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  {errors.password?.type === 'required' && <p className="valid_error">Hãy nhập mật khẩu</p>}
                  {errors.password?.type === 'minLength' && <p className="valid_error">Mật khẩu phải từ 4-16 ký tự</p>}
                  {errors.password?.type === 'maxLength' && <p className="valid_error">Mật khẩu phải từ 4-16 ký tự</p>}
                  <div className="text mt-3 mb-3 ">
                    <a href="/">Quên mật khẩu?</a>
                  </div>

                  <button type="submit"
                    className="button input-box custom__button "
                   
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
