import React, { useState } from "react";
import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import "./App.css";
import TodoList from "./components/TodoList.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import { TodoItemsContext } from "./store/todo-item-store.jsx";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const addNewItems = (itemName, itemDueDate) => {
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, date: itemDueDate },
    ]);
  };

  const deleteItems = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItem);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItems,
        deleteItems,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoList></TodoList>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
