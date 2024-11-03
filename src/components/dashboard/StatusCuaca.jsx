import PergerakanAwan from "../../assets/Icon/pergerakan-awan.png";
import KecAngin from "../../assets/Icon/kec-angin.png";
import CurahHujan from "../../assets/Icon/curah-hujan.png";
import SubStatusCuaca from "./SubComponent/SubStatusCuaca";
import Visibilitas from "../../assets/Icon/visibility.png";

/* eslint-disable react/prop-types */
const StatusCuaca = () => {
  return (
    <>
      {" "}
      <SubStatusCuaca
        keterangan="Pergerakan Awan"
        status="Suhu udara"
        images={PergerakanAwan}
        content="Awan bergerak dari arah barat laut menuju timur laut dengan kecepatan sedang. Diperkirakan tidak ada hujan lebat di wilayah ini hari ini."
      />
      <SubStatusCuaca
        keterangan="Visibilitas"
        status="Pengendapan"
        images={Visibilitas}
        content="Jarak pandang saat ini berada pada kisaran 10 km, cukup baik untuk aktivitas di luar ruangan."
      />
      <SubStatusCuaca
        keterangan="Angin"
        status="Kecepatan Angin"
        images={KecAngin}
        content="Kecepatan angin stabil di 4 km/jam dengan arah dari barat daya."
      />
      <SubStatusCuaca
        keterangan="Curah Hujan"
        status="Kelembapan"
        images={CurahHujan}
        content="Tidak ada hujan signifikan yang diprediksi hari ini, dengan curah hujan minimal selama 24 jam ke depan."
      />
    </>
  );
};

export default StatusCuaca;
