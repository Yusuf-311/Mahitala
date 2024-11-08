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
          <div className="lg:basis-3/4 basis-1/2">
            {" "}
            <p className="lg:text-[12px] text-[10px]">
              Sleman, Daerah Istimewa Yogyakarta
            </p>
            <p className="lg:text-[12px] text-[10px]">
              {dateInfo.day}, {dateInfo.date} {dateInfo.month} {dateInfo.year}
            </p>
          </div>
          <div className="basis-1/4">
            <p className="text-end lg:text-[12px] text-[10px] ">
              Hari Ini {time} WIB
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="text-center align-middle lg:basis-1/2 ">
            <p className="text-[#545f39] font-semibold lg:text-[128px] text-[40px]">
              {" "}
              17°{" "}
            </p>

            <p className="font-normal lg:text-[15px] text-[10px]">
              Sebagian Cerah
            </p>
          </div>

          <div className="text-white self-center align-middle lg:p-5 p-3  lg:basis-1/2  bg-[#545f39] rounded-3xl">
            <p className="mb-5 lg:text-[14px] text-[10px] hidden lg:block">
              Perkiraan Cuaca Hari Ini
            </p>

            {/* SubPrediksi */}

            <div className="flex gap-3 lg:gap-0">
              <SubPrediksi images={Hujan} waktu="Pagi" suhu="17°" />
              <SubPrediksi images={CerahBerawan} waktu="Siang" suhu="17°" />
              <SubPrediksi images={Berawan} waktu="Sore" suhu="17°" />
              <SubPrediksi images={Hujan} waktu="Malam" suhu="17°" />
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:w-2/4 lg:gap-x-6">
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
