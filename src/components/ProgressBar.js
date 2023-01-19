import ProgressBar from "react-bootstrap/ProgressBar";
import Confetti from "react-confetti";

import "../assets/styles/progressbar.css";

function Progressbar(props) {
  // const { width, height } = useWindowSize();

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
      <ProgressBar
        now={now}
        variant='green'
        label={`${now}%`}
        visuallyHidden
        className='progressbar'
      />

      {now === 100 && (
        <Confetti
          width={200}
          height={200}
          numberOfPieces={50}
          recycle={false}
          confettiSource={{ x: 100, y: 75, w: 200, h: 200 }}
          className='confetti'
        />
      )}
    </>
  );
}

export default Progressbar;
