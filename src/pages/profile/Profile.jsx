import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import toast from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";

export const Profile = () => {
  const [profileImage, setProfileImage] = useState();
  const [backgroundPreview, setBackgroundPreview] = useState();

  const handleEditFileChange = (event) => {
    const file = event.target.files[0];
    if (file.size > 2 * 1024 * 1024) {
      event.target.value = null;
      toast.error("File size exceeds the maximum limit of 2MB.");
    } else {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-11/12 h-auto pt-10 flex flex-col gap-4 pb-11 2xl:b-5">
        <div className="bg-white w-full min-h-[72vh] rounded-lg flex flex-col px-5 py-8 gap-4">
          <div className="w-auto px-12">
            <div className="w-auto ps-1.5">
              <h1 className="font-bold text-2xl my-3">Profile Section</h1>
              <p className="text-sm font-normal text-darkGreyText">
                Welcome! Update your details here!
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-8">
                <div className="flex flex-col items-center gap-y-5 w-1/4">
                  <div className="border border-[#E4774F] rounded-full p-1 w-44 h-44 relative">
                    <input
                      onChange={handleEditFileChange}
                      className="w-full rounded-lg border px-3 py-2 text-sm outline-none hidden"
                      type="file"
                      id="itemImage"
                      accept="image/*"
                    />
                    <label htmlFor="itemImage" className="cursor-pointer">
                      {backgroundPreview ? (
                        <img
                          src={backgroundPreview}
                          alt="Profile"
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
                  <p className="font-normal text-base text-black">
                    Profile Picture
                  </p>
                </div>

                <div className="w-2/4">
                  <div className="flex flex-col gap-y-7 mb-5">
                    <div className="flex flex-row gap-4 items-center">
                      <p className="font-normal text-lg text-black">Name</p>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="p-3.5 border border-[#E2E8F0] w-full rounded-xl flex-grow"
                      />
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                      <p className="font-normal text-lg text-black">Email</p>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="p-3.5 border border-[#E2E8F0] rounded-xl flex-grow"
                      />
                    </div>
                  </div>
                  <div className="mt-14 text-end">
                    <button className="bg-secondary px-12 py-4 text-white rounded-full text-base font-semibold">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
