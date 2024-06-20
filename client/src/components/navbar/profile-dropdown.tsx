import { Avatar, AvatarFallback, Button } from "../ui/index";
import { useNavigate } from "react-router-dom";

interface ProfileDropdownLinkProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const ProfileDropDownLink = ({
    onClick,
    text,
    className,
  }: ProfileDropdownLinkProps) => {
    return (
      <div
        className={`${className} h-10 py-2 underline-offset-4 hover:underline cursor-pointer`}
        onClick={onClick}
      >
        {text}
      </div>
    );
  };

  const handleHelpClick = () => {
    navigate("/help"); // Navigate to /help page
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <>
      <div className="absolute right-0 top-full w-64 flex gap-4 flex-col justify-around py-6 px-8 bg-white border-2 border-gray-300 shadow-md rounded-md cursor-default">
        <div className="flex flex-col h-42 gap-4 items-center">
          <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback>
              {user.displayName ? user.displayName[0] : "U"}
            </AvatarFallback>
          </Avatar>
          <h1 className="font-bold">{user.displayName || user.email}</h1>
        </div>
        <div className="flex flex-col font-bold">
          <ProfileDropDownLink
            text="Unlock Premium"
            className="text-green-700"
            onClick={() => alert("Placeholder")}
          />
          <ProfileDropDownLink
            text="View Profile"
            className="text-primary"
            onClick={() => alert("Profile page still needs to be implemented.")}
          />
          <ProfileDropDownLink
            text="Settings"
            className="text-primary"
            onClick={() =>
              alert("Settings page still needs to be implemented.")
            }
          />
          <ProfileDropDownLink
            text="Help"
            className="text-primary"
            onClick={handleHelpClick}
          />
        </div>
        <Button variant="destructive" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
};

export default ProfileDropdown;
