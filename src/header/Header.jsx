import { useState } from "react";

import "./Header.css";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Button, Toolbar } from "@mui/material";
import Sidebar from "../sideBar/SideBar";

function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleMenuClick = () => {
    setSideBarOpen(!sideBarOpen);
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#535bf3",
          height: "100px",
          display: "flex",
          alignItems: "center",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          {/* <Grid
            item
            xs={1}
          >
            <Button
              onClick={handleMenuClick}
              variant="text"
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </Button>
          </Grid> */}
          <Grid
            item
            xs={10}
            sx={{ paddingBottom: "10px" }}
          >
            <Typography
              sx={{ color: "white" }}
              variant="h1"
              noWrap
              // component="div"
            >
              Aim
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
