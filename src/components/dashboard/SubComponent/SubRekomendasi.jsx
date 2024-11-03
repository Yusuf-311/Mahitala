// Component

const Rekomendasi = (props) => {
  // eslint-disable-next-line react/prop-types
  const { images, status, nilai } = props;
  return (
    <div className="flex items-center self-center mt-5 gap-7">
      <div>
        <img src={images} className="w-16" alt="" />
      </div>
      <div>
        <div className="flex gap-3">
          <h4 className="text-[#6C7D41] font-semibold">{status}</h4>
          <p>Ideal</p>
        </div>
        <p>
          Rata-rata bulanan {status} di lokasi Anda saat ini adalah {nilai}{" "}
        </p>
      </div>
    </div>
  );
};
export default Rekomendasi;
