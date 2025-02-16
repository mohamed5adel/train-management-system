import React, { useState } from 'react';

const SingUp = () => {
    const [formData, setFormData] = useState({
        FName: '',
        LName: '',
        Main: '',
        DOB: '',
        NID: '',
        TYP: '',
        Pword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.FName) newErrors.FName = 'First Name is required';
        if (!formData.LName) newErrors.LName = 'Last Name is required';
        if (!formData.Main) newErrors.Main = 'Email is required';
        if (!formData.DOB) newErrors.DOB = 'Date of Birth is required';
        if (!formData.NID) newErrors.NID = 'National ID is required';
        if (!formData.TYP) newErrors.TYP = 'Mobile Number is required';
        if (!formData.Pword) newErrors.Pword = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const requestBody = {
                userId: 120,
                firstName: formData.FName,
                lastName: formData.LName,
                email: formData.Main,
                dateOfBirth: formData.DOB,
                nationalIdNo: formData.NID,
                mobileNo: formData.TYP,
                passwordHash: formData.Pword
            };
    
            try {
                const response = await fetch('http://localhost:5089/api/User/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                });
    
                if (!response.ok) {
                    // If the response status is not OK, throw an error
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.text(); // First get the raw text
    
                if (data) {
                    // Only parse JSON if there is data
                    const jsonData = JSON.parse(data);
                    console.log('Registration successful:', jsonData);
                } else {
                    console.log('No data returned from server');
                }
    
            } catch (error) {
                console.log(JSON.stringify(requestBody));
                console.error('Error during registration:', error);
            }
        }
    };
    
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold">Registration</h2>
                    <h5>Register here and search for train and book it</h5>
                </div>

                <form onSubmit={handleSubmit}>
                    <h2 className="text-xl font-semibold mb-4">Signup</h2>
                    <hr className="border-green-500 mb-4" />

                    <div className="space-y-4">
                        <div>
                            <label className="block font-semibold text-gray-700">First Name:</label>
                            <input
                                type="text"
                                name="FName"
                                value={formData.FName}
                                onChange={handleChange}
                                className="w-full border-2 p-2 rounded-md"
                            />
                            {errors.FName && <p className="text-red-500 text-sm">{errors.FName}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700">Last Name:</label>
                            <input
                                type="text"
                                name="LName"
                                value={formData.LName}
                                onChange={handleChange}
                                className="w-full border-2 p-2 rounded-md"
                            />
                            {errors.LName && <p className="text-red-500 text-sm">{errors.LName}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700">Email:</label>
                            <input
                                type="email"
                                name="Main"
                                value={formData.Main}
                                onChange={handleChange}
                                className="w-full border-2 p-2 rounded-md"
                            />
                            {errors.Main && <p className="text-red-500 text-sm">{errors.Main}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700">Date of Birth:</label>
                            <input
                                type="date"
                                name="DOB"
                                value={formData.DOB}
                                onChange={handleChange}
                                className="w-full border-2 p-2 rounded-md"
                            />
                            {errors.DOB && <p className="text-red-500 text-sm">{errors.DOB}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700">National ID No:</label>
                            <input
                                type="text"
                                name="NID"
                                value={formData.NID}
                                onChange={handleChange}
                                className="w-full border-2 p-2 rounded-md"
                            />
                            {errors.NID && <p className="text-red-500 text-sm">{errors.NID}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700">Mobile No:</label>
                            <input
                                type="text"
                                name="TYP"
                                value={formData.TYP}
                                onChange={handleChange}
                                className="w-full border-2 p-2 rounded-md"
                            />
                            {errors.TYP && <p className="text-red-500 text-sm">{errors.TYP}</p>}
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700">Password:</label>
                            <input
                                type="password"
                                name="Pword"
                                value={formData.Pword}
                                onChange={handleChange}
                                className="w-full border-2 p-2 rounded-md"
                            />
                            {errors.Pword && <p className="text-red-500 text-sm">{errors.Pword}</p>}
                        </div>

                        <div>
                            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md mt-4">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SingUp;
