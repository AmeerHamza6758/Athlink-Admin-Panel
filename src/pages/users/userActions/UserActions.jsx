import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import profileImage from "../../../assets/images/userImage.jpeg";
import userIcon from "../../../assets/images/User.svg";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { dummyUserData } from "../../../helpers/dummydata";
export default function UserActions() {
  const [userData, setuserData] = useState();
  const iconColor = "#808D9E";
  const navigate = useNavigate();
  const [userImage, setUserImage] = useState(profileImage);
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-10/12 h-auto pt-6 flex flex-col gap-4 ">
        <div
          onClick={() => {
            navigate(-1);
          }}
          className={`bg-darkGrey h-9 w-9 rounded-full flex justify-center items-center cursor-pointer`}
        >
          <FaArrowLeft size={22} color="white" />
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-row gap-12 items-center w-full bg-white  p-5 rounded relative h-38">
            <figure className="border border-[#E4774F] rounded-full p-1 w-28 h-28 relative overflow-hidden">
              <img
                className="object-center	object-cover w-full h-full"
                src={userImage}
                alt={userIcon}
              />
            </figure>

            <div className="flex flex-col gap-y-3 ">
              <div>
                <p className="text-[40px] text-secondaryText font-semibold">
                  John_Doe
                </p>
              </div>

              <div className="flex gap-x-7 items-center">
                <div className="flex items-center gap-3">
                  <MdEmail size={23} style={{ color: iconColor }} />
                  <p className="text-base text-secondaryText font-semibold">
                    meer@gmail.com
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <IoLocationSharp size={23} style={{ color: iconColor }} />
                  <p className="text-base text-secondaryText font-semibold">
                    Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-secondaryText font-semibold text-lg pb-2">
              Personal Details
            </p>
            <div className="w-full bg-white p-5 rounded relative h-38">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      S_No
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Full Name
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Username
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Contact_No
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      DOB
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Language
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Gender
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">1</td>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">
                      Ameer hamza
                    </td>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">
                      meer!321
                    </td>
                    <td className="py-2 px-4 text-darkGreyText text-xs">
                      +923047533611
                    </td>
                    <td className="py-2 px-4 text-darkGreyText text-xs">
                      15-10-200
                    </td>
                    <td className="py-2 px-4 text-darkGreyText text-xs">
                      URDU
                    </td>
                    <td className="py-2 px-4 text-darkGreyText text-xs">
                      Male
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="text-secondaryText font-semibold text-lg pb-2">
              Locations
            </p>
            <div className="w-full bg-white p-5 rounded relative h-38">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      S_No
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Country
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      City
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Postal Code
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">1</td>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">
                      Pakistan
                    </td>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">
                      RYK
                    </td>
                    <td className="py-2 px-4 text-darkGreyText text-xs">
                      12345
                    </td>
                    <td className="py-2 px-4 text-darkGreyText text-xs">
                      123 unitedStates of washington
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="text-secondaryText font-semibold text-lg pb-2">
              Social Media Links
            </p>
            <div className="w-full bg-white p-5 rounded relative h-38">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      S_No
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Facebook
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Shopify
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Instagram
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">1</td>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">
                      https://www.facebook.com
                    </td>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">
                      https://www.shopify.com
                    </td>
                    <td className="py-2 px-4 text-darkGreyText text-xs">
                      https://www.instagram.com
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="text-secondaryText font-semibold text-lg pb-2">
              Prompts
            </p>
            <div className="w-full bg-white p-5 rounded relative h-38">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      S_No
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Question
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Answer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">1</td>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">
                      What is your name?
                    </td>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">
                      I'm Ameer Hamza
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="text-secondaryText font-semibold text-lg pb-2">
              Interests
            </p>
            <div className="w-full bg-white p-5 rounded relative h-38">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      S_No
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Sport Name
                    </th>
                    <th className="py-2 px-4 text-darkText text-sm font-semibold border-b">
                      Experience Level
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">1</td>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">
                      FootBall
                    </td>
                    <td className="py-2 px-4 text-darkGreyText text-xs ">
                      Intermediate
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="text-secondaryText font-semibold text-lg pb-2">
              About
            </p>
            <div className="w-full bg-white p-5 rounded relative h-38 text-darkGreyText text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              voluptas accusantium eius unde rerum porro provident eos cum
              obcaecati dolore nostrum, enim iste, veniam mollitia sed explicabo
              totam, facere adipisci.
            </div>
          </div>

          <div>
            <p className="text-secondaryText font-semibold text-lg pb-2">
              Images
            </p>
            <div className="w-full bg-white p-5 rounded relative h-38">
              <div className="grid grid-cols-6 gap-4">
                <div className="relative w-48 h-48">
                  <img
                    src={profileImage}
                    alt={`User uploaded `}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="relative w-48 h-48">
                  <img
                    src={profileImage}
                    alt={`User uploaded `}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="relative w-48 h-48">
                  <img
                    src={profileImage}
                    alt={`User uploaded `}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="relative w-48 h-48">
                  <img
                    src={profileImage}
                    alt={`User uploaded `}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="relative w-48 h-48">
                  <img
                    src={profileImage}
                    alt={`User uploaded `}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="relative w-48 h-48">
                  <img
                    src={profileImage}
                    alt={`User uploaded `}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
