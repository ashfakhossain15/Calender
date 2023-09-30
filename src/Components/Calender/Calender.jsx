import { useState } from "react";
import Calendar from "react-calendar";
const CalenderJs = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div>
      <h1>There is the Calender</h1>
      <div> <Calendar onChange={onChange} value={date}/> </div>
    </div>
  );
};

export default CalenderJs;
