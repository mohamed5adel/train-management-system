import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Admin = () => {
  const [formData, setFormData] = useState({
    RNm: "",
    s_start: "",
    s_des: "",
    ar_date: "",
    R_tm: "",
    A_seat: "",
    A_F: "",
    N_seat: "",
    B_F: "",
    C_seat: "",
    C_F: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to the server)
    console.log(formData);
  };

  return (
    <div className="bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('/img/wallpaperflare.com_wallpaper.jpg')" }}>
      <div className="max-w-lg mx-auto mt-20 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-center">Add Route</h3>
        <hr className="border-t-2 border-green-500 my-4" />
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block font-semibold">Train Name:</label>
              <input
                type="text"
                name="RNm"
                value={formData.RNm}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-green-500 rounded-lg"
              />
            </div>
            <div className="text-center">
              
            </div>
            <div>
              <label className="block font-semibold">Start:</label>
              <input
                type="text"
                name="s_start"
                value={formData.s_start}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-green-500 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-semibold">Destination:</label>
              <input
                type="text"
                name="s_des"
                value={formData.s_des}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-green-500 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-semibold">Schedule Date:</label>
              <input
                type="date"
                name="ar_date"
                value={formData.ar_date}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-green-500 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-semibold">Schedule Time:</label>
              <input
                type="time"
                name="R_tm"
                value={formData.R_tm}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-green-500 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-semibold">Ac Seats:</label>
              <input
                type="number"
                name="A_seat"
                value={formData.A_seat}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-green-500 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-semibold">Ac Ticket Price:</label>
              <input
                type="number"
                name="A_F"
                value={formData.A_F}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-green-500 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-semibold">S_Chair Seats:</label>
              <input
                type="number"
                name="N_seat"
                value={formData.N_seat}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-green-500 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-semibold">S_Chair Ticket Price:</label>
              <input
                type="number"
                name="B_F"
                value={formData.B_F}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-green-500 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-semibold">Cabin Seats:</label>
              <input
                type="number"
                name="C_seat"
                value={formData.C_seat}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-green-500 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-semibold">Cabin Ticket Price:</label>
              <input
                type="number"
                name="C_F"
                value={formData.C_F}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-green-500 rounded-lg"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-lg w-1/3"
            >
              Submit
            </button>
            <button
              type="reset"
              className="bg-red-500 text-white p-2 rounded-lg w-1/3"
              onClick={() => setFormData({})}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
