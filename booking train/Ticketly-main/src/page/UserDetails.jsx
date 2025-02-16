import React from 'react';

const UserDetails = ({ users }) => {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('../../img/userDeatilsBack.jpg')" }}>
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-3/4">
        {users.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg mb-6 p-6">
            <div className="border-t-4 border-green-500 mb-4"></div>

            <div className="flex flex-wrap mb-4">
              <div className="w-1/3 text-green-500 px-2">
                <span className="font-semibold">First Name</span>
                <p className="text-xl">{item.FName}</p>
              </div>
              <div className="w-1/3 text-green-500 px-2">
                <span className="font-semibold">Last Name</span>
                <p className="text-xl">{item.LName}</p>
              </div>
            </div>

            <div className="bg-white shadow-lg p-4 mb-4">
              <p className="text-green-500">NID: <b>{item.NID}</b></p>
            </div>

            <div className="flex flex-wrap mb-4">
              <div className="w-1/2 text-green-500 px-2">
                <span className="font-semibold">Contact No</span>
                <p className="text-xl">{item.TYP}</p>
              </div>
              <div className="w-1/2 text-green-500 px-2">
                <span className="font-semibold">Date Of Birth</span>
                <p className="text-xl">{new Date(item.DOB).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="bg-white shadow-lg p-4 mb-4">
              <p className="text-green-500">Email: <b>{item.Main}</b></p>
            </div>

            <div className="border-b-4 border-green-500 mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
