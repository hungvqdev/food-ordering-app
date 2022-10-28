import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../actions/userActions";
import { SubHeading } from "../../components";

import './Register.css'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')

  const dispatch = useDispatch()

  const register = () => {
    if(password != cpassword) {
      alert('Sai mât khâru')
    } else {
        const user = {
          name,
          email,
          password
        }
        dispatch(registerUser(user))
    }
  }
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
                      value={name}
                      onChange={(e) => {setName(e.target.value)}}
                    />
                  </div>
                  <div className="input-box"> 
                    <input
                      type="text"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => {setEmail(e.target.value)}}
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      placeholder="Mật khẩu"
                      required
                      value={password}
                      onChange={(e) => {setPassword(e.target.value)}}
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      placeholder="Xác nhận mật khẩu"
                      required
                      value={cpassword}
                      onChange={(e) => {setCpassword(e.target.value)}}
                    />
                  </div>
                  <div className="text mt-3 mb-3 " >
                    <a href="#">Quên mật khẩu?</a>
                  </div>
                 
                  <button className="button input-box custom__button " onClick={register}>
                      Đăng ký
                  </button>
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
