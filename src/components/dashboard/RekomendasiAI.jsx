import CurahHujan from "../../assets/Icon/curah-hujan (2).png";
import SuhuUdara from "../../assets/Icon/suhu-udara.png";
import Kelembapan from "../../assets/Icon/kelembapan.png";
import Rekomendasi from "./SubComponent/SubRekomendasi";

const RekomendasiAI = () => {
  return (
    <>
      <p className="lg:text-[12px] text-[10px] text-justify">
        Tanaman yang cocok ditanam periode ini adalah padi. Kami
        merekomendasikan Anda untuk mempertimbangkannya dalam proses penanaman.
        Pastikan Anda melakukan pengecekan kondisi tanah sebelum melanjutkan
        kegiatan penanaman.
      </p>

      <Rekomendasi
        images={SuhuUdara}
        status="Suhu Udara"
        idealitas="Ideal"
        nilai="26°C"
      />
      <Rekomendasi
        images={CurahHujan}
        status="Curah Hujan"
        idealitas="Mendekati Ideal"
        nilai="76%."
      />
      <Rekomendasi
        images={Kelembapan}
        status="Kelembapan"
        idealitas="Ideal"
        nilai="252 mm."
      />
    </>
  );
};

export default RekomendasiAI;
