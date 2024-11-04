import Registration from "../Component/Registration/Registration.js";
import LoginComponent from "../Component/Login/login.js";
import "./layoutdefault.css";
import { NavLink, Outlet } from "react-router-dom";
function Layoutdefault() {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img
            src="https://leakandassociates.com/files/2019/04/Leak_logo_white_transp.png"
            alt="logo"
          />
        </div>
        <div className="header-users">
          <div className="header-users--avatar">
            <img src="" alt="" />
          </div>
          <div className="header-users--relog">
            <div className="header-users--register">
              <Registration />
            </div>
            <div className="header-user-log-in">
              <LoginComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="index">
        <div className="tab">
          <ul className="tab-menu">
            <li className="tab-menu--home ">
              <NavLink to="/">Trang chủ</NavLink>
            </li>
            <li className="tab-menu--cars active">
              <NavLink to="/cars">Quản lý xe</NavLink>
            </li>
            <li className="tab-menu--customs">
              <NavLink to="/customs">Khách hàng</NavLink>
            </li>
            <li className="tab-menu--warehouse">
              <NavLink to="/warehouse">Warehouse</NavLink>
            </li>
            <li className="tab-menu--calendar">
              <NavLink to="/calendar">Calendar</NavLink>
            </li>
            <li className="tab-menu--profile">
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
}
export default Layoutdefault;
