import React, { useState } from "react";

const page = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-200 to-indigo-300 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          BOOK A FREE TRIAL
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-indigo-500" /> Robotics
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-indigo-500" /> Advanced Math
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-indigo-500" /> App Development
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-indigo-500" /> Game Development
          </label>
        </div>

        <input type="email" placeholder="Parent's Email*" className="w-full p-2 border rounded-lg mb-2" />
        <input type="text" placeholder="Parent's Name*" className="w-full p-2 border rounded-lg mb-2" />
        <input type="tel" placeholder="Mobile*" className="w-full p-2 border rounded-lg mb-2" />
        <input type="text" placeholder="Child's Name*" className="w-full p-2 border rounded-lg mb-2" />
        <select className="w-full p-2 border rounded-lg mb-2">
          <option>Select Child Age</option>
        </select>
        <select className="w-full p-2 border rounded-lg mb-4">
          <option>Select Grade</option>
        </select>

        <div className="flex justify-center mb-4">
          <button className="px-4 py-2 rounded-full bg-indigo-500 text-white text-sm shadow-md">
            No/Little Knowledge
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-300 text-sm ml-2 shadow-md">
            Fair Knowledge
          </button>
        </div>

        <div className="text-center mb-4">
          <h3 className="font-semibold text-lg text-indigo-600">Select a Date</h3>
          <div className="flex justify-center gap-2 my-2">
            {["Mon 24", "Tue 25", "Wed 26"].map((day) => (
              <button
                key={day}
                className={`px-4 py-2 rounded-lg border ${selectedDay === day ? "bg-indigo-500 text-white" : "bg-gray-200"}`}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="font-semibold text-lg text-indigo-600">Select Time</h3>
          <div className="flex justify-center gap-2 my-2">
            {["8:00 AM", "10:00 AM", "11:30 AM"].map((time) => (
              <button
                key={time}
                className={`px-4 py-2 rounded-lg border ${selectedTime === time ? "bg-indigo-500 text-white" : "bg-gray-200"}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" className="accent-indigo-500" />
          <span className="text-sm">I agree to <a href="#" className="text-indigo-600">Terms and Conditions</a></span>
        </div>

        <button className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default page;

export const metadata = {
  title: "Book a free trial at Moonpreneur",
  description: "Innovations and more...",
};