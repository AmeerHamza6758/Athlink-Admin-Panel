import React from "react";
import { useFormContext } from "react-hook-form";

const PromptForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium ">
            Enter Prompt Question
          </label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", {
              required: "Please write prompt question..!",
            })}
            className="bg-lightGreyBg border border-lightGreyBg text-xs rounded-lg  w-full p-2.5 focus:border-secondaryText focus:outline-none"
            placeholder="I'll never forgot the time..."
          />
          {errors.name && (
            <span className="text-primaryText text-xs font-semibold">
              {errors.name.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default PromptForm;
