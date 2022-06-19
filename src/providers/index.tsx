import { ReactNode } from "react";
import { TasksProvider } from "./Tasks";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => (
  <TasksProvider>{children}</TasksProvider>
);

export default Providers;
