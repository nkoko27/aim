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
  Card,
  CardContent,
  Box,
  CardHeader,
} from "@mui/material";
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
        xs={12}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "30px",
            color: "#35363A",
            // alignItems: "center",
          }}
        >
          <CardHeader title={"Today"} />
          <CardContent
            sx={{
              border: "1px solid #35363A",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell
                    colSpan={2}
                    // sx={{ textAlign: "center" }}
                  >
                    Schedule
                  </TableCell>
                  <TableCell>Actions</TableCell>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingTop: "10px",
                paddingRight: "13.5px",
                height: "30px",
              }}
            >
              <AddButton
                handle
                AddClick={handleAddClick}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default DayCard;
