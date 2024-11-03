import PrediksiCuaca from "../components/dashboard/PrediksiCuaca";
import PrediksiKedepan from "../components/dashboard/PrediksiKedepan";
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
          <div className="grid w-2/3 grid-cols-2 gap-4 mt-10">
            <StatusCuaca />
          </div>
          <div className="container w-1/3 p-10 mt-10 border border-black shadow-lg rounded-3xl ">
            <PrediksiKedepan />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
