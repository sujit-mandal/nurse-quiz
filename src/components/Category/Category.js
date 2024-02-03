import Image from "next/image";
import bscLogo from "../../asset/images/Bsc.png";
const Category = () => {
  return (
    <div className="flex items-center gap-5 bg-white border-l-[6px] border-[#3066B1] py-6 px-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <rect
          width="50"
          height="50"
          rx="8"
          fill="url(#paint0_linear_263_1053)"
        />
        <ellipse cx="25.5" cy="25" rx="17.5" ry="20" fill="white" />
        <path
          d="M35 23V26H32V23H35ZM15 26H18V23H15V26ZM30 18C30 16.9 29.1 16 28 16H22C20.9 16 20 16.9 20 18V26H30V18ZM20 28H19V30H24V31L20 35H22.8L25 32.8L27.2 35H30L26 31V30H31V28H20Z"
          fill="url(#paint1_linear_263_1053)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_263_1053"
            x1="0"
            y1="0"
            x2="50"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0085FF" />
            <stop offset="1" stop-color="#001BA7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_263_1053"
            x1="19.5"
            y1="16"
            x2="31"
            y2="35"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0028B5" />
            <stop offset="1" stop-color="#0038FF" stop-opacity="0.62" />
          </linearGradient>
        </defs>
      </svg>
      <div className="space-y-2">
        <h3 className="text-[#3066B1] text-xl">বিএসসি ইন নার্সিং</h3>
        <p className="text-[#038AC3]">ভর্তি প্রস্তুতি ২০২৪</p>
      </div>
    </div>
  );
};

export default Category;
