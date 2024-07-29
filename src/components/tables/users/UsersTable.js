import React from "react";
import { dummyUserData } from "../../../helpers/dummydata";
import { useNavigate } from "react-router-dom";
import viewIcon from "../../../assets/images/eyeIcon.png";
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
                    Email
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
                    className="px-6 py-3 text-center text-base font-bold text-secondaryText"
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
                      {item.country}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-darkGreyText">
                      {item.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-normal text-darkGreyText flex flex-row gap-3 items-center justify-center">
                      <button
                        className="h-9 w-9"
                        onClick={() => {
                          navigate("/users/actions");
                        }}
                      >
                        <img src={viewIcon} alt="View Details" />
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
