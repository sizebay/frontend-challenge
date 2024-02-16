import React, { ChangeEvent, Fragment, useState } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { IoCheckmarkCircle } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { MdModeEdit } from "react-icons/md";
import { TaskItem } from "../../types/task";
import Input from "../Input";
import { InputTypes } from "../../types/input";
import Button from "../Button";
import {
  AddTaskWrapper,
  cancelTheme,
  deleteTheme,
  editTheme,
  saveTheme,
} from "../Button/style";
import { ListContainer } from "./style";
import { DisabledInput } from "./style";
import { undoTheme } from "../Button/style";
import { useTasksContext } from "../../context/tasks/tasks";

export default function List(props: {
  tasks: TaskItem[] | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDelete?: (index: number) => void;
  onEdit?: (task: TaskItem, newTask: string) => void;
  setStatus?: (index: number) => void;
}) {
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(
    null
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [localTask, setLocalTask] = useState("");
  const { editTask } = useTasksContext();

  const toggleEditMode = (index: number) => {
    setSelectedTaskIndex((prevIndex) => {
      if (prevIndex === index) {
        setIsEditing(false);
        return null;
      } else {
        setIsEditing(true);
        return index;
      }
    });
  };

  const enableEditMode = (index: number) => {
    setIsEditing(true);
    setSelectedTaskIndex(index);
  };

  const onEditTask = (task: TaskItem, newValue: string) => {
    if (newValue === "") {
      return;
    }
    editTask(task, newValue);
    setIsEditing(false);
  };

  return (
    <ListContainer>
      {props.tasks?.map((task, index) => (
        <Fragment key={index}>
          {isEditing && selectedTaskIndex === task.id && (
            <Button
              theme={cancelTheme}
              onButtonClick={() => toggleEditMode(task.id)}
            >
              Cancel
            </Button>
          )}
          <AddTaskWrapper>
            {isEditing && selectedTaskIndex === task.id ? (
              <>
                <Input
                  kind={InputTypes.NONE}
                  value={task.task}
                  onChange={(e) => {
                    setLocalTask(e.target.value);
                  }}
                  onInputClick={() => enableEditMode?.(task.id)}
                />
                <Button
                  theme={editTheme}
                  onButtonClick={() => onEditTask(task, localTask)}
                >
                  <MdModeEdit size={23} />
                </Button>
                <Button
                  theme={deleteTheme}
                  onButtonClick={() => props.onDelete?.(task.id)}
                  
                >
                  <AiFillMinusCircle size={23} />
                </Button>
                <Button
                  theme={task.isDone ? undoTheme : saveTheme}
                  onButtonClick={() => {
                    props.setStatus?.(task.id);
                    setIsEditing(task.isDone);
                  }}
                >
                  {task.isDone ? (
                    <CgClose size={23} />
                  ) : (
                    <IoCheckmarkCircle size={23} />
                  )}
                </Button>
              </>
            ) : (
              <DisabledInput
                isDone={task.isDone && selectedTaskIndex === task.id}
                onClick={() => toggleEditMode(task.id)}
              >
                {task.task}
                {task.isDone ? (
                  <IoCheckmarkCircle size={23} />
                ) : (
                  <CgClose size={23} />
                )}
              </DisabledInput>
            )}
          </AddTaskWrapper>
        </Fragment>
      ))}
    </ListContainer>
  );
}
