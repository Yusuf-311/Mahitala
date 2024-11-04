const ForumDiskusi = () => {
  return (
    <>
      <div className="p-10">
        <div className="flex justify-between">
          <form className="w-2/4">
            <div className="mt-2">
              <div className="flex space-x-3 rounded-md sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="rounded-xl ring-1 ring-stone-950 block flex-1 border-0 bg-transparent py-1.5 pl-1 shadow-lg text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                />
                <button
                  type="submit"
                  className="bg-[#6C7D41] px-3 py-2 rounded-lg text-white"
                >
                  Cari
                </button>
              </div>
            </div>
          </form>
          <div className="space-x-3">
            {" "}
            <button
              type="submit"
              className="bg-[#6C7D41] px-3 py-2 rounded-lg text-white"
            >
              Buat Diskusi
            </button>
            <button
              type="submit"
              className="bg-[#6C7D41] px-3 py-2 rounded-lg text-white"
            >
              Diskusi terakhir
            </button>
          </div>
        </div>
        <hr className="mt-7" />
      </div>
      <div className="">
        {" "}
        <h1 className="font-bold">Kategori Populer</h1>
        <div className="w-3/5 p-6 rounded-3xl"></div>
      </div>
    </>
  );
};

export default ForumDiskusi;
