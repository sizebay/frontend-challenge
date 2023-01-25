import { FormEvent, useContext, useMemo, useState } from "react";
import { MdCheckCircle, MdRemoveCircle } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Warning } from "../";
import { TaskContext } from "../../context/TaskContext";
import {
  ActionButton,
  BoxItem,
  Container,
  EditText,
  Form,
  Item,
  List,
} from "./style";

export default function ListTask() {
  const [selectedIdTask, setSelectedIdTask] = useState("");

  const { taskList, query, filter, editTask, completeTask, removeTask } =
    useContext(TaskContext);

  const handleSelectedTask = (taskId: string) =>
    selectedIdTask !== taskId && setSelectedIdTask(taskId);

  const handleTaskName = (name: string, taskId: string) =>
    editTask(name, taskId);

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    setSelectedIdTask("");
  };

  const filteredTasks = useMemo(() => {
    if (taskList.length > 0) {
      switch (filter) {
        case "done":
          const itemDone = taskList.filter((task) => task.done);
          if (query) {
            return itemDone.filter((task) => task.title?.includes(query));
          }
          return itemDone;
        case "pending":
          const itemPending = taskList.filter((task) => !task.done);
          if (query) {
            return itemPending.filter((task) => task.title?.includes(query));
          }
          return itemPending;
        default:
          if (query) {
            return taskList.filter((task) => task.title?.includes(query));
          }
          return taskList;
      }
    }
    return [];
  }, [filter, taskList, query]);

  if (filteredTasks.length === 0) {
    return <Warning clearSelectedTask={() => setSelectedIdTask("")} />;
  }

  return (
    <List>
      {filteredTasks.map((task) => (
        <Container key={task.id}>
          <BoxItem id={task.id}>
            <Item onClick={() => handleSelectedTask(task.id)} done={task.done}>
              <Form onSubmit={submitForm}>
                <EditText
                  value={task.title}
                  onChange={(event) =>
                    handleTaskName(event.target.value, task.id)
                  }
                  disabled={task.done || selectedIdTask !== task.id}
                />
              </Form>
            </Item>
            {selectedIdTask && selectedIdTask === task.id && (
              <div>
                <ActionButton
                  variant="error"
                  onClick={() => {
                    removeTask(task.id!);
                  }}
                >
                  <MdRemoveCircle size={24} />
                </ActionButton>
                {!task.done && (
                  <ActionButton
                    variant="success"
                    onClick={() => {
                      setSelectedIdTask("");
                      completeTask(task.id);
                    }}
                  >
                    <MdCheckCircle size={24} />
                  </ActionButton>
                )}
              </div>
            )}
          </BoxItem>
          <Tooltip
            anchorId={task.id}
            content="Edit task"
            place="bottom"
            className="tooltip"
          />
        </Container>
      ))}
    </List>
  );
}
