import classes from "./layout.module.css";

function Layout(props: any) {
  return (
    <div className={classes.container}>
      {" "}
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

export default Layout;
