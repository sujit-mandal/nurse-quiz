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
    </div>
  );
};

export default Admission;
