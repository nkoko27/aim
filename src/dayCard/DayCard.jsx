import "./DayCard.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {
  Table,
  TableCell,
  TableRow,
  Typography,
  TableHead,
  TableBody,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PersonListItem from "../personListItem/PersonListItem";
import { useCallback, useRef, useState } from "react";
import AddButton from "../components/AddButton";

function DayCard() {
  const id = useRef(0);
  const rows = [
    {
      id: id.current++,
      name: "Nick K",
      startTime: "8:00",
      endTime: "5:00",
    },
    {
      id: id.current++,
      name: "Mark K",
      startTime: "8:00",
      endTime: "5:00",
    },
    {
      id: id.current++,
      name: "Dad K",
      startTime: "8:00",
      endTime: "5:00",
    },
  ];

  const [schedule, setSchedule] = useState(rows);

  const handleAddClick = useCallback(() => {
    setSchedule([
      ...schedule,
      {
        id: id.current++,
        name: "Nick K",
        startTime: "8:00",
        endTime: "5:00",
      },
    ]);
  }, [schedule]);

  const handleRemoveClick = useCallback(
    (id) => {
      setSchedule(schedule.filter((person) => person.id !== id));
    },
    [schedule]
  );

  return (
    <>
      <Grid
        container
        className="day-card"
        sx={{
          alignItems: "center",
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          display: "flex",
          flexDirection: "column",
          color: "black",
          maxWidth: "350px",
          minWidth: "315px",
        }}
      >
        <Grid
          item
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h4">Today</Typography>
        </Grid>
        <Grid
          item
          sx={{ paddingBottom: "10px" }}
          xs={12}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>Name</TableCell>
                <TableCell
                  colSpan={2}
                  sx={{ textAlign: "center" }}
                >
                  Schedule
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((person) => (
                <PersonListItem
                  id={person.id}
                  name={person.name}
                  startTime={person.startTime}
                  endTime={person.endTime}
                  handleRemoveClick={handleRemoveClick}
                />
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: "1em",
            height: "10px",
          }}
        >
          <AddButton handleAddClick={handleAddClick} />
        </Grid>
      </Grid>
    </>
  );
}

export default DayCard;
