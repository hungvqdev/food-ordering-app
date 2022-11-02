import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../actions/userActions";
import { SubHeading } from "../../components";
import { FormSuccess } from "../../components/Alert/Success";
import "./Register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GiCoinsPile } from "react-icons/gi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.registerUserReducer);
  const { success } = registerState;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signup = () => {
    if (password !== cpassword) {
      console.log(cpassword)
    } else {
      const user = {
        name,
        email,
        password,
      };
      dispatch(registerUser(user));
    }
  };
  return (
    <div className="register_bg">
      <div className=" register_flex">
        <div className="form-content">
          <div className="form_register p-4">
            {success ? (
              <FormSuccess success="Đăng ký thành công. Hãy đăng nhập để trải nhiệm dịch vụ của chúng tôi" />
            ) : (
              <>
                {" "}
                <div
                  className="p__cormorant text-center "
                  style={{ fontSize: "29px" }}
                >
                  Đăng ký
                </div>
                <SubHeading />
                <form onSubmit={handleSubmit(signup)}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Tên tài khoản"
                        {...register("name", {
                          required: true,
                          minLength: 4,
                          maxLength: 16,
                        })}
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    {errors.name?.type === "required" && (
                      <p className="valid_error">Hãy nhập tên tài khoản</p>
                    )}
                    {errors.name?.type === "minLength" && (
                      <p className="valid_error">Tên phải từ 4-16 ký tự</p>
                    )}
                    {errors.name?.type === "maxLength" && (
                      <p className="valid_error">Tên phải từ 4-16 ký tự</p>
                    )}
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Email"
                        {...register("email", {
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    {errors.email?.type === "required" && (
                      <p className="valid_error">Hãy nhập Email</p>
                    )}
                    {errors.email?.type === "pattern" && (
                      <p className="valid_error">Email k hợp lệ</p>
                    )}
                    <div className="input-box">
                      <input
                        type="password"
                        placeholder="Mật khẩu"
                        {...register("password", {
                          required: true,
                          minLength: 4,
                          maxLength: 16,
                        })}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    {errors.password?.type === "required" && (
                      <p className="valid_error">Hãy nhập mật khẩu</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="valid_error">Mật khẩu phải từ 4-16 ký tự</p>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <p className="valid_error">Mật khẩu phải từ 4-16 ký tự</p>
                    )}
                    <div className="input-box">
                      <input
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                        {...register("cpassword", { required: true})} 
                        value={cpassword}
                        onChange={(e) => {
                          setCpassword(e.target.value);
                        }}
                      />
                    </div>
                    {errors.cpassword?.type === 'required' && <p className="valid_error">Hãy nhập mật khẩu xác nhận</p>}
                    {password !== cpassword && <p className="valid_error">Mật khâu không trùng khớp với nhau</p>}
                    <div className="text mt-3 mb-3 ">
                      <a href="#">Quên mật khẩu?</a>
                    </div>

                    <button
                      type="submit"
                      className="button input-box custom__button "
                    >
                      Đăng ký
                    </button>
                    <div className="text sign-up-text mb-4 ">
                      Bạn đã có tài khoản ?{" "}
                      <Link to="/login">
                        <b>Đăng nhập ngay</b>
                      </Link>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
