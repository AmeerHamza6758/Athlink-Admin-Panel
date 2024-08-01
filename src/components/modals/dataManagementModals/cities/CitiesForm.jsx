import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

function CitiesForm({ initialData }) {
  const { register, setValue, formState: { errors } } = useFormContext();

  useEffect(() => {
    if (initialData) {
      setValue("cityName", initialData.citiesName || "");
      setValue("country", initialData.country || ""); 
    }
  }, [initialData, setValue]);

  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="cityName" className="block font-medium mb-1 text-sm">
          City Name
        </label>
        <input
          type="text"
          id="cityName"
          name="cityName"
          placeholder="Karachi"
          {...register("cityName", { required: "Please enter a city name" })}
          className="border border-lightGrey text-xs rounded-lg p-2.5 w-full focus:border-secondaryText focus:outline-none"
        />
        {errors.cityName && (
          <p className="text-primaryText text-xs font-semibold">
            {errors.cityName.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 w-2/3 my-6">
        <label htmlFor="country" className="block font-medium mb-1 text-sm">
          Select Country
        </label>
        <select
          id="country"
          name="country"
          {...register("country", { required: "Please select a country" })}
          className="border border-lightGrey text-xs rounded-lg p-2.5 w-full focus:border-secondaryText focus:outline-none"
        >
          <option value="">Select a country</option>
          <option value="Pakistan">Pakistan</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && (
          <p className="text-primaryText text-xs font-semibold">
            {errors.country.message}
          </p>
        )}
      </div>
    </>
  );
}

export default CitiesForm;
