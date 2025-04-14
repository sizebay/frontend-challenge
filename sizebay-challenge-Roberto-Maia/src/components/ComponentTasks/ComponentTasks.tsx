import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { KeyboardEvent, useEffect, useState } from "react";
import { ComponentTasksProps } from "./Types";
import { DivTask, EditButton, ExcludeButton } from "./styles";

export const ComponentTasks: React.FC<ComponentTasksProps> = ({
  task,
  removeTask,
  setDoneTask,
  editTask,
  setDirectionRender,
}) => {
  const [clickEdit, setClickEdit] = useState(false);
  const [newTaskEdited, setNewTaskEdited] = useState(task?.task);

  useEffect(() => {
    setNewTaskEdited(task?.task);
  }, [task]);

  const markDone = () => {
    setDoneTask(task.id);
    setDirectionRender("standard");
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      editTask({ id: task.id, task: newTaskEdited, done: task.done });
      setClickEdit(false);
    }
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "48px",
          position: "relative",
        }}
        onClick={() => setClickEdit(!clickEdit)}
      >
        <DivTask
          style={{
            pointerEvents: clickEdit ? "none" : "auto",
            paddingLeft: 10,
          }}
          value={newTaskEdited}
          onChange={(event) => {
            setNewTaskEdited(event.target.value);
          }}
          onKeyDown={handleKeyPress}
          type="text"
          $background={task.done ? "#cbffdf" : "#f4f4f4"}
        />
        {clickEdit ? (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              backgroundColor: "black",
              width: 88,
              height: "100%",
              display: "flex",
            }}
          >
            <ExcludeButton onClick={() => removeTask(task.id)}>
              <RemoveCircleOutlineIcon sx={{ color: "white" }} />
            </ExcludeButton>
            <EditButton onClick={() => markDone()}>
              <CheckCircleIcon sx={{ color: "white" }} />
            </EditButton>
          </div>
        ) : null}
      </div>
    </div>
  );
};
