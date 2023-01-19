import React from "react";
import { NewItem, AddButton, AddInputWrapper } from "./style";
import plus from '../../assets/plus.png'

const AddNewItem = () => {
  return (
    <AddInputWrapper>
      <NewItem placeholder="Add new item..." />
      <AddButton>
        <img src={plus} alt="plus" />
      </AddButton>
    </AddInputWrapper>
  );
};

export default AddNewItem;
