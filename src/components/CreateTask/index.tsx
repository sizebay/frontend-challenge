import { useState } from "react";
import { ButtonCreate, Form, IconAdd, InputSearch } from "./style";

interface CreateItemProps {
  create: (title: string) => void;
}

export default function CreateTask({ create }: CreateItemProps) {
  const [taskName, setTaskName] = useState("");
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        create(taskName);
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
