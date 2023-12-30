import { useState } from "react";

import "./Header.css";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import Sidebar from "../sideBar/SideBar";

function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleMenuClick = () => {
    setSideBarOpen(!sideBarOpen);
  };
  return (
    <>
      <Grid
        container
        className="header"
        sx={{
          backgroundColor: "#535bf3",
          height: "100px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Grid
          item
          xs={1}
        >
          <Button
            onClick={handleMenuClick}
            variant="text"
            sx={{ color: "white" }}
          >
            <MenuIcon />
            <Sidebar
              open={sideBarOpen}
              onClose={setSideBarOpen}
            />
          </Button>
        </Grid>
        <Grid
          item
          xs={10}
          sx={{ paddingBottom: "10px" }}
        >
          <Typography
            sx={{ color: "white" }}
            variant="h3"
          >
            Scheduling App
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
