import React from "react";
import { colors } from "../../helpers/constants";
import PaginationButton from "./PaginationButton";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="flex flex-row justify-between items-center px-4">
      <p className={`text-base text-[${colors.primary}] font-semibold`}>
        Showing 1-12 of 738
      </p>
      <div className="flex flex-row gap-2">
        <PaginationButton classes={"mx-2"}>
          <FaAngleLeft size={20} color="black" />
        </PaginationButton>
        <PaginationButton active={true}>
          <p className="text-white text-lg font-medium">1</p>
        </PaginationButton>
        <PaginationButton>
          <p className="text-black text-lg font-medium">2</p>
        </PaginationButton>
        <PaginationButton>
          <p className="text-black text-lg font-medium">3</p>
        </PaginationButton>
        <PaginationButton>
          <p className="text-black text-lg font-medium">...</p>
        </PaginationButton>
        <PaginationButton>
          <p className="text-black text-lg font-medium">100</p>
        </PaginationButton>
        <PaginationButton classes={"mx-2"}>
          <FaAngleRight size={20} color="black" />
        </PaginationButton>
      </div>
    </div>
  );
};

export default Pagination;
