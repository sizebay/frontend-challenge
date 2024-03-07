export type ListStyle = {
  $hasOpacity?: boolean;
};

export type ListType = {
  id: number;
  task: string;
  status: "done" | "pending";
};

export type FilterType = "done" | "pending" | "none" | "search";

export type PercentageType = {
  tasksDone: number;
  totalTasks: number;
};
