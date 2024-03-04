import { ItemStatusFilter } from "../service/to-do.service/models/filter";

export enum ToDoServiceActions {
  ADD_ITEM = 'ADD_ITEM',
  EDIT_DESCRIPTION = 'EDIT_DESCRIPTION',
  REMOVE_ITEM = 'REMOVE_ITEM',
  FINISH_ITEM = 'FINISH_ITEM',
  UPDATE_FILTER_STATUS = 'UPDATE_FILTER_STATUS',
  UPDATE_FILTER_DESCRIPTION = 'UPDATE_FILTER_DESCRIPTION',
}

export type ToDoServicePayloadActions =
  ToDoServiceActionsAddItem | ToDoServiceActionsEditDescription | ToDoServiceActionsRemoveItem | ToDoServiceActionsFinishItem
  | ToDoServiceActionsUpdateFilterStatus | ToDoServiceActionsUpdateFilterDescription
  ;

export interface ToDoServiceActionsAddItem {
  type: ToDoServiceActions.ADD_ITEM;
  payload: {
    description: string;
  };
}

export interface ToDoServiceActionsEditDescription {
  type: ToDoServiceActions.EDIT_DESCRIPTION;
  payload: {
    id: string;
    newDescription: string;
  };
}

export interface ToDoServiceActionsRemoveItem {
  type: ToDoServiceActions.REMOVE_ITEM;
  payload: {
    id: string;
  };
}

export interface ToDoServiceActionsFinishItem {
  type: ToDoServiceActions.FINISH_ITEM;
  payload: {
    id: string;
  };
}

export interface ToDoServiceActionsUpdateFilterStatus {
  type: ToDoServiceActions.UPDATE_FILTER_STATUS;
  payload: {
    status: ItemStatusFilter;
  };
}

export interface ToDoServiceActionsUpdateFilterDescription {
  type: ToDoServiceActions.UPDATE_FILTER_DESCRIPTION;
  payload: {
    description: string;
  };
}