import React, { Fragment } from "react";
import { dummyMessages } from "../../../helpers/dummydata";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import editIcon from "../../../assets/images/editIcon.png";
import viewIcon from "../../../assets/images/eyeIcon.png";
import Pagination from "../../pagination/Pagination";

const UpCommingEvent = () => {
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
                  className={`px-6 py-3 text-start text-base font-bold text-secondaryText`}
                >
                  Title
                </th>
                <th
                  scope="col"
                  className={`px-6 py-3 text-start text-base font-bold text-secondaryText`}
                >
                  Date
                </th>
                <th
                  scope="col"
                  className={`px-6 py-3 text-start text-base font-bold text-secondaryText`}
                >
                  Location
                </th>
                <th
                  scope="col"
                  className={`pl-8 py-3 text-center text-base font-bold text-secondaryText`}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {dummyMessages.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-8 whitespace-nowrap text-sm font-normal text-darkGreyText">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-darkGreyText">
                    {item.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-darkGreyText">
                    {item.phone}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-normal text-darkGreyText flex flex-row gap-3 items-center justify-end">
                    <button
                      className="h-9 w-9"
                      onClick={() => {
                        navigate("/events/upcoming");
                      }}
                    >
                      <img src={deleteIcon} alt="Delete Icon" />
                    </button>
                    <button
                      className="h-9 w-9"
                      onClick={() => {
                        navigate("/events/upcoming");
                      }}
                    >
                      <img src={editIcon} alt="Edit Icon" />
                    </button>
                    <button
                      className="h-9 w-9"
                      onClick={() => {
                        navigate("/events/upcoming");
                      }}
                    >
                      <img src={viewIcon} alt="Delete Icon" />
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

export default UpCommingEvent;
