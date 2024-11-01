import PrediksiCuaca from "../components/dashboard/PrediksiCuaca";

const Home = () => {
  return (
    <>
      {" "}
      <div className="px-9 pt-7 ">
        <h1 className="text-[#6C7D41] text-2xl font-bold"> Cuaca Hari Ini</h1>
        <PrediksiCuaca />
      </div>
    </>
  );
};

export default Home;
