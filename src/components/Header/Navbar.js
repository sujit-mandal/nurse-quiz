import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from "../../asset/images/Nurse Quizz 1.png"
import Image from "next/image";
const Navbar = () => {
  return (
<div className="bg-white my-2">
<div className="max-w-screen-xl mx-auto flex items-center justify-between ">
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={150} height={200}/>
        </Link>
      </div>
      <div className="">
        <ul className="flex gap-5 text-[#3066B1]">
          <li>Home</li>
          <li>Admission Quiz</li>
          <li>Job Quiz</li>
          <li>Become a Examiner</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <button className="inline-flex items-center gap-3 text-[#3066B1]">
          Log in <FaRegCircleUser />
        </button>
      </div>
    </div>
</div>
  );
};

export default Navbar;
