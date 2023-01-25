import React, { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { CustomCheckbox, Container } from "./styles";
import blueCheck from "../../assets/blue-check.png";

const StatusButton = () => {
  const { setters, states } = useContext(GlobalContext);
  const onChangeCheckbox = (e) => {
    setters.setListToShow(e.target.value);
  };
  return (
    <Container>
      <label>
        <CustomCheckbox
          checked={states.listToShow === "done"}
          type="radio"
          name="tasklist"
          value="done"
          onChange={onChangeCheckbox}
        />
        <span>
          <img src={blueCheck} alt="check" />
          Done
        </span>
      </label>
      <label>
        <CustomCheckbox
          checked={states.listToShow === "pending"}
          type="radio"
          name="tasklist"
          value="pending"
          onChange={onChangeCheckbox}
        />
        <span>
          <img src={blueCheck} alt="check" />
          Pending
        </span>
      </label>
    </Container>
  );
};

export default StatusButton;
