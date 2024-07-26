import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const PromptModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-dark bg-opacity-75">
      <div className="md:w-[65%] tablet:w-[55%] h-[90%] bg-formBg rounded-3xl mx-3 flex justify-center m-auto">
        <button
          className="absolute lg:right-[215px] sm:right-2 tablet:right-[160px]  top-3 w-10 h-10 rounded-full bg-formBg hover:bg-danger hover:text-white flex items-center justify-center"
          onClick={onClose}
        >
          <IoCloseSharp />
        </button>
      </div>
    </div>
  );
};

export default PromptModal;
