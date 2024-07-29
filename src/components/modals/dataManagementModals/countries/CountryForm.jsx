import React from "react";
import { useFormContext } from "react-hook-form";
const CountryForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="countryName" className="block font-medium mb-1 text-sm">
          Country Name
        </label>
        <input
          type="text"
          id="countryName"
          name="countryName"
          placeholder="Pakistan"
          {...register("countryName", { required: "Please enter a country" })}
          className="border border-lightGrey text-xs rounded-lg p-2.5 w-full focus:border-secondaryText focus:outline-none"
        />
        {errors.countryName && (
          <p className="text-primaryText text-xs font-semibold">
            {errors.countryName.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="countryCode" className="block font-medium mb-1 text-sm">
          Country Code
        </label>
        <input
          type="text"
          id="countryCode"
          name="countryCode"
          placeholder="PK"
          {...register("countryCode", {
            required: "Please enter a country code",
          })}
          className="border border-lightGrey text-xs rounded-lg p-2.5 w-full focus:border-secondaryText focus:outline-none"
        />
        {errors.countryCode && (
          <p className="text-primaryText text-xs font-semibold">
            {errors.countryCode.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default CountryForm;
