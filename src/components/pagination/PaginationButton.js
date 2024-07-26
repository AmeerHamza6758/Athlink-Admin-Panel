import React from "react";
import { colors } from "../../helpers/constants";

const PaginationButton = ({ children, active, classes }) => {
  return active ? (
    <button
      className={`bg-[${colors.orange}] h-11 w-11 rounded-lg flex justify-center items-center ${classes}`}
    >
      {children}
    </button>
  ) : (
    <button
      className={`bg-white h-11 w-11 rounded-lg flex justify-center items-center ${classes}`}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
