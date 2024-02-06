import React, { ChangeEvent, useState } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { IoCheckmarkCircle } from "react-icons/io5";
import { TaskItem } from "../../types/task";
import Input from "../Input/Input";
import { InputTypes } from "../../types/input";
import Button from "../Button/Button";
import { AddTaskWrapper, deleteTheme, saveTheme } from "../Button/style";
import { ListContainer } from "./style";
import { DisabledInput } from "./style";

export default function List(props: {
  tasks: TaskItem[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDelete?: (index: number) => void;
  setStatus?: (index: number) => void;
}) {
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(
    null
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const toggleEditMode = (index: number) => {
    setSelectedTaskIndex((prevIndex) => {
      if (prevIndex === index) {
        setIsEditing(false);
        return null;
      } else {
        setIsEditing(true)
        return index;
      }
    });
  };

  return (
    <ListContainer>
      {props.tasks.map((task, index) => (
        <AddTaskWrapper key={index}>
          {isEditing && selectedTaskIndex === task.id ? (
            <>
              <Input
                kind={InputTypes.TASK}
                value={task.task}
                onChange={props.onChange}
                onInputClick={() => toggleEditMode(task.id)}
              />
              <Button
                theme={deleteTheme}
                onButtonClick={() => props.onDelete?.(task.id)}
              >
                <AiFillMinusCircle size={23} />
              </Button>
              <Button
                theme={saveTheme}
                onButtonClick={() => props.setStatus?.(task.id)}
              >
                <IoCheckmarkCircle size={23} />
              </Button>
            </>
          ) : (
            <DisabledInput onClick={() => toggleEditMode(task.id)}>
              {task.task}
            </DisabledInput>
          )}
        </AddTaskWrapper>
      ))}
    </ListContainer>
  );
}
