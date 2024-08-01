import React, { useState } from "react";
import AboutData from "./aboutUs/AboutData";
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";
import TermAndConditions from "./terms&conditions/TermAndConditions";

const ManageCMS = () => {
  const [selectedCategory, setSelectedCategory] = useState("About Us");

  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="w-11/12 pt-6 flex flex-col gap-4">
        <h1 className="text-lg font-medium">Manage CMS</h1>
        <div className="bg-white h-16 w-full py-3 px-12 flex flex-row items-start gap-x-16">
          <p
            onClick={() => setSelectedCategory("About Us")}
            className={`w-52 p-2 rounded-lg text-base font-semibold text-center cursor-pointer transition-colors duration-500 ease ${
              selectedCategory === "About Us"
                ? "bg-primary text-white font-bold"
                : "bg-secondary hover:bg-lightGrey text-white hover:text-black"
            }`}
          >
            About Us
          </p>
          <p
            onClick={() => setSelectedCategory("Privacy Policy")}
            className={`w-52 p-2 rounded-lg text-base font-semibold text-center cursor-pointer transition-colors duration-500 ease ${
              selectedCategory === "Privacy Policy"
                ? "bg-primary text-white font-bold"
                : "bg-secondary hover:bg-lightGrey text-white hover:text-black"
            }`}
          >
            Privacy Policy
          </p>
          <p
            onClick={() => setSelectedCategory("Terms & Conditions")}
            className={`w-52 p-2 rounded-lg text-base font-semibold text-center cursor-pointer transition-colors duration-500 ease ${
              selectedCategory === "Terms & Conditions"
                ? "bg-primary text-white font-bold"
                : "bg-secondary hover:bg-lightGrey text-white hover:text-black"
            }`}
          >
            Terms & Conditions
          </p>
        </div>
        <div className="bg-white py-5 px-10">
          {selectedCategory === "About Us" && (
            <div>
              <AboutData />
            </div>
          )}
          {selectedCategory === "Privacy Policy" && (
            <div>
              <PrivacyPolicy />
            </div>
          )}
          {selectedCategory === "Terms & Conditions" && (
            <div>
              <TermAndConditions />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageCMS;
