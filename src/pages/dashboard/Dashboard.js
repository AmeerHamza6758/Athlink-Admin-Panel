import React, { useState } from "react";
import { Table } from "../../components/tables/dashboard/DashboardTable";
import { colors, dashboard } from "../../helpers/constants";

import { Graph, GraphData } from "../../components/Graph/GraphContainer";
import '../../components/Graph/Graph.css'

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full h-auto flex justify-center items-center">
      {/* <div className="w-10/12 h-auto pt-10 flex flex-col gap-4 ">
        <div className="w-full bg-white flex justify-around p-6 rounded h-auto">
          <div className="w-4/12 text-center border-r border-gray-300">
            <span className={`font-normal text-[28px]`}>750K</span>
            <p className="text-gray-500 text-xl">New Members</p>
          </div>
          <div className="w-4/12 text-center border-r border-gray-300">
            <span className={`font-normal text-[28px]`}>5500</span>
            <p className="text-gray-500 text-xl">Media Uploaded</p>
          </div>
          <div className="w-4/12 text-center border-r border-gray-300">
            <span className={`font-normal text-[28px]`}>7000</span>
            <p className="text-gray-500 text-xl">Post Liked</p>
          </div>
          <div className="w-4/12 text-center ">
            <span className={`font-normal text-[28px]`}>7500</span>
            <p className="text-gray-500 text-xl">Stories</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-white w-2/5 rounded">
            <div className="flex p-3 flex-col">
              <div className="flex justify-between p-4">

                <span className="text-xl font-normal">Logins</span>
                <div className="relative"> 
                <button
                  onClick={toggleDropdown}
                  className=" text-[#8A92A6] px-4 py-2 rounded inline-flex items-center"
                >
                  <span>This Week</span>
                  <img src={dropDownArrow} alt="img" />
                </button>

                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white z-10 rounded shadow-lg">
                      <a href="#" className="block px-4 py-2 text-[#202020] hover:bg-gray-200">This Week</a>
                      <a href="#" className="block px-4 py-2 text-[#202020] hover:bg-gray-200">Last 2 Weeks</a>
                      <a href="#" className="block px-4 py-2 text-[#202020] hover:bg-gray-200">Last Month</a>
                      <a href="#" className="block px-4 py-2 text-[#202020] hover:bg-gray-200">Last Year</a>
                    </div>
                  )}</div>
              </div>

              <div className="flex gap-4 graph-data-container  flex-wrap">
                <div className='flex gap-16 relative graph-main-container ps-10'>
                  <div className={` graph1-container top-10 left-6 relative text-center flex flex-col gap-3`} >
                    <Graph value={'50'} colors='#E4774F' />
                  </div>
                  <div className={` graph2-container absolute top-4 text-center flex flex-col gap-3`} >
                    <Graph value={'80'} colors='#2E4D55' />
                  </div>
                </div>
                <div >
                  <GraphData />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-3/5 p-4 rounded h-[22rem] p-custom-scrollbar-8 overflow-auto">
            <Table />
          </div>
        </div>
        <div className="flex gap-2 justify-around flex-wrap">
          <div className={`w-[168px] bg-white h-[170px] rounded flex justify-center items-center flex-col gap-4 text-[${colors.orange}] shadow-md`}>
            <img src={likes} className="w-9" />
            <div className="text-center">

              <h3 className="font-medium text-center">{dashboard.likes} Likes</h3>
              <p className="text-xs">{dashboard.users} increase</p>
            </div>

          </div>
          <div className={`w-[168px] bg-[${colors.orange}] h-[170px] rounded flex justify-center items-center gap-4 flex-col text-white shadow-md`}>
            <img src={share} />
            <div className="text-center">

              <h3 className="font-medium">{dashboard.shares} Shares</h3>
              <p className="text-xs">{dashboard.users} increase</p>
            </div>

          </div>
          <div className={`w-[168px] bg-white h-[170px] rounded flex justify-center items-center flex-col gap-4 text-[${colors.orange}] shadow-md`}>
            <img src={gallery} className="w-9" />
            <div className="text-center">

              <h3 className="font-medium">{dashboard.Media} Media</h3>
              <p className="text-xs">{dashboard.users} increase</p>
            </div>

          </div>
          <div className={`w-[168px] bg-[${colors.orange}] h-[170px] rounded flex justify-center items-center flex-col gap-4 text-white shadow-md`}>
            <img src={InstaPost} className="w-9" />
            <div className="text-center">

              <h3 className="font-medium">{dashboard.posts} Posts</h3>
              <p className="text-xs">{dashboard.users} increase</p>
            </div>

          </div>
          <div className={`w-[168px] bg-white h-[170px] rounded flex justify-center items-center flex-col gap-4 text-[${colors.orange}] shadow-md`} >
            <img src={''} className="w-9" />
            <div className="text-center">

              <h3 className="font-medium ">Stories</h3>
              <p className="text-xs">{dashboard.users} increase</p>
            </div>

          </div>
          <div className={`w-[168px] bg-[${colors.orange}] h-[170px] rounded flex justify-center items-center flex-col gap-4 text-white shadow-md`}>
            <img src={Friends} className="w-9" />
            <div className="text-center">

              <h3 className="font-medium ">{dashboard.users} Users</h3>
              <p className="text-xs">{dashboard.users} increase</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
