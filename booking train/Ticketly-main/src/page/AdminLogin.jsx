import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    nam: '',
    pass: ''
  });

  const [errors, setErrors] = useState({
    nam: '',
    pass: ''
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
    const newErrors = {};

    // Validate the fields
    if (!formData.nam) {
      newErrors.nam = 'Email is required';
    }
    if (!formData.pass) {
      newErrors.pass = 'Password is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // If there are no errors, submit the form
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat bg-fixed bg-[url('../../img/adminPanel.jpg')]"
    >
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <h2 className="text-2xl text-center text-green-600 mb-4">Login</h2>
        <hr className="border-green-600 mb-4" />
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm text-green-600 mb-2">Email</label>
            <input
              type="text"
              name="nam"
              value={formData.nam}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-green-600 rounded-lg focus:border-yellow-400 text-green-600"
            />
            {errors.nam && <p className="text-red-600 text-xs">{errors.nam}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm text-green-600 mb-2">Password</label>
            <input
              type="password"
              name="pass"
              value={formData.pass}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-green-600 rounded-lg focus:border-yellow-400 text-green-600"
            />
            {errors.pass && <p className="text-red-600 text-xs">{errors.pass}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
