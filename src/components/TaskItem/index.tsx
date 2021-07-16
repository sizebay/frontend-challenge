import React from "react";
import { Task } from "../../models/Task";
import { TaskContext } from "../../contexts/TaskContext";
import {
  Container,
  ButtonContainer,
  Button,
  FaCheckStyled,
  FaMinusStyled,
  FaUndoStyled,
  Wrapper,
  EditTag,
} from "./styles";
import { EditTaskModal } from "../Modals";

interface Props {
  item: Task;
}

function TaskItem(props: Props) {
  const { item } = props;
  const { title, done } = item;

  const { remove, undo, finish, update } = React.useContext(TaskContext);

  const [selected, setSelected] = React.useState(false);
  const [editing, setEditing] = React.useState(false);

  const select = () => setSelected(!selected);
  const edit = () => setEditing(true);
  const close = () => setEditing(false);

  const updateCb = (newTitle: string) => {
    update(item, newTitle);
    setEditing(false);
    setSelected(false);
  };

  return (
    <Wrapper
      style={{
        position: "relative",
      }}
    >
      <Container selected={selected} onClick={select}>
        {title}
        <ButtonContainer selected={selected}>
          <Button color={"red"} onClick={() => remove(item)}>
            <FaMinusStyled />
          </Button>
          {done ? (
            <Button color={"blue"} onClick={() => undo(item)}>
              <FaUndoStyled />
            </Button>
          ) : (
            <Button color={"green"} onClick={() => finish(item)}>
              <FaCheckStyled />
            </Button>
          )}
        </ButtonContainer>
      </Container>
      <EditTag selected={selected} onClick={edit}>
        Edit Task
      </EditTag>

      {editing && (
        <EditTaskModal close={close} text={title} action={updateCb} />
      )}
    </Wrapper>
  );
}

export default TaskItem;
