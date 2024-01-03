import Button from "@mui/material/Button";
import { TableRow, Typography, TableCell, Box } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useState } from "react";
import RemoveButton from "../components/removeButton";

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
          sx={{ padding: "8px", textAlign: "center" }}
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
            <Button
              name="changeNameButton"
              sx={{
                display: `${!nameHover && "none"}`,
                margin: 0,
                padding: "2px",
                fontSize: ".75em",
                fontWeight: "bold",
                border: "solid 1px",
                "&:hover": {
                  border: "solid 1px",
                  boxShadow: "-2px 2px",
                },
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
            >
              CHANGE NURSE
            </Button>
          </Box>
        </TableCell>
        <TableCell
          id="scheduleCell"
          colSpan={2}
          sx={{ textAlign: "center" }}
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
                fontSize: "1em",
                lineHeight: "1.5",
                whiteSpace: "nowrap",
              }}
            >
              {`${startTime}am - ${endTime}pm`}
            </Typography>
            <Button
              name="editTimeButton"
              sx={{
                display: `${!timeHover && "none"}`,
                margin: 0,
                width: "100%",
                fontSize: ".9em",
                lineHeight: "1.5",
                fontWeight: "bold",
                border: "solid 1px",
                "&:hover": {
                  border: "solid 1px",
                  boxShadow: "-2px 2px",
                },
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
            >
              EDIT TIME
            </Button>
          </Box>
        </TableCell>
        <TableCell
          id="removeCell"
          sx={{ textAlign: "center" }}
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
