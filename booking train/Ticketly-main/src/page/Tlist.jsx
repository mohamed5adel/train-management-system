import React from "react";
import { Link } from "react-router-dom"; // You can use 'react-router-dom' to handle links for navigation.

const TrainList = ({ trains }) => {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trains.map((item) => (
          <div
            key={item.RailId}
            className="card w-full max-w-md bg-white shadow-xl rounded-lg overflow-hidden"
          >
            {/* Card Header */}
            <div className="card-header p-6 text-center bg-white text-green-600 font-semibold text-xl">
              {item.RNm}
            </div>

            {/* Card Content */}
            <div className="hh p-6 text-center">
              <div className="dt text-black text-lg font-semibold">
                {new Date(item.ar_date).toLocaleDateString()} {item.R_tm}
              </div>
              <div className="Dest text-green-600 text-xl font-bold">
                {item.s_start} To {item.s_des}
              </div>
            </div>

            {/* Ticket Options */}
            <div className="tc p-6 flex justify-between">
              {/* AC Class */}
              <div className="ac w-1/3 border border-green-400 rounded-lg bg-red-100 p-2 text-center">
                <div className="acc bg-purple-100 p-2 rounded-lg">
                  <p className="a1 text-green-700 font-bold">AC_B</p>
                  <p className="a2 text-green-600 font-medium">${item.A_F}</p>
                </div>
                <div className="acb">
                  <p className="a3 text-black">Ticket {item.A_seat}</p>
                </div>
              </div>

              {/* Cabin Class */}
              <div className="ac w-1/3 border border-green-400 rounded-lg bg-purple-100 p-2 text-center">
                <div className="acc bg-purple-200 p-2 rounded-lg">
                  <p className="a1 text-green-700 font-bold">CABIN</p>
                  <p className="a2 text-green-600 font-medium">${item.C_F}</p>
                </div>
                <div className="acb">
                  <p className="a3 text-black">Ticket {item.C_seat}</p>
                </div>
              </div>

              {/* Seat Chair Class */}
              <div className="ac w-1/3 border border-green-400 rounded-lg bg-yellow-100 p-2 text-center">
                <div className="acc bg-pink-100 p-2 rounded-lg">
                  <p className="a1 text-green-700 font-bold">S_CHAIR</p>
                  <p className="a2 text-green-600 font-medium">${item.B_F}</p>
                </div>
                <div className="acb">
                  <p className="a3 text-black">Ticket {item.N_seat}</p>
                </div>
              </div>
            </div>

            {/* Book Button */}
            <div className="p-6 text-center">
              <Link
                to={{
                  pathname: "/trainSelection",
                  search: `?TrnId=${item.RailId}&Ac_chair=${item.A_seat}&shovon=${item.N_seat}&vid_s=${item.C_seat}&fair1=${item.A_F}&fair2=${item.B_F}&fair3=${item.C_F}`,
                }}
                className="btn bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Book
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainList;
