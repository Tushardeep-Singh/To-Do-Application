// Author: Tushardeep Singh

// Import statements
import { Fragment } from "react";
import "./addForm.css";

export const AddForm = ({ handleAddItem, setTask, task, handleClearAll }) => {
  return (
    <Fragment>
      {/* Form for adding items */}
      <form className="addForm" onSubmit={(e) => handleAddItem(e)}>
        <label id="addInput" className="addForm-label">
          Add Item:{" "}
          <input
            type="text"
            placeholder="add item"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            autoFocus
            name="addInput"
            className="addForm-input"
          />
          <button
            type="submit"
            className="addForm-btn"
            onClick={(e) => handleAddItem(e)}
          >
            Add
          </button>
          <button
            type="delete"
            className="addForm-btn"
            onClick={(e) => handleClearAll(e)}
          >
            Clear All
          </button>
        </label>
      </form>
    </Fragment>
  );
};
