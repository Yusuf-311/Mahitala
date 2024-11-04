import PrediksiCuaca from "../components/dashboard/PrediksiCuaca";
import PrediksiKedepan from "../components/dashboard/PrediksiKedepan";
import RekomendasiAI from "../components/dashboard/RekomendasiAI";
import StatusCuaca from "../components/dashboard/StatusCuaca";
import "./css/home.css";

const Home = () => {
  return (
    <>
      <div className="flex gap-10 p-5 py-7 hero-background">
        <div className="w-3/5 p-6 rounded-3xl bg-[#BAAD8A]">
          <h1 className="font-bold">Cuaca Hari Ini</h1>{" "}
          <div className="p-8 mt-2 bg-white border border-black shadow-lg rounded-3xl">
            <PrediksiCuaca />
          </div>
          <div className="grid grid-cols-2 gap-10 mt-10 ">
            <StatusCuaca />
          </div>
        </div>

        <div className="w-2/5 p-6 rounded-3xl bg-[#BAAD8A]">
          <h1 className="font-bold">Rekomendasi AI</h1>
          <div className="p-8 mt-2 bg-white border border-black shadow-lg rounded-3xl">
            <RekomendasiAI />
          </div>
          <div className="p-8 mt-10 bg-white border border-black shadow-lg rounded-3xl">
            <PrediksiKedepan />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
