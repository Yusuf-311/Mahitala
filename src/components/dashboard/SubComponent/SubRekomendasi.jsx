// Component

const Rekomendasi = (props) => {
  // eslint-disable-next-line react/prop-types
  const { images, status, nilai, idealitas } = props;
  return (
    <div className="flex items-center self-center gap-3 mt-5 lg:gap-7">
      <div>
        <img src={images} className="w-16" alt="" />
      </div>
      <div>
        <div className="flex gap-3">
          <h4 className="text-[#6C7D41] font-semibold text-[10px] lg:text-[13px]">
            {status}
          </h4>
          <p className="lg:text-[12px] text-[9px]">{idealitas}</p>
        </div>
        <p className="lg:text-[12px] text-[9px]">
          Rata-rata bulanan {status} di lokasi Anda saat ini adalah {nilai}{" "}
        </p>
      </div>
    </div>
  );
};
export default Rekomendasi;
