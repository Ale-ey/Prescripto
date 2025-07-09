import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const TopDocters = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center text-gray-800 gap-4 my-10 md:mx-10">
      <h1 className="text-3xl font-semibold">Top Doctors to Book</h1>
      <p className="w-1/2 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  w-full gap-4 py-5 px-3 sm:px-0">
        {doctors.slice(0, 10).map((docter, index) => (
          <div
            onClick={() => navigate(`/appointment/${docter._id}`)}
            key={index}
            className="border border-primaryBlue rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img className="bg-blue-50" src={docter.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-green-500 text-center">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg  font-medium">
                {docter.name}
              </p>
              <p className="text-gray-600 text-sm">{docter.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/docters");
          scrollTo(0, 0);
        }}
        className="text-gray-600 bg-blue-50 px-12 py-3 rounded-md text-center cursor-pointer"
      >
        More
      </button>
    </div>
  );
};
