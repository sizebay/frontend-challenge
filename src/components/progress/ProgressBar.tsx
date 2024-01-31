import { ChoreInterface } from "@/utils/interfaces";
import classes from "./progress-bar.module.css";

interface ProgressBarProps {
  choresList: ChoreInterface[];
}

function ProgressBar({ choresList }: Readonly<ProgressBarProps>) {
  //Calculate the percentage of done chores
  let doneChoresCount = Object.values(choresList).reduce(
    (a, item) => a + (item.isDone === true ? 1 : 0),
    0
  );
  let totalChoresCount = choresList.length;

  let percentage = (doneChoresCount / totalChoresCount) * 100;

  return (
    <div className={classes.container}>
      <div className={classes.filler} style={{ width: `${percentage}%` }}></div>
    </div>
  );
}

export default ProgressBar;
