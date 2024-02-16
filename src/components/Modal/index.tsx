import React, { ChangeEvent, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Input from "../Input";
import DateHeader from "../DateHeader";
import Button from "../Button";
import Filters from "../Filters";
import List from "../List";
import Message from "../Message";
import ProgressBar from "../ProgressBar";
import { AddTaskWrapper, addTheme } from "../Button/style";
import { ModalStyle } from "./style";
import { InputProps, InputTypes, InputValues } from "../../types/input";
import { useTasksContext } from "../../context/tasks/tasks";


export default function Modal() {
  const [inputValues, setInputValues] = useState<InputValues>({
    task: "",
    search: "",
  });

  const {
    tasks,
    saveTask,
    deleteTask,
    defineTaskStatus,
    filter,
    setFilter,
    clearFilters,
    searchTask,
  } = useTasksContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    setInputValues((value) =>
      target.validity.valid ? { ...value, [target.name]: target.value } : value
    );
  };

  const handleSearchTask = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValues((prevState) => ({ ...prevState, search: value }));
    setFilter(filter);
  };

  const clearSearch = () => {
    setInputValues((value) => ({ ...value, search: "" }));
    clearFilters();
  };

  const onSaveTask = () => {
    saveTask(inputValues.task);
    setInputValues((value) => ({ ...value, task: "" }));
  };

  const saveOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSaveTask();
      setInputValues((value) => ({ ...value, task: "" }));
    }
  };

  const filterInput: InputProps = {
    value: inputValues.search,
    kind: InputTypes.SEARCH,
    onChange: (e: ChangeEvent<HTMLInputElement>) => handleSearchTask(e),
    isDisabled: inputValues.search !== "",
    onClearClick: () => clearSearch(),
  };


  const taskList = searchTask(inputValues.search);

  return (
    <ModalStyle>
      <DateHeader />
      <ProgressBar taskList={tasks} />

      <Filters input={filterInput} />

      {inputValues.search === "" && (
        <AddTaskWrapper>
          <Input
            kind={InputTypes.TASK}
            value={inputValues.task}
            onChange={handleChange}
            handleKeyPress={saveOnKeyPress}
          />
          <Button theme={addTheme} onButtonClick={() => onSaveTask()}>
            <BsPlusCircleFill size={23} />
          </Button>
        </AddTaskWrapper>
      )}

      {!taskList.length && (
        <Message filter={filter} onMessageClick={clearSearch} />
      )}

      <List
        tasks={taskList}
        onChange={(e) => handleChange(e)}
        onDelete={(index) => deleteTask(index)}
        setStatus={(index) => defineTaskStatus(index)}
      />
    </ModalStyle>
  );
}
