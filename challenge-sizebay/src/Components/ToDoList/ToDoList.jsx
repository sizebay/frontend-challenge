import React, {useContext} from "react";
import {GlobalContext} from "../../Contexts/GlobalContext";
import {
  List,
  ListItem,
  RemoveButton,
  CompleteButton,
  ButtonsContainer,
  EmptyListMessage,
  ClearFilters,
} from "./style";
import check from "../../assets/check.png";
import remove from "../../assets/remove.png";
import {Tooltip} from "react-tooltip";

const ToDoList = () => {
  const { states, setters } = useContext(GlobalContext);

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

  const clearFilters = () => {
    setters.setListToShow("");
  };
  return (
    <List>
      {returnList().length === 0 ? (
        <EmptyListMessage>
          {states.listToShow &&
            `There are no items marked as ${states.listToShow}. Clear the filter here to`}
          <ClearFilters onClick={clearFilters}> see all items</ClearFilters>
        </EmptyListMessage>
      ) : (
        returnList()
          .filter((task) => {
            return task.toLowerCase().includes(states.search.toLowerCase());
          })
          .map((task, index) => {
            return (
              <div key={index}>
                <ListItem
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
              </div>
            );
          })
      )}
    </List>
  );
};

export default ToDoList;
