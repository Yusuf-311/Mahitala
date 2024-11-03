import PrediksiCuaca from "../components/dashboard/PrediksiCuaca";
import RekomendasiAI from "../components/dashboard/RekomendasiAI";
import StatusCuaca from "../components/dashboard/StatusCuaca";

const Home = () => {
  return (
    <>
      <div className="px-9 pt-7 ">
        <div className="flex gap-20">
          {" "}
          <PrediksiCuaca />
          <RekomendasiAI />
        </div>

        <div className="flex gap-20">
          <StatusCuaca />
          <div className="container w-1/3 p-10 mt-2 border border-black shadow-lg rounded-3xl "></div>
        </div>
      </div>
    </>
  );
};

export default Home;
