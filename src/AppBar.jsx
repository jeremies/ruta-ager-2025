import * as React from "react";
import AppBarMui from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EventIcon from "@mui/icons-material/Event";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Icon from "./icon.svg?react";
import "./AppBar.css";

export default function AppBar({ day, setDay }) {
  const [anchorElOptions, setAnchorElOptions] = React.useState(null);
  const optionsOpen = Boolean(anchorElOptions);
  const handleClickOptions = (event) => {
    setAnchorElOptions(event.currentTarget);
  };
  const handleCloseOptions = () => {
    setAnchorElOptions(null);
  };
  const setDayAndClose = (d) => {
    setDay(d);
    handleCloseOptions();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMui position="fixed">
        <Toolbar>
          <Icon className="icon" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ruta del cister 2025 {day !== 4 && `- Dia ${day}`}
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
            <MenuItem onClick={() => setDayAndClose(1)}> Dia 1</MenuItem>
            <MenuItem onClick={() => setDayAndClose(2)}> Dia 2</MenuItem>
            <MenuItem onClick={() => setDayAndClose(3)}> Dia 3</MenuItem>
            <MenuItem onClick={() => setDayAndClose(4)}>Annex</MenuItem>
          </Menu>
        </Toolbar>
      </AppBarMui>
    </Box>
  );
}
