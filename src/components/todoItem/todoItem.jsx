import React from "react";
import Box from "@mui/system/Box";
import Switcher from "../switcher/switcher";

import "./todoItem.css";

const TodoItem = ({
  status,
  header,
  desc,
  completed,
  disabled,
  id,
  setList,
}) => {
  const handleChange = (event) => {
    setList((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, completed: event.target.checked } : item
      )
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: 46,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="item-group">
        <div className={`status ${status}`} />
        <div className="text-block">
          <span className={`item-header ${completed && "completed"}`}>
            {header}
          </span>
          {desc && <div className="description">{desc}</div>}
        </div>
      </div>
      <Switcher
        checked={completed}
        onChange={handleChange}
        sx={{ m: 1 }}
        defaultChecked
        disabled={Boolean(disabled)}
      />
    </Box>
  );
};

export default TodoItem;
