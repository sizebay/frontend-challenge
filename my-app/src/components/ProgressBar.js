import "./ProgressBar.css";

const ProgressBar = ({ tasks }) => {
  const calculateProgressBarPercent = () => {
    const totalTasks = tasks.length;
    const doneTasks = tasks.filter((task) => task.done).length;

    if (totalTasks === 0) {
      return 0;
    }

    return (doneTasks / totalTasks) * 100;
  };

  const percent = calculateProgressBarPercent();

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;
