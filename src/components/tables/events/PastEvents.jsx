import React, { Fragment } from "react";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import editIcon from "../../../assets/images/editIcon.png";
import viewIcon from "../../../assets/images/eyeIcon.png";
import { useNavigate } from "react-router-dom";
import { dummyEventsData } from "../../../helpers/dummydata";
import Pagination from "../../pagination/Pagination";

const PastEvents = () => {
  const navigate = useNavigate();
  const handleEditClick = (event) => {
    navigate(`/events/edit/${event.s_no}`, { state: { event } });
  };

  return (
    <div className="flex flex-col">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-x-scroll bg-white w-full rounded-lg flex flex-col p-5 gap-2">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3 px-4 text-start text-base font-bold text-secondaryText"
                >
                  Sr_no
                </th>
                <th
                  scope="col"
                  className="py-3 px-4 text-start text-base font-bold text-secondaryText"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="py-3 px-4 text-start text-base font-bold text-secondaryText"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-start text-base font-bold text-secondaryText"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-start text-base font-bold text-secondaryText"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-start text-base font-bold text-secondaryText"
                >
                  Battle
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-start text-base font-bold text-secondaryText"
                >
                  $Price
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-start text-base font-bold text-secondaryText"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-start text-base font-bold text-secondaryText"
                >
                  About
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
              {dummyEventsData.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-normal text-darkGreyText">
                    {item.s_no}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-normal text-darkGreyText">
                    {item.title}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-normal text-darkGreyText">
                    <img
                      className="w-12 h-12 rounded-lg"
                      src={item.image}
                      alt="Events"
                    />
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm font-normal text-darkGreyText">
                    {item.time}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm font-normal text-darkGreyText">
                    {item.date}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm font-normal text-darkGreyText">
                    {item.battle}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm font-normal text-darkGreyText">
                    {item.price}
                  </td>
                  <td className="px-6 py-3 whitespace-wrap text-sm font-normal text-darkGreyText">
                    {item.address}
                  </td>
                  <td className="px-6 py-3">
                    <p className="text-sm font-normal text-darkGreyText line-clamp-3">{item.about}</p>
                  </td>
                  <td className="px-6 py-3  text-sm font-normal text-darkGreyText flex flex-row gap-3 items-center justify-end">
                    <button className="h-9 w-9">
                      <img src={deleteIcon} alt="Delete Icon" />
                    </button>
                    <button
                      className="h-9 w-9"
                      onClick={() => handleEditClick(item)}
                    >
                      <img src={editIcon} alt="Edit Icon" />
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
