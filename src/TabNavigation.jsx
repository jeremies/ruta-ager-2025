import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab, Box } from "@mui/material";

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
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Contact" />
      </Tabs>
    </Box>
  );
}
