import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function AddButton(props) {
  const { handleAddClick } = props;
  return (
    <Button
      variant="text"
      sx={{
        border: "none",
        "&:hover": {
          padding: "6px",
          border: "solid 1px",
          boxShadow: "-2px 2px",
        },
        "&:focus": {
          outline: "none",
          boxShadow: "none",
        },
        "&:active": {
          border: "solid 1px",
          boxShadow: "-2px 2px",
        },
      }}
      onClick={handleAddClick}
    >
      <AddCircleOutlineIcon />
    </Button>
  );
}
