import styles from "../css/List.module.css"
import Item from "./Item";

function List({removeItem,tasks, setTasks}){
    return(
        <div className={styles.listContainer}>
            {tasks.map((task, index) => {
                return(
                    <div key={index}>
                        <Item item={task} index={index} removeItem={removeItem} setAsDone={setAsDone}/>
                    </div>
                )
            })}
        </div>
    )
    
    function setAsDone(index){
        let item = tasks.at(index);
        item.status = "done";
        setTasks(tasks.concat());
    }
}
 

export default List;