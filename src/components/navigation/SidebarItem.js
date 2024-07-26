import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../helpers/constants";
import { openDropDown, closeDropDown } from "../../redux/slices/userSlice";
export function SidebarItem({
  icon,
  text,
  active,
  link,
  dropdownItems,
  alert,
}) {
  const { isSidebarExpanded } = useSelector((state) => state.user);
  const { isDropDownOpen } = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch();

  const isActive = link
    ? location.pathname.startsWith(link)
    : dropdownItems?.some((item) => location.pathname.startsWith(item.path));

  function handleToggle() {
    if (isDropDownOpen) {
      dispatch(closeDropDown());
    } else {
      dispatch(openDropDown());
    }
  }

  return (
    <div className={`relative ${dropdownItems ? "" : "group"}`}>
      {dropdownItems ? (
        <div
          className={`relative flex items-center justify-between w-full py-4 px-3 h-18 cursor-pointer text-[#808D9E] transition-colors ${
            isActive
              ? "bg-[#98a8b433] text-white border-white border-l-2"
              : "hover:bg-[#98a8b433] hover:border-white hover:border-l-2 hover:text-white"
          }`}
          onClick={handleToggle}
        >
          <div
            className={`flex items-center ${isSidebarExpanded ? "ml-6" : "ml-3"}`}
          >
            {icon}
            <span
              className={`overflow-hidden transition-all ${
                isSidebarExpanded ? "w-52 ml-6" : "w-0"
              }`}
            >
              {text}
            </span>
          </div>
          {isSidebarExpanded && (
            <div className="ml-[-65px]">
              {isDropDownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          )}
        </div>
      ) : (
        <Link to={link}>
          <li
            className={`relative flex items-center justify-center w-full py-4 px-3 h-18 text-[#808D9E] font-normal text-base cursor-pointer transition-colors ${
              active
                ? "bg-[#98a8b433] text-white border-white border-l-2"
                : "hover:bg-[#98a8b433] hover:border-white hover:border-l-2 hover:text-white"
            }`}
          >
            <div className={`${isSidebarExpanded ? "ml-6" : ""}`}>{icon}</div>
            <span
              className={`overflow-hidden transition-all ${
                isSidebarExpanded ? "w-52 ml-6" : "w-0"
              }`}
            >
              {text}
            </span>
            {alert && (
              <div
                className={`absolute right-2 w-2 h-2 rounded bg-[${
                  colors.primary
                }] ${isSidebarExpanded ? "" : "top-2"}`}
              />
            )}
            {!isSidebarExpanded && !isDropDownOpen &&(
              <div
                className={`
                absolute left-full rounded-md px-2 py-1 ml-6
                bg-darkGrey text-white text-sm
                invisible opacity-20 -translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
              `}
              >
                {text}
              </div>
            )}
          </li>
        </Link>
      )}
      {dropdownItems && isDropDownOpen && (
        <ul
          className={`flex flex-col transition-all ${
            isSidebarExpanded ? "ml-12" : "ml-6"
          }`}
        >
          {dropdownItems.map((item) => (
            <li
              key={item.path}
              className={`py-3 ${
                location.pathname.startsWith(item.path)
                  ? "text-white"
                  : "text-[#808D9E]"
              }`}
            >
              <Link
                to={item.path}
                className="flex items-center hover:text-white"
              >
                <span className="mr-4">{item.icon}</span>
                {isSidebarExpanded ?  <div>{item.text}</div>: ''}
               
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
