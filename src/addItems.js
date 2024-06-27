// Author: Tushardeep Singh

// Import statements
import { Fragment } from "react";
import "./addItems.css";
import { AddForm } from "./addForm";

export const AddItems = ({task, setTask, handleAddItem, handleClearAll}) => {
  return (
    <Fragment>
      {/* Form for adding items */}
      <AddForm handleAddItem={handleAddItem} setTask={setTask} task={task} handleClearAll={handleClearAll}></AddForm>
    </Fragment>
  )
}