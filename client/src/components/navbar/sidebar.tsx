import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex">
      <div
        className={`relative ${
          isSidebarVisible ? "w-64" : "w-16"
        } transition-width duration-300`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-[-2rem] z-50  text-black px-3 py-2 mr-4 rounded-full h-auto shadow-md"
        >
          {isSidebarVisible ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>

        {isSidebarVisible && (
          <div className="border-r-[1.5px] border-[#dbe0eb] min-w-[18rem] px-4 sticky top-0 left-0 h-full ">
            <div className="w-full flex justify-center my-6">
              <span className="text-2xl font-bold text-[#0c3ebb]">
                <a href="/">
                  <img src={"/click-metrics-logo-edited.png"} alt="LOGO" />
                </a>
              </span>
            </div>
            <a href="/links" className="block w-full mt-4 mb-2">
              <Button className="w-full">Create New</Button>
            </a>

            <hr className="my-4" />
            <div className="flex flex-col gap-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${
                    isActive
                      ? "text-[#0c3ebb] hover:bg-[#f4f6fa] border-l-4 border-[#0c3ebb]"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <i className="fa-solid fa-house"></i>
                Home
              </NavLink>
              <NavLink
                to="/links"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${
                    isActive
                      ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] border-l-4 border-[#0c3ebb]"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                Links
              </NavLink>
              <NavLink
                to="/qr"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${
                    isActive
                      ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] border-l-4 border-[#0c3ebb]"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <i className="fa-solid fa-qrcode"></i>
                QR Codes
              </NavLink>
              <NavLink
                to="/link/in/bio"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${
                    isActive
                      ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] border-l-4 border-[#0c3ebb]"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <i className="fa-solid fa-paperclip"></i>
                Link-in-bio
              </NavLink>
              <NavLink
                to="/analytics"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${
                    isActive
                      ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] border-l-4 border-[#0c3ebb]"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <i className="fa-solid fa-chart-simple"></i>
                Analytics
              </NavLink>
              <NavLink
                to="/campaigns"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${
                    isActive
                      ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] border-l-4 border-[#0c3ebb]"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <i className="fa-solid fa-compass"></i>
                Campaigns
              </NavLink>
              <NavLink
                to="/custom/links"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${
                    isActive
                      ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] border-l-4 border-[#0c3ebb]"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <i className="fa-solid fa-link"></i>
                Custom Links
              </NavLink>
              <hr />
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${
                    isActive
                      ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] border-l-4 border-[#0c3ebb]"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <i className="fa-solid fa-gear"></i>
                Settings
              </NavLink>
            </div>
          </div>
        )}
      </div>
      <div
        className={`flex-1 ${
          isSidebarVisible ? "ml-10" : "ml-16"
        } transition-margin duration-300`}
      >
      </div>
    </div>
  );
};

export default Sidebar;
