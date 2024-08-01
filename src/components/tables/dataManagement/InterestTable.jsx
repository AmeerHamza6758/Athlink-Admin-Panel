import React from "react";
import { dummyInterest } from "../../../helpers/dummydata";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import editIcon from "../../../assets/images/editIcon.png";
const InterestTable = ({ onEdit }) => {
 
  return (
    <div className="flex flex-col">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-start text-base font-bold text-secondaryText"
                >
                  Sr_No
                </th>
                <th
                  scope="col"
                  className="py-3 text-start px-6 text-base font-bold text-secondaryText"
                >
                  Sports Name
                </th>
                <th
                  scope="col"
                  className="py-3 text-start px-6 text-base font-bold text-secondaryText"
                >
                  Sports Icon
                </th>
                <th
                  scope="col"
                  className="py-3 text-end pr-12 text-base font-bold text-secondaryText"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {dummyInterest.map((items, index) => (
                <tr key={index}>
                  <td className="py-3 text-start px-6 text-sm font-normal text-darkGreyText whitespace-nowrap text-center">
                    {items.s_no}
                  </td>
                  <td className="py-3 text-start px-6 text-sm font-normal text-darkGreyText whitespace-nowrap text-center">
                    {items.interestName}
                  </td>
                  <td className="py-3 text-start px-6 text-sm font-normal text-darkGreyText whitespace-nowrap text-center">
                    <img
                      className="w-12 h-12 rounded-lg"
                      src={items.image}
                      alt="Sports Icon"
                    />
                  </td>
                  <td className="px-6 text-start py-4 whitespace-nowrap text-center text-sm font-normal flex flex-row gap-3 items-center justify-end">
                    <button className="h-9 w-9">
                      <img src={deleteIcon} alt="Delete Icon" />
                    </button>
                    <button
                      className="h-9 w-9"
                      onClick={() => {
                        if (onEdit) onEdit(items.s_no);
                      }}
                    >
                      <img src={editIcon} alt="Edit Icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InterestTable;
