import { Image, Navbar as NavbarMantine, NavLink } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { navlinks } from "../constants";
import { useAppState } from "../context";
import { Grid, Card } from "@geist-ui/core";
import { useState } from "react";
import { useContext } from "react";
import useButtonContext from "../context/buttonContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { disconnect } = useAppState();
  const buttonToggle = useButtonContext((state) => state.togglePage)
  const value = useButtonContext((state) => state.value)
  console.log(buttonToggle,value)

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
                buttonToggle(link.name)
                if (link.name === "logout") {
                  disconnect && disconnect();
                } else {
                  navigate(link.link);
                }
              }}
              // className="rounded-full capitalize"
              className={`bg-gray-200 capitalize  ${link.name === value? 'font-extrabold' : ''}`}
              icon={<Image src={link.imgUrl} />}
            />
          </div>
        ))}
      </div>
    </NavbarMantine>
  );
};

export default Navbar;
