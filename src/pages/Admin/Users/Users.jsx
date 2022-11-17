import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Topbar, Sidebar, Loading, Error } from "../../../components";
import { DataGrid } from "@material-ui/data-grid";
import { getAllUsers } from "../../../actions/userActions";
import { Link } from "react-router-dom";
import './User.css'
import { getAllOrder } from "../../../actions/orderActions";

const Users = () => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.getAllUsersReducer);
  const { users, error, loading } = usersState;
  const ordersState = useSelector((state) => state.getAllOrdersReducer);
  const { orders } = ordersState;

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllOrder());
  }, [dispatch]);

const sumOrder = (id) => {
  const userorder = orders?.filter(x => x.userId === id ).map(x => x.orderAmount)
  let sum = 0; 
  userorder.forEach(item => {
    sum += item;
  });
  return sum;
}


  

  const columns = [
    { field: "_id", headerName: "ID", width: 210 },
    {
      field: "user",
      headerName: "Người dùng",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "turn",
      sortable: false,
      headerName: "Số lần đặt",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            {orders ? orders?.filter(x => x.userId === params.id).length : 0}
          </>
        );
      },
    },
    {
      field: "total",
      sortable: false,
      headerName: "Tổng tiền ",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {sumOrder(params.id)}.000đ
          </>
        );
      },
    }
  ];

  return (
    <>
      <Topbar />
      <div className="app_admin">
        <Sidebar />
        <div className="userList mt-3">
        <div className="d-flex justify-content-between align-items-center">
            <h1 className="headtext__admin">Danh sách người dùng</h1>
        </div>
            {loading && <Loading/>}
            {error && <Error/>}
            {users && <DataGrid
            rows={users}
            getRowId={(row) => row._id}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />}
          
        </div>
      </div>
    </>
  );
};

export default Users;
