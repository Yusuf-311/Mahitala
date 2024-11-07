import Hama from "../../assets/Images/Hama.png";
import SubDiskusiTerakhir from "./SubComponent/SubDiskusiTerakhir";

const DiskusiTerakhir = () => {
  return (
    <>
      <div className="p-6 space-y-3 border  rounded-3xl bg-[#E9ECE3] ">
        <p>Topik terkini yang sedang ramai dibahas</p>

        <SubDiskusiTerakhir
          images={Hama}
          judul="Suhu Ekstrem dan Pengelolaan Air"
          content="Bagaimana cara kalian mengelola air saat suhu terlalu panas? Apakah prediksi cuaca dapat membantu?"
        />
        <SubDiskusiTerakhir
          images={Hama}
          judul="Suhu Ekstrem dan Pengelolaan Air"
          content="Bagaimana cara kalian mengelola air saat suhu terlalu panas? Apakah prediksi cuaca dapat membantu?"
        />
        <SubDiskusiTerakhir
          images={Hama}
          judul="Suhu Ekstrem dan Pengelolaan Air"
          content="Bagaimana cara kalian mengelola air saat suhu terlalu panas? Apakah prediksi cuaca dapat membantu?"
        />
      </div>
    </>
  );
};

export default DiskusiTerakhir;
