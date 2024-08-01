import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const PromptForm = ({ initialData }) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (initialData) {
      setValue("name", initialData.promptQuestion);
    }
  }, [initialData, setValue]);

  return (
    <>
      <div className="grid gap-4 mb-4 grid-cols-2">
        <div className="col-span-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Enter Prompt Question
          </label>
          <textarea
            name="name"
            id="name"
            {...register("name", {
              required: "Please write prompt question..!",
            })}
            className="bg-lightGreyBg border border-lightGreyBg text-xs rounded-lg w-full p-2.5 focus:border-secondaryText focus:outline-none h-28 resize-none"
            placeholder="I'll never forget the time..."
          ></textarea>
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
