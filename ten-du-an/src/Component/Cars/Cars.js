import React, { useState, useEffect } from "react";
import "./Cars.css";

function Cars() {
  const [vehicles, setVehicles] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    MaXe: "",
    TenXe: "",
    HangXe: "",
    NamSanXuat: "",
    GiaBan: "",
    LoaiXe: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch dữ liệu từ API khi component render lần đầu
  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await fetch("http://localhost:3000/vehicles"); // Thay API_URL bằng URL API thực tế
      const data = await response.json();

      setVehicles(data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu xe:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddOrUpdateVehicle = async (e) => {
    e.preventDefault();
    if (editingId) {
      try {
        // Cập nhật xe qua API
        await fetch(`http://localhost:3000/vehicles/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        fetchVehicles();
        setEditingId(null);
      } catch (error) {
        console.error("Lỗi khi cập nhật xe:", error);
      }
    } else {
      try {
        // Thêm xe mới qua API
        await fetch("http://localhost:3000/vehicles", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        fetchVehicles();
      } catch (error) {
        console.error("Lỗi khi thêm xe mới:", error);
      }
    }
    setFormData({
      id: "",
      MaXe: "",
      TenXe: "",
      HangXe: "",
      NamSanXuat: "",
      GiaBan: "",
      LoaiXe: "",
    });
  };
  console.log(vehicles);

  const handleEditVehicle = (id) => {
    const vehicle = vehicles.find((v) => v.id === id);
    setFormData(vehicle);
    setEditingId(id);
  };

  const handleDeleteVehicle = async (id) => {
    try {
      await fetch(`http://localhost:3000/vehicles/${id}`, {
        method: "DELETE",
      });
      fetchVehicles();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Lỗi khi xóa xe:", error);
    }
  };

  const handleSelectVehicle = (id) => {
    const vehicle = vehicles.find((v) => v.id === id);
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVehicle(null);
  };

  return (
    <>
      <div className="container">
        <div className="header-car">
          <div>
            <h2>Thông Tin Xe</h2>
            <p>Kỳ bảo dưỡng: 2024-2025</p>
          </div>
          <div>
            <label>
              <b>Tổng số xe:</b> {vehicles.length}
            </label>
          </div>
        </div>

        <form onSubmit={handleAddOrUpdateVehicle} className="form-vehicle">
          <input
            name="MaXe"
            placeholder="Mã xe"
            value={formData.MaXe}
            onChange={handleInputChange}
            required
          />
          <input
            name="TenXe"
            placeholder="Tên xe"
            value={formData.TenXe}
            onChange={handleInputChange}
            required
          />
          <input
            name="HangXe"
            placeholder="Hãng xe"
            value={formData.HangXe}
            onChange={handleInputChange}
            required
          />
          <input
            name="NamSanXuat"
            placeholder="Năm sản xuất"
            value={formData.NamSanXuat}
            onChange={handleInputChange}
            required
          />
          <input
            name="GiaBan"
            placeholder="Giá bán"
            value={formData.GiaBan}
            onChange={handleInputChange}
            required
          />
          <input
            name="LoaiXe"
            placeholder="Loại xe"
            value={formData.LoaiXe}
            onChange={handleInputChange}
            required
          />
          <button type="submit">
            {editingId ? "Cập nhật xe" : "Thêm xe mới"}
          </button>
        </form>

        <div className="info-box">
          <h3>Danh sách xe</h3>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã xe</th>
                <th>Tên xe</th>
                <th>Hãng xe</th>
                <th>Năm sản xuất</th>
                <th>Giá bán</th>
                <th>Loại xe</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, index) => (
                <tr key={vehicle.id}>
                  <td>{index + 1}</td>
                  <td>{vehicle.MaXe}</td>
                  <td>{vehicle.TenXe}</td>
                  <td>{vehicle.HangXe}</td>
                  <td>{vehicle.NamSanXuat}</td>
                  <td>{vehicle.GiaBan}</td>
                  <td>{vehicle.LoaiXe}</td>
                  <td>
                    <button onClick={() => handleEditVehicle(vehicle.id)}>
                      Sửa
                    </button>
                    <button onClick={() => handleDeleteVehicle(vehicle.id)}>
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && selectedVehicle && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>Thông tin xe đã chọn:</h3>
            <p>
              <b>Mã xe:</b> {selectedVehicle.MaXe}
            </p>
            <p>
              <b>Tên xe:</b> {selectedVehicle.TenXe}
            </p>
            <p>
              <b>Hãng xe:</b> {selectedVehicle.HangXe}
            </p>
            <p>
              <b>Năm sản xuất:</b> {selectedVehicle.NamSanXuat}
            </p>
            <p>
              <b>Giá bán:</b> {selectedVehicle.GiaBan}
            </p>
            <p>
              <b>Loại xe:</b> {selectedVehicle.LoaiXe}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cars;
