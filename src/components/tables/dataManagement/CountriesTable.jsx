import React from "react";
import { dummyCountryData } from "../../../helpers/dummydata";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import editIcon from "../../../assets/images/editIcon.png";
import viewIcon from "../../../assets/images/eyeIcon.png";

const CountriesTable = () => {
  const navigate = useNavigate();
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
                  Country
                </th>
                <th
                  scope="col"
                  className="py-3 text-start px-6 text-base font-bold text-secondaryText"
                >
                  Country Code
                </th>
                <th
                  scope="col"
                  className="py-3 pr-24 text-end text-base font-bold text-secondaryText"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {dummyCountryData.map((items, index) => (
                <tr key={index}>
                  <td className="py-3 px-6 text-start text-sm font-normal text-darkGreyText whitespace-nowrap">
                    {items.s_no}
                  </td>
                  <td className="py-3 px-6 text-start text-sm font-normal text-darkGreyText whitespace-nowrap">
                    {items.countryName}
                  </td>
                  <td className="py-3 px-6 text-start text-sm font-normal text-darkGreyText whitespace-nowrap">
                    {items.countryCode}
                  </td>
                  <td className="py-4 px-6 text-end text-sm font-normal text-darkGreyText whitespace-nowrap">
                    <div className="flex flex-row justify-end items-center gap-3">
                      <button className="h-9 w-9">
                        <img src={deleteIcon} alt="Delete Icon" />
                      </button>
                      <button
                        className="h-9 w-9"
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        <img src={editIcon} alt="Edit Icon" />
                      </button>
                      <button
                        className="h-9 w-9"
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        <img src={viewIcon} alt="View Icon" />
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
};

export default CountriesTable;
