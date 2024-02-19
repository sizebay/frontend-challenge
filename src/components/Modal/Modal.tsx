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

export interface FilterProps {
    done: boolean;
    pending: boolean;
    filterText: string;
}

export function Modal() {
    const [originalTasks, setOriginalTasks] = useState<TaskProps[]>([]);
    const [tasks, setTasks] = useState<TaskProps[]>(originalTasks);
    const [filtersState, setFiltersState] = useState<FilterProps>({
        done: false,
        pending: false,
        filterText: ''
    });

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        setOriginalTasks(savedTasks);
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(originalTasks));
        handleClearFilters()
    }, [originalTasks]);

    function handleFilterButtons(buttonName: 'done' | 'pending') {
        setFiltersState(prevState => ({
            ...prevState,
            [buttonName]: !prevState[buttonName],
            [buttonName === 'done' ? 'pending' : 'done']: false
        }));
    }

    function handleFilteredTasks(filteredTasks: TaskProps[]) {
        setTasks(filteredTasks);
    }

    function handleClearFilters() {
        setFiltersState({
            done: false,
            pending: false,
            filterText: ''
        });
        setTasks(originalTasks); 
    }
    
    const isFilterActive = filtersState.done || filtersState.pending || filtersState.filterText !== '';

    const totalCards = originalTasks.length;
    const completedCards = originalTasks.filter(task => task.completed).length;
    const progressPercentage = totalCards > 0 ? (completedCards / totalCards) * 100 : 0;

    function handleCreateTask(taskText: string) {
        const newTask: TaskProps = {
            id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
            completed: false,
            taskText: taskText
        };
        setOriginalTasks([...originalTasks, newTask]);
        setTasks([...tasks, newTask]);
    }

    function handleDeleteTask(taskId: number) {
        const updatedTasks = originalTasks.filter(task => task.id !== taskId);
        setOriginalTasks(updatedTasks);
        setTasks(updatedTasks);
    }

    function handleToggleDone(taskId: number) {
        const updatedTasks = originalTasks.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setOriginalTasks(updatedTasks);
        setTasks(updatedTasks);
    }

    function handleTextEdit(taskId: number, newText: string) {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, taskText: newText };
            }
            return task;
        });
        setOriginalTasks(updatedTasks);
        setTasks(updatedTasks);
    }

    return (
        <ModalContent data-cy="modalContent">
            <Header doneTasksValue={progressPercentage}/>
            <ProgressBar value={progressPercentage} />
            <FilterHeader
                tasks={originalTasks}
                setFilteredTasks={handleFilteredTasks}
                filterInfos={filtersState}
                changeFilterButtons={handleFilterButtons}
                setFiltersState={setFiltersState}
            />
            <NewTask addNewTask={handleCreateTask} isFilterActive={isFilterActive} />
            <TaskList data-cy="taskList"
                onDelete={handleDeleteTask}
                onToggleDone={handleToggleDone}
                onTextEdit={handleTextEdit}
                taskList={tasks}
                filtersInfo={filtersState}
                clearFilters={handleClearFilters}
            />
        </ModalContent>
    );
}
