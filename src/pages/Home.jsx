import PrediksiCuaca from "../components/dashboard/PrediksiCuaca";
import PrediksiKedepan from "../components/dashboard/PrediksiKedepan";
import RekomendasiAI from "../components/dashboard/RekomendasiAI";
import StatusCuaca from "../components/dashboard/StatusCuaca";
import "./css/home.css";

const Home = () => {
  return (
    <>
      <div className="gap-10 p-3 space-y-5 lg:p-5 lg:flex py-7 hero-background">
        <div className="lg:w-3/5 block lg:p-6 p-5 rounded-3xl bg-[#BAAD8A] bg-opacity-85">
          <h1 className="font-bold">Cuaca Hari Ini</h1>{" "}
          <div className="p-4 mt-2 bg-white border border-black shadow-lg lg:p-8 rounded-3xl">
            <PrediksiCuaca />
          </div>
          <div className="grid gap-4 mt-10 lg:gap-10 lg:grid-cols-2 ">
            <StatusCuaca />
          </div>
        </div>

        <div className="lg:w-2/5 p-5 rounded-3xl bg-[#BAAD8A] bg-opacity-85">
          <h1 className="font-bold">Rekomendasi Tanaman</h1>
          <div className="p-4 mt-2 bg-white border border-black shadow-lg lg:p-8 rounded-3xl">
            <RekomendasiAI />
          </div>
          <div className="p-4 mt-10 bg-white border border-black shadow-lg lg:p-8 rounded-3xl">
            <PrediksiKedepan />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
