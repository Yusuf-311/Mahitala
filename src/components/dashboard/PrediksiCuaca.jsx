import Hujan from "../../assets/Icon/Hujan.png";
import Angin from "../../assets/Icon/Angin.png";
import Airdrop from "../../assets/Icon/Airdrop.png";
import Berawan from "../../assets/Icon/Berawan.png";
import CerahBerawan from "../../assets/Icon/Cerah-berawan.png";
import Strip from "../../assets/Icon/Strip-3.png";
import SubPrediksi from "./SubComponent/SubPrediksi";
import useCurrentDate from "../../hooks/useCurrentDate";

const PrediksiCuaca = () => {
  const { time, dateInfo } = useCurrentDate();

  return (
    <>
      <div className="space-y-10">
        <div className="flex flex-row justify-between mb-10">
          <div className="basis-3/4">
            {" "}
            <p>Sleman, Daerah Istimewa Yogyakarta</p>
            <p>
              {dateInfo.day}, {dateInfo.date} {dateInfo.month} {dateInfo.year}
            </p>
          </div>
          <div className="basis-1/4">
            <p className="text-end">Hari Ini {time} WIB</p>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="text-center align-middle basis-1/2 md:basis-1/2">
            <p className="text-[#6C7D41] font-semibold text-[128px]"> 17° </p>

            <p className="font-normal">Sebagian Cerah</p>
          </div>

          <div className="text-white self-center align-middle p-5  basis-1/2 md:basis-1/2 bg-[#6C7D41] rounded-3xl">
            <p className="mb-5">Perkiraan Cuaca Hari Ini</p>

            {/* SubPrediksi */}

            <div className="flex ">
              <SubPrediksi images={Hujan} waktu="Pagi" suhu="17°" />
              <SubPrediksi images={CerahBerawan} waktu="Siang" suhu="17°" />
              <SubPrediksi images={Berawan} waktu="Sore" suhu="17°" />
              <SubPrediksi images={Hujan} waktu="Malam" suhu="17°" />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-2/4 gap-x-6">
          <div className="flex items-center">
            <img src={Angin} className="w-10" alt="" />
            <p className="ml-2">720hpa</p>
          </div>
          <div className="flex items-center">
            <img src={Airdrop} className="w-10" alt="" />
            <p className="ml-2">87%</p>
          </div>
          <div className="flex items-center">
            <img src={Strip} className="w-10" alt="" />
            <p className="ml-2">4km/j</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrediksiCuaca;
