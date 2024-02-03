import Image from "next/image";
import govtLogo from "../../asset/images/govt.png";
import privatelogo from "../../asset/images/private.png";
import job from "../../asset/images/job.png";

const Jobs = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20 grid grid-cols-3 gap-10 items-end">
      <div className="col-span-2">
        <h1 className="text-5xl font-semibold text-[#3066B1]">
          খুজে নিন স্বপ্নের চাকরি...
        </h1>
        <div className="flex gap-14 items-center mt-8">
          <div className="flex gap-5 items-center py-5 px-10 border-2 border-dashed border-[#3066B1] rounded-md hover:bg-green-200 cursor-pointer">
            <Image src={govtLogo} alt="govt logo" width={50} height={50} />
            <div className="text-xl text-[#3066B1] font-medium">
              <p>১৫</p>
              <p>সরকারি চাকরি</p>
            </div>
          </div>
          <div className="flex gap-5 items-center py-5 px-10 border-2 border-dashed border-[#3066B1] rounded-md hover:bg-green-200 cursor-pointer">
            <Image
              src={privatelogo}
              alt="private logo"
              width={50}
              height={50}
            />
            <div>
              <p>৯৫</p>
              <p>প্রাইভেট চাকরি</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <form>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block px-4 py-2 pl-10 w-full font-medium text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by organizations/designations/keywords"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-1.5 bg-[#3066B1] hover:bg-[#4a82d1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-1 "
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5">
          <div className="bg-[#3066B1] flex justify-between items-center text-white px-5 py-3 rounded-md">
            <p className="w-14 text-xl">Live Jobs</p>
            <p className="text-3xl font-bold">95</p>
          </div>
          <div className="bg-[#3066B1] flex justify-between items-center text-white px-5 py-3 rounded-md">
            <p className="w-20 text-xl">Posted Today</p>
            <p className="text-3xl font-bold">15</p>
          </div>
          <div className="bg-[#3066B1] flex justify-between items-center text-white px-5 py-3 rounded-md">
            <p className="w-20 text-xl">Deadline Today</p>
            <p className="text-3xl font-bold">5</p>
          </div>
          <div className="bg-[#3066B1] flex justify-between items-center  text-white px-5 py-3 rounded-md">
            <p className="w-20 text-xl">Deadline Tomorrow</p>
            <p className="text-3xl font-bold">7</p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <Image src={job} alt="job logo" width={500} height={500} />
      </div>
    </div>
  );
};

export default Jobs;
