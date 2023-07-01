import { Image, Navbar as NavbarMantine, NavLink } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { navlinks } from "../constants";
import { useAppState } from "../context";

const Navbar = () => {
  const navigate = useNavigate();
  const { disconnect } = useAppState();
  return (
    <NavbarMantine
      width={{ base: 180 }}
      className="flex flex-col justify-between h-screen"
    >
      <div className="space-y-5 p-5 bg-black">
        {navlinks.map((link) => (
          <div key={link.name} className="flex justify-center">
            <NavLink
              label={link.name}
              disabled={link.disabled}
              onClick={() => {
                if (link.name === "logout") {
                  disconnect && disconnect();
                } else {
                  navigate(link.link);
                }
              }}
              className="rounded-full capitalize"
              icon={<Image src={link.imgUrl} />}
            />
          </div>
        ))}
      </div>
    </NavbarMantine>
  );
};

export default Navbar;
