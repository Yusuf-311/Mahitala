/* eslint-disable react/prop-types */
const SubStatusCuaca = (props) => {
  const { images, content, status, keterangan, nilai } = props;

  return (
    <>
      <div className="flex items-center p-4 bg-white border border-black shadow-lg gap-7 rounded-3xl">
        <div className="w-1/4 text-center">
          <img src={images} className="mx-auto w-14" alt="" />
          <p className="text-[#6C7D41] mt-1">{nilai}</p>
          <p className="text-[12px]">{status}</p>
        </div>
        <div className="w-3/4">
          <h4 className="font-medium text-[12px]">{keterangan} :</h4>
          <p className="text-[12px]">{content}</p>
        </div>
      </div>
    </>
  );
};

export default SubStatusCuaca;
