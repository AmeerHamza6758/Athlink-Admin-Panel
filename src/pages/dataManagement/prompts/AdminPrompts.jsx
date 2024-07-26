import React, { Fragment } from "react";
import PromptsTable from "../../../components/tables/dataManagement/PromptsTable";
import Pagination from "../../../components/pagination/Pagination";

const AdminPrompts = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-11/12 pt-10 flex flex-col gap-4">
        <h1 className="text-lg font-medium">Prompts</h1>
        <div className="bg-white h-16 w-full rounded-lg flex flex-row px-5 gap-4 items-center">
          <input
            className="border border-[#E2E8F0] text-sm outline-none p-1.5 rounded-md w-10/12"
            placeholder="Search by Name"
          />
          <button
            className={`bg-primary text-white  text-md rounded-full p-2.5 w-1/6 h-10 font-bold`}
          >
            Search
          </button>
          <button
            className={`bg-primary text-white text-md rounded-full p-2.5 w-2/6 h-10 font-bold`}
          >
            Add new Prompt
          </button>
        </div>
        <div className="bg-white w-full rounded-lg flex flex-col p-5 gap-2">
          <PromptsTable />
        </div>
        <Fragment>
          <Pagination />
        </Fragment>
      </div>
    </div>
  );
};

export default AdminPrompts;