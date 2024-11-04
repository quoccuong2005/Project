import "./index.css";
import { Link } from "react-router-dom";
function Index() {
  return (
    <>
      <div className="home-container">
        <h1>Chào Mừng Đến Với Hệ Thống Quản Lý Bán Xe</h1>
        <p>Quản lý thông tin và dữ liệu xe của bạn một cách dễ dàng.</p>
        <div className="home-actions">
          <Link to="/cars" className="button">
            Quản lý xe
          </Link>
          <Link to="/add-car" className="button">
            Thêm xe mới
          </Link>
        </div>
      </div>
    </>
  );
}
export default Index;
