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
          <li className="cursor-pointer hover:bg-[#3066B1] hover:text-white px-2 hover:rounded-sm">Home</li>
          <li className="cursor-pointer hover:bg-[#3066B1] hover:text-white px-2 hover:rounded-sm">Admission Quiz</li>
          <li className="cursor-pointer hover:bg-[#3066B1] hover:text-white px-2 hover:rounded-sm">Job Quiz</li>
          <li className="cursor-pointer hover:bg-[#3066B1] hover:text-white px-2 hover:rounded-sm">Become a Examiner</li>
          <li className="cursor-pointer hover:bg-[#3066B1] hover:text-white px-2 hover:rounded-sm">About Us</li>
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
