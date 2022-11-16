import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllOrder } from "../../../actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { Topbar, Sidebar, Loading, Error } from "../../../components";
import { DataGrid } from "@material-ui/data-grid";
import "./OrdersAdmin.css";
import ModalOrder from "../../../components/Modal/ModalOrder";
import toast, { Toaster } from 'react-hot-toast';

const OrdersAdmin = () => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const [info, setInfo] = useState([]);
  const dispatch = useDispatch();
  const ordersState = useSelector((state) => state.getAllOrdersReducer);
  const { orders, error, loading } = ordersState;

  useEffect(() => {
    dispatch(getAllOrder());
  }, [dispatch]);

  const handleDelivered = async (orderId) => {
    try {
      await axios.patch(`http://localhost:8000/api/admin/delivered/${orderId}`);
      dispatch(getAllOrder());
      toast.success(`Đơn hàng ${orderId} đã được giao thành công`)
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      field: "date",
      headerName: "Thời gian đặt",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="ordersItem">
            {params.row.createdAt.slice(11, 16)}'{" "}
            {params.row.createdAt.slice(0, 10)}
          </div>
        );
      },
    },
    { field: "_id", headerName: "Mã đơn hàng", width: 215 },
    {
      field: "user",
      headerName: "Thông tin người đặt",
      width: 270,
      renderCell: (params) => {
        return (
          <div className="ordersItem">
            {params.row.name} / {params.row.email}
          </div>
        );
      },
    },
    {
      field: "total",
      headerName: "Tổng tiền",
      sortable: false,
      width: 125,
      renderCell: (params) => {
        return <div className="ordersItem">{params.row.orderAmount}.000đ</div>;
      },
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {params.row.isDelivered === false ? (
              <button
                className="btn btn-outline-warning"
                onClick={() => handleDelivered(params.row._id)}
              >
                Đang giao..
              </button>
            ) : (
              <button className="btn btn-success">Hoàn thành</button>
            )}
          </>
        );
      },
    },
    {
      field: "action",
      sortable: false,
      headerName: "Hoạt động",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <button
              className="btn btn-primary"
              onClick={() => showModal(params)}
            >
              {" "}
              Chi tiết
            </button>
            <ModalOrder show={show} closeModal={closeModal} info={info} />
          </>
        );
      },
    },
  ];

  const showModal = (params) => {
    setShow(true);
    setInfo(params.row);
  };
  return (
    <>
      <Topbar  />
      <div className="app_admin">
        <Sidebar />
        <div className="p-3 mt-3">
          <div>
            <Toaster position="top-right" reverseOrder={false}/>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="headtext__admin">Danh sách đơn hàng</h1>
            <div>
              {/* <Link to="/admin/add-product">
            <button className="productAddButton" style={{marginRight: '10px'}} >Thêm sản phẩm</button>
        </Link> */}
            </div>
          </div>

          {loading && <Loading />}
          {error && <Error error="Có lỗi xảy ra" />}
          {orders && (
            <DataGrid
              rows={orders}
              getRowId={(row) => row._id}
              columns={columns}
              pageSize={8}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default OrdersAdmin;
