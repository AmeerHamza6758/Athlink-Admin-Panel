import React, { useState } from "react";
import { Profile } from "./profile Actions/Profile";
import Password from "./profile Actions/Password";

function ProfileSetting() {
  const [selectedCategory, setSelectedCategory] = useState("Update Profile");

  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="w-11/12 h-auto pt-10 flex flex-col gap-4">
        <h1 className="text-base font-semibold">Profile Setting</h1>
        <div className="bg-white h-16 w-full py-3 px-12 flex flex-row items-start gap-x-16">
          <h1
            onClick={() => setSelectedCategory("Update Profile")}
            className={`w-52 p-2 rounded-lg text-base font-semibold text-center cursor-pointer transition-colors duration-500 ease ${
              selectedCategory === "Update Profile"
                ? "bg-primary text-white font-bold"
                : "bg-secondary hover:bg-lightGrey text-white hover:text-black"
            }`}
          >
            Update Profile
          </h1>
          <h1
            onClick={() => setSelectedCategory("Update Password")}
            className={`w-52 p-2 rounded-lg text-base font-semibold text-center cursor-pointer transition-colors duration-500 ease ${
              selectedCategory === "Update Password"
                ? "bg-primary text-white font-bold"
                : "bg-secondary hover:bg-lightGrey text-white hover:text-black"
            }`}
          >
            Update Password
          </h1>
        </div>
        <div className="bg-white w-full min-h-[62vh] rounded-lg flex flex-col px-5 py-8 gap-4">
          {selectedCategory === "Update Profile" && (
            <div>
              <Profile />
            </div>
          )}

          {selectedCategory === "Update Password" && (
            <div>
              <Password />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileSetting;
