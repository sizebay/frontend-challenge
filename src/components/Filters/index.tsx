import React from "react";
import { ButtonsContainer, FiltersContainer } from "./style";
import Input from "../Input";
import Button from "../Button";
import { InputProps, InputTypes } from "../../types/input";
import { ButtonProps } from "../../types/button";
import { useTasksContext } from "../../context/tasks/tasks";
import { EFilters } from "../../types/filters";
import { doneSelectTheme, doneTheme } from "../Button/style";

interface FiltersProps {
  input: InputProps;
}

export default function Filters(props: FiltersProps) {
  const { filterTasksByStatus, filter } =
    useTasksContext();

  const filterButtons: ButtonProps[] = [
    {
      theme:
        filter === EFilters.DONE ? doneSelectTheme : doneTheme,
      onButtonClick: () => filterTasksByStatus(EFilters.DONE),
      children: "Done",
      icon: filter === EFilters.DONE,
    },
    {
      theme: filter === EFilters.PENDING ? doneSelectTheme : doneTheme,
      onButtonClick: () => filterTasksByStatus(EFilters.PENDING),
      children: "Pending",
      icon: filter === EFilters.PENDING,
    },
  ];
  return (
    <>
      <FiltersContainer>
        <ButtonsContainer>
          {filterButtons.map((button, index) => (
            <Button
              key={index}
              theme={button.theme}
              onButtonClick={button.onButtonClick}
              icon={button.icon}
            >
              {button.children}
            </Button>
          ))}
        </ButtonsContainer>

        <Input
          kind={InputTypes.SEARCH}
          value={props.input.value}
          onChange={props.input.onChange}
          isDisabled={props.input.isDisabled}
          onClearClick={props.input.onClearClick}
        />
      </FiltersContainer>
    </>
  );
}
