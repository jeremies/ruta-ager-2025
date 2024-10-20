import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
} from "@mui/material";

export default function TabNavigation() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate("/");
    if (newValue === 1) navigate("/about");
    if (newValue === 2) navigate("/contact");
  };

  return (
    <Toolbar>
      <Box>
        <BottomNavigation
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          showLabels
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction label="Home" />
          <BottomNavigationAction label="About" />
          <BottomNavigationAction label="Contact" />
        </BottomNavigation>
      </Box>
    </Toolbar>
  );
}
