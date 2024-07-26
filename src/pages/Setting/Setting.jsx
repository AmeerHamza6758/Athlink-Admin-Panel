import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

export const Setting = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "12345678",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const togglePasswordVisibility = (fieldName) => {
    setShowPasswords((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const handleNewPasswordChange = (e) => {
    const { value } = e.target;
    setPasswordsMatch(value === passwords.confirmPassword);
    setPasswords({ ...passwords, newPassword: value });
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setPasswordsMatch(value === passwords.newPassword);
    setPasswords({ ...passwords, confirmPassword: value });
  };

  const update = () => {
    if (passwordsMatch) {
      setPasswords({
        currentPassword: passwords.newPassword,
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-11/12 h-auto pt-9 flex flex-col gap-4 pb-10 2xl:b-5">
        <h1 className="text-lg font-semibold">Settings</h1>
        <div className="bg-white w-full min-h-[80vh] rounded-lg flex flex-col px-10 py-8 gap-10">
          <h1 className="text-lg">Change Password</h1>
          <div className="w-[30rem] flex flex-col gap-14">
            <div className="flex flex-col gap-4">
              <label htmlFor="current-password" className="text-sm font-semibold">
                Current Password:
              </label>
              <div className="flex">
                <input
                  type={showPasswords.currentPassword ? "text" : "password"}
                  id="current-password"
                  name="currentPassword"
                  value={passwords.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full shadow-md h-11 outline-none rounded-xl ps-4"
                />
                <button
                  onClick={() => togglePasswordVisibility("currentPassword")}
                  className="relative left-[-2rem]"
                >
                  {showPasswords.currentPassword ? (
                    <FaRegEye size={18} color="#808D9E" className="cursor-pointer" />
                  ) : (
                    <FaRegEyeSlash size={18} color="#808D9E" className="cursor-pointer" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <h2 className="inter text-sm font-medium text-[#9CA4AB]">Create New Password</h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-semibold" htmlFor="new-password">
                    New Password:
                  </label>
                  <div className="flex">
                    <input
                      type={showPasswords.newPassword ? "text" : "password"}
                      id="new-password"
                      name="newPassword"
                      value={passwords.newPassword}
                      onChange={handleNewPasswordChange}
                      className="w-full shadow-md h-11 outline-none rounded-xl ps-4"
                    />
                    <button
                      onClick={() => togglePasswordVisibility("newPassword")}
                      className="relative left-[-2rem]"
                    >
                      {showPasswords.newPassword ? (
                        <FaRegEye size={18} color="#808D9E" className="cursor-pointer" />
                      ) : (
                        <FaRegEyeSlash size={18} color="#808D9E" className="cursor-pointer" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-semibold" htmlFor="confirm-password">
                    Confirm Password:
                  </label>
                  <div className="flex">
                    <input
                      type={showPasswords.confirmPassword ? "text" : "password"}
                      id="confirm-password"
                      name="confirmPassword"
                      value={passwords.confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      className="w-full shadow-md h-11 outline-none rounded-xl ps-4"
                    />
                    <button
                      onClick={() => togglePasswordVisibility("confirmPassword")}
                      className="relative left-[-2rem]"
                    >
                      {showPasswords.confirmPassword ? (
                        <FaRegEye size={18} color="#808D9E" className="cursor-pointer" />
                      ) : (
                        <FaRegEyeSlash size={18} color="#808D9E" className="cursor-pointer" />
                      )}
                    </button>
                  </div>
                  {!passwordsMatch && (
                    <p className="text-red-600">Passwords do not match</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <button
              className="relative float-end bg-secondary text-white px-8 py-3 rounded-3xl inter font-bold text-sm"
              onClick={update}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
