const SubPrediksiKedepan = (props) => {
  // eslint-disable-next-line react/prop-types
  const { waktu, images, suhu } = props;
  return (
    <>
      <div className="lg:p-8 px-5 py-3 bg-[#545f39] rounded-3xl  space-y-2 text-center ">
        <p className="text-white lg:text-[12px] text-[9px] ">{waktu}</p>
        <img src={images} className="mx-auto w-9 lg:w-16" alt="" />

        <p className="text-white lg:text-[12px] text-[9px]">{suhu}</p>
      </div>
    </>
  );
};

export default SubPrediksiKedepan;
