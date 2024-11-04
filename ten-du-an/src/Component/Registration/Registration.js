import "./Registration.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Registration() {
  const [register, setregister] = useState();
  const handleClose = () => {
    setregister(false);
  };
  const handleregister = () => {
    setregister(true);
  };
  const navigate = useNavigate();
  const handlechange = () => {
    navigate("/login2");
  };
  return (
    <>
      <div onClick={handleregister}>Đăng ký</div>
      {register && (
        <div className="general">
          <div className="register-form">
            <h2>Đăng ký</h2>
            <form action="" method="POST">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Confirm Password"
                required
              />
              <button type="submit" className="btn">
                Register
              </button>
              <button onClick={handleClose} type="close" className="btn-close">
                Close
              </button>
              <p onClick={handlechange} className="btn-text">
                Bạn đã có tài khoản
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default Registration;
