import "./Sidebar.css";
import { SlHome, SlUser, SlBriefcase, SlHandbag } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar mt-4">
      <div className="sidebarWrapper ">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle ">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <SlHome className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/admin/user" className="link">
              <li className="sidebarListItem mt-3">
                <SlUser className="sidebarIcon" />
                User
              </li>
            </Link>

            <Link to="/admin/products" className="link">
              <li className="sidebarListItem mt-3">
                <SlBriefcase className="sidebarIcon" />
                Product
              </li>
            </Link>

            <Link to="/admin/orders" className="link">
              <li className="sidebarListItem mt-3">
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
