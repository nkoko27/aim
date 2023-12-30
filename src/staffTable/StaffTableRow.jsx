import { TableCell, TableRow, Button } from "@mui/material";
import RemoveButton from "../components/removeButton";

export default function StaffTableRow(props) {
  const {
    name,
    role,
    availability,
    phoneNumber,
    email,
    handleRemoveClick,
    id,
  } = props;
  return (
    <TableRow sx={{ height: "80px" }}>
      <TableCell>{name}</TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>{availability}</TableCell>
      <TableCell>{phoneNumber}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>
        <RemoveButton
          handleRemoveClick={handleRemoveClick}
          id={id}
        />
      </TableCell>
    </TableRow>
  );
}
