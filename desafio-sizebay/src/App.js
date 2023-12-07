/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import React, { useState, useEffect } from "react";
import Modal from "./components/modal";
import HeaderModal from "./components/headerModal";
import ProgressBar from "./components/progressBar";
import TaskList from "./components/taskList";
import { notify } from "./components/notifications";

function App() {
  const [task, setTask] = useState([]);
  const [taskDone, setTaskDone] = useState([]);
  const [taskPending, setTaskPending] = useState([]);
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);
  const [filterTasks, setFilterTasks] = useState([]);
  const [filterButton, setFilterButton] = useState([]);
  const [search, setSearch] = useState("");

  const usersData = [
    { id: 1, description: "Task 1", status: "pending" },
    { id: 2, description: "Task 2", status: "pending" },
    { id: 3, description: "Task 3", status: "pending" },
  ];

  const getData = () => {
    setTask(usersData);
  };

  const addTask = async (params) => {
    params.id = task.length + 1;
    params.setTask([...params.task, params]);
    notify({ status: "success", message: "Task created" });
  };

  const deleteData = (params) => {
    setTask(task.filter((task) => task.id !== params.id));
  };

  const updateStatus = (props) => {
    const newList = task.map((item) => {
      if (item.id === props.id) {
        notify({ status: "success", message: "Task updated" });
        return props;
      }
      return item;
    });
    setTask(newList);
  };

  const filterTaskButton = (condition) => {
    setFilterButton(task.filter((i) => i.status === condition));
  };

  const filterTaskInput = (props) => {
    setSearch(props.value);
    const result = task.filter((item) => {
      const description = item.description
        .toLowerCase()
        .includes(props.value.toLowerCase());

      return description;
    });

    if (props.value) {
      setFilterTasks(result);
    }
    setTask(task);
  };

  const calculateProgress = () => {
    const taskDone = task.filter((i) => i.status === "done");
    const result =
      task.length === 0 ? 0 : (taskDone.length / task.length) * 100;

    return result;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Modal>
      <HeaderModal />
      <ProgressBar calculateProgress={calculateProgress} />
      <TaskList
        task={
          search !== ""
            ? filterTasks
            : filterButton?.length > 0
            ? filterButton
            : task
        }
        setTask={setTask}
        done={done}
        setDone={setDone}
        pending={pending}
        setPending={setPending}
        taskDone={taskDone}
        setTaskDone={setTaskDone}
        taskPending={taskPending}
        setTaskPending={setTaskPending}
        deleteData={deleteData}
        updateStatus={updateStatus}
        addTask={addTask}
        filterTaskButton={filterTaskButton}
        filterTaskInput={filterTaskInput}
        filterTasks={filterTasks}
        setFilterTasks={setFilterTasks}
        search={search}
        setSearch={setSearch}
      />
    </Modal>
  );
}

export default App;
