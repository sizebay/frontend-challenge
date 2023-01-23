import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import {
  List,
  ListItem,
  RemoveButton,
  CompleteButton,
  ButtonsContainer,
  EmptyListMessage,
  EditInput,
} from "./style";
import check from "../../assets/check.png";
import remove from "../../assets/remove.png";
import { Tooltip } from "react-tooltip";

const ToDoList = () => {
  const { states, setters } = useContext(GlobalContext);
  const [editing, setEditing] = useState(false);
  const [taskValue, setTaskValue] = useState('');

  const returnList = () => {
    return states.listToShow === "pending" ? states.pending : states.done;
  };

  const completeTask = (task) => {
    const newPendingList = states.pending.filter((pendingTask) => {
      return pendingTask !== task;
    });
    setters.setPending(newPendingList);
    setters.setDone([...states.done, task]);
  };

  const deleteTask = (task) => {
    const newPendingList = states.pending.filter((pendingTask) => {
      return pendingTask.toLowerCase() !== task.toLowerCase();
    });
    setters.setPending(newPendingList);
  };

  const edit = (task) => {
    setEditing(true);
    setTaskValue(task)
  };

  const onChangeEditedTask = (e) => {
    // console.log(e)
    setTaskValue(e.target.value)
  }

  return (
    <List>
      {returnList().length === 0 ? (
        <EmptyListMessage>
          {`There are no items marked as ${states.listToShow}. Clear the filter here to <a>see all
          items.<a>`} 
          {/* fazer correcao de acessibilidade  */}
        </EmptyListMessage>
      ) : (
        returnList()
          .filter((task) => {
            return task.toLowerCase().includes(states.search.toLowerCase());
          })
          .map((task, index) => {
            return (
              <div key={index}>
                {editing ? (
                  <EditInput value={taskValue} onChange={onChangeEditedTask}/>
                ) : (
                  <ListItem
                    onClick={() => edit(task)}
                    id="task"
                    data-tooltip-content="Edit task"
                    data-tooltip-place="bottom"
                  >
                    <Tooltip anchorId="task" />
                    {task}
                    <ButtonsContainer>
                      <RemoveButton onClick={() => deleteTask(task)}>
                        <img src={remove} alt="remove" />
                      </RemoveButton>
                      <CompleteButton onClick={() => completeTask(task)}>
                        <img src={check} alt="check" />
                      </CompleteButton>
                    </ButtonsContainer>
                  </ListItem>
                )}
              </div>
            );
          })
      )}
    </List>
  );
};

export default ToDoList;
