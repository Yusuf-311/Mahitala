const SubKategoriDiskusiTeratas = (props) => {
  // eslint-disable-next-line react/prop-types
  const { images, judul, nama, content } = props;
  return (
    <>
      <a
        href="#"
        className="block p-6 space-y-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <img
              className="rounded-full w-9 h-9"
              src={images}
              alt="profile picture"
            />

            <p>
              Oleh <span className="text-[#6C7D41] font-semibold">{nama}</span>
            </p>
          </div>
          <div>
            <p className="text-[#6C7D41] ">Rabu, 23 Oktober 2024, 5:21 WIB</p>
          </div>
        </div>
        <h5 className="mb-2 text-[14px] font-semibold tracking-tight text-gray-900 dark:text-white">
          {judul}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {content}
        </p>
      </a>
    </>
  );
};

export default SubKategoriDiskusiTeratas;
