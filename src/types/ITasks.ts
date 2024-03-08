export default interface ITasks {
  id: string;
  description: string;
  isCompleted: boolean;
}

export type FilterType =  "done" | "pending" | "unset";