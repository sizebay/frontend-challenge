import ITasks from "./types/ITasks";
import useFetch from "./useFetch";

const useTasks = () => {
  return useFetch<ITasks[]>({ url: "tasks" });
};

export default useTasks;
