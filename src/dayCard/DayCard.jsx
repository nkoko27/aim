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
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "30px",
              color: "#35363A",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              component={"h1"}
              sx={{
                paddingBottom: "20px",
                paddingLeft: "30px",
                alignSelf: "flex-start",
              }}
            >
              Today
            </Typography>
            <CardContent
              sx={{
                border: "1px solid #35363A",
                borderRadius: "10px",
                width: "95%",
                display: "flex",
                flexDirection: "column",
              }}
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  paddingTop: "10px",
                  paddingRight: "53.5px",
                  height: "40px",
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
      </Grid>
    </>
  );
}

export default DayCard;
