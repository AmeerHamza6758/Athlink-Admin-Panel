import React, { Fragment } from "react";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import editIcon from "../../../assets/images/editIcon.png";
import viewIcon from "../../../assets/images/eyeIcon.png";
import { useNavigate } from "react-router-dom";
import { dummyMessages } from "../../../helpers/dummydata";
import Pagination from "../../pagination/Pagination";
const PastEvents = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden bg-white w-full rounded-lg flex flex-col p-5 gap-2">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-start text-base font-bold text-secondaryText"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-start text-base font-bold text-secondaryText"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-start px-6 text-base font-bold text-secondaryText"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-start px-6 text-base font-bold text-secondaryText"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="py-3 text-center text-base font-bold text-secondaryText"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {dummyMessages.map((items, index) => (
                <tr key={index}>
                  <td className="py-3 text-start px-6 text-sm font-normal text-darkGreyText whitespace-nowrap text-center">
                    {items.name}
                  </td>
                  <td className="py-3 text-start px-6 text-sm font-normal text-darkGreyText whitespace-nowrap text-center">
                    {items.email}
                  </td>
                  <td className="py-3 text-start px-6 text-sm font-normal text-darkGreyText whitespace-nowrap text-center">
                    {items.phone}
                  </td>
                  <td className="px-6 text-start py-4 whitespace-nowrap text-center text-sm font-normal flex flex-row gap-3 items-center justify-end">
                    <button className="h-9 w-9">
                      <img src={deleteIcon} alt="Delete Icon" />
                    </button>
                    <button
                      className="h-9 w-9"
                      onClick={() => {
                        navigate("/events");
                      }}
                    >
                      <img src={editIcon} alt="Edit Icon" />
                    </button>
                    <button
                      className="h-9 w-9"
                      onClick={() => {
                        navigate("/events");
                      }}
                    >
                      <img src={viewIcon} alt="view Icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Fragment>
            <Pagination />
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
