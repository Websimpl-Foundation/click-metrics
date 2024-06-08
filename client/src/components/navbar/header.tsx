import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Search, Button, Avatar, AvatarFallback } from "../ui/index";
import ProfileDropdown from "./profile-dropdown";

const Header = () => {
  const [dropDownIsActive, setDropdownIsActive] = useState<boolean>(false);
  const [user, setUser] = useState<{ email?: string; displayName?: string }>(
    {}
  );

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storedUser);
  }, []);

  const closeProfileDropdown = () => {
    setDropdownIsActive(false);
  };

  return (
    <>
      <div className="w-full">
        <div className="pt-4 pb-3 px-4 border-b-[1.5px] border-[#dbe0eb] bg-white sticky top-0 z-10">
          <nav className="flex justify-end ml-12 md:ml-0 gap-3 md:gap-6 items-center">
            <Search />

            <Button className="cursor-pointer bg-green-700 hover:bg-green-800">
              Upgrade
            </Button>

            <div
              onClick={() => setDropdownIsActive(!dropDownIsActive)}
              onMouseLeave={closeProfileDropdown}
              className={`flex gap-4 items-center cursor-pointer hover:bg-[#f4f6fa] ${
                dropDownIsActive ? "bg-[#f4f6fa]" : ""
              } py-[0.2rem] px-0 md:px-4 rounded-md relative`}
            >
              <Avatar>
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback>
                  {user.displayName ? user.displayName[0] : "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex gap-2">
                <h1>{user.displayName || user.email}</h1>
                <i className="fa-solid fa-sort-down"></i>
              </div>

              {dropDownIsActive ? <ProfileDropdown /> : <> </>}
            </div>
          </nav>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
