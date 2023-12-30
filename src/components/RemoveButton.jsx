import Button from "@mui/material/Button";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function RemoveButton(props) {
  const { handleRemoveClick, id } = props;
  return (
    <Button
      variant="text"
      sx={{
        heigth: "80%",
        minWidth: "0px",
        padding: "5px",
        border: "none",
        "&:hover": {
          border: "solid 1px",
          boxShadow: "-2px 2px",
        },
        "&:focus": {
          outline: "none",
          boxShadow: "none",
        },
      }}
      onClick={() => handleRemoveClick(id)}
    >
      <RemoveCircleOutlineIcon />
    </Button>
  );
}
