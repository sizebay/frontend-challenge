import React from "react";
import { IconAdd, Input, NewItemBarContainer, SearchButton, StyledForm } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  newItem: string;
}

interface NewItemBarProps {
  onAddItemClick: (item: string) => void;
}

function NewItemBar({ onAddItemClick }: NewItemBarProps) {
  const { register, handleSubmit, setValue } = useForm<FormValues>();

  const handleAddItemClick: SubmitHandler<FormValues> = (data) => {
    if (data.newItem.trim() !== "") {
      onAddItemClick(data.newItem);
      setValue("newItem", "");
    }
  };

  return (
    <NewItemBarContainer>
      <StyledForm onSubmit={handleSubmit(handleAddItemClick)}>
        <Input
          type="text"
          placeholder="Add new item..."
          {...register("newItem")}
        />
          <SearchButton type="submit">
            <IconAdd />
          </SearchButton>
      </StyledForm>
    </NewItemBarContainer>
  );
}

export default NewItemBar;