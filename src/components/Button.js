import React, { useState, useEffect } from "react";
import styles from "../css/Button.module.css";
import { FiCheck } from "react-icons/fi";

function Button({name, setStatusFilter, statusFilter}){
    const[active, setActive] = useState(false);
    const buttonName = name;

    

    useEffect(() => {
        setStatusFilter(statusFilter);
        if(statusFilter.length === 0){
            setActive(false);
        }
        }, [statusFilter, setStatusFilter])
    

    return(
        <button className={styles.button} onClick={e => buttonClick(e)} style={active ? {color : '#4DA6B3', borderColor : '#4DA6B3'} : {}}>{active && <FiCheck />}{buttonName}</button>
    )

    function buttonClick(e){
        if(active){
            setActive(false);
            setStatusFilter(statusFilter.filter(e => e !== buttonName.toLowerCase()))
        }else{
            setActive(true);
            setStatusFilter([...statusFilter, buttonName.toLowerCase()]);
        }  

    }

}

export default Button;