import { useState } from "react";
import { MdCheckCircle, MdRemoveCircle } from "react-icons/md";
import { Done, ITask } from "../../@types/task";
import {
  ActionButton,
  BoxItem,
  Container,
  EditText,
  Form,
  Item,
  List,
  ToolTip,
  Warning,
} from "./style";

interface ListTaskProps {
  list: ITask[];
  filter: Done;
  querySearch: string;
  removeTask: (id: string) => void;
  editTask: (title: string, id: string) => void;
  completeTask: (id: string) => void;
  handleFilter: (query: Done) => void;
  clearSearch: () => void;
}

export default function ListTask({
  list,
  filter,
  querySearch,
  removeTask,
  editTask,
  completeTask,
  handleFilter,
  clearSearch,
}: ListTaskProps) {
  const [selectedIdTask, setSelectedIdTask] = useState("");
  return (
    <List>
      {list.length > 0 ? (
        <>
          {list.map((task) => (
            <Container key={task.id}>
              <BoxItem>
                <Item
                  onClick={() => {
                    selectedIdTask !== task.id && setSelectedIdTask(task.id);
                  }}
                  done={task.done}
                >
                  <Form
                    onSubmit={(event) => {
                      event.preventDefault();
                      setSelectedIdTask("");
                    }}
                  >
                    <EditText
                      value={task.title}
                      onChange={(event) =>
                        editTask(event.target.value as string, task.id)
                      }
                      disabled={task.done || selectedIdTask !== task.id}
                    />
                  </Form>
                </Item>
                {selectedIdTask && selectedIdTask === task.id && (
                  <div>
                    <ActionButton
                      variant="error"
                      onClick={() => {
                        removeTask(task.id!);
                      }}
                    >
                      <MdRemoveCircle size={24} />
                    </ActionButton>
                    {!task.done && (
                      <ActionButton
                        variant="success"
                        onClick={() => {
                          setSelectedIdTask("");
                          completeTask(task.id);
                        }}
                      >
                        <MdCheckCircle size={24} />
                      </ActionButton>
                    )}
                  </div>
                )}
              </BoxItem>
              <ToolTip>Edit task</ToolTip>
            </Container>
          ))}
        </>
      ) : (
        <>
          {querySearch && (
            <Warning>
              Your search found no results.{" "}
              <span
                onClick={() => {
                  setSelectedIdTask("");
                  clearSearch();
                }}
              >
                Clear search here{" "}
              </span>{" "}
              to see all items.{" "}
            </Warning>
          )}
          {filter === "done" && (
            <Warning>
              There are no items marked as done.{" "}
              <span
                onClick={() => {
                  setSelectedIdTask("");
                  handleFilter("");
                }}
              >
                Clear the filter here{" "}
              </span>{" "}
              to see all items.{" "}
            </Warning>
          )}
          {filter === "pending" && (
            <Warning>
              There are no items marked pending.{" "}
              <span
                onClick={() => {
                  setSelectedIdTask("");
                  handleFilter("");
                }}
              >
                Clear the filter here{" "}
              </span>{" "}
              to see all items.{" "}
            </Warning>
          )}
        </>
      )}
    </List>
  );
}
