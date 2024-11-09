import Solusi from "../assets/Images/Ledakan-Hama.png";

const About = () => {
  return (
    <>
      <div
        className="p-5 py-24 space-y-2 text-center text-white lg:py-32"
        style={{
          backgroundImage: `url(${Solusi})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-[12px]">Selamat Datang di Mahitala App</p>
        <h1 className="lg:text-[64.27px] text-[40px]">
          Agrikultur <span className="text-[#EEC044]"> &</span> <br /> Prediksi
          Cuaca
        </h1>
        <p>
          Solusi terpercaya untuk membantu petani mengelola risiko terkait
          perubahan <br /> cuaca ekstrem.
        </p>
      </div>
      <div className="text-center ">
        <h4 className="text-center text-[24px] font-bold my-5 ">
          Fitur Unggulan
        </h4>

        <div className="justify-center space-y-5 text-center lg:flex sm:block gap-9 ">
          <div className="bg-[#545F39] lg:w-60 text-white font-medium p-5 rounded-3xl content-center mx-14 lg:mx-0">
            <p>
              Prediksi Cuaca Akurat <br /> Berbasis AI
            </p>
          </div>
          <div className="bg-[#545F39] lg:w-60 text-white font-medium p-11 rounded-3xl content-center mx-14 lg:mx-0">
            <p>Data Cuaca Terkini</p>
          </div>
          <div className="bg-[#545F39] lg:w-60 text-white font-medium p-11 rounded-3xl content-center mx-14 lg:mx-0">
            <p>Rekomendasi Tanaman Berdasarkan Kondisi Cuaca</p>
          </div>
        </div>
        <div className="p-8 space-y-3">
          <div className="lg:flex sm:block lg:p-10 lg:px-44 gap-11">
            <div className="items-center self-center order-1 text-center align-middle lg:basis-1/2 ">
              <h4 className="lg:text-[24px] sm:text-center  sm:text-[15px] font-bold">
                Solusi Terintegrasi untuk Pertanian Cerdas
              </h4>
              <p className="lg:text-[15px] my-5 sm:text-[12px]">
                MahitalaApps dirancang untuk mempermudah pengambilan keputusan
                dalam pertanian. Dengan memanfaatkan teknologi AI dan data cuaca
                real-time, kami memberikan solusi yang dapat langsung diterapkan
                untuk menghadapi tantangan pertanian modern.
              </p>
            </div>
            <div className="basis-1/2 ">
              <img src={Solusi} className="rounded-2xl " alt="" />
            </div>
          </div>
          <div className="lg:flex sm:block lg:p-10 lg:px-44 gap-11">
            <div className="items-center self-center text-center align-middle lg:basis-1/2">
              <h4 className="lg:text-[24px] sm:text-[15px] font-bold">
                Forum Diskusi
              </h4>
              <p className="lg:text-[15px] my-5 sm:text-[12px]">
                MahitalaApps dirancang untuk menyediakan ruang bagi pada petani
                agar dapat berbagi pengetahuan, pengalaman serta tips di dunia
                pertanian.
              </p>
            </div>
            <div className="basis-1/2">
              <img src={Solusi} className="rounded-2xl" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
