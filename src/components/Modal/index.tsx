import React from "react";
import { ChangeEvent, useEffect, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Input from "../Input";
import DateHeader from "../DateHeader";
import Button from "../Button";
import Filters from "../Filters";
import List from "../List";
import Message from "../Message";
import ProgressBar from "../ProgressBar";
import {
  AddTaskWrapper,
  addTheme,
  doneSelectTheme,
  doneTheme,
} from "../Button/style";
import { ModalStyle } from "./style";
import { InputProps, InputTypes, InputValues } from "../../types/input";
import { ButtonProps } from "../../types/button";
import { TaskItem } from "../../types/task";
import { EFilters } from "../../types/filters";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../helpers/localStorage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Modal() {
  const [inputValues, setInputValues] = useState<InputValues>({
    task: "",
    search: "",
  });

  const [taskList, setTaskList] = useState<TaskItem[]>([]);
  const [taskListFiltered, setTaskListFiltered] = useState<TaskItem[]>([]);
  const [lastId, setLastId] = useState<number>(0);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [filter, setFilter] = useState<EFilters>(EFilters.NONE);

  useEffect(() => {
    const storedTasks = getFromLocalStorage("taskList");

    if (storedTasks) {
      try {
        const tasks = JSON.parse(storedTasks);
        if (
          Array.isArray(tasks) &&
          tasks.length > 0 &&
          tasks[tasks.length - 1].id !== undefined
        ) {
          setTaskList(tasks);
          setLastId(tasks[tasks.length - 1].id);
        } else {
          console.error("O valor armazenado não é um array válido.");
        }
      } catch (error) {
        console.error("Erro ao fazer o parse do JSON:", error);
      }
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    setInputValues((value) =>
      target.validity.valid ? { ...value, [target.name]: target.value } : value
    );
  };

  const saveTask = () => {
    const storageTaskList = getFromLocalStorage("taskList");
    if (inputValues.task === "") {
      return;
    }

    const item = {
      id: lastId + 1,
      task: inputValues.task,
      isDone: false,
    };

    if (storageTaskList) {
      const storedList = JSON.parse(storageTaskList);
      const newList = [...storedList, item];
      setTaskList(newList);
      setLastId(item.id);
      saveToLocalStorage("taskList", newList);
    } else {
      setLastId(item.id);
      setTaskList((prevList) => {
        const updatedList = [...prevList, item];
        saveToLocalStorage("taskList", updatedList);
        return updatedList;
      });
    }
    setInputValues((prevState) => ({ ...prevState, task: "" }));
  };

  const deleteTask = (index: number) => {
    if (isFiltered) {
      setTaskListFiltered((prevList) => prevList.filter((t) => t.id !== index));
    }

    setTaskList((prevList) => {
      const updatedList = prevList.filter((t) => t.id !== index);
      saveToLocalStorage("taskList", updatedList);
      if (!updatedList.length) {
        localStorage.clear();
      }
      return updatedList;
    });
  };

  const defineTaskStatus = (index: number) => {
    setTaskList((prevList) => {
      const updatedList = prevList.map((task) =>
        task.id === index ? { ...task, isDone: true } : task
      );
      const allIsDone = updatedList.every((t) => t.isDone === true);
      if (allIsDone) {
        toast("All done!");
      }
      saveToLocalStorage("taskList", updatedList);
      return updatedList;
    });

    if (isFiltered) {
      setTaskListFiltered((prevList) => prevList.filter((t) => t.id !== index));
    }
  };

  const filterTasksByStatus = (status: boolean) => {
    const filteredByStatus: TaskItem[] = taskList.filter(
      (task: { isDone: boolean }) => task.isDone === status
    );

    setTaskListFiltered(filteredByStatus);
    status ? setFilter(EFilters.DONE) : setFilter(EFilters.PENDING);
    isFiltered ? setIsFiltered(false) : setIsFiltered(true);
  };

  const searchTask = (e: ChangeEvent<HTMLInputElement>, list: TaskItem[]) => {
    const { value } = e.target;
    setInputValues((prevState) => ({ ...prevState, search: value }));
    const searchTerm = value.toLocaleLowerCase();
    const filtered = list.filter((t) =>
      t.task.toLocaleLowerCase().includes(searchTerm)
    );
    setTaskListFiltered(filtered);

    setFilter(EFilters.SEARCH);
    setIsFiltered(value !== "");
  };

  const clearSearch = () => {
    setInputValues((value) => ({ ...value, search: "" }));
    setIsFiltered(false);
    setFilter(EFilters.NONE);
  };

  const filterButtons: ButtonProps[] = [
    {
      theme:
        filter === EFilters.DONE && isFiltered ? doneSelectTheme : doneTheme,
      onButtonClick: () => filterTasksByStatus(true),
      children: "Done",
      icon: filter === EFilters.DONE && isFiltered,
    },
    {
      theme:
        filter === EFilters.PENDING && isFiltered ? doneSelectTheme : doneTheme,
      onButtonClick: () => filterTasksByStatus(false),
      children: "Pending",
      icon: filter === EFilters.PENDING && isFiltered,
    },
  ];

  const filterInput: InputProps = {
    value: inputValues.search,
    kind: InputTypes.SEARCH,
    onChange: (e: ChangeEvent<HTMLInputElement>) => searchTask(e, taskList),
    isDisabled: filter === EFilters.SEARCH && inputValues.search !== "",
    onClearClick: () => clearSearch(),
  };

  return (
    <ModalStyle>
      <DateHeader />
      <ToastContainer autoClose={3000} />
      <ProgressBar taskList={taskList} />
      <Filters input={filterInput} buttons={filterButtons} />
      {filter !== EFilters.SEARCH && <AddTaskWrapper>
        <Input
          kind={InputTypes.TASK}
          value={inputValues.task}
          onChange={handleChange}
        />
        <Button theme={addTheme} onButtonClick={saveTask}>
          <BsPlusCircleFill size={23} />
        </Button>
      </AddTaskWrapper>}
      {isFiltered && !taskListFiltered.length && (
        <Message filter={filter} onMessageClick={() => setIsFiltered(false)} />
      )}
      <List
        tasks={isFiltered ? taskListFiltered : taskList}
        onChange={handleChange}
        onDelete={(index) => deleteTask(index)}
        setStatus={(index) => defineTaskStatus(index)}
      />
    </ModalStyle>
  );
}
