import { useState } from "react";

import "./Dashboard.css";

import Grid from "@mui/material/Grid";
import DayCard from "./dayCard/DayCard";
import StaffTable from "./staffTable/StaffTable";
import Sidebar from "./sideBar/SideBar";
import Header from "./header/Header";
import { Toolbar } from "@mui/material";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Grid
        container
        xs={12}
        gap={2}
        sx={{
          justifyContent: "center",
          padding: "30px 0",
        }}
      >
        <Grid
          item
          xs={3}
        >
          <Sidebar />
        </Grid>
        <Grid
          item
          xs={8}
          direction="column"
        >
          <Toolbar />
          <Grid
            direction="row"
            container
          >
            <Grid
              xs={6}
              item
            >
              <DayCard />
            </Grid>
            <Grid
              xs={6}
              item
            >
              <DayCard />
            </Grid>
          </Grid>
          <StaffTable />
          <StaffTable />
          <StaffTable />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
