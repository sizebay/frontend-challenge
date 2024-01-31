import { useState, useRef } from "react";
import classes from "./item.module.css";
import { MdCheckCircle, MdRemoveCircle } from "react-icons/md";
import { ItemInterface } from "@/utils/interfaces";
import { removeChores, updateChores } from "@/store";
import { useDispatch } from "react-redux";

function Item(props: Readonly<ItemInterface>) {
  const dispatch = useDispatch();
  const { title, id, isDone } = props;

  const [isItemDone, setIsItemDone] = useState(isDone);
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);

  //Change the DOM if the item is focused
  const onBlurHandler = () => setIsFocused(false);
  const onFocusHandler = () => setIsFocused(true);

  //Change the item state when the user clicks the check icon
  function updateChoreHandler() {
    dispatch(updateChores(id, title, !isDone));
    setIsItemDone(!isDone);
  }

  //Remove the item from the list
  function removeChoreHandler() {
    dispatch(removeChores(id));
  }

  return (
    <>
      {!isItemDone && (
        <div className={classes.container}>
          <input
            readOnly={true}
            className={classes.input}
            type="text"
            value={title}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            ref={inputRef}
          ></input>
          {isFocused && (
            <div className={classes.iconWrapper}>
              <MdRemoveCircle
                onMouseDown={removeChoreHandler}
                className={`${classes.icon} ${classes.iconRed}`}
              />
              <MdCheckCircle
                onMouseDown={updateChoreHandler}
                className={`${classes.icon} ${classes.iconGreen}`}
              />
            </div>
          )}
        </div>
      )}

      {isItemDone && (
        <div className={classes.containerDone}>
          <input className={classes.inputDone} type="text" readOnly={true} value={title}></input>
        </div>
      )}
    </>
  );
}

export default Item;
