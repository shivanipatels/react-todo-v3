import React, { useContext } from "react";
import styles from "../style/WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-item-store";

function WelcomeMessage() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.length === 0 && (
        <p className={styles.welcomeMessage}>Enjoy Your Day</p>
      )}
    </>
  );
}

export default WelcomeMessage;
