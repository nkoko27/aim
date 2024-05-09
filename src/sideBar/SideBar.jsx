import {
  Drawer,
  Stack,
  Box,
  Divider,
  Link,
  Toolbar,
  CardContent,
  Card,
} from "@mui/material";

function Sidebar(props) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { boxSizing: "border-box" },
        border: "none !important",
      }}
    >
      <Toolbar />
      <Card sx={{ boxShadow: "none" }}>
        <CardContent sx={{ border: "none" }}>
          <Stack
            spacing={1.5}
            divider={
              <Divider
                orientation="horizontal"
                flexItem
              />
            }
            sx={{ padding: "50px" }}
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
        </CardContent>
      </Card>
    </Drawer>
  );
}

export default Sidebar;
