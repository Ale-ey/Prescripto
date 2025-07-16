import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

export const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docslot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [docInfo, setDocInfo] = useState(null);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const fetchDocInfo = async () => {
    const selecteddocInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(selecteddocInfo);
    console.log(docInfo);
  };
  const getAvailableSlot = async () => {
    setDocSlot([]);
    //  getting current data
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting endtime of date with index
      let endtime = new Date();
      endtime.setDate(today.getDate() + i);
      endtime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeslots = [];
      while (currentDate < endtime) {
        let formatedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        // add slot to array
        timeslots.push({
          datetime: new Date(currentDate),
          time: formatedTime,
        });
        // increment time by 30 min
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlot((pre) => [...pre, timeslots]);
    }
  };
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);
  useEffect(() => {
    getAvailableSlot();
  }, [docInfo]);
  useEffect(() => {
    console.log(docslot);
  }, [docslot]);
  return (
    docInfo && (
      <div>
        {/* Doctor Details  */}
        <div className="flex flex-col sm:flex-row  gap-4">
          <div>
            <img
              className="bg-primaryBlue w-full rounded-lg"
              src={docInfo.image}
              alt="#"
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* doc info  name , degree , experience  */}
            <p className="flex items-center gap-2 text-2xl text-gray-900 font-medium">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="#" />
            </p>
            <div className="flex items-center gap-2  text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-3 border textxs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/* doctor about  */}
            <div>
              <p className="flex items-center font-medium text-sm gap-1 text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="#" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment Fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        {/* booking slot  */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docslot.length &&
              docslot.map((item, index) => (
                <div
                  onClick={() => {
                    setSlotIndex(index);
                  }}
                  key={index}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primaryBlue text-white"
                      : "border border-gray-200"
                  }`}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll my-4">
            {docslot.length &&
              docslot[slotIndex].map((item, index) => (
                <p
                  onClick={() => {
                    setSlotTime(item.time);
                  }}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primaryBlue text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="bg-primaryBlue text-white text-sm
           px-14 py-3 rounded-full cursor-pointer">Book Appointment</button>
        </div>
      </div>
    )
  );
};
