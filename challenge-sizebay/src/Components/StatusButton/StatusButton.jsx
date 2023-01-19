import React, { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import {ButtonWrapper} from "./styles";

const StatusButton = ({status}) => {
const {setters} = useContext(GlobalContext)

const selectList = (buttonName) => {
  if(buttonName.toLowerCase() === "pending") {
    setters.setListToShow('pending')
  } else {
    setters.setListToShow('done')
  }
}
  return <ButtonWrapper onClick={() => selectList(status)}>{status}</ButtonWrapper>
};

export default StatusButton;
