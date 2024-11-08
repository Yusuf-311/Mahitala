/* eslint-disable react/prop-types */
const SubStatusCuaca = (props) => {
  const { images, content, status, keterangan, nilai } = props;

  return (
    <>
      <div className="flex items-center p-4 bg-white border border-black shadow-lg gap-7 rounded-3xl">
        <div className="w-1/4 text-center">
          <img src={images} className="w-8 mx-auto lg:w-14" alt="" />
          <p className="text-[#6C7D41] mt-1 lg:text-[12px] text-[9px]">
            {nilai}
          </p>
          <p className="lg:text-[12px] text-[9px]">{status}</p>
        </div>
        <div className="w-3/4">
          <h4 className="font-medium lg:text-[12px] text-[10px]">
            {keterangan} :
          </h4>
          <p className="lg:text-[12px] text-[9px]">{content}</p>
        </div>
      </div>
    </>
  );
};

export default SubStatusCuaca;
