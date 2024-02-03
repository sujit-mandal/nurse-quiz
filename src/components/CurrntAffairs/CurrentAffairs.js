import Image from "next/image";
import questionMark from "../../asset/images/Questionmark.svg";

const CurrentAffairs = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20 flex justify-between items-center">
      <div className="w-[70%] space-y-2">
        <div className="flex items-center gap-5">
          <Image
            src={questionMark}
            alt="question mark icon"
            width={50}
            height={50}
          />
          <p className="text-[#696984] text-[30px]">
            প্রতি মাসের আপডেট তথ্য পান।
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Image
            src={questionMark}
            alt="question mark icon"
            width={50}
            height={50}
          />
          <p className="text-[#696984] text-[30px]">
          বিভিন্ন ভর্তি এবং চাকরি পরীক্ষা প্রস্তুতির জন্য সাধারণ জ্ঞান সম্পর্কে আপডেট রাখুন নিজেকে।
          </p>
        </div>
      </div>
      <div>
        <button className="px-5 py-2 bg-[#3066B1] text-white rounded-md">সাম্প্রতিক প্রশ্ন</button>
      </div>
    </div>
  );
};

export default CurrentAffairs;
