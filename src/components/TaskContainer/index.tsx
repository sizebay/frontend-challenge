import React from "react";
import { TaskContext } from "../../contexts/TaskContext";
import TaskItem from "../TaskItem";
import { Message, Container } from "./styles";

function TaskContainer() {
  const { taskItems, statusFilter, textFilter, clearFilters } =
    React.useContext(TaskContext);

  const items = taskItems
    .filter((item) =>
      statusFilter === "done"
        ? item.done === true
        : statusFilter === "pending"
        ? item.done === false
        : item
    )
    .filter((item) => {
      const regex = new RegExp(textFilter, "g");
      return textFilter !== "" ? item.title.search(regex) > -1 && item : item;
    })
    .map((item) => {
      return <TaskItem key={item.id} item={item} />;
    });

  return (
    <Container>
      {items.length > 0 ? (
        items
      ) : textFilter !== "" ? (
        <Message>
          Your search found no results.{" "}
          <b
            onClick={clearFilters}
            style={{ margin: "0 .2rem", cursor: "pointer" }}
          >
            Click here
          </b>{" "}
          to clear your search.
        </Message>
      ) : null}
    </Container>
  );
}

export default TaskContainer;
