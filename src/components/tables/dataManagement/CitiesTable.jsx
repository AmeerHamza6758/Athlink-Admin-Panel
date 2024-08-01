import React from "react";
import { dummyCitiesData } from "../../../helpers/dummydata";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import editIcon from "../../../assets/images/editIcon.png";
function CitiesTable({ onEdit }) {
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
                  City Name
                </th>
                <th
                  scope="col"
                  className="py-3 text-start px-6 text-base font-bold text-secondaryText"
                >
                  Country Name
                </th>
                <th
                  scope="col"
                  className="py-3 pr-12 text-end text-base font-bold text-secondaryText"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {dummyCitiesData.map((items, index) => (
                <tr key={index}>
                  <td className="py-3 px-6 text-start text-sm font-normal text-darkGreyText whitespace-nowrap">
                    {items.s_no}
                  </td>
                  <td className="py-3 px-6 text-start text-sm font-normal text-darkGreyText whitespace-nowrap">
                    {items.citiesName}
                  </td>
                  <td className="py-3 px-6 text-start text-sm font-normal text-darkGreyText whitespace-nowrap">
                    {items.country}
                  </td>
                  <td className="py-4 px-6 text-end text-sm font-normal text-darkGreyText whitespace-nowrap">
                    <div className="flex flex-row justify-end items-center gap-3">
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
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CitiesTable;
