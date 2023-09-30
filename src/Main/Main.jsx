import CalenderJs from "../Components/Calender/Calender";
import Clock from "../Components/Clock/Clock";

const Main = () => {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-[100vh] bg-[#161623] w-full text-white overflow-hidden ">
      <div className=" relative z-[1000] ">
        <Clock />
        <div className="container border-r-[rgba(255,255,255,0.2)] border-b-[rgba(255,255,255,0.2)] relative lg:w-[560px] lg:h-[490px] flex rounded-md bg-gray-500 bg-opacity-30 backdrop-blur-lg border-gray-400 border items-center justify-center ">
          <CalenderJs />
        </div>
      </div>
    </section>
  );
};

export default Main;
