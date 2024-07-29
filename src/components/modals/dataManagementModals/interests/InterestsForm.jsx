import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { BsPencil } from "react-icons/bs";
import toast from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";

const InterestsForm = () => {
  const [sportImage, setSportImage] = useState(null);
  const [backgroundPreview, setBackgroundPreview] = useState(null);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleEditFileChange = (event) => {
    const file = event.target.files[0];
    if (file.size > 2 * 1024 * 1024) {
      event.target.value = null;
      toast.error("File size exceeds the maximum limit of 2MB.");
    } else {
      setSportImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label
          htmlFor="interest"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Enter Interest
        </label>
        <input
          type="text"
          name="interest"
          id="interest"
          {...register("interest", { required: "Please enter an interest" })}
          placeholder="Hockey"
          className="border border-lightGrey text-xs rounded-lg p-2.5 w-full focus:border-secondaryText focus:outline-none"
        />
        {errors.interest && (
          <span className="text-red-500 text-xs font-semibold mt-1">
            {errors.interest.message}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <input
          onChange={handleEditFileChange}
          className="w-full rounded-lg border px-3 py-2 text-sm outline-none hidden"
          type="file"
          name="itemImage"
          id="itemImage"
          accept="image/*"
          {...register("itemImage", { required: "Please enter an interest" })}
        />

        <label
          htmlFor="itemImage"
          className="cursor-pointer  font-semibold bg-darkGrey  hover:bg-lightGrey text-white hover:text-secondaryText rounded-lg px-4 py-2 flex items-center gap-2"
        >
          <span>Upload Sport Image</span>
          <BsPencil size={20} />
        </label>

        <div className="w-28 h-28 flex justify-center items-center bg-gray-200 rounded-full overflow-hidden">
          {backgroundPreview ? (
            <img
              src={backgroundPreview}
              alt="Sport"
              className="object-cover w-full h-full"
            />
          ) : (
            <FaRegUser size={40} color="gray" />
          )}
        </div>
      </div>
    </div>
  );
};

export default InterestsForm;
