import { useState } from "react";
import Calendar from "react-calendar";
const CalenderJs = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  return (
    
      <div>
        <Calendar onChange={onChange} className="calendar" value={date}  />{console.log(date)}
      
    </div>
  );
};

export default CalenderJs;
