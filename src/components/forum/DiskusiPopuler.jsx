import SubDiskusiPopuler from "./SubComponent/SubDiskusiPopuler";

const DiskusiPopuler = () => {
  return (
    <>
      <div>
        <p>
          Mari kita bahas beberapa topik diskusi yang sedang populer saat ini,
          kira-kira mana yang paling menarik perhatian Anda?
        </p>

        <SubDiskusiPopuler
          images={""}
          judul="Suhu Ekstrem dan Pengelolaan Air"
          content="Bagaimana cara kalian mengelola air saat suhu terlalu panas? Apakah prediksi cuaca dapat membantu?"
        />
      </div>
    </>
  );
};

export default DiskusiPopuler;
