import { useState } from "react";
import { AddTaskContainer, AddTaskForm, AddTaskInput } from "./styles";
import TaskButton from "../TaskButtons";
import { FaCirclePlus } from "react-icons/fa6";

const AddTaskBar = () => {
  const [itemDescription, setItemDescription] = useState("");
  const [items, setItems] = useState("");

  /*const handleAddItem = (event) => {
    event.preventDefault();
    addNewItem(itemDescription);
    setItemDescription("");
  };

  const addNewItem = (description) => {
    const renderItems = [...items];
    renderItems.push("newItems");
    setItems("renderItems");
  };*/

  return (
    <AddTaskContainer>
      <AddTaskForm onSubmit={() => {}}>
        <AddTaskInput placeholder="Add new item..." />
        <TaskButton name="done" backgroundColor="var(--blue-light)">
          <FaCirclePlus color="white" size={21}/>
        </TaskButton>
      </AddTaskForm>
    </AddTaskContainer>
  );
};

export default AddTaskBar;
