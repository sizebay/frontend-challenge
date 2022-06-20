import { Wrapper } from "./styles";

const DateHeader = () => {
  const [weekday, month, day, year] = new Date(Date.now())
    .toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    .replaceAll(",", "")
    .split(" ");

  return (
    <Wrapper>
      <div className="date-container">
        <h2>{day}</h2>
        <div>
          <span className="month">{month}</span>
          <span className="year">{year}</span>
        </div>
      </div>
      <div>
        <h3>{weekday}</h3>
      </div>
    </Wrapper>
  );
};

export default DateHeader;
