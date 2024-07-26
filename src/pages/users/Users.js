import React, { Fragment, useState } from "react";
import { colors } from "../../helpers/constants";
import Pagination from "../../components/pagination/Pagination";
import UsersTable from "../../components/tables/users/UsersTable";

const Users = () => {
  return(
  <div className="w-full h-auto flex justify-center items-center">
      <div className="w-11/12 h-auto pt-10 flex flex-col gap-4 ">
        <h1 className="text-base font-bold">User Management</h1>
        <div className="bg-white h-16 w-full rounded-lg flex flex-row px-5 gap-4 items-center">
          <input
            className="border border-[#E2E8F0] text-sm outline-none p-1.5 rounded-md w-10/12"
            placeholder="Search by Name"
          />
          <button
            className={`bg-primary text-md text-white rounded-full p-1.5 w-1/6 h-10 font-bold`}
          >
            Search
          </button>
        </div>
        <div className="bg-white w-full rounded-lg flex flex-col p-5 gap-2 ">
          <div>
            <UsersTable />
          </div>
        </div>
        <Fragment>
          <Pagination />
        </Fragment>
      </div>
    </div>
)};

export default Users;
