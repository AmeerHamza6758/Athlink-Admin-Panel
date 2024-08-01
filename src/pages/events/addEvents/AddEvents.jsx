import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LuImagePlus } from "react-icons/lu";
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm();

  const [eventImage, setEventImage] = useState();
  const backgroundPreview = watch("imagePreview");

  const handleEditFileChange = (event) => {
    const file = event.target.files[0];
    if (file.size > 2 * 1024 * 1024) {
      event.target.value = null;
      toast.error("File size exceeds the maximum limit of 2MB.");
    } else {
      setEventImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("imagePreview", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    // Handle form submission with data
    console.log(data, eventImage);
    toast.success("Event added successfully!");
  };

  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="w-11/12 h-auto pt-6 flex flex-col gap-4 overflow-hidden">
        <div className="flex items-center justify-between">
          <div
            onClick={() => {
              navigate(-1);
            }}
            className="bg-darkGrey h-9 w-9 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaArrowLeft size={22} color="white" />
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white w-full h-auto rounded-lg flex flex-row px-8 py-12 justify-between items-start"
        >
          <div className="border border-[#E4774F] rounded-full p-1 w-48 h-48 relative">
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
                  <LuImagePlus size={60} color="gray" />
                </div>
              )}
              <div className="absolute bg-[#E4774F] w-10 h-10 rounded-full right-2 bottom-1 flex justify-center items-center">
                <BsPencil size={17} color="white" className="mb-0.5" />
              </div>
            </label>
          </div>
          <div className="flex flex-col gap-6 w-9/12">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-xs font-semibold text-gray-700"
              >
                Event Title
              </label>
              <input
                type="text"
                id="title"
                {...register("title", {
                  required: "Please enter event title.",
                })}
                className="border border-[#E2E8F0] text-sm outline-none p-2.5 rounded-md w-full"
                placeholder="Enter Event Title"
                aria-label="Event Title"
              />
              {errors.title && (
                <p className="text-primaryText text-xs font-semibold">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2 flex-grow">
                <label className="text-xs font-semibold text-gray-700">
                  Event Time
                </label>
                <input
                  type="time"
                  {...register("time", {
                    required: "Please enter event time.",
                  })}
                  className="border border-[#E2E8F0] text-sm outline-none p-2.5 rounded-md w-full"
                  aria-label="Event Time"
                />
                {errors.time && (
                  <p className="text-primaryText text-xs font-semibold">
                    {errors.time.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <label className="text-xs font-semibold text-gray-700">
                  Event Date
                </label>
                <input
                  type="date"
                  {...register("date", {
                    required: "please enter event date.",
                  })}
                  className="border border-[#E2E8F0] text-sm outline-none p-2.5 rounded-md w-full"
                  aria-label="Event Date"
                />
                {errors.date && (
                  <p className="text-primaryText text-xs font-semibold">
                    {errors.date.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2 flex-grow">
                <label className="text-xs font-semibold text-gray-700">
                  Battle
                </label>
                <input
                  type="text"
                  {...register("battle", { required: "Please enter" })}
                  className="border border-[#E2E8F0] text-sm outline-none p-2.5 rounded-md w-full"
                  placeholder="Enter Battle"
                  aria-label="Battle"
                />
                {errors.battle && (
                  <p className="text-primaryText text-xs font-semibold">
                    {errors.battle.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <label className="text-xs font-semibold text-gray-700">
                  $Price
                </label>
                <input
                  type="number"
                  {...register("price", {
                    required: "Please enter Price of the event.",
                  })}
                  className="border border-[#E2E8F0] text-sm outline-none p-2.5 rounded-md w-full"
                  placeholder="Enter Price"
                  aria-label="Price"
                />
                {errors.price && (
                  <p className="text-primaryText text-xs font-semibold">
                    {errors.price.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-700">
                Address
              </label>
              <input
                type="text"
                {...register("address", {
                  required: "Please enter complete address of the event.",
                })}
                className="border border-[#E2E8F0] text-sm outline-none p-2.5 rounded-md w-full"
                placeholder="Enter Address"
                aria-label="Address"
              />
              {errors.address && (
                <p className="text-primaryText text-xs font-semibold">
                  {errors.address.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-gray-700">
                About
              </label>
              <textarea
                {...register("about", {
                  required: "Please enter description of the event.",
                })}
                className="border border-[#E2E8F0] text-sm outline-none p-2.5 rounded-md w-full"
                placeholder="Enter Description"
                aria-label="Description"
              />
              {errors.about && (
                <p className="text-primaryText text-xs font-semibold">
                  {errors.about.message}
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-primaryHover transition duration-500 ease-in-out"
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
