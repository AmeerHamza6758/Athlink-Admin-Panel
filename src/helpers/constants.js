import { HiMiniSquares2X2 } from 'react-icons/hi2';
import { FaUsers } from 'react-icons/fa';
import { MdEmojiEvents } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { IoMdLogOut } from 'react-icons/io';
import { TbPrompt } from 'react-icons/tb';
import { MdInterests } from 'react-icons/md';
import { IoLanguageSharp } from 'react-icons/io5';
import { BiWorld } from 'react-icons/bi';
import { BsDatabaseFillAdd } from "react-icons/bs";
import { LiaCitySolid } from "react-icons/lia";
import { FaTags } from "react-icons/fa";


export const colors = {
  primary: "#E2383A",
  secondary: "#132945"
};

export const sidebarData = [
  {
    text: "Dashboard",
    path: "/",
    icon: <HiMiniSquares2X2 size={20} />,
  },
  { text: "Users", path: "/users", icon: <FaUsers size={20} /> },
  { text: "Events", path: "/events", icon: <MdEmojiEvents size={20} /> },
  { text: "Data Management", icon: <BsDatabaseFillAdd size={20} />},
  { text: "Profile", path: "/dashboard/profile", icon: <FaUser size={20} /> },
  { text: "Manage CMS", path: "/dashboard/managecms", icon: <FaTags size={20} />},
  { text: "Logout", path: "/login", icon: <IoMdLogOut size={20} />},
];

export const dropdownItems = [
  { text: "Prompts", path: "/datamanagemet/prompts", icon: <TbPrompt size={20} /> },
  { text: "Interests", path: "/datamanagemet/interest", icon: <MdInterests size={20} />},
  { text: "Language", path: "/datamanagemet/language", icon: <IoLanguageSharp size={20} /> },
  { text: "Country", path: "/datamanagemet/countries", icon: <BiWorld size={20} />},
  { text: "Cities", path: "/datamanagemet/cities", icon: <LiaCitySolid size={20} />},

];
