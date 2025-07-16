import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const Docters = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  const filterdocs = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };


  useEffect(() => {
    filterdocs();
  }, [doctors, filterDoc]);

  return (
    <div>
      <p className="text-gray-600 text-sm">
        Browse through the doctors specialist.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-4 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${
              speciality === "General physician"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            General physician
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${
              speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${
              speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${
              speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${
              speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1 pr-16 border border-gray-600 rounded transition-all cursor-pointer ${
              speciality === "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-7">
          {filterDoc.map((docter, index) => (
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
      </div>
    </div>
  );
};
