import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import SettingsIcon from "@mui/icons-material/Settings";
import Divider from "@mui/material/Divider";
import Switcher from "../switcher/switcher";
import { Context } from "../../Context";

import "./settings.css";

const Settings = () => {
  const { news, setNews } = useContext(Context);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const handleChange = (event) => {
    setNews(event.target.checked);
  };

  const SettingsBlock = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <div className={"settingsBlockHeader text"}>{"Settings"}</div>
      <Divider />
      <ListItem>
        <Switcher
          checked={news}
          onChange={handleChange}
          sx={{ m: 1 }}
          defaultChecked
        />
        <div className={"enableNewsLabel text"}>{"Add news block"}</div>
      </ListItem>
    </Box>
  );

  return (
    <>
      <SettingsIcon
        fontSize="large"
        onClick={toggleDrawer(true)}
        sx={{ cursor: "pointer" }}
      />
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <SettingsBlock />
      </Drawer>
    </>
  );
};

export default Settings;
