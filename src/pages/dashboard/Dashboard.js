import React from "react";
import { FaUsers } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { MdInterests } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-11/12 h-auto pt-10 flex flex-col gap-4">
        <h1 className="font-bold text-base">Dashboard</h1>
        <div className="bg-white flex items-center p-6 rounded h-auto margin-0 overflow-x-hidden">
          <div className="w-full h-auto grid grid-cols-3 gap-x-8 gap-y-14 justify-stretch">
            <div className="py-4 px-6 rounded w-full h-28 flex items-start justify-between shadow-primaryBoxShadow hover:bg-lightGrey transition duration:500 ease-in-out">
              <div className="space-y-3">
                <h1 className="font-semibold text-lg text-primaryText">
                  Users
                </h1>
                <p className="font-semibold text-base text-darkGreyText">
                  750k
                </p>
              </div>
              <div className="bg-secondary p-2 rounded-full">
                <FaUsers size={28} color="white" />
              </div>
            </div>

            <div className="py-4 px-6 rounded w-full h-28 flex items-start justify-between shadow-primaryBoxShadow hover:bg-lightGrey transition duration:500 ease-in-out">
              <div className="space-y-3">
                <h1 className="font-semibold text-lg text-primaryText">
                  Events
                </h1>
                <p className="font-semibold text-base text-darkGreyText">100</p>
              </div>
              <div className="bg-secondary p-2 rounded-full">
                <MdEmojiEvents size={28} color="white" />
              </div>
            </div>

            <div className="py-4 px-6 rounded w-full h-28 flex items-start justify-between shadow-primaryBoxShadow hover:bg-lightGrey transition duration:500 ease-in-out">
              <div className="space-y-3">
                <h1 className="font-semibold text-lg text-primaryText">
                  Participants
                </h1>
                <p className="font-semibold text-base text-darkGreyText">10k</p>
              </div>
              <div className="bg-secondary p-2 rounded-full">
                <FaPeopleGroup size={28} color="white" />
              </div>
            </div>

            <div className="py-4 px-6 rounded w-full h-28 flex items-start justify-between shadow-primaryBoxShadow hover:bg-lightGrey transition duration:500 ease-in-out">
              <div className="space-y-3">
                <h1 className="font-semibold text-lg text-primaryText">
                  Interests
                </h1>
                <p className="font-semibold text-base text-darkGreyText">150</p>
              </div>
              <div className="bg-secondary p-2 rounded-full">
                <MdInterests size={28} color="white" />
              </div>
            </div>

            <div className="py-4 px-6 rounded w-full h-28 flex items-start justify-between shadow-primaryBoxShadow hover:bg-lightGrey transition duration:500 ease-in-out">
              <div className="space-y-3">
                <h1 className="font-semibold text-lg text-primaryText">
                  Languages
                </h1>
                <p className="font-semibold text-base text-darkGreyText">50</p>
              </div>
              <div className="bg-secondary p-2 rounded-full">
                <IoLanguage size={28} color="white" />
              </div>
            </div>
            <div className="py-4 px-6 rounded w-full h-28 flex items-start justify-between shadow-primaryBoxShadow hover:bg-lightGrey transition duration:500 ease-in-out">
              <div className="space-y-3">
                <h1 className="font-semibold text-lg text-primaryText">
                  Countries
                </h1>
                <p className="font-semibold text-base text-darkGreyText">50</p>
              </div>
              <div className="bg-secondary p-2 rounded-full">
                <BiWorld size={28} color="white" />
              </div>
            </div>
          </div>
          {/* Graph */}
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
