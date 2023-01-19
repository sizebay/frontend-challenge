import React, { useContext } from "react";
import { NewItem, AddButton, AddInputWrapper } from "./style";
import plus from "../../assets/plus.png";
import useForm from "../../hooks/useForm";
import { GlobalContext } from "../../Contexts/GlobalContext";

const AddNewItem = () => {
  const [form, handleInputChange, clear] = useForm({ query: "" });
  const { states, setters } = useContext(GlobalContext);

  const addNewTask = (task, e) => {
    e.preventDefault()
    if(form.query) {
      setters.setPending([...states.pending, task]);
      clear();
    }
  };

  return (
    <AddInputWrapper>
      <form>
        <NewItem
          placeholder="Add new item..."
          value={form.query}
          onChange={handleInputChange}
          name="query"
        />
        <AddButton
          onClick={(e) => addNewTask(form.query, e)}
        >
          <img src={plus} alt="plus" />
        </AddButton>
      </form>
    </AddInputWrapper>
  );
};

export default AddNewItem;
