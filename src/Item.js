// Author: Tushardeep Singh

// Import statements
import { Fragment } from "react";
import "./Item.css";

export const Item = ({
  handleEdit,
  item,
  handleDelete,
  handleComplete,
  editText,
  setEditText,
  changeEdit,
}) => {
  return (
    <Fragment>
      {!item.edit ? (
        <li className="item">
          {item.complete ? item.name + " ✅" : item.name}
          <button
            className="item-compBtm"
            onClick={() => handleComplete(item.id)}
          >
            {item.complete ? "incomplete" : "complete"}
          </button>
          <button
            className="item-deleteBtn"
            onClick={() => handleDelete(item.id)}
          >
            delete
          </button>
          <button
            className="item-editBtn"
            onClick={() => {
              setEditText(item.name);
              changeEdit(item.id);
            }}
          >
            Edit
          </button>
        </li>
      ) : (
        <li className="item">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="item-editInput"
            placeholder={item.name}
            autoFocus
          />
          <button className="item-saveBtn" onClick={() => handleEdit(item.id)}>
            Save
          </button>
        </li>
      )}
    </Fragment>
  );
};
