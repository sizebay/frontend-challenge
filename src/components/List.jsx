import React from "react";
import Task from "../components/Task";

function List({tasks}) {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}{" "}
        </>
    );
}

export default List;
