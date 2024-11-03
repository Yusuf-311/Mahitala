import Kalender from "../../assets/Icon/calendar_month.png";
import SubPrediksiKedepan from "./SubComponent/SubPrediksiKedepan";
import Berawan from "../../assets/Icon/Berawan.png";

const PrediksiKedepan = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-4 align-middle">
          <img src={Kalender} className="w-6" alt="" />
          <p className="font-medium">Sekarang</p>
        </div>
        <div className="flex gap-4 mt-5">
          <SubPrediksiKedepan
            jam="09.00"
            images={Berawan}
            suhu="19° "
            warna="bg-[#6C7D41]"
          />
          <SubPrediksiKedepan
            jam="09.00"
            images={Berawan}
            suhu="19° "
            warna="bg-[#6C7D41]"
          />
          <SubPrediksiKedepan
            jam="09.00"
            images={Berawan}
            suhu="19° "
            warna="bg-[#6C7D41]"
          />
          <SubPrediksiKedepan
            jam="09.00"
            images={Berawan}
            suhu="19° "
            warna="bg-[#6C7D41]"
          />
        </div>
        <div className="flex items-center gap-4 mt-5 align-middle">
          <img src={Kalender} className="w-6" alt="" />
          <p className="font-medium">Ramalan 10 hari kedepan</p>
        </div>
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex gap-4 mt-5 whitespace-nowrap">
            <SubPrediksiKedepan
              jam="09.00"
              images={Berawan}
              suhu="19° "
              warna="bg-[#6C7D41]"
            />
            <SubPrediksiKedepan
              jam="09.00"
              images={Berawan}
              suhu="19° "
              warna="bg-[#6C7D41]"
            />
            <SubPrediksiKedepan
              jam="09.00"
              images={Berawan}
              suhu="19° "
              warna="bg-[#6C7D41]"
            />
            <SubPrediksiKedepan
              jam="09.00"
              images={Berawan}
              suhu="19° "
              warna="bg-[#6C7D41]"
            />
            <SubPrediksiKedepan
              jam="09.00"
              images={Berawan}
              suhu="19° "
              warna="bg-[#6C7D41]"
            />
            <SubPrediksiKedepan
              jam="09.00"
              images={Berawan}
              suhu="19° "
              warna="bg-[#6C7D41]"
            />
            <SubPrediksiKedepan
              jam="09.00"
              images={Berawan}
              suhu="19° "
              warna="bg-[#6C7D41]"
            />
            <SubPrediksiKedepan
              jam="09.00"
              images={Berawan}
              suhu="19° "
              warna="bg-[#6C7D41]"
            />
            <SubPrediksiKedepan
              jam="09.00"
              images={Berawan}
              suhu="19° "
              warna="bg-[#6C7D41]"
            />
            <SubPrediksiKedepan
              jam="09.00"
              images={Berawan}
              suhu="19° "
              warna="bg-[#6C7D41]"
            />
            <SubPrediksiKedepan
              jam="09.00"
              images={Berawan}
              suhu="19° "
              warna="bg-[#6C7D41]"
            />
            <SubPrediksiKedepan
              jam="09.00"
              images={Berawan}
              suhu="19° "
              warna="bg-[#6C7D41]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PrediksiKedepan;
