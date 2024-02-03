import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <div className="bg-[#3066B1] font-poppins pb-16">
        <Navbar />
        <div className="text-white text-center uppercase font-medium mt-8">
          <h3 className="text-[40px] ">Bangladeshi First</h3>
          <h2 className="text-[36px]">
            Web Based{" "}
            <span className="text-[#FFE500] text-[73px] tracking-[10px]">
              Nursing
            </span>
            Exam
          </h2>
          <h3 className="text-[#FFE500] text-[40px]">
            Preparation Consultancy
          </h3>
        </div>
      </div>
      <div className="font-snigdha relative">
        <svg
          viewBox="15 12 1470 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z"
            fill="#3066B1"
          ></path>
        </svg>
        <div
          className="w-1/3 mx-auto absolute top-3 transform translate-x-full "
          style={{
            borderRadius: "10px",
            background: "#FFF",
            boxShadow: "0px 1px 4px 3px rgba(0, 0, 0, 0.27)",
          }}
        >
          <form className="flex items-center ">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-10 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.24286 0C9.16378 0 11.006 0.763084 12.3643 2.12138C13.7226 3.47968 14.4857 5.32193 14.4857 7.24286C14.4857 9.03686 13.8283 10.686 12.7474 11.9563L13.0483 12.2571H13.9286L19.5 17.8286L17.8286 19.5L12.2571 13.9286V13.0483L11.9563 12.7474C10.686 13.8283 9.03686 14.4857 7.24286 14.4857C5.32193 14.4857 3.47968 13.7226 2.12138 12.3643C0.763084 11.006 0 9.16378 0 7.24286C0 5.32193 0.763084 3.47968 2.12138 2.12138C3.47968 0.763084 5.32193 0 7.24286 0ZM7.24286 2.22857C4.45714 2.22857 2.22857 4.45714 2.22857 7.24286C2.22857 10.0286 4.45714 12.2571 7.24286 12.2571C10.0286 12.2571 12.2571 10.0286 12.2571 7.24286C12.2571 4.45714 10.0286 2.22857 7.24286 2.22857Z"
                    fill="#989898"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="bg-gray-50 text-2xl text-[#989898] rounded-lg block w-full ps-20 p-2.5 "
                placeholder="যেকোনো টপিক সার্চ করুন"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
