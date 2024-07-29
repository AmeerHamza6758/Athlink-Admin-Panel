import React from "react";
import { IoMdClose } from "react-icons/io";
import { useForm, FormProvider } from "react-hook-form";

const CustomModal = ({ isOpen, onClose, onSubmit, children, title }) => {
  const methods = useForm();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-75"
    //   onClick={onClose}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-secondaryText">
              {title}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <IoMdClose className="w-8 h-7 text-red-600 dark:text-white" />
            </button>
          </div>
          <FormProvider {...methods}>
            <form
              className="p-4 md:p-5"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              {children}
              <button
                type="submit"
                className="text-white font-semibold bg-secondary rounded-lg text-sm px-5 py-2.5 text-center mt-3"
              >
                Submit
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
