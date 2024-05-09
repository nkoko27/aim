import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function EditButton(props) {
  const { display } = props;
  return (
    <Button
      name="changeNameButton"
      sx={{
        display: `${!display && "none"}`,
        width: "100%",
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
      <EditIcon fontSize="small" />
    </Button>
  );
}
