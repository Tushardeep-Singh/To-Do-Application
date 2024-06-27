// Author: Tushardeep Singh

// Import statements
import { Fragment, useEffect } from "react";
import { Heading } from "./heading";
import { useState } from "react";
import { AddItems } from "./addItems";
import { SearchItems } from "./searchItems";
import { ListItems } from "./listItems";
import { apiRequest } from "./apiRequest";

export const App = () => {
  // URL for storing the list data in JSON file
  const API_URL = "http://localhost:3200/to-do-list";
  // task: value entered by the user in the input field
  const [task, setTask] = useState("");
  // list: stores the values entered by the user
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("to-do-list")) || []
  );
  const [search, setSearch] = useState(null);
  const [editText, setEditText] = useState("");

  // Whenever list changes update it in the localStorage
  useEffect(() => {
    localStorage.setItem("to-do-list", JSON.stringify(list));
  }, [list]);

  // Clears all the data from the JSON file
  const handleClearAll = async (e) => {
    e.preventDefault();
    if (list.length > 0) {
      const size = list.length;
      let TEMP_URL;
      for (let i = 0; i < size; ++i) {
        TEMP_URL = `${API_URL}/${list[i].id}`;
        await apiRequest(TEMP_URL, {
          method: "DELETE",
        });
      }
      setList([]);
    }
  };

  // Adds the item to the list and JSON file
  const handleAddItem = async (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      const newItem = {
        name: task,
        id: crypto.randomUUID(),
        complete: false,
        edit: false,
      };
      const newList = [...list, newItem];
      setList(newList);
      setTask("");

      await apiRequest(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
    }
  };

  // Helps the user to search the item from the list
  const handleSearch = (e) => {
    if (list.length > 0) {
      const value = e.target.value;
      const newList = list.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      console.log(newList);
      setSearch(newList);
    }
  };

  // Deletes the item from the list and JSON file
  const handleDelete = async (id) => {
    const listItems = list.filter((item) => item.id !== id);
    setList(listItems);

    const TEMP_URL = `${API_URL}/${id}`;
    await apiRequest(TEMP_URL, {
      method: "DELETE",
    });
  };

  const handleComplete = async (id) => {
    let bodyItem;
    const newList = list.map((item) => {
      if (item.id === id) {
        bodyItem = { ...item, complete: !item.complete };
        return bodyItem;
      }
      return item;
    });
    setList(newList);

    const TEMP_URL = `${API_URL}/${id}`;
    await apiRequest(TEMP_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...bodyItem }),
    });
  };

  const handleEdit = async (id) => {
    let bodyItem;

    if (editText.trim() !== "") {
      const newList = list.map((item) => {
        if (item.id === id) {
          bodyItem = { ...item, name: editText, edit: false };
          return bodyItem;
        }
        return item;
      });
      setList(newList);
      setEditText("");
    }

    const TEMP_URL = `${API_URL}/${id}`;
    await apiRequest(TEMP_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...bodyItem }),
    });
  };

  const changeEdit = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) return { ...item, edit: !item.edit };
      return item;
    });
    setList(newList);
  };

  return (
    <Fragment>
      <Heading title={"To-Do Application"}></Heading>
      <AddItems
        task={task}
        setTask={setTask}
        handleAddItem={handleAddItem}
        handleClearAll={handleClearAll}
      ></AddItems>
      <SearchItems handleSearch={handleSearch}></SearchItems>
      {search ? (
        <ListItems
          list={search}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handleEdit={handleEdit}
          editText={editText}
          setEditText={setEditText}
          changeEdit={changeEdit}
        ></ListItems>
      ) : (
        <ListItems
          list={list}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handleEdit={handleEdit}
          editText={editText}
          setEditText={setEditText}
          changeEdit={changeEdit}
        ></ListItems>
      )}
    </Fragment>
  );
};
