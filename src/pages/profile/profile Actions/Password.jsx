import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// Validation schema
const schema = yup.object().shape({
  oldPassword: yup.string().required("Current password is required"),
  newPassword: yup
    .string()
    .min(6, "New password must be at least 6 characters")
    .required("New password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default function Password() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    toast.success("Password changed successfully.");
    console.log(data);
  };

  return (
    <div className="w-3/6 px-12">
      <h1 className="text-base font-semibold text-primaryText mb-6">
        Change Password
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-12">
        <div className="mb-6">
          <label
            htmlFor="current-password"
            className="block font-semibold text-lg text-black mb-2"
          >
            Current Password
          </label>
          <div className="flex items-center border border-[#E2E8F0] rounded-xl bg-transparent">
            <input
              type={showOldPassword ? "text" : "password"}
              placeholder="Current Password"
              {...register("oldPassword")}
              className="w-full p-3 outline-none rounded-l-xl border-none"
              aria-invalid={errors.oldPassword ? "true" : "false"}
            />
            <div
              className="flex items-center px-3 cursor-pointer"
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              {showOldPassword ? (
                <AiOutlineEyeInvisible size={20} color="#808D9E" />
              ) : (
                <AiOutlineEye size={20} color="#808D9E" />
              )}
            </div>
          </div>
          {errors.oldPassword && (
            <p className="text-primaryText text-sm font-semibold mt-2">
              {errors.oldPassword.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="new-password"
            className="block font-semibold text-lg text-black mb-2"
          >
            New Password
          </label>
          <div className="flex items-center border border-gray-300 rounded-md bg-transparent">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="New Password"
              {...register("newPassword")}
              className="w-full p-3 outline-none rounded-l-md border-none"
              aria-invalid={errors.newPassword ? "true" : "false"}
            />
            <div
              className="flex items-center px-3 cursor-pointer"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? (
                <AiOutlineEyeInvisible size={20} color="#808D9E" />
              ) : (
                <AiOutlineEye size={20} color="#808D9E" />
              )}
            </div>
          </div>
          {errors.newPassword && (
            <p className="text-primaryText text-sm font-semibold mt-2">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirm-password"
            className="block font-semibold text-lg text-black mb-2"
          >
            Confirm Password
          </label>
          <div className="flex items-center border border-gray-300 rounded-md bg-transparent">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="w-full p-3 outline-none rounded-l-md border-none"
              aria-invalid={errors.confirmPassword ? "true" : "false"}
            />
            <div
              className="flex items-center px-3 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible size={20} color="#808D9E" />
              ) : (
                <AiOutlineEye size={20} color="#808D9E" />
              )}
            </div>
          </div>
          {errors.confirmPassword && (
            <p className="text-primaryText text-sm font-semibold mt-2">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="pt-8">
          <button
            type="submit"
            className="bg-secondary px-12 py-4 text-white rounded-full text-base font-semibold"
          >
            Update
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
