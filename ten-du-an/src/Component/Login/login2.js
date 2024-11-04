// LoginComponent.js
import React, { useState } from "react";
import "./login2.css"; // Sử dụng tệp CSS riêng để quản lý kiểu dáng
import { Link } from "react-router-dom";
const LoginComponent2 = () => {
  const [login, setlogin] = useState(); // Khai báo state login
  const handleClose = () => {
    setlogin(false); // Đóng form đăng nhập
  };
  return (
    <>
      <div className="general">
        <div className="register-form">
          <h2>Đăng nhập</h2>
          <form action="" method="POST">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn">
              Đăng nhập
            </button>
            <button onClick={handleClose} type="close" className="btn-close">
              <Link to="/" className="btn-close-text">
                Close
              </Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginComponent2;
