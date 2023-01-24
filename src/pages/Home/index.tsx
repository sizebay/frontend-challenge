import { useEffect, useMemo, useState } from "react";
import uuid from "react-uuid";
import { Done, ITask } from "../../@types/task";
import {
  CreateTask,
  DateTask,
  Filters,
  ListTask,
  ProgressBar,
  Search,
} from "../../components";

import { Actions, Container, Main, Section } from "./style";

export default function Home() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Done>("");

  const recoveredTasks = localStorage.getItem("taskList");

  const addTask = (title: string) => {
    setTaskList((state) => {
      return [...state, { title, id: uuid(), done: false }];
    });
  };

  const removeTask = (id: string) => {
    setTaskList((state) => state.filter((item) => item.id !== id));
  };

  const editTask = (title: string, id: string) => {
    setTaskList((state) =>
      state.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title,
          };
        }
        return task;
      })
    );
  };

  const completeTask = (id: string) => {
    setTaskList((state) =>
      state.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: true,
          };
        }
        return task;
      })
    );
  };

  const filteredTasks = useMemo(() => {
    if (taskList.length > 0) {
      switch (filter) {
        case "done":
          const itemDone = taskList.filter((task) => task.done);
          if (query) {
            return itemDone.filter((task) => task.title?.includes(query));
          }
          return itemDone;
        case "pending":
          const itemPending = taskList.filter((task) => !task.done);
          if (query) {
            return itemPending.filter((task) => task.title?.includes(query));
          }
          return itemPending;
        default:
          if (query) {
            return taskList.filter((task) => task.title?.includes(query));
          }
          return taskList;
      }
    }
    return [];
  }, [filter, taskList, query]);

  const doneTasks = useMemo(() => {
    if (taskList.length > 0) {
      return taskList.filter((task) => task.done);
    }
    return [];
  }, [taskList]);

  useEffect(() => {
    if (recoveredTasks) {
      setTaskList(JSON.parse(recoveredTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <Container>
      <Main>
        <DateTask />
        <ProgressBar
          tasksTotalDone={doneTasks.length}
          tasksTotal={taskList.length}
        />
        <Actions>
          <Filters filter={filter} handleFilter={setFilter} />
          <Search query={query} handleQuery={setQuery} />
        </Actions>
        <Section>
          <CreateTask create={addTask} />
          <ListTask
            list={filteredTasks}
            removeTask={removeTask}
            editTask={editTask}
            completeTask={completeTask}
            filter={filter}
            handleFilter={setFilter}
            clearSearch={() => setQuery("")}
            querySearch={query}
          />
        </Section>
      </Main>
    </Container>
  );
}
