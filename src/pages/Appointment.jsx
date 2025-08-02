import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FcAbout } from "react-icons/fc";
import {
  faAddressCard,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const navigate = useNavigate();

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc.id === Number(docId));
    setDocInfo(docInfo);
  };
  const getAvailableSlot = async () => {
    setDocSlots([]);
    //Getting current date

    let today = new Date();
    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting end time of date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formatedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        //add slot to array

        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formatedTime,
        });

        //Increment current time by 30min

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docInfo]);

  useEffect(() => {
    getAvailableSlot();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);
  return (
    docInfo && (
      /* ----- Doctor Details---- */
      <div style={{ padding: "20px" }}>
        <div className="flex flex-col sm:flex-row gap-4">
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            style={{ width: "150px", height: "200px", objectFit: "cover" }}
            src={docInfo.image}
            alt=""
          />
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* ---- docInfo: Name, Degree, Experience---- */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <FontAwesomeIcon
                className="w-5"
                icon={faCircleCheck}
                title="Verified"
              />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>{docInfo.specialty} </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/* ----About Doctor---- */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <FcAbout />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}{" "}
              </p>
            </div>
          </div>
        </div>
        {/* ---Booking---- */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p className="font-medium font-poppins text-[22px]">Booking Slots</p>

          {/* Booking Days */}
          <div
            className="flex gap-3 items-center w-full overflow-x-auto whitespace-nowrap mt-4 scrollbar-hide scroll-smooth"
            onWheel={(e) => {
              const container = e.currentTarget;
              if (e.deltaY !== 0) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
              }
            }}
          >
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-[64px] rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                  key={index}
                >
                  <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                  <p>{item[0] && item[0].dateTime.getDate()}</p>
                </div>
              ))}
          </div>

          {/* Time Slots */}
          <div
            className="flex items-center gap-3 w-full overflow-x-auto mt-4 scrollbar-hide scroll-smooth"
            onWheel={(e) => {
              const container = e.currentTarget;
              if (e.deltaY !== 0) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
              }
            }}
          >
            {docSlots.length > 0 &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-medium flex-shrink-0 px-5 py-2 rounded-full cursor-pointer border transition-colors duration-200 
            ${
              item.time === slotTime
                ? "bg-primary text-white"
                : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100"
            }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          {slotTime && (
            <div>
              <button
                className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"
                onClick={() =>
                  navigate("/admission-form", {
                    state: {
                      time: slotTime,
                      date:
                        docSlots[slotIndex][0]?.dateTime.toDateString() ||
                        "Not Selected",
                    },
                  })
                }
              >
                Book an appointment
              </button>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Appointment;
