import Tasks from "./Tasks"
import styles from "../css/Filter.module.css"
import { useState } from "react";
import Button from "./Button";
import ProgressBar from './ProgressBar';
import {AiOutlineSearch,AiOutlineClose} from 'react-icons/ai'

function Filter(){
    const[statusFilter, setStatusFilter] = useState([]);
    const[titleFilter, setTitleFilter] = useState("");
    const[percentage, setPercentage] = useState();
    const buttons = ["Done", "Pending"];

    return (
        <>
            <ProgressBar percentage={percentage}/>
            <div className={styles.taskContainer}>
            
            {buttons.map((button, index) => {
                return (<Button name={button} key={index} setStatusFilter={setStatusFilter} statusFilter={statusFilter} />)
            })}
            <input className={styles.input} onChange={e=> setTitleFilter(e.target.value)} placeholder="Search Itens" value={titleFilter}></input>
            <button className={styles.searchButton} onClick={() => setTitleFilter("")}> {titleFilter ? <AiOutlineClose/> : <AiOutlineSearch/>} </button>
            
            <Tasks statusFilter={statusFilter} titleFilter={titleFilter} setPercentage={setPercentage} setStatusFilter={setStatusFilter} setTitleFilter={setTitleFilter}/>
        </div>
        </>
        
    )
}

export default Filter;