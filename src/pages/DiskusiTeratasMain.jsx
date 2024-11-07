import DiskusiTeratas from "../components/forum/DiskusiTeratas";

const DiskusiTeratasMain = () => {
  return (
    <>
      <div className="p-10">
        <div className="flex justify-between">
          <p className="my-auto text-lg lg:w-10"> {"< Kembali"}</p>
          <div className="w-2/4"></div>
          <div className="space-x-3"></div>
        </div>
        <hr className="my-7" />
        <div className="lg:w-2/3 sm:w-1">
          <h1 className="my-3 font-bold text-[#6C7D41] text-[24px]">
            Diskusi Terakhir
          </h1>
          <DiskusiTeratas />
        </div>
      </div>
    </>
  );
};

export default DiskusiTeratasMain;
