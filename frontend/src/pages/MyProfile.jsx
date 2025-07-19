import React, { useState } from "react";
import { assets } from "../assets/assets";
export const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincnet",
    image: assets.profile_pic,
    email: "test.123@gmail.com",
    phone: "+923011234567",
    address: {
      line1: "57 cross Richmond",
      line2: "Circle,crunch Road, London",
    },
    gender: "Male",
    dateofBirth: "2000-01-10",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col  gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="#" />
      {isEdit === true ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700 mt-3">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>

          {isEdit === true ? (
            <input
              className="bg-gray-50 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit === true ? (
            <p>
              <input
                className="bg-gray-50"
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              <input
                className="bg-gray-50"
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 mt-3 underline">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit === true ? (
            <select
              className="max-w-20 bg-gray-50"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-50"
              type="date"
              value={userData.dateofBirth}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  dateofBirth: e.target.value,
                }))
              }
            />
          ) : (
            <p className="text-gray-400">{userData.dateofBirth}</p>
          )}
        </div>
      </div>
      <div className=" px-4 mt-10">
        <button className="bg-primaryBlue px-8 py-2 rounded-full text-white text-base hover:bg-primaryBlue/80 cursor-pointer" onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? "Save Information" : "Edit"}
        </button>
      </div>
    </div>
  );
};
