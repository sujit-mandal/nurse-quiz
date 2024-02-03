import Image from "next/image";
import Category from "../Category/Category";
import jobImage from "../../asset/images/1st.jpg";

const Jobs = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-24 font-snigdha">
        <div className="flex flex-col justify-center items-center">
          <p
            className="text-center text-[40px]"
            style={{
              background: "linear-gradient(270deg, #0045A5 6.95%, #5679F5 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            চাকরির প্রস্তুতি
          </p>
          <div
            style={{
              background:
              "linear-gradient(270deg, rgba(20, 0, 255, 0.00) 0%, rgba(0, 89, 255, 0.90) 16%, #006AFF 86.5%, rgba(0, 64, 255, 0.00) 100%)",
              width: "250px",
              height: "3px",
            }}
          ></div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-10">
          <Category />
          <Category />
        </div>
        <div className="flex items-center justify-center gap-14 mt-14 text-[#3066B1] font-banglaborno text-right">
          <div>
            <h3 className="text-[36px]">চাকরির প্রস্তুতি নিয়ে </h3>
            <h1 className="text-[65px]">
            নো-<span className="text-[#F09]">টেনশন</span>
            </h1>
          </div>
          <Image
            src={jobImage}
            alt="job image"
            width={300}
            height={200}
            className="rounded-md"
          />
        </div>
      </div>
    );
};

export default Jobs;