import classes from "./add-item.module.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { addChores } from "@/store";
import { useDispatch } from "react-redux";

function AddItem() {
  const dispatch = useDispatch();
  const [userInputValue, setUserInputValue] = useState("");

  //Get the user input length on the add item component
  function userInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInputValue(event.target.value);
  }

  const [isIconActive, setIsIconActive] = useState(false);

  //Make the add item icon active when user input length is more than one character
  useEffect(() => {
    if (userInputValue.length > 0) {
      setIsIconActive(true);
    } else {
      setIsIconActive(false);
    }
  });

  //Add new item to the list
  function addChoreHandler() {
    dispatch(addChores(userInputValue));
    clearUserInput();
  }

  //Clear user input value after adding new item to the list
  function clearUserInput() {
    setUserInputValue("");
  }

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type="text"
        id="addItem"
        placeholder="Add new item..."
        name="addItem"
        onChange={userInputHandler}
        value={userInputValue}
      ></input>
      <AiFillPlusCircle
        onClick={addChoreHandler}
        className={classes.icon + (isIconActive ? ` ${classes.iconActive}` : "")}
      />
    </div>
  );
}

export default AddItem;
