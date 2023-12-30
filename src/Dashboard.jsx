// I need a jsx component that will render a dashboard
// the dashboard will have a header, a sidebar, and a main content area
// the header will have a logo and a title
// the sidebar will have a list of links
// the main content area will have a list of 7 cards
// each card will represent a day of the week
// each card will have a list of people who are scheduled to work that day
// each card will have a button to add a person to the list
// each card will have a button to remove a person from the list
// each card will have a button to clear the list

import { useState } from "react";

import "./Dashboard.css";

import Grid from "@mui/material/Grid";
import DayCard from "./dayCard/DayCard";
import StaffTable from "./staffTable/StaffTable";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid
        container
        xs={12}
        gap={2}
        sx={{
          justifyContent: "center",
          padding: "30px 0",
        }}
      >
        <DayCard />
        <StaffTable />
      </Grid>
    </>
  );
}

export default Dashboard;
