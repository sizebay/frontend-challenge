import ProgressBar from "react-bootstrap/ProgressBar";

import "../assets/styles/progressbar.css";

function Progressbar(props) {
  let totalTodos = props.todos.length;
  function handleCompletedTodos() {
    let result = 0;
    props.todos.forEach((el) => {
      if (el.status === "Done") {
        result += 1;
      }
    });

    return result;
  }
  const now = (handleCompletedTodos() * 100) / totalTodos;

  return (
    <>
      <ProgressBar now={now} variant='green' label={`${now}%`} visuallyHidden />
    </>
  );
}

export default Progressbar;
