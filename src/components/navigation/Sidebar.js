import { useSelector } from "react-redux";
import logo from "../../assets/images/logoDark.svg";

export default function Sidebar({ children }) {
  const { isSidebarExpanded } = useSelector((state) => state.user);

  return (
    <aside
      className={`h-screen ${isSidebarExpanded ? " w-64" : "w-20"}`}
      style={{
       backgroundColor:'#1C1C27'
      }}
    >
      <nav className="h-full flex flex-col bg-transparent border-r shadow-sm">
        <div className="p-4 pb-4 flex justify-between items-center">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${
              isSidebarExpanded ? "w-32" : "w-12"
            } mx-auto`}
            alt="Logo"
          />
        </div>

        <ul className="flex-1">{children}</ul>
      </nav>
    </aside>
  );
}
