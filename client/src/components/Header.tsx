import {
  ActionIcon,
  Avatar,
  Header as HeaderMantine,
  TextInput,
} from "@mantine/core";
import { Button, Input } from "@geist-ui/core";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ologo, thirdweb } from "../assets";
import { useAppState } from "../context";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const { address, connect } = useAppState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <HeaderMantine
      style={{ background: "#000", color: "#fff" }}
      height={60}
      p="xs"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={ologo} alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="flex items-center space-x-5">
          
          <Input
            labelRight="🔍"
            placeholder="Search..."
            value=""
            onChange={(e) => {}}
          />

          <Button
            loading={isLoading}
            onClick={async () => {
              if (address) {
                navigate("/create-campaign");
              } else {
                setIsLoading(true);
                if (connect) await connect();
                setIsLoading(false);
              }
            }}
          >
            {address ? `Create a Campaign` : `Connect`}
          </Button>

          <Link to="/profile">
            <Avatar
              src={null}
              alt="Profile"
              radius="xl"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </Link>
        </div>
      </div>
    </HeaderMantine>
  );
};

export default Header;
