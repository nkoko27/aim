import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import {
  Table,
  TableCell,
  TableRow,
  Typography,
  TableHead,
  CardContent,
  CardHeader,
  TableBody,
  Button,
  Box,
} from "@mui/material";
import { useCallback, useRef, useState } from "react";
import StaffTableRow from "./StaffTableRow";
import AddButton from "../components/AddButton";

export default function StaffTable(props) {
  const id = useRef(0);
  const staff = [
    {
      id: id.current++,
      name: "John Doe",
      role: "Manager",
      availability: ["Monday", "Tuesday"],
      phoneNumber: "123-456-7890",
      email: "JohnDoe@mail.com",
    },
    {
      id: id.current++,
      name: "John Doe",
      role: "Manager",
      availability: ["Monday"],
      phoneNumber: "123-456-7890",
      email: "JohnDoe@mail.com",
    },
    {
      id: id.current++,
      name: "John Doe",
      role: "Manager",
      availability: ["Monday"],
      phoneNumber: "123-456-7890",
      email: "JohnDoe@mail.com",
    },
  ];

  const [staffList, setStaffList] = useState(staff);

  const handleAddClick = useCallback(() => {
    setStaffList([
      ...staffList,
      {
        id: id.current++,
        name: "Nick K",
        role: "Bus Boy",
        availability: ["Friday"],
        phoneNumber: "123-456-7890",
        email: "nk@mail.com",
      },
    ]);
  }, [staffList]);

  const handleRemoveClick = useCallback(
    (id) => {
      console.log("hey");
      setStaffList(staffList.filter((staff) => staff.id !== id));
    },
    [staffList]
  );

  console.log(staffList);

  return (
    <Grid
      container
      xs={12}
    >
      <Grid
        item
        xs={12}
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
            Staff
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
                  <TableCell>Name</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Availability</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {staffList.map((staff) => (
                  <StaffTableRow
                    name={staff.name}
                    role={staff.role}
                    availability={staff.availability}
                    phoneNumber={staff.phoneNumber}
                    email={staff.email}
                    handleRemoveClick={handleRemoveClick}
                    id={staff.id}
                  />
                ))}
              </TableBody>
            </Table>
            <Box
              sx={{
                paddingTop: "10px",
                paddingRight: "53.5px",
                height: "40px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <AddButton handleAddClick={handleAddClick} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
