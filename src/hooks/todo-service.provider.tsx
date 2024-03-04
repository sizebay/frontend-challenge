import { ReactNode, createContext, useContext, useReducer } from 'react';
import { TODO_DEFAULT_STATE, ToDoServiceObject, todoServiceReducer } from './todo-service.reduce';
import { ToDoServiceActions } from '../models/todo';

interface ToDoServiceProps {
    children: ReactNode;
}

const ToDoServiceContext = createContext<ToDoServiceObject>(TODO_DEFAULT_STATE);

export const useToDoService = () => useContext(ToDoServiceContext);

export const ToDoServiceProvider = ({ children }: ToDoServiceProps) => {
    const [state, dispatch] = useReducer(todoServiceReducer, TODO_DEFAULT_STATE);

    return <ToDoServiceContext.Provider value={{
        items: state.items,
        filterOptions: state.filterOptions,
        addItem: (payload) => dispatch({ type: ToDoServiceActions.ADD_ITEM, payload }),
        updateDescription: (payload) => dispatch({ type: ToDoServiceActions.EDIT_DESCRIPTION, payload }),
        progress: state.progress,
        removeItem: (payload) => dispatch({ type: ToDoServiceActions.REMOVE_ITEM, payload }),
        finishItem: (payload) => dispatch({ type: ToDoServiceActions.FINISH_ITEM, payload }),
        updateFilterStatus: (payload) => dispatch({ type: ToDoServiceActions.UPDATE_FILTER_STATUS, payload }),
        updateFilterDescription: (payload) => dispatch({ type: ToDoServiceActions.UPDATE_FILTER_DESCRIPTION, payload }),
    }}>{children as any}</ToDoServiceContext.Provider>;
};