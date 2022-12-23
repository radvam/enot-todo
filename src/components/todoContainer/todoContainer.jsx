import React, { useContext } from "react";
import TodoHeader from "../todoHeader/todoHeader";
import ActiveList from "../activeList/activeList";
import CustomizedAccordions from "../accordion/accordion";
import data from "../../assets/data/data";
import NewsBlock from "../newsBlock/newsBlock";
import { Context } from "../../Context";

import "./todoContainer.css";

const TodoContainer = () => {
  const { news } = useContext(Context);

  return (
    <div className="todo-container">
      <TodoHeader />

      {data.length > 0 &&
        data.map(({ date, list, id }, ixdex) => {
          if (ixdex === 0) {
            return <ActiveList key={id} date={date} list={list} />;
          } else {
            return <CustomizedAccordions key={id} date={date} list={list} />;
          }
        })}
      {news && <NewsBlock />}
    </div>
  );
};

export default TodoContainer;
