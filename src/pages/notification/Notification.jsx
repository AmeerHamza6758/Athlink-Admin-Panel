import React from "react";

export const Notification = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center ">
      <div className="w-11/12 h-auto pt-10 flex flex-col gap-4 pb-11 2xl:b-5">
        <div className="bg-white w-full min-h-[80vh] rounded-lg flex flex-col px-5 py-8 gap-4 ">
          <div className="bg-[#FBFBFB] rounded-md w-full h-24 pt-3 ps-6">
            <h1 className="font-semibold text-xl text-[#0C3A2D]">
              Message sent to All Members
            </h1>
            <p className="font-normal text-sm text-[#808D9E] mt-2">
              Your Message sent to all members and ready to view.
            </p>
          </div>
          <div className="bg-[#FBFBFB] rounded-md w-full h-24 pt-3 ps-6">
            <h1 className="font-semibold text-xl text-[#0C3A2D]">
              Order Cancellation Request
            </h1>
            <p className="font-normal text-sm text-[#808D9E] mt-2">
              Ahmed with Email(abcd@gamil.com) has sent request for order
              cancel.
            </p>
          </div>
          <div className="bg-[#FBFBFB] rounded-md w-full h-24 pt-3 ps-6">
            <h1 className="font-semibold text-xl text-[#0C3A2D]">
              You Have blocked Ahmed Ali
            </h1>
            <p className="font-normal text-sm text-[#808D9E] mt-2">
              Service Provider has blocked by you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
