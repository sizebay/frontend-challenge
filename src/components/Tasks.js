import List from "./List";
import styles from "../css/Tasks.module.css"
import {useState, useEffect } from "react";
import {AiFillPlusCircle} from "react-icons/ai"
import ErrorMessage from "./ErrorMessage";

function Tasks ({statusFilter, titleFilter, setPercentage, setTitleFilter, setStatusFilter}){
    const[item, setItem] = useState("");
    const[tasks, setTasks] = useState([]);
    const[error, setError] = useState("");
    const[tasksToShow, setTasksToShow] = useState([])

    useEffect(() => {
        filterTasks();
    }, );

    useEffect(() => {
        setTasksToShow(tasksToShow);
    }, [tasksToShow]);

    useEffect(() => {
        console.log(",a,a");
        let doneTasks = tasks.filter(e => e.status === 'done');
        let percentage = 0;
        if(tasks.length > 0){
            percentage = doneTasks.length/tasks.length * 100;
        }

        setPercentage(percentage);
    }, [tasks, setPercentage]);

    useEffect(() => {
        setError(error);
    }, [error])

    return(
        <div className={styles.taskContainer}>
            <input id="addItemInput" className={styles.input} placeholder="Add new item" onChange={e => setItem(e.target.value)} value={item}></input>
            <button className={styles.button} onClick={() => addNewItem({item})}><AiFillPlusCircle/></button>
            {error && <ErrorMessage error={error} setStatusFilter={setStatusFilter} setTitleFilter={setTitleFilter} setError={setError}/>}
            {!error && <List removeItem={removeItem} tasks={tasksToShow} setTasks={setTasks}/>}
        </div>
    )

   

    function filterTasks(){
        let filteredTasks = tasks;
        setError("");

        if(statusFilter.length > 0){
            filteredTasks = filteredTasks.filter(e => statusFilter.includes(e.status));
            if(filterTasks.length === 0 && !statusFilter.includes("pending")){
                setError("noDoneResult");
            }
        }
        if(titleFilter){
            filteredTasks = filteredTasks.filter(e => e.item.includes(titleFilter));
            if(filteredTasks.length === 0){
                setError("noResultSearch");
            }
        }
        setTasksToShow(filteredTasks);
    }
    
    function removeItem(item){
        if(window.confirm("Are you sure you want to delete this item?")){
            setTasks(tasks.filter(e => e.id !== item.id));  
        } 
    }

    function addNewItem(item){
        setTasks(
            [
            ...tasks,
            {id : tasks.length, item : item.item, status : 'pending'}
        ]
        )
        setItem("");
    }
    
}

export default Tasks;