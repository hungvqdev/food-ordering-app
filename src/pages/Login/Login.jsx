import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/userActions";
import { Navbar, SubHeading } from "../../components";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import Loading from "../../components/Alert/Loading";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Hãy nhập Email"),
    password: yup
      .string()
      .min(4, "Mật khẩu phải từ 4-12 ký tự")
      .max(12, "Mật khẩu phải từ 4-12 ký tự")
      .required("Hãy nhập mật khẩu"),
  })
  .required();

const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory()
  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading } = loginState;
  const usersState = useSelector((state) => state.getAllUsersReducer);
  const { users } = usersState;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [ errorLogin, setErrorLogin ] = useState('')
  const login = (user) => {
    const userLogin =  users.find(e => e.email === user.email)
      if(!userLogin){
        setErrorLogin('Email này chưa đước đăng ký')
      } else {
        dispatch(loginUser(user));
        setErrorLogin('')
      } 
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      // window.location.href = "/";
      history.replace('/')
    }
  }, []);

  return (
    <>
    <Navbar/>
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
                      {...register("email")}
                    />
                  </div>
                  <p className='valid_error'>{errors.email?.message}</p>
                  <p className='valid_error'>{errorLogin}</p>

                  <div className="input-box">
                    <input
                      type="password"
                      placeholder="Mật khẩu"
                      {...register("password")}
                    />
                  </div>
                  <p className='valid_error'>{errors.password?.message}</p>
                  <div className="text mt-3 mb-3 ">
                    <a href="/">Quên mật khẩu?</a>
                  </div>

                  <button
                    type="submit"
                    className="button input-box custom__button "
                  >
                    {loading ? <Loading /> : "Đăng nhập"}
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
    </>
    
  );
};

export default Login;
