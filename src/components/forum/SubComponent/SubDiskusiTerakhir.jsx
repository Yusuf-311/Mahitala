const SubDiskusiTerakhir = (props) => {
  // eslint-disable-next-line react/prop-types
  const { images, judul, content } = props;
  return (
    <>
      <div className="flex gap-4 ">
        <img src={images} className="w-24 h-20 my-auto rounded-lg" alt="" />
        <div className="space-y-1">
          <h5 className="text-[12px] font-semibold">{judul}</h5>
          <p className="text-[12px]">{content}</p>
          <button
            type="button"
            className="text-white text-[12px] bg-[#6C7D41] hover:bg-[#6C7D43] focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-1.5 me-2 mb-2 focus:outline-none"
          >
            <p> Lihat Diskusi</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default SubDiskusiTerakhir;
