const SubPrediksiKedepan = (props) => {
  // eslint-disable-next-line react/prop-types
  const { waktu, images, suhu } = props;
  return (
    <>
      <div className="p-8 bg-[#545f39] rounded-3xl  space-y-2 text-center ">
        <p className="text-white text-[12px]">{waktu}</p>
        <img src={images} className="w-16 mx-auto" alt="" />

        <p className="text-white text-[12px]">{suhu}</p>
      </div>
    </>
  );
};

export default SubPrediksiKedepan;
