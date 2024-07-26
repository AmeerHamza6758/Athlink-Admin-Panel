import React from 'react';
import Sidebar from '../navigation/Sidebar';
import Navbar from '../navigation/Navbar';
import { SidebarItem } from '../navigation/SidebarItem';
import { sidebarData, dropdownItems } from '../../helpers/constants';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="h-screen">
      <div className="flex flex-row-reverse h-full overflow-hidden">
        <div className="w-full h-full">
          <Navbar />
          <main className="bg-[#E2E8F0] w-full h-[calc(100%-80px)] overflow-y-auto pb-4">
            {children}
          </main>
        </div>
        <Sidebar>
          {sidebarData.map((element, index) => {
            const isActive =
              element.path === '/'
                ? location.pathname === '/' || location.pathname.includes('/dashboard')
                : location.pathname.startsWith(element.path);

            return (
              <SidebarItem
                key={index}
                icon={element.icon}
                text={element.text}
                active={isActive}
                link={element.path}
                dropdownItems={element.text === 'Data Management' ? dropdownItems : null}
              />
            );
          })}
        </Sidebar>
      </div>
    </div>
  );
};

export default Layout;
