import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, registerUser } from "../../actions/userActions";
import { Navbar, SubHeading } from "../../components";
import { FormSuccess } from "../../components/Alert/Success";
import "./Register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { images } from "../../constants";


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
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.registerUserReducer);
  const usersState = useSelector((state) => state.getAllUsersReducer);
  const { users } = usersState;
  const { success } = registerState;

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  console.log(users)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useForm();

  const  [errorCpass, setErrorCpass ] = useState('')
  const  [errorEmail, setErrorEmail ] = useState('')

  const signup = (user) => {

    const userEmail = users.find(i => i.email === user.email)

    if(userEmail){
      setErrorEmail('Email đã có người sử dụng')
    }
    else if (user.password !== user.cpassword) {
      setErrorCpass('Mât khẩu không khớp')
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
                    <p className="valid_error ">
                        {errorEmail}
                    </p>
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
                   
                      <p className="valid_error ">
                        {errorCpass}
                      </p>

                      <input
                        type="hidden"
                        placeholder="Mật khẩu"
                        {...register("avatar")}
                        defaultValue={images.avatar}
                      />

                    <div className="text mt-3 mb-3 ">
                      <a href="/">Quên mật khẩu?</a>
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
