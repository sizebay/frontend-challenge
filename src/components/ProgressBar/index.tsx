import { useContext, useMemo } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Container, Progress } from "./style";

export default function ProgressBar() {
  const { taskList } = useContext(TaskContext);

  const percentageProgress = useMemo(() => {
    if (taskList.length > 0) {
      const tasksTotalDone = taskList.filter((task) => task.done).length;
      const tasksTotal = taskList.length;

      return (tasksTotalDone / tasksTotal) * 100;
    }
    return 0;
  }, [taskList]);

  return (
    <Container>
      <Progress percent={percentageProgress} />
    </Container>
  );
}
