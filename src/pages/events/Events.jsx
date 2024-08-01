import React, { useState } from "react";
import UpCommingEvent from "../../components/tables/events/UpComingEvent";
import PastEvents from "../../components/tables/events/PastEvents";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdAdd } from "react-icons/md";

const Events = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory]= useState('upcoming event')
  const handleAddEvents = () => {
    navigate("/events/add-event");
  };

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-11/12 h-auto pt-10 flex flex-col gap-4">
        <h1 className="text-base font-bold">Events Page</h1>
        <div className="bg-white h-16 w-full rounded-lg flex flex-row px-5 gap-4 items-center">
          <input
            className="border border-[#E2E8F0] text-sm  outline-none p-1.5 rounded-md w-11/12"
            placeholder="Search by Name"
          />
          <div className="flex items-center gap-1 justify-center bg-primary text-base text-white rounded-full hover:bg-primaryHover transition duration-300 ease-in-out text-nowrap py-1.5 px-6 font-semibold">
            <IoSearch size={20} />
            <button
              className={`primary text-base text-white text-nowrap font-semibold`}
            >
              Search
            </button>
          </div>
          <div
            className="flex items-center gap-1 justify-center bg-primary text-base text-white rounded-full hover:bg-primaryHover transition duration-300 ease-in-out text-nowrap py-1.5 px-6 font-semibold"
            onClick={handleAddEvents}
          >
            <MdAdd size={20} />
            <button
              className={`primary text-base text-white text-nowrap font-semibold`}
            >
              Add Event
            </button>
          </div>
        </div>
        <div className="flex item-center gap-8 pt-6">
          <h1
           onClick={() => setSelectedCategory("upcoming event")}
           className={`w-52 p-2 rounded-lg text-base font-semibold text-center cursor-pointer transition-colors duration-500 ease ${
             selectedCategory === "upcoming event"
               ? "bg-primary text-white font-bold"
               : "bg-secondary hover:bg-lightGrey text-white hover:text-black"
           }`}
          >
            Up Coming Events
          </h1>
          <h1
           onClick={() => setSelectedCategory("past event")}
           className={`w-52 p-2 rounded-lg text-base font-semibold text-center cursor-pointer transition-colors duration-500 ease ${
             selectedCategory === "past event"
               ? "bg-primary text-white font-bold"
               : "bg-secondary hover:bg-lightGrey text-white hover:text-black"
           }`}
          >
            Past Events
          </h1>
        </div>
        {selectedCategory ==="past event" && (
          <div>
            <PastEvents />
          </div>
        ) }
        
       { selectedCategory ==="upcoming event" &&  (
          <div>
            <UpCommingEvent />
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
