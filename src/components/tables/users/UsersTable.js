import React from "react";
import { dummyUserData } from "../../../helpers/dummydata";
import { useNavigate } from "react-router-dom";
import viewIcon from "../../../assets/images/eyeIcon.png";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import editIcon from "../../../assets/images/editIcon.png";
const UsersTable = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-start text-base font-bold text-secondaryText`}
                  >
                    Full Name
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-start text-base font-bold text-secondaryText`}
                  >
                    Email Address
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-start text-base font-bold text-secondaryText`}
                  >
                    Contact_no
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-start text-base font-bold text-secondaryText`}
                  >
                    Country
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-start text-base font-bold text-secondaryText`}
                  >
                    Gender
                  </th>
                  <th
                    scope="col"
                    className="pr-28 text-end py-3 text-base font-bold text-secondaryText"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {dummyUserData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-8 whitespace-nowrap text-sm font-normal text-darkGreyText">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-darkGreyText">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-darkGreyText">
                      {item.contact_no}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-darkGreyText">
                      {item.country}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-darkGreyText">
                      {item.gender}
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap text-center text-sm font-normal text-darkGreyText flex flex-row gap-3 items-center justify-end">
                      <button
                        className="h-9 w-9"
                        onClick={() => {
                          navigate("/users");
                        }}
                      >
                        <img src={deleteIcon} alt="View Details" />
                      </button>
                      <button
                        className="h-9 w-9"
                        onClick={() => {
                          navigate("/users");
                        }}
                      >
                        <img src={editIcon} alt="Edit Icon" />
                      </button>
                      <button
                        className="h-9 w-9"
                        onClick={() => {
                          navigate("/users/actions");
                        }}
                      >
                        <img src={viewIcon} alt="Delete Icon" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
