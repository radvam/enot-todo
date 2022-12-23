import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import TodoList from "../todoList/todoList";

import "./accordion.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: "25px",
  "&:before": {
    display: "none",
  },
  border: "none",
  backgroundColor: "#282828",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ExpandCircleDownIcon sx={{ fontSize: "1.2em", color: "#F4F4F4" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  color: "#F4F4F4",
  backgroundColor: "#282828",
  boxShadow:
    "16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)",
  borderRadius: "25px",
  height: "79px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(0.5),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const CustomizedAccordions = ({ date, list }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="item-group">
            <div className={"status"} />
            <div className="text-block">
              <span className={"item-header"}>{`${date} Tasks`}</span>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <TodoList list={list} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomizedAccordions;
