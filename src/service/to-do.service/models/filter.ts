import { ItemStatus } from "./item";

export type ItemStatusFilter = ItemStatus | 'ALL';

export interface FilterOptions {
  byStatus?: ItemStatusFilter;
  byDescription?: string;
}