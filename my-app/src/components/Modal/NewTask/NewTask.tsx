import { ChangeEvent, useState } from "react";
import * as S from "./NewTask.styles";

import { ModalInputText } from "../Inputs";
import { ModalButton } from "../Button";
import { toast } from "sonner";

import { FaPlusCircle } from "react-icons/fa"
import { useTaskContext } from "hooks/useTaskContext";

export function ModalNewTask() {
  const { onCreateTask, searchTask } = useTaskContext();

  const [content, setContent] = useState('');

  const handleCreateTask = () => {
    if (content.trim() !== "") {
      onCreateTask(content);
      setContent('');
      toast.success('Tarefa criada com sucesso!');
    } else {
      toast.error('Digite um título para a sua tarefa!');
    }
  };

  function changeTitle(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value)
  }

  return (
    <>
      {!searchTask &&
        <S.NewTaskWrapper>
          <ModalInputText
            placeholder="add new task..."
            value={content}
            onChange={changeTitle}
            aria-label="New Task"
            data-testid='new-task-title'
          />

          <ModalButton
            onClick={handleCreateTask}
            icon={<FaPlusCircle />}
            $addButton
            disabled={!content}
            data-testid='create-task-btn'
          />
        </S.NewTaskWrapper>
      }
    </>
  )
}