import classes from "./status-bar.module.css";
import Button from "../ui/Button";
import { FilterEnum } from "@/utils/enums";

interface StatusBarProps {
  setStatus: React.Dispatch<React.SetStateAction<FilterEnum>>;
  status: FilterEnum;
}

function StatusBar(props: Readonly<StatusBarProps>) {
  const { setStatus, status } = props;

  //Change button status
  function toggleHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setStatus((current) => {
      return current === event.target.value ? FilterEnum.Null : (event.target.value as FilterEnum);
    });
  }

  return (
    <div className={classes.container}>
      <Button
        label={"Done"}
        value={FilterEnum.Done}
        onChange={() => {}}
        checked={status === FilterEnum.Done}
        onClick={toggleHandler}
      />
      <Button
        label={"Pending"}
        value={FilterEnum.Pending}
        onChange={() => {}}
        checked={status === FilterEnum.Pending}
        onClick={toggleHandler}
      />
    </div>
  );
}

export default StatusBar;
