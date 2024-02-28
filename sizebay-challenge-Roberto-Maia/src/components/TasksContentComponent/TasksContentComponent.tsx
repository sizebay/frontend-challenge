import styled from "styled-components";
import { ComponentTasks } from "../ComponentTasks/ComponentTasks";
import { TasksContentComponentProps } from "./Types";

const TasksContent = styled.div`
  margin-top: 8px;
  width: 100%;
  height: 216px;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 600px) {
    height: 300px;
  }
`;

export const TasksContentComponent: React.FC<TasksContentComponentProps> = ({
  CurrentTasks,
  removeTask,
  setDoneTask,
  editTask,
  setDirectionRender,
}) => {
  return (
    <TasksContent>
      {CurrentTasks().length ? (
        CurrentTasks().map((item, index) => {
          return (
            <ComponentTasks
              key={index}
              task={item}
              removeTask={removeTask}
              setDoneTask={setDoneTask}
              editTask={editTask}
              setDirectionRender={setDirectionRender}
            />
          );
        })
      ) : (
        <p style={{ fontSize: 14, color: "#848484", width: '100%' }}>
          Your search found no results. Clean the search here to see all items.
        </p>
      )}
    </TasksContent>
  );
};
