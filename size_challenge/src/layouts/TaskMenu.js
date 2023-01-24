import Calendar from '../components/Calendar'
import Filters from '../components/Filters'
import InputItem from '../components/InputItem'
import ProgressBar from '../components/ProgressBar'
import TaskMenuStyle from './../styles/taskMenu.module.css'
import TaskList from '../components/TaskList'
import { useState } from 'react'



function TaskMenu(){

    const [tasks, setTasks]= useState([]);

    function editTask(e){
        console.log(e);
    }

    function onDelete(id){
        setTasks(
            tasks.filter(a =>
              a.id !== id
            )
          );
    }

    function onSubmit(value){
        setTasks((tasks) => [
            ...tasks,
            {
                id: Math.floor(Date.now() * Math.random()).toString(36),
                status: 'Pending',
                description: value,
            },
        ]);
    }

    function onUpdateStatus(id){
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    status: 'Done',
                };
            } else {
            return task;
            }
        });
        // Re-render with the new array
        setTasks(newTasks);
    }

    function filterTasks(v){
        const newTasks = tasks.map(task => {
            if (task.status === v) {
                return task;
            }
        });
        setTasks(newTasks);
    }

    return(
        <div className={TaskMenuStyle.main_container}>
            <div className={TaskMenuStyle.sub_container}>
                <div className={TaskMenuStyle.head}>
                    <Calendar />
                    <ProgressBar tasks={tasks}/>
                    <Filters filterTasks={filterTasks}/>
                    <InputItem tasks={tasks} onSubmit={onSubmit} />
                    <TaskList tasks={tasks} onDelete={onDelete} onUpdateStatus={onUpdateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default TaskMenu
