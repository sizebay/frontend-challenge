import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { ButtonCreate, Form, IconAdd, InputSearch } from "./style";

export default function CreateTask() {
  const [taskName, setTaskName] = useState("");

  const { createTask } = useContext(TaskContext);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        createTask(taskName);
        setTaskName("");
      }}
    >
      <InputSearch
        type="text"
        placeholder="Add new item..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <ButtonCreate type="submit" disabled={taskName.length === 0}>
        <IconAdd />
      </ButtonCreate>
    </Form>
  );
}
