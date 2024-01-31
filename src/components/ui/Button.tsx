import { Fragment } from "react";
import classes from "./button.module.css";
import { BsCheck2 } from "react-icons/bs";
import { ButtonInterface } from "@/utils/interfaces";

function Button(props: Readonly<ButtonInterface>) {
  const { label, onChange, checked, value, onClick } = props;

  return (
    <Fragment>
      <input
        className={classes.input}
        checked={checked}
        value={value}
        onChange={onChange}
        onClick={onClick}
        type="checkbox"
        name={"status"}
        id={label}
      />
      <label
        className={`${classes.label} ${checked ? classes.show : classes.hidden}`}
        htmlFor={label}
      >
        <BsCheck2 className={`${classes.icon} ${checked ? classes.show : classes.hidden}`} />
        {label}
      </label>
    </Fragment>
  );
}

export default Button;
