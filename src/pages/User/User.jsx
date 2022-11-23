import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../../components";
import "./User.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FileBase64 from "react-file-base64";
import { getAllUsers } from "../../actions/userActions";

const schema = yup
  .object({
    name: yup
      .string()
      .min(6, "Tên phải từ 6-20 ký tự")
      .max(20, "Tên phải từ 6-20 ký tự"),
    phone: yup
      .string()
      .matches(new RegExp("[0-9]{10}"), "Số điện thoại không dúng"),
    avatar: yup.string(),
  })
  .required();

export default function User() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useForm();

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.loginUserReducer);
  const usersState = useSelector((state) => state.getAllUsersReducer);
  const { currentUser } = userState;
  const { users } = usersState;

  const userInfo = users.find(item => item._id === currentUser._id)

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const [item, setItem] = useState({ avatar: currentUser.avatar });

  const userChangeInfo = async (info) => {
    const userId = currentUser._id;
    try {
      await axios.post("http://localhost:8000/api/admin/changeuser", {
        item,
        info,
        userId,
      });
      dispatch(getAllUsers());
    } catch (error) {}
  };



  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="userTitleContainer">
          <h1 className="headtext__admin">Thông tin cá nhân</h1>
        </div>
        <div className="userContainer">
          <div className="userInfo">
            <div className="row userChangeImg">
              <div className="col-12">
                <img
                  src={userInfo?.avatar}
                  alt=""
                  className="userShowImg border"
                />
              </div>

              <div className="userShowTopTitle col-12">
                <span className="userShowUsername">{userInfo?.name}</span>
                <span className="userShowUserTitle">{userInfo?.email}</span>
              </div>
            </div>
            <div className="userChangeInfo">
              <span className="userUpdateTitle mt-2">Thay đổi thông tin</span>
              <form
                className="userUpdateForm"
                onSubmit={handleSubmit(userChangeInfo)}
              >
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Họ và tên</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      {...register("name")}
                    />
                  </div>
                  <p className="valid_error">{errors.name?.message}</p>
                  <div className="userUpdateItem">
                    <label>Số điện thoại</label>
                    <input
                      type="text"
                      className="userUpdateInput"
                      {...register("phone")}
                    />
                  </div>
                  <p className="valid_error">{errors.phone?.message}</p>
                  <div className="userUpdateItem">
                    <label>Ảnh đại diện</label>
                    <FileBase64
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setItem({ ...item, avatar: base64 })
                      }
                    />
                  </div>
                  <p className="valid_error">{errors.avatar?.message}</p>
                  <button className="userUpdateButton mt-3" type="submit">
                    Thay đổi
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="userPassword">
            <span className="userUpdateTitle">Thay đổi mật khẩu</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Mật khẩu cũ</label>
                  <input type="text" className="userUpdateInput" />
                </div>
                <div className="userUpdateItem">
                  <label>Mật khẩu mới</label>
                  <input type="text" className="userUpdateInput" />
                </div>
                <div className="userUpdateItem">
                  <label>Mật khẩu xác nhận</label>
                  <input type="text" className="userUpdateInput" />
                </div>
                <button className="userUpdateButton">Xác nhận</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
