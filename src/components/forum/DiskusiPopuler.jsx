import Hama from "../../assets/Images/Hama.png";
import SubDiskusiPopuler from "./SubComponent/SubDiskusiPopuler";

const DiskusiPopuler = () => {
  return (
    <>
      <div className="p-6 space-y-3 border rounded-3xl bg-[#E9ECE3]">
        <p>
          Mari kita bahas beberapa topik diskusi yang sedang populer saat ini,
          kira-kira mana yang paling menarik perhatian Anda?
        </p>

        <SubDiskusiPopuler
          images={Hama}
          judul="Suhu Ekstrem dan Pengelolaan Air"
          content="Bagaimana cara kalian mengelola air saat suhu terlalu panas? Apakah prediksi cuaca dapat membantu?"
        />
        <SubDiskusiPopuler
          images={Hama}
          judul="Suhu Ekstrem dan Pengelolaan Air"
          content="Bagaimana cara kalian mengelola air saat suhu terlalu panas? Apakah prediksi cuaca dapat membantu?"
        />
        <SubDiskusiPopuler
          images={Hama}
          judul="Suhu Ekstrem dan Pengelolaan Air"
          content="Bagaimana cara kalian mengelola air saat suhu terlalu panas? Apakah prediksi cuaca dapat membantu?"
        />
      </div>
    </>
  );
};
export default DiskusiPopuler;
