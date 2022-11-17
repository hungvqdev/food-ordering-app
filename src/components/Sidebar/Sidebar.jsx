import "./Sidebar.css";
import { SlHome, SlUser, SlBriefcase, SlHandbag } from "react-icons/sl";
import { Link, useLocation, useParams } from "react-router-dom";

export default function Sidebar() {

  let location = useLocation()
  let { productId } = useParams()

  let activeHome = 'sidebarListItem mt-3'
  let activeUser = 'sidebarListItem mt-3'
  let activeProduct = 'sidebarListItem mt-3'
  let activeOrder = 'sidebarListItem mt-3'

  if (location.pathname === '/admin'){
    activeHome ="sidebarListItem mt-3 active"
  } else if (location.pathname === '/admin/users') {
    activeUser ="sidebarListItem mt-3 active"
  } else if (location.pathname === '/admin/products'|| location.pathname === '/admin/add-product' || location.pathname === `/admin/products/${productId}`) {
    activeProduct ="sidebarListItem mt-3 active"
  } else if (location.pathname === '/admin/orders') {
    activeOrder ="sidebarListItem mt-3 active"
  }
  return (
    <div className="sidebar mt-4">
      <div className="sidebarWrapper ">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle ">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin" className="link">
              <li className={activeHome}>
                <SlHome className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/admin/users" className="link">
              <li className={activeUser}>
                <SlUser className="sidebarIcon" />
                User
              </li>
            </Link>

            <Link to="/admin/products" className="link">
              <li className={activeProduct}>
                <SlBriefcase className="sidebarIcon" />
                Product
              </li>
            </Link>

            <Link to="/admin/orders" className="link">
              <li className={activeOrder}>
                <SlHandbag className="sidebarIcon" />
                Order
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
