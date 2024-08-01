import React from "react";
import { dummyPromptData } from "../../../helpers/dummydata";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import editIcon from "../../../assets/images/editIcon.png";

const PromptsTable = ({ onEdit }) => {
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
                  Prompt Question
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
              {dummyPromptData.map((items, index) => (
                <tr key={index}>
                  <td className="py-3 text-start px-6 text-sm font-normal text-darkGreyText whitespace-nowrap text-center">
                    {items.sr_no}
                  </td>
                  <td className="py-3 text-start px-6 text-sm font-normal text-darkGreyText whitespace-nowrap text-center">
                    {items.promptQuestion}
                  </td>
                  <td className="px-6 text-start py-4 whitespace-nowrap text-center text-sm font-normal flex flex-row gap-3 items-center justify-end">
                    <button className="h-9 w-9">
                      <img src={deleteIcon} alt="Delete Icon" />
                    </button>
                    <button
                      className="h-9 w-9"
                      onClick={() => {
                        if (onEdit) onEdit(items.sr_no);
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

export default PromptsTable;
