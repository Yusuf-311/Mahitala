import CurahHujan from "../../assets/Icon/curah-hujan (2).png";
import SuhuUdara from "../../assets/Icon/suhu-udara.png";
import Kelembapan from "../../assets/Icon/kelembapan.png";
import Rekomendasi from "./SubComponent/SubRekomendasi";

const RekomendasiAI = () => {
  return (
    <div className="w-1/3 p-10 mt-2 border border-black shadow-lg rounded-3xl ">
      <p>
        Tanaman yang cocok ditanam periode ini adalah padi. Kami
        merekomendasikan Anda untuk mempertimbangkannya dalam proses penanaman.
        Pastikan Anda melakukan pengecekan kondisi tanah sebelum melanjutkan
        kegiatan penanaman.
      </p>

      <Rekomendasi images={SuhuUdara} status="Suhu Udara" nilai="26°C" />
      <Rekomendasi images={CurahHujan} status="Curah Hujan" nilai="76%." />
      <Rekomendasi images={Kelembapan} status="Kelembapan" nilai="252 mm." />
    </div>
  );
};

export default RekomendasiAI;
