import React from 'react';
import { Link } from 'react-router-dom';

const TrainList = ({ trains }) => {
  return (
    <div className="bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('../../img/TrainListBack.jpg')" }}>
      <div className="mt-16">
        <h1 className="text-4xl font-bold text-center text-black mt-16">Train List</h1>

        <div className="overflow-x-auto mt-8 px-4">
          <table className="min-w-full table-auto text-sm text-center">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="py-3 px-4">Train Name</th>
                <th className="py-3 px-4">Route</th>
                <th className="py-3 px-4">Ac Seats, Price</th>
                <th className="py-3 px-4">S_chair, Price</th>
                <th className="py-3 px-4">Cabin, Price</th>
                <th className="py-3 px-4">Date Time</th>
                <th className="py-3 px-4">Admin Action</th>
              </tr>
            </thead>
            <tbody>
              {trains.map((item) => (
                <tr key={item.RailId} className="bg-gray-800 text-white">
                  <td data-label="Train Name" className="py-3 px-4">{item.RNm}</td>
                  <td data-label="Route" className="py-3 px-4">{item.s_start} To {item.s_des}</td>
                  <td data-label="Ac Seats , Price" className="py-3 px-4">{item.A_seat} | ${item.A_F}</td>
                  <td data-label="S_chair Seats , Price" className="py-3 px-4">{item.N_seat} | ${item.B_F}</td>
                  <td data-label="Cabin Seats ,price" className="py-3 px-4">{item.C_seat} | ${item.C_F}</td>
                  <td data-label="Date And Time" className="py-3 px-4">{new Date(item.ar_date).toLocaleDateString()} {item.R_tm}</td>
                  <td data-label="Admin Action" className="py-3 px-4">
                    <div className="flex justify-center space-x-4">
                      <Link
                        to={{
                          pathname: "/updateTrain",
                          search: `?RailId=${item.RailId}&RNm=${item.RNm}&s_start=${item.s_start}&s_des=${item.s_des}&ar_date=${item.ar_date}&A_seat=${item.A_seat}&N_seat=${item.N_seat}&C_seat=${item.C_seat}&A_F=${item.A_F}&B_F=${item.B_F}&C_F=${item.C_F}&R_tm=${item.R_tm}`
                        }}
                        className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                      >
                        Edit
                      </Link>
                      <Link
                        to={{
                          pathname: "/deleteTrain",
                          search: `?RailId=${item.RailId}&RNm=${item.RNm}&s_start=${item.s_start}&s_des=${item.s_des}&ar_date=${item.ar_date}&A_seat=${item.A_seat}&N_seat=${item.N_seat}&C_seat=${item.C_seat}&A_F=${item.A_F}&B_F=${item.B_F}&C_F=${item.C_F}&R_tm=${item.R_tm}`
                        }}
                        className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                      >
                        Delete
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrainList;
