import Hujan from "../../assets/Icon/Hujan.png";
import Angin from "../../assets/Icon/Angin.png";
import Airdrop from "../../assets/Icon/Airdrop.png";
import Berawan from "../../assets/Icon/Berawan.png";
import CerahBerawan from "../../assets/Icon/Cerah-berawan.png";
import Strip from "../../assets/Icon/Strip-3.png";
import PergerakaAwan from "../../assets/Icon/pergerakan-awan.png";

const PrediksiCuaca = () => {
  return (
    <>
      <div className="flex gap-20">
        <div className="container w-2/3 p-10 mt-2 border border-black shadow-lg rounded-3xl ">
          <div className="flex flex-row justify-between mb-10">
            <div className="basis-3/4">
              {" "}
              <p>Sleman, Daerah Istimewa Yogyakarta</p>
              <p>Rabu, 23 Oktober 2024</p>
            </div>
            <div className="basis-1/4">
              <p className="text-end">Hari Ini 00.09 WIB</p>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="space-y-3 text-center align-middle basis-1/2 md:basis-1/2">
              <p className="text-[#6C7D41]">
                {" "}
                <span className="font-semibold text-9xl ">17 </span>
              </p>

              <p className="font-normal">Sebagian Cerah</p>
            </div>

            <div className="text-white align-middle p-5 pb-5 basis-1/2 md:basis-1/2 bg-[#6C7D41] rounded-3xl">
              <p className="mb-5">Perkiraan Cuaca Hari Ini</p>

              <div className="flex gap-1">
                <div className="space-y-3 text-center basis-1/4">
                  <img src={Hujan} className="mx-auto w-11" alt="" />
                  <p className="text-white">Pagi</p>
                  <p className="text-white">17</p>
                </div>
                <div className="space-y-3 text-center basis-1/4">
                  <img src={CerahBerawan} className="mx-auto w-11 " alt="" />
                  <p className="text-white">Siang</p>
                  <p className="text-white">17</p>
                </div>
                <div className="space-y-3 text-center basis-1/4">
                  <img src={Berawan} className="mx-auto w-11 " alt="" />
                  <p className="text-white">Sore</p>
                  <p className="text-white">17</p>
                </div>
                <div className="space-y-3 text-center basis-1/4">
                  <img src={Hujan} className="mx-auto w-11 " alt="" />
                  <p className="text-white">Malam</p>
                  <p className="text-white">17</p>
                </div>
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
        <div className="container w-1/3 p-10 mt-2 border border-black shadow-lg rounded-3xl">
          <p>
            Tanaman yang cocok ditanam periode ini adalah padi. Kami
            merekomendasikan Anda untuk mempertimbangkannya dalam proses
            penanaman. Pastikan Anda melakukan pengecekan kondisi tanah sebelum
            melanjutkan kegiatan penanaman.
          </p>
        </div>
      </div>
      <div className="flex gap-20">
        <div className="grid w-2/3 grid-cols-2 gap-4 mt-10">
          <div className="flex items-center gap-2 p-8 border border-black rounded-3xl">
            <div className="text-center basis-3/4">
              <img src={PergerakaAwan} className="w-16 mx-auto" alt="" />
              <p className="text-[#6C7D41]">26</p>
              <p>Suhu Udara</p>
            </div>
            <div>
              <h4 className="font-medium">Pergerakan Awan :</h4>
              <p className="text-[12px]">
                Awan bergerak dari arah barat laut menuju timur laut dengan
                kecepatan sedang. Diperkirakan tidak ada hujan lebat di wilayah
                ini hari ini.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-8 border border-black rounded-3xl">
            <div className="text-center basis-3/4">
              <img src={PergerakaAwan} className="w-16 mx-auto" alt="" />
              <p className="text-[#6C7D41]">26</p>
              <p>Suhu Udara</p>
            </div>
            <div>
              <h4 className="font-medium">Pergerakan Awan :</h4>
              <p className="text-[12px]">
                Awan bergerak dari arah barat laut menuju timur laut dengan
                kecepatan sedang. Diperkirakan tidak ada hujan lebat di wilayah
                ini hari ini.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-8 border border-black rounded-3xl">
            <div className="text-center basis-3/4">
              <img src={PergerakaAwan} className="w-16 mx-auto" alt="" />
              <p className="text-[#6C7D41]">26</p>
              <p>Suhu Udara</p>
            </div>
            <div>
              <h4 className="font-medium">Pergerakan Awan :</h4>
              <p className="text-[12px]">
                Awan bergerak dari arah barat laut menuju timur laut dengan
                kecepatan sedang. Diperkirakan tidak ada hujan lebat di wilayah
                ini hari ini.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-8 border border-black rounded-3xl">
            <div className="text-center basis-3/4">
              <img src={PergerakaAwan} className="w-16 mx-auto" alt="" />
              <p className="text-[#6C7D41]">26</p>
              <p>Suhu Udara</p>
            </div>
            <div>
              <h4 className="font-medium">Pergerakan Awan :</h4>
              <p className="text-[12px]">
                Awan bergerak dari arah barat laut menuju timur laut dengan
                kecepatan sedang. Diperkirakan tidak ada hujan lebat di wilayah
                ini hari ini.
              </p>
            </div>
          </div>
        </div>
        <div className="container w-1/3 p-6 mt-10 border border-black shadow-lg rounded-3xl"></div>
      </div>
    </>
  );
};

export default PrediksiCuaca;
