import React, { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { List, ListItem, RemoveButton, CompleteButton, ButtonsContainer } from "./style";
import check from "../../assets/check.png";
import remove from "../../assets/remove.png";

const ToDoList = () => {
  const { states } = useContext(GlobalContext);

  const returnList = () => {
    return states.listToShow === "pending" ? states.pending : states.done;
  };
  return (
    <List>
      {returnList().map((task, index) => {
        return (
          <div>
            <ListItem key={index}>
              {task}
              <ButtonsContainer>
                <RemoveButton>
                  <img src={remove} alt="remove" />
                </RemoveButton>
                <CompleteButton>
                  <img src={check} alt="check" />
                </CompleteButton>
              </ButtonsContainer>
            </ListItem>
          </div>
        );
      })}
    </List>
  );
};

export default ToDoList;
