import styles from "../css/Item.module.css";
import { useState } from "react";
import {AiFillCheckCircle, AiFillMinusCircle} from "react-icons/ai";

function Item({item, index, removeItem, setAsDone}){
    const [visible, setVisible] = useState(false);

    return(
        <div className={styles.item} key={index} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            {visible && (
                <>
                    <span className={styles.tooltip} >Edit Task</span>
                    <button className={styles.greenButton} onClick={() => setAsDone(index)}><AiFillCheckCircle/></button>
                    <button className={styles.redButton} onClick={e => removeItem(item)}><AiFillMinusCircle/></button>
                </>
            )}
            <p className={styles.paragraph}>{item.item}</p>
        </div>
    )
}

export default Item;