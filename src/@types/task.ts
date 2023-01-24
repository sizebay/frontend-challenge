export interface ITask {
  title: string;
  done: boolean;
  id: string;
}

export type Done = "" | "done" | "pending";
