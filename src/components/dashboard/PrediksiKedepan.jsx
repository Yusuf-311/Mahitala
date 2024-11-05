import Kalender from "../../assets/Icon/calendar_month.png";
import SubPrediksiKedepan from "./SubComponent/SubPrediksiKedepan";
import Berawan from "../../assets/Icon/Berawan.png";
import CerahBerawan from "../../assets/Icon/Cerah-berawan.png";
import Hujan from "../../assets/Icon/Hujan.png";

const PrediksiKedepan = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-4 align-middle">
          <img src={Kalender} className="w-6" alt="" />
          <p className="font-medium">Besok Hari</p>
        </div>
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex gap-4 mt-5 whitespace-nowrap">
            <SubPrediksiKedepan waktu="09.00" images={Berawan} suhu="17° " />
            <SubPrediksiKedepan
              waktu="10.00"
              images={CerahBerawan}
              suhu="24° "
            />
            <SubPrediksiKedepan waktu="11.00" images={Hujan} suhu="20° " />
            <SubPrediksiKedepan waktu="12.00" images={Berawan} suhu="19° " />
            <SubPrediksiKedepan waktu="12.00" images={Berawan} suhu="19° " />
          </div>
        </div>
        <div className="flex items-center gap-4 mt-5 align-middle">
          <img src={Kalender} className="w-6" alt="" />
          <p className="font-medium">Prediksi 5 Hari Kedepan</p>
        </div>
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex gap-4 mt-5 whitespace-nowrap">
            <SubPrediksiKedepan waktu="Senin" images={Berawan} suhu="17° " />
            <SubPrediksiKedepan
              waktu="Selasa"
              images={CerahBerawan}
              suhu="24° "
            />
            <SubPrediksiKedepan waktu="Rabu" images={Hujan} suhu="20° " />
            <SubPrediksiKedepan waktu="Kamis" images={Berawan} suhu="19°" />
            <SubPrediksiKedepan waktu="Jumat" images={Berawan} suhu="19° " />
          </div>
        </div>
      </div>
    </>
  );
};

export default PrediksiKedepan;
