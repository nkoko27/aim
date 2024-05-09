import Button from "@mui/material/Button";
import { TableRow, Typography, TableCell, Box } from "@mui/material";
import { useState } from "react";
import RemoveButton from "../components/removeButton";
import EditButton from "../components/EditButton";

export default function PersonListItem(props) {
  const { name, startTime, endTime, handleRemoveClick, id } = props;
  const [nameHover, setNameHover] = useState(false);
  const [timeHover, setTimeHover] = useState(false);

  return (
    <>
      <TableRow sx={{ height: "70px" }}>
        <TableCell
          id="nameCell"
          className="name-cell"
        >
          <Box
            sx={{ margin: 0, padding: 0 }}
            onMouseEnter={() => setNameHover(true)}
            onMouseLeave={() => setNameHover(false)}
          >
            <Typography
              variant="body1"
              sx={{ display: `${nameHover && "none"}`, whiteSpace: "nowrap" }}
            >
              {name}
            </Typography>
            <EditButton display={nameHover} />
          </Box>
        </TableCell>
        <TableCell
          id="scheduleCell"
          colSpan={2}
          // sx={{ textAlign: "center" }}
        >
          <Box
            sx={{ margin: 0, padding: 0 }}
            onMouseEnter={() => setTimeHover(true)}
            onMouseLeave={() => setTimeHover(false)}
          >
            <Typography
              variant="body1"
              sx={{
                display: `${timeHover && "none"}`,
                // fontSize: "1em",
                // lineHeight: "1.5",
                whiteSpace: "nowrap",
              }}
            >
              {`${startTime}am - ${endTime}pm`}
            </Typography>
            <EditButton display={timeHover} />
          </Box>
        </TableCell>
        <TableCell
          id="removeCell"
          // sx={{ textAlign: "center" }}
        >
          <RemoveButton
            handleRemoveClick={handleRemoveClick}
            id={id}
          />
        </TableCell>
      </TableRow>
    </>
  );
}
