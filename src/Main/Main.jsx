import Calender from "../Components/Calender/Calender";
import Clock from "../Components/Clock/Clock";

const Main = () => {
  return (
    <div className="max-h">
      <Clock />
      <div className="relative w-[530px] h-[400px] shadow-[inset_5px_5px_7px_6px_#e2e8f0,10px_10px_8px_3px_#e2e8f0] flex rounded-md bg-white ">
        <Calender />
      </div>
    </div>
  );
};

export default Main;
