import React from "react";
import { FcApproval } from "react-icons/fc";
import { Link } from "react-router-dom";


export const Success = ({ success }) => {
  return (
    <div className="alert alert-success" role="alert">
      {success}
    </div>
  );
};

export const FormSuccess = ({ success }) => {
  return (
    <div className="container text-center" style={{width: "280px" , height: "430px"}}>
      <FcApproval className="mt-3 mb-4" style={{width: "100px", height: "100px"}}/>
      <div className="title_form_success">Thank you !</div>
      <p className="p_form_success">{success}</p>
      <Link to="/login">
            <button className="custom__button" >Đăng nhập</button> 
          </Link>
    </div>
  );
};
