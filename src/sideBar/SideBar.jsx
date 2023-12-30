import { Drawer, Stack, Box, Divider, Link } from "@mui/material";

function Sidebar(props) {
  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={props.onClose}
      sx={{ width: "250px", padding: "20px" }}
      PaperProps={{ width: "250px" }}
    >
      <Stack
        spacing={1.5}
        divider={
          <Divider
            orientation="horizontal"
            flexItem
          />
        }
        sx={{ width: "200px", padding: "50px" }}
      >
        <Box>
          <Link
            href="#"
            underline="none"
          >
            Home
          </Link>
        </Box>
        <Box>
          <Link underline="none">Schedule</Link>
        </Box>
        <Box>
          <Link underline="none">Staff</Link>
        </Box>
        <Box>
          <Link underline="none">Roles</Link>
        </Box>
        <Box>
          <Link underline="none">Logout</Link>
        </Box>
        <Box />
      </Stack>
    </Drawer>
  );
}

export default Sidebar;
