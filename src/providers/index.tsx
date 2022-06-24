import { ReactNode } from "react";
import { TasksProvider } from "./Tasks";

interface iProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: iProviderProps) => (
  <TasksProvider>{children}</TasksProvider>
);

export default Providers;
