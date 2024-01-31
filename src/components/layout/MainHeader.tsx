import classes from "./main-header.module.css";

function MainHeader() {
  const date = new Date();

  //Format the date of main header component
  const day = date.toLocaleDateString("en-US", { day: "numeric" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.toLocaleDateString("en-US", { year: "numeric" });
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const slicedMonth = month.slice(0, 3);

  return (
    <div className={classes.content}>
      <div className={classes.datesContainer}>
        <h2 className={classes.day}>{day}</h2>

        <div className={classes.dateWrapper}>
          <h5>
            <span className={classes.month}>{slicedMonth}</span>
            <span className={classes.year}>{year}</span>
          </h5>
        </div>
      </div>
      <div className={classes.dayWritten}>
        <h4>{weekday}</h4>
      </div>
    </div>
  );
}

export default MainHeader;
