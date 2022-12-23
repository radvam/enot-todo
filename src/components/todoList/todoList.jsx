import React from "react";
import Box from "@mui/system/Box";

import TodoItem from "../todoItem/todoItem";

const TodoList = ({ list, setList }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      backgroundColor: "#282828",
      boxShadow:
        "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)",
      borderRadius: "40px",
      gap: "20px",
    }}
  >
    {list.length > 0 &&
      list.map(({ id, status, header, desc, completed, disabled }) => (
        <TodoItem
          key={id}
          id={id}
          status={status}
          header={header}
          desc={desc}
          completed={completed}
          disabled={disabled}
          setList={setList}
        />
      ))}
  </Box>
);

export default TodoList;
