import { Image, Navbar as NavbarMantine, NavLink } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { navlinks } from "../constants";
import { useAppState } from "../context";
import { Grid, Card } from "@geist-ui/core";

const Navbar = () => {
  const navigate = useNavigate();
  const { disconnect } = useAppState();
  return (
    <NavbarMantine
      // width={{ base: 200}}
      className="flex flex-col justify-between"
    >
      <div>
        {/* <NavbarMantine.Section className="space-y-5 p-5">
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
        </NavbarMantine.Section> */}

        <Grid.Container gap={2} justify="left">
          <Grid xs={4}>
            <Card shadow width="100%" height="900px">
              {navlinks.map((link) => (
                <div key={link.name} className="flex justify-left my-4">
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
                    className="rounded-lg capitalize"
                    icon={<Image src={link.imgUrl} />}
                  />
                  
                </div>
              ))}
            </Card>
          </Grid>
        </Grid.Container>
      </div>

      {/* <NavbarMantine.Section>
        <div className="flex justify-center ">
          <img src={sun} className="p-5" />
        </div>
      </NavbarMantine.Section> */}
    </NavbarMantine>
  );
};

export default Navbar;
