import Image from "next/image";
import Category from "../Category/Category";
import licensingImage from "../../asset/images/3rd.jpg";

const Licensing = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-24 font-snigdha">
      <div className="flex flex-col justify-center items-center">
        <p
          className="text-center text-[40px]"
          style={{
            background: "linear-gradient(270deg, #F09 6.95%, rgba(255, 0, 153, 0.71) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          লাইসেন্সিং পরীক্ষা প্রস্তুতি
        </p>
        <div
          style={{
            background:
              "linear-gradient(270deg, rgba(255, 0, 153, 0.00) 0%, #F09 51.19%, rgba(255, 0, 153, 0.00) 100%)",
            width: "400px",
            height: "3px",
          }}
        ></div>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-10">
        <Category />
        <Category />
        <Category />
      </div>
      <div className="flex items-center justify-center gap-14 mt-14 text-[#3066B1] font-banglaborno text-left">
        <Image
          src={licensingImage}
          alt="licensing image"
          width={300}
          height={200}
          className="rounded-md"
        />
        <div>
          <h3 className="text-[36px]">লাইসেন্সিং এর পূর্ণাঙ্গ প্রস্তুতি </h3>
          <h1 className="text-[65px]">
            এখন, <span className="text-[#F09]">অনলাইনে</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Licensing;
