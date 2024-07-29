import React, { Fragment, useState } from "react";
import UpCommingEvent from "../../components/tables/events/UpComingEvent";
import Pagination from "../../components/pagination/Pagination";
import PastEvents from "../../components/tables/events/PastEvents";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const [viewEvent, setViewEvent] = useState(false);
  const navigate = useNavigate();
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
          <button
            className={`bg-primary text-base text-white rounded-full hover:bg-primaryHover transition duration-300 ease-in-out text-nowrap py-1.5 px-6 font-semibold`}
          >
            Search
          </button>
          <button
            className={`bg-primary text-base text-white rounded-full hover:bg-primaryHover transition duration-300 ease-in-out text-nowrap py-1.5 px-6 font-semibold`}
            onClick={handleAddEvents}
          >
            Create New Event
          </button>
        </div>
        <div className="flex item-center gap-8 pt-6">
          <h1
            className="text-md font-bold bg-darkGrey text-white hover:text-secondaryText transition duration-500 ease p-2 rounded-lg cursor-pointer"
            onClick={() => setViewEvent(false)}
          >
            Up Coming Events
          </h1>
          <h1
            className="text-md font-bold text-md font-bold bg-darkGrey text-white hover:text-secondaryText transition duration-500 ease p-2 rounded-lg cursor-pointer"
            onClick={() => setViewEvent(true)}
          >
            Past Events
          </h1>
        </div>
        {viewEvent ? (
          <div>
            <PastEvents />
          </div>
        ) : (
          <div>
            <UpCommingEvent />
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
