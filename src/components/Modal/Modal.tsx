import { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { ModalContent } from './Modal.styles';
import { FilterHeader } from '../Filter/FilterHeader';
import { NewTask } from '../NewTask/NewTask';
import { TaskList } from '../TaskList/TaskList';

export interface TaskProps {
    id: number;
    completed: boolean;
    taskText: string;
}

export enum FilterType {
    None = 'none',
    Done = 'done',
    Pending = 'pending',
}

export interface FilterProps {
    activeFilter: FilterType;
    filterText: string;
}

export function Modal() {
    const [originalTasks, setOriginalTasks] = useState<TaskProps[]>([]);
    const [filtersState, setFiltersState] = useState<FilterProps>({
        activeFilter: FilterType.None,
        filterText: ''
    });

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        setOriginalTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(originalTasks));
    }, [originalTasks]);

    function handleFilterButtons(filterType: FilterType) {
        setFiltersState(prevState => ({
            ...prevState,
            activeFilter: filterType === prevState.activeFilter ? FilterType.None : filterType,
        }));
    }

    function handleClearFilters() {
        setFiltersState({
            activeFilter: FilterType.None,
            filterText: ''
        });
    }

    const totalCards = originalTasks.length;
    const completedCards = originalTasks.filter(task => task.completed).length;
    const progressPercentage = totalCards > 0 ? (completedCards / totalCards) * 100 : 0;

    function handleCreateTask(taskText: string) {
        const newTask: TaskProps = {
            id: originalTasks.length > 0 ? Math.max(...originalTasks.map(task => task.id)) + 1 : 1,
            completed: false,
            taskText: taskText
        };
        setOriginalTasks([...originalTasks, newTask]);
    }

    function handleDeleteTask(taskId: number) {
        const updatedTasks = originalTasks.filter(task => task.id !== taskId);
        setOriginalTasks(updatedTasks);
    }

    function handleToggleDone(taskId: number) {
        const updatedTasks = originalTasks.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setOriginalTasks(updatedTasks);
    }

    function handleTextEdit(taskId: number, newText: string) {
        const updatedTasks = originalTasks.map(task => {
            if (task.id === taskId) {
                return { ...task, taskText: newText };
            }
            return task;
        });
        setOriginalTasks(updatedTasks);
    }

    function filterTasks(): TaskProps[] {
        const { activeFilter, filterText } = filtersState;
        const filterTextLower = filterText.toLowerCase();

        return originalTasks.filter(task => {
            const taskText = task.taskText.toLowerCase();

            if (activeFilter === FilterType.Done) {
                return task.completed && taskText.includes(filterTextLower);
            }

            if (activeFilter === FilterType.Pending) {
                return !task.completed && taskText.includes(filterTextLower);
            }

            return taskText.includes(filterTextLower);
        });
    }

    return (
        <ModalContent data-cy="modalContent">
            <Header doneTasksValue={progressPercentage} />
            <ProgressBar value={progressPercentage} />
            <FilterHeader
                filterInfos={filtersState}
                changeFilterButtons={handleFilterButtons}
                setFiltersState={setFiltersState}
            />
            <NewTask addNewTask={handleCreateTask} />
            <TaskList
                data-cy="taskList"
                onDelete={handleDeleteTask}
                onToggleDone={handleToggleDone}
                onTextEdit={handleTextEdit}
                taskList={filterTasks()}
                filtersInfo={filtersState}
                clearFilters={handleClearFilters}
            />
        </ModalContent>
    );
}
