import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const UpdateTrain = () => {
  const [formData, setFormData] = useState({
    RailId: '',
    RNm: '',
    s_start: '',
    s_des: '',
    ar_date: '',
    R_tm: '',
    A_seat: '',
    A_F: '',
    N_seat: '',
    B_F: '',
    C_seat: '',
    C_F: '',
  });

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Assuming location state contains initial data for the form
    if (location.state) {
      setFormData(location.state);
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setAlert('Train Updated Successfully!');
      // Add your form submission logic here, such as calling an API
      console.log(formData);
    } else {
      setAlert('Please fix the errors.');
    }
  };

  const handleReset = () => {
    setFormData({
      RailId: '',
      RNm: '',
      s_start: '',
      s_des: '',
      ar_date: '',
      R_tm: '',
      A_seat: '',
      A_F: '',
      N_seat: '',
      B_F: '',
      C_seat: '',
      C_F: '',
    });
    setErrors({});
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('../../img/TrainListBack.jpg')" }}>
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center text-black">Update Train</h2>
        <hr className="my-4 border-green-500" />
        {alert && (
          <div className={`alert ${alert.includes('Successfully') ? 'bg-green-500' : 'bg-red-500'} text-white p-2 rounded mb-4`}>
            <strong>{alert}</strong>
          </div>
        )}
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700">Train Name:</label>
              <input
                type="text"
                name="RNm"
                value={formData.RNm}
                onChange={handleChange}
                className="form-input p-2 rounded-md border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              {errors.RNm && <p className="text-red-500 text-sm">{errors.RNm}</p>}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Start:</label>
              <input
                type="text"
                name="s_start"
                value={formData.s_start}
                onChange={handleChange}
                className="form-input p-2 rounded-md border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              {errors.s_start && <p className="text-red-500 text-sm">{errors.s_start}</p>}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Destination:</label>
              <input
                type="text"
                name="s_des"
                value={formData.s_des}
                onChange={handleChange}
                className="form-input p-2 rounded-md border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              {errors.s_des && <p className="text-red-500 text-sm">{errors.s_des}</p>}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Schedule Date:</label>
              <input
                type="date"
                name="ar_date"
                value={formData.ar_date}
                onChange={handleChange}
                className="form-input p-2 rounded-md border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              {errors.ar_date && <p className="text-red-500 text-sm">{errors.ar_date}</p>}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Schedule Time:</label>
              <input
                type="time"
                name="R_tm"
                value={formData.R_tm}
                onChange={handleChange}
                className="form-input p-2 rounded-md border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              {errors.R_tm && <p className="text-red-500 text-sm">{errors.R_tm}</p>}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Ac Seats:</label>
              <input
                type="number"
                name="A_seat"
                value={formData.A_seat}
                onChange={handleChange}
                className="form-input p-2 rounded-md border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              {errors.A_seat && <p className="text-red-500 text-sm">{errors.A_seat}</p>}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Ac Ticket Price:</label>
              <input
                type="number"
                name="A_F"
                value={formData.A_F}
                onChange={handleChange}
                className="form-input p-2 rounded-md border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              {errors.A_F && <p className="text-red-500 text-sm">{errors.A_F}</p>}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Non Ac Seats:</label>
              <input
                type="number"
                name="N_seat"
                value={formData.N_seat}
                onChange={handleChange}
                className="form-input p-2 rounded-md border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              {errors.N_seat && <p className="text-red-500 text-sm">{errors.N_seat}</p>}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Ticket Price:</label>
              <input
                type="number"
                name="B_F"
                value={formData.B_F}
                onChange={handleChange}
                className="form-input p-2 rounded-md border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              {errors.B_F && <p className="text-red-500 text-sm">{errors.B_F}</p>}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Cabin Seats:</label>
              <input
                type="number"
                name="C_seat"
                value={formData.C_seat}
                onChange={handleChange}
                className="form-input p-2 rounded-md border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              {errors.C_seat && <p className="text-red-500 text-sm">{errors.C_seat}</p>}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700">Ticket Price:</label>
              <input
                type="number"
                name="C_F"
                value={formData.C_F}
                onChange={handleChange}
                className="form-input p-2 rounded-md border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              {errors.C_F && <p className="text-red-500 text-sm">{errors.C_F}</p>}
            </div>

            <div className="flex justify-between mt-4">
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                Submit
              </button>
              <button type="reset" className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTrain;
