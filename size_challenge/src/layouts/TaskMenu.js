import Calendar from '../components/Calendar'
import Filters from '../components/Filters'
import InputItem from '../components/InputItem'
import ProgressBar from '../components/ProgressBar'
import TaskList from '../components/TaskList'
import { useState } from 'react'
import styled from 'styled-components'
import { DisplayFlex } from '../styles'

const MainContainer = styled(DisplayFlex)`
    align-items: center;
    width: 60%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 4px;
`;

const SubContainer = styled.div`
    width: 90%;
    height: 90%;
`;

const initialList = [
    { id: 0, status: 'Pending', description: "Verificar Geladeira", },
    { id: 1, status: 'Pending', description: "Fazer café" },
    { id: 2, status: 'Pending', description: "Checar Emails" },
];

let nextId = 3;

function TaskMenu(){
    const [tasks, setTasks]= useState(initialList);
    const [status, setStatus] = useState("Pending")
    const [filteredTasks, setFilteredTasks] = useState(
      initialList
    );

    function onSubmit(value){
        nextId++;
         setTasks((tasks) => [
            ...tasks,
            {
                id: nextId,
                status: 'Pending',
                description: value,
            },
        ])
        
        setFilteredTasks((filteredTasks) => [
            ...filteredTasks,
            {
                id: nextId,
                status: 'Pending',
                description: value,
            },
        ]) 
    }

    function editTask(v, id){
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    description: v,
                };
            } else {
            return task;
            }
        });
        setTasks(newTasks)
    }

    function onDelete(id){
        setTasks(
            tasks.filter(a =>
              a.id !== id
            )
          );
          setFilteredTasks(
            filteredTasks.filter(a =>
              a.id !== id
            )
          );
    }

    function onUpdateStatus(id){
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                console.log(id)
                return {
                    ...task,
                    status: 'Done',
                };
            } else {
                return task;
            }
        });
        setTasks(newTasks)
        setFilteredTasks(
            filteredTasks.filter(a =>
              a.id !== id
            )
          );
    }

    function onChangeStatus(s){
        setStatus(s)
        setFilteredTasks(
            tasks.filter(a =>
              a.status === s
            )
          );
    }

    function onSearchTask(desc){
        setFilteredTasks(
            tasks.filter(a =>
              a.description.toLowerCase().includes(desc.toLowerCase()) && a.status === status
            )
          );
    }

    return(
        <MainContainer>
            <SubContainer>    
                <Calendar />
                <ProgressBar tasks={tasks}/>
                <Filters onChangeStatus={onChangeStatus} onSearchTask={onSearchTask}/>
                <InputItem tasks={tasks} onSubmit={onSubmit} />
                <TaskList tasks={filteredTasks} status={status} onDelete={onDelete} onUpdateStatus={onUpdateStatus} editTask={editTask}/>     
            </SubContainer>
        </MainContainer>
    )
}

export default TaskMenu
