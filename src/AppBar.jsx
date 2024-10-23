import * as React from "react";
import AppBarMui from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EventIcon from "@mui/icons-material/Event";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function AppBar({ day, setDay }) {
  const [anchorElOptions, setAnchorElOptions] = React.useState(null);
  const optionsOpen = Boolean(anchorElOptions);
  const handleClickOptions = (event) => {
    setAnchorElOptions(event.currentTarget);
  };
  const handleCloseOptions = () => {
    setAnchorElOptions(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMui position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ruta del cister 2024 - Dia {day}
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleClickOptions}
          >
            <EventIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElOptions}
            open={optionsOpen}
            onClose={handleCloseOptions}
          >
            <MenuItem onClick={() => setDay(1)}> Dia 1</MenuItem>
            <MenuItem onClick={() => setDay(2)}> Dia 2</MenuItem>
            <MenuItem onClick={() => setDay(3)}> Dia 3</MenuItem>
          </Menu>
        </Toolbar>
      </AppBarMui>
    </Box>
  );
}
