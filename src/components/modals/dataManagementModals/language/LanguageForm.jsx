import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const LanguageForm = ({ initialData }) => {
  const {
    register,
    setValue,
    reset,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (initialData) {
      console.log('Setting initial data:', initialData);
      setValue("languageName", initialData.LanguageName || ""); 
      setValue("languageCode", initialData.LanguageCode || ""); 
    } else {
      reset({
        languageName: "",
        languageCode: ""
      });
    }
  }, [initialData, setValue, reset]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="languageName" className="block font-medium mb-1 text-sm">
          Language Name
        </label>
        <input
          type="text"
          id="languageName"
          name="languageName"
          placeholder="English"
          {...register("languageName", { required: "Please enter a Language" })}
          className="border border-lightGrey text-xs rounded-lg p-2.5 w-full focus:border-secondaryText focus:outline-none"
        />
        {errors.languageName && (
          <p className="text-primaryText text-xs font-semibold">
            {errors.languageName.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="languageCode" className="block font-medium mb-1 text-sm">
          Language Code
        </label>
        <input
          type="text"
          id="languageCode"
          name="languageCode"
          placeholder="en"
          {...register("languageCode", {
            required: "Please enter a Language code",
          })}
          className="border border-lightGrey text-xs rounded-lg p-2.5 w-full focus:border-secondaryText focus:outline-none"
        />
        {errors.languageCode && (
          <p className="text-primaryText text-xs font-semibold">
            {errors.languageCode.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default LanguageForm;
