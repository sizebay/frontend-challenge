export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type RootState = {
  filter: string;
  todos: Todo[];
};
