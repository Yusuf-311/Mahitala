const SubPrediksiKedepan = (props) => {
  // eslint-disable-next-line react/prop-types
  const { jam, images, suhu, warna } = props;
  return (
    <>
      <div className={`p-6 ${warna} rounded-3xl w-28 space-y-2 text-center `}>
        <p className="text-white text-[12px]">{jam}</p>
        <img src={images} className="mx-auto w-11" alt="" />
        <p className="text-white text-[12px]">{suhu}</p>
      </div>
    </>
  );
};

export default SubPrediksiKedepan;