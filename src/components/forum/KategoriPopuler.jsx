import LedakanHama from "../../assets/Images/Hama.png";
import SubKategoriPopuler from "./SubComponent/SubKategoriPopuler";

const KategoriPopuler = (props) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { images, judul } = props;
  return (
    <>
      <div className="flex gap-4">
        <SubKategoriPopuler
          images={LedakanHama}
          judul="Prediksi Cuaca Mingguan"
        />
        <SubKategoriPopuler
          images={LedakanHama}
          judul="Tips Mengelola Tanaman di Musim Kemarau"
        />
        <SubKategoriPopuler
          images={LedakanHama}
          judul="Pengelolaan Air di Sawah"
        />
        <SubKategoriPopuler
          images={LedakanHama}
          judul="Mengatasi Hama dan Penyakit Tanaman"
        />
      </div>
    </>
  );
};

export default KategoriPopuler;
