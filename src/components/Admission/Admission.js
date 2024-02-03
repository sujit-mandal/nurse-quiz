import Image from "next/image";
import Category from "../Category/Category";
import admissionImage from '../../asset/images/2nd.jpg'

const Admission = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-5 font-snigdha">
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
          ভর্তি প্রস্তুতি
        </p>
        <div
          style={{
            background:
              "linear-gradient(270deg, rgba(20, 0, 255, 0.00) 0%, rgba(0, 89, 255, 0.90) 16%, #006AFF 86.5%, rgba(0, 64, 255, 0.00) 100%)",
            width: "200px",
            height: "3px",
          }}
        ></div>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-10">
        <Category />
        <Category />
        <Category />
      </div>
      <div className="flex items-center justify-center gap-14 mt-14 text-[#3066B1] font-banglaborno text-right">
        <div>
          <h3 className="text-[40px]">নার্সিং ভর্তি প্রস্তুতি হবে </h3>
          <h1 className="text-[60px]">
            অনলাইনে, <span className="text-[#F09]">সহজে</span>
          </h1>
        </div>
        <Image src={admissionImage} alt="addmission image" width={300} height={200} className="rounded-md"/>
      </div>
    </div>
  );
};

export default Admission;
