import "./Modal.css";
import ProgressBar from "./ProgressBar";

const Modal = ({ currentDate }) => {
  const day = currentDate.toLocaleDateString("en-US", { day: "numeric" });
  const month = currentDate.toLocaleDateString("en-US", { month: "short" });
  const year = currentDate.toLocaleDateString("en-US", { year: "numeric" });
  const weekday = currentDate.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="modal">
      <div>
        <div className="modal-content">
          <p className="day">{day}</p>
          <div className="align-monthyear">
            <p className="month">{month}</p>
            <p className="year">{year}</p>
          </div>
          <p className="weekday">{weekday}</p>
        </div>

        <ProgressBar percent={"25"} />
      </div>
    </div>
  );
};

export default Modal;
