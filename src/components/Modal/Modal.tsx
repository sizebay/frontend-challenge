import React from "react";
import { ChangeEvent, useEffect, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Input from "../Input/Input";
import DateHeader from '../DateHeader/DateHeader';
import Button from "../Button/Button";
import Filters from "../Filters/Filters";
import List from "../List/List";
import {
  AddTaskWrapper,
  addTheme,
  doneSelectTheme,
  doneTheme,
} from "../Button/style";
import { Message, MessageLink, ModalStyle } from "./style";
import { InputTypes, InputValues } from "../../types/input";
import { ButtonProps } from "../../types/button";
import { TaskItem } from "../../types/task";
import { EFilters } from "../../types/filters";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../helpers/localStorage";

export default function Modal() {
  const [inputValues, setInputValues] = useState<InputValues>({
    task: "",
    search: "",
  });

  const [taskList, setTaskList] = useState<TaskItem[]>([]);
  const [taskListFiltered, setTaskListFiltered] = useState<TaskItem[]>([]);
  const [lastId, setLastId] = useState<number>(0);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [filter, setFilter] = useState<EFilters>();

  useEffect(() => {
    const storedTasks = getFromLocalStorage("taskList");

    if (storedTasks) {
      try {
        const tasks = JSON.parse(storedTasks);
        if (Array.isArray(tasks) && tasks.length > 0 && tasks[tasks.length - 1].id !== undefined) {
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
    if (isFiltered && filter === EFilters.DONE) {
      setTaskListFiltered((prevList) => prevList.filter((task) => task.isDone));
    } else if (isFiltered && filter === EFilters.PENDING) {
      setTaskListFiltered((prevList) => prevList.filter((task) => !task.isDone));
    }

    setTaskList((prevList) => {
      const updatedList = prevList.map((task) =>
      task.id === index ? { ...task, isDone: true } : task);
      saveToLocalStorage("taskList", updatedList);
      return updatedList;
    });
  };

  const filterTasksByStatus = (status: boolean) => {
    const taskListToFilter = getFromLocalStorage("taskList");
    const listParsed = taskListToFilter && JSON.parse(taskListToFilter);
    const filteredByStatus: TaskItem[] = listParsed.filter(
      (task: { isDone: boolean }) => task.isDone === status
    );

    setTaskListFiltered(filteredByStatus);
    status ? setFilter(EFilters.DONE) : setFilter(EFilters.PENDING);
    isFiltered ? setIsFiltered(false) : setIsFiltered(true);
  };


  const searchTask = (e: ChangeEvent<HTMLInputElement>, list: TaskItem[]) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
    const searchTerm = value.toLocaleLowerCase();
    const filtered = list.filter((t) =>
      t.task.toLocaleLowerCase().includes(searchTerm)
    );
    setTaskListFiltered(filtered);
    setFilter(EFilters.SEARCH);
    value === "" ? setIsFiltered(false) : setIsFiltered(true);
  };

  const filterButtons: ButtonProps[] = [
    {
      theme: filter === EFilters.DONE && isFiltered ? doneSelectTheme : doneTheme,
      onButtonClick: () => filterTasksByStatus(true),
      children: "Done",
    },
    {
      theme: filter === EFilters.PENDING && isFiltered ? doneSelectTheme : doneTheme,
      onButtonClick: () => filterTasksByStatus(false),
      children: "Pending",
    },
  ];

  return (
    <ModalStyle>
      <DateHeader />
      <Filters
        input={{
          value: inputValues.search,
          kind: InputTypes.SEARCH,
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            searchTask(e, isFiltered ? taskListFiltered : taskList),
        }}
        buttons={filterButtons}
      />
      <AddTaskWrapper>
        <Input
          kind={InputTypes.TASK}
          value={inputValues.task}
          onChange={handleChange}
        />
        <Button theme={addTheme} onButtonClick={saveTask}>
          <BsPlusCircleFill size={23} />
        </Button>
      </AddTaskWrapper>
      {isFiltered && !taskListFiltered.length && (
        <Message>
          {filter === EFilters.SEARCH
            ? "Your search found no results. "
            : `There are no items marked as ${filter}. `}
          <MessageLink onClick={() => setIsFiltered(false)}>
            Clear the filter here
          </MessageLink>{" "}
          to see all items.
        </Message>
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
