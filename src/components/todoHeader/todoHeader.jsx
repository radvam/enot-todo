import React from "react";
import Box from "@mui/system/Box";
import Settings from "../settings/settings";

import "./todoHeader.css";

const TodoHeader = () => (
  <Box
    sx={{
      maxHeight: 46,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: "20px",
      paddingRight: "20px",
    }}
  >
    <div className="header">To Do</div>
    <Settings />
  </Box>
);

export default TodoHeader;
