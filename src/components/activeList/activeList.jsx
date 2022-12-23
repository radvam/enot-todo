import React, { useState, useMemo } from "react";
import Checkbox from "@mui/material/Checkbox";
import TodoList from "../todoList/todoList";

import "./activeList.css";

const ActiveList = ({ date, list }) => {
  const [values, setList] = useState(list);

  const isTasksDone = useMemo(
    () => values.every(({ completed }) => completed),
    [values]
  );
  return (
    <div>
      <div className={"subheader"}>
        <Checkbox
          checked={isTasksDone}
          defaultChecked
          size="middle"
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "green",
            },
            width: "50px",
            height: "50px",
            "& .MuiSvgIcon-root": { fontSize: 29 },
          }}
        />
        <div className={isTasksDone ? "completed" : ""}>{`${date} Tasks:`}</div>
      </div>
      <TodoList list={values} setList={setList} />
    </div>
  );
};

export default ActiveList;
