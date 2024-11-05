/* eslint-disable no-unused-vars */
const SubKategoriPopuler = (props) => {
  // eslint-disable-next-line react/prop-types
  const { images, judul } = props;
  return (
    <>
      {" "}
      <div className="w-56 border border-gray-200 rounded-lg shadow E9ECE3 dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="w-56 mx-auto rounded-t-lg" src={images} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <p className="mb-2 font-bold tracking-tight text-center text-gray-900 dark:text-white">
              {judul}
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default SubKategoriPopuler;
