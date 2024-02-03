const Stats = () => {
  return (
    <div className="bg-white flex items-center justify-between shadow-lg shadow-gray-400 max-w-screen-xl mx-auto py-16 px-7 rounded-md mt-20 font-snigdha">
      <div className="flex items-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="50" fill="#FF007A" />
          <path
            d="M60 70V75H30C27.25 75 25 72.75 25 70V37.5H30V70H60ZM70 25H40C37.25 25 35 27.25 35 30V60C35 62.75 37.25 65 40 65H70C72.75 65 75 62.75 75 60V30C75 27.25 72.75 25 70 25ZM57.5 55H52.5V50H57.5V55ZM62 42C61.25 43 60.25 43.75 59.25 44.25C58.75 44.75 58.25 45 58 45.5C57.5 46 57.5 46.75 57.5 47.5H52.5C52.5 46.25 52.75 45.25 53.25 44.5C53.75 43.75 54.5 43 55.75 42.25C56.5 41.75 57 41.25 57.25 40.75C57.75 40.25 57.75 39.5 57.75 38.75C57.75 38 57.5 37.25 57 36.75C56.5 36.25 56 36 55 36C54.25 36 53.75 36.25 53.25 36.5C52.75 37 52.5 37.5 52.5 38.25H47.75C47.75 36.25 48.25 34.75 49.75 33.75C51.5 33 53.25 32.5 55.5 32.5C57.75 32.5 59.75 33 61 34.25C62.25 35.5 63 37 63 38.75C63 40 62.5 41 62 42Z"
            fill="white"
          />
        </svg>
        <div className="text-[#FF007A]  font-semibold">
          <h1 className=" text-[64px]">১০০০০+</h1>
          <p className="text-[30px]">প্রশ্ন</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="50" fill="#3066B1" />
          <path
            d="M61.3333 41.6667C61.3333 47.8056 56.3611 52.7778 50.2222 52.7778C44.0833 52.7778 39.1111 47.8056 39.1111 41.6667L39.4167 39.0556L30.7778 34.7222L50.2222 25L69.6667 34.7222V48.6111H66.8889V36.1111L61.0278 39.0556L61.3333 41.6667ZM50.2222 58.3333C62.5 58.3333 72.4444 63.3056 72.4444 69.4444V75H28V69.4444C28 63.3056 37.9444 58.3333 50.2222 58.3333Z"
            fill="white"
          />
        </svg>
        <div className="text-[#3066B1]  font-semibold">
          <h1 className=" text-[64px]">৫০০০+</h1>
          <p className="text-[30px]">শিক্ষার্থী</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="50" fill="#FF00C7" />
          <path
            d="M70 25H30C27.225 25 25 27.225 25 30V70C25 72.775 27.225 75 30 75H70C72.775 75 75 72.775 75 70V30C75 27.225 72.775 25 70 25ZM47.5 30C53.025 30 57.5 34.475 57.5 40C57.5 43.75 55.5 46.925 52.5 48.65V45.6C54.025 44.225 55 42.225 55 40C55 35.85 51.65 32.5 47.5 32.5C43.35 32.5 40 35.85 40 40C40 42.225 40.975 44.225 42.5 45.6V48.65C39.5 46.925 37.5 43.75 37.5 40C37.5 34.475 41.975 30 47.5 30ZM65 66.25C64.925 68.3 63.3 69.925 61.25 70H47.5C46.55 70 45.65 69.625 45 68.925L35 58.425L36.85 56.5C37.325 55.975 38 55.7 38.75 55.7H39.25L45 60V40C45 38.625 46.125 37.5 47.5 37.5C48.875 37.5 50 38.625 50 40V51.175L53.025 51.5L62.875 56.975C64.2 57.575 65 58.9 65 60.35V66.25Z"
            fill="white"
          />
        </svg>
        <div className="text-[#FF00C7]  font-semibold">
          <h1 className=" text-[64px]">২৫০+</h1>
          <p className="text-[30px]">মডেল টেস্ট</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
