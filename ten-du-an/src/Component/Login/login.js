// LoginComponent.js
import React, { useState } from "react";
import "./login.css"; // Sử dụng tệp CSS riêng để quản lý kiểu dáng

const LoginComponent = () => {
  const [login, setlogin] = useState(); // Khai báo state login
  const handleClose = () => {
    setlogin(false); // Đóng form đăng nhập
  };
  const handlelogin = () => {
    setlogin(true); // Mở form đăng nhập
  };
  return (
    <>
      <div onClick={handlelogin}>Đăng nhập</div>
      {login && (
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
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginComponent;
