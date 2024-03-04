export const ItemStatus = {
  DONE: 'DONE',
  PENDING: 'PENDING',
} as const;

export type ItemStatus = keyof typeof ItemStatus;

export interface Item {
  id: string;
  description: string;
  status: ItemStatus;
}

export interface Progress {
  total: number;
  done: number;
}