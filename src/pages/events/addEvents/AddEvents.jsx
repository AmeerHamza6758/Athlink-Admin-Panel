import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import toast from "react-hot-toast";
import { FaArrowLeft, FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddEvents = () => {
    const navigate =useNavigate();
  const [eventImage, setEventImage] = useState();
  const [backgroundPreview, setBackgroundPreview] = useState();
  const [eventData, setEventData] = useState({
    title: "",
    time: "",
    date: "",
    battle: "",
    price: "",
    address: "",
    description: "",
  });

  const handleEditFileChange = (event) => {
    const file = event.target.files[0];
    if (file.size > 2 * 1024 * 1024) {
      event.target.value = null;
      toast.error("File size exceeds the maximum limit of 2MB.");
    } else {
      setEventImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and submit logic here
    console.log(eventData, eventImage);
    toast.success("Event added successfully!");
  };

  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="w-11/12 h-auto pt-6 flex flex-col gap-4 overflow-hidden">
        <div className="flex items-center justify-between">
          {/* <h1 className="text-base font-bold ">Add Event</h1>
          <p className="text-xs">Please add complete event details</p> */}
          <div
          onClick={() => {
            navigate(-1);
          }}
          className={`bg-darkGrey h-9 w-9 rounded-full flex justify-center items-center cursor-pointer`}
        >
          <FaArrowLeft size={22} color="white" />
        </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full h-auto rounded-lg flex flex-row px-8 py-12 justify-between items-start"
        >
          <div className="border border-[#E4774F] rounded-full p-1 w-44 h-44 relative">
            <input
              onChange={handleEditFileChange}
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none hidden"
              type="file"
              id="itemImage"
              accept="image/*"
              aria-label="Upload event image"
            />
            <label htmlFor="itemImage" className="cursor-pointer">
              {backgroundPreview ? (
                <img
                  src={backgroundPreview}
                  alt="Event"
                  className="rounded-full w-full h-full object-cover"
                />
              ) : (
                <div className="flex justify-center items-center w-full h-full bg-gray-200 rounded-full">
                  <FaRegUser size={30} color="gray" />
                </div>
              )}
              <div className="absolute bg-[#E4774F] w-10 h-10 rounded-full right-2 bottom-1 flex justify-center items-center">
                <BsPencil size={17} color="white" className="mb-0.5" />
              </div>
            </label>
          </div>
          <div className="space-y-8 h-auto">
            <div>
              <label className="text-xs font-semibold">Event Title</label>
              <input
                type="text"
                name="title"
                value={eventData.title}
                onChange={handleInputChange}
                className="border border-[#E2E8F0] text-sm outline-none grow p-2.5 rounded-md w-full"
                placeholder="Enter Event Title"
                aria-label="Event Title"
              />
            </div>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-start gap-2">
                <label className="text-xs font-semibold">Event Time</label>
                <input
                  type="time"
                  name="time"
                  value={eventData.time}
                  onChange={handleInputChange}
                  className="border border-[#E2E8F0] text-sm outline-none grow p-2.5 rounded-md w-full"
                  aria-label="Event Time"
                />
              </div>
              <div>
                <label className="text-xs font-semibold">Event Date</label>
                <input
                  type="date"
                  name="date"
                  value={eventData.date}
                  onChange={handleInputChange}
                  className="border border-[#E2E8F0] text-sm outline-none grow p-2.5 rounded-md w-full"
                  aria-label="Event Date"
                />
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div>
                <label className="text-xs font-semibold">Battle</label>
                <input
                  type="text"
                  name="battle"
                  value={eventData.battle}
                  onChange={handleInputChange}
                  className="border border-[#E2E8F0] text-sm outline-none grow p-2.5 rounded-md w-full"
                  placeholder="Enter Battle"
                  aria-label="Battle"
                />
              </div>
              <div>
                <label className="text-xs font-semibold">$Price</label>
                <input
                  type="number"
                  name="price"
                  value={eventData.price}
                  onChange={handleInputChange}
                  className="border border-[#E2E8F0] text-sm outline-none grow p-2.5 rounded-md w-full"
                  placeholder="Enter Price"
                  aria-label="Price"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold">Address</label>
              <input
                type="text"
                name="address"
                value={eventData.address}
                onChange={handleInputChange}
                className="border border-[#E2E8F0] text-sm outline-none grow p-2.5 rounded-md w-full"
                placeholder="Enter Address"
                aria-label="Address"
              />
            </div>
            <div>
              <label className="text-xs font-semibold">Description</label>
              <textarea
                name="description"
                value={eventData.description}
                onChange={handleInputChange}
                className="border border-[#E2E8F0] text-sm outline-none grow p-2.5 rounded-md w-full"
                placeholder="Enter Description"
                aria-label="Description"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#E4774F] text-white text-sm font-semibold px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvents;
