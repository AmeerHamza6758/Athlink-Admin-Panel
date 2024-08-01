import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsPencil } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

export const Profile = () => {
  const [profileImage, setProfileImage] = useState();
  const [backgroundPreview, setBackgroundPreview] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const handleEditFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 2 * 1024 * 1024) {
      event.target.value = null;
      toast.error("File size exceeds the maximum limit of 2MB.");
    } else {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundPreview(reader.result);
        setValue("profileImage", file);
      };
      if (file) reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-11/12 h-auto pt-10 flex flex-col gap-4 pb-11 2xl:b-5">
        <div className="bg-white w-full min-h-[62vh] rounded-lg flex flex-col px-5 py-8 gap-4">
          <div className="w-auto px-12">
            <div className="w-auto ps-1.5">
              <h1 className="font-bold text-2xl my-3 ">Profile Section</h1>
              <p className="text-sm font-normal text-darkGreyText">
                Welcome! Update your details here!
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap items-center justify-between gap-3 pt-8">
                <div className="flex flex-col items-center gap-y-5 w-1/6">
                  <div className="border border-[#E4774F] rounded-full p-1 w-52 h-52 relative">
                    <input
                      {...register("profileImage")}
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
                        <div className="flex justify-center items-center w-full h-full bg-lightGrey rounded-full">
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

                <div className="w-4/6">
                  <div className="flex flex-col gap-y-7 mb-5">
                    <div className="flex flex-col gap-4 items-start">
                      <label
                        htmlFor="name"
                        className="font-semibold text-lg text-black"
                      >
                        Name
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        placeholder="Enter your name"
                        className="p-3.5 border border-[#E2E8F0] w-4/6 rounded-xl flex-grow"
                      />
                      {errors.name && (
                        <p className="text-primaryText text-sm font-semibold mt-2">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-4 items-start">
                      <label
                        htmlFor="email"
                        className="font-semibold text-lg text-black"
                      >
                        Email
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                          },
                        })}
                        type="email"
                        placeholder="Enter your email address"
                        className="p-3.5 w-4/6 border border-[#E2E8F0] rounded-xl flex-grow"
                      />
                      {errors.email && (
                        <p className="text-primaryText text-sm font-semibold mt-2">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-14 text-start">
                    <button
                      type="submit"
                      className="bg-secondary px-12 py-4 text-white rounded-full text-base font-semibold"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
