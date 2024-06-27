// Author: Tushardeep Singh

// Import statements
import { Fragment } from "react";
import "./listItems.css";
import { Item } from "./Item.js";

export const ListItems = ({
  handleEdit,
  list,
  handleDelete,
  handleComplete,
  editText,
  setEditText,
  changeEdit,
}) => {
  return (
    <Fragment>
      <ul className="listItemsUL">
        {list.map((item) => {
          return (
            <>
              <Item
                item={item}
                handleDelete={handleDelete}
                handleComplete={handleComplete}
                handleEdit={handleEdit}
                editText={editText}
                setEditText={setEditText}
                changeEdit={changeEdit}
              ></Item>
            </>
          );
        })}
      </ul>
    </Fragment>
  );
};
