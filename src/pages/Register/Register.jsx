import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../actions/userActions";
import { Navbar, SubHeading } from "../../components";
import { FormSuccess } from "../../components/Alert/Success";
import "./Register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Hãy nhập tên tài khoản"),
    email: yup.string().email("Email không hợp lệ").required("Hãy nhập Email"),
    password: yup
      .string()
      .min(4, "Mật khẩu phải từ 4-12 ký tự")
      .max(12, "Mật khẩu phải từ 4-12 ký tự")
      .required("Hãy nhập mật khẩu"),
    cpassword: yup.string().required("Hãy nhập mật khẩu xác nhận"),
  })
  .required();

const Register = () => {
  console.log(schema);
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.registerUserReducer);
  const { success } = registerState;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useForm();

  const signup = (user) => {
    if (user.password !== user.cpassword) {
    } else {
      dispatch(registerUser(user));
    }
  };
  return (
    <>
      <Navbar/>
      <div className="register_bg">   
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
                        {...register("name")}
                      />
                    </div>
                    <p className="valid_error">{errors.name?.message}</p>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Email"
                        {...register("email")}
                      />
                    </div>
                    <p className="valid_error">{errors.email?.message}</p>
                    <div className="input-box">
                      <input
                        type="password"
                        placeholder="Mật khẩu"
                        {...register("password")}
                      />
                    </div>
                    <p className="valid_error">{errors.password?.message}</p>
                    <div className="input-box">
                      <input
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                        {...register("cpassword")}
                      />
                    </div>
                    <p className="valid_error">{errors.cpassword?.message}</p>
                    {/* {cpassword && (
                      <p className="valid_error">
                        Mật khâu không trùng khớp với nhau
                      </p>
                    )} */}
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
    </>
  );
};

export default Register;
