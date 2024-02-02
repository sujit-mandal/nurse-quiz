import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-between ">
      <div>
        <Link href={"/"}>
          <h1 className="text-4xl font-bold text-white">
            Nurse<span className="text-green-500">Quiz</span>
          </h1>
        </Link>
      </div>
      <div className="">
        <ul className="flex gap-5 text-white">
          <li>Home</li>
          <li>Admission Quiz</li>
          <li>Job Quiz</li>
          <li>Become a Examiner</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <button className="inline-flex items-center gap-3 text-white">
          Log in <FaRegCircleUser />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
