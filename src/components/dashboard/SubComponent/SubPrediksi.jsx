const SubPrediksi = (props) => {
  // eslint-disable-next-line react/prop-types
  const { images, waktu, suhu } = props;
  return (
    <div className="space-y-3 text-center basis-1/4">
      <img src={images} className="mx-auto w-11" alt="" />
      <p className="text-white">{waktu}</p>
      <p className="text-white">{suhu}</p>
    </div>
  );
};

export default SubPrediksi;
