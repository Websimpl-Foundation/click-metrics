import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui";

type SideLinkProps = {
  to: string;
  icon: string;
  label: string;
};

const SideBarLinks = [
  { to: "/", icon: "fa-solid fa-house", label: "Home" },
  {
    to: "/links",
    icon: "fa-solid fa-arrow-up-right-from-square",
    label: "Links",
  },
  { to: "/qr", icon: "fa-solid fa-qrcode", label: "QR Codes" },
  { to: "/link/in/bio", icon: "fa-solid fa-paperclip", label: "Link-in-bio" },
  { to: "/analytics", icon: "fa-solid fa-chart-simple", label: "Analytics" },
  { to: "/campaigns", icon: "fa-solid fa-compass", label: "Campaigns" },
  { to: "/custom/links", icon: "fa-solid fa-link", label: "Custom Links" },
];

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const SideLink = ({ to, icon, label }: SideLinkProps) => (
    <NavLink
      to={to}
      onClick={() => {
        window.innerWidth <= 1024 && setIsSidebarVisible(false);
      }}
      className={({ isActive }) =>
        `px-4 py-3 rounded-md text-sm font-medium flex items-center gap-2 ${
          isActive
            ? "text-[#0c3ebb] bg-[#d7e0f9] hover:bg-[#f4f6fa] border-l-4 border-[#0c3ebb]"
            : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
        }`
      }
    >
      <i className={icon}></i>
      {label}
    </NavLink>
  );

  return (
    <div className="flex fixed top-0 left-0 z-[100] lg:static h-[100svh]">
      {isSidebarVisible && (
        <div
          className="overlay fixed top-[-50vh] left-[-50vw] z-[0] w-[200vw] h-[200vh] block lg:hidden bg-[#00000079] cursor-pointer"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`relative ${
          isSidebarVisible ? "w-64" : "w-16"
        } transition-width duration-300`}
      >
        <button
          onClick={toggleSidebar}
          className={`fixed top-4 ${
            isSidebarVisible ? "left-[15rem]" : "left-[8px]"
          } z-50 bg-white text-black px-3 py-2 mr-4 rounded-full h-auto shadow-md transition-width duration-300`}
        >
          {isSidebarVisible ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>

        {isSidebarVisible && (
          <div className="border-r-[1.5px] border-[#dbe0eb] min-w-[18rem] px-4 fixed top-0 left-0 h-full bg-white pt-6 dark:bg-[#0A192F] dark:text-white">
            <div className="w-full flex justify-center mb-6">
              <span className="text-2xl font-bold text-[#0c3ebb]">
                <a href="/">
                  <img src={"/click-metrics-logo-edited.png"} alt="LOGO" />
                </a>
              </span>
            </div>
            <NavLink
              to="/links"
              className="block w-full mt-4 mb-2"
              onClick={() => {
                window.innerWidth <= 1024 && setIsSidebarVisible(false);
              }}
            >
              <Button className="w-full">Create New</Button>
            </NavLink>

            <hr className="my-4" />

            <div className="flex flex-col gap-3">
              {SideBarLinks.map((link, index) => (
                <SideLink key={index} {...link} />
              ))}
              <hr />
              <SideLink
                to="/settings"
                icon="fa-solid fa-gear"
                label="Settings"
              />
            </div>
          </div>
        )}
      </div>

      <div
        className={`flex-1 ${
          isSidebarVisible ? "ml-8" : "ml-0"
        } transition-margin duration-300`}
      ></div>
    </div>
  );
};

export default Sidebar;
