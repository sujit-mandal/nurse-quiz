import Image from "next/image";
import photo from "../../asset/images/3rd.jpg";
import { LuClock3 } from "react-icons/lu";

const BlogCard = () => {
  return (
    <div className="w-96 font-poppins">
      <div className="relative">
        <Image
          src={photo}
          alt="blog photo"
          width={400}
          height={400}
          className="rounded-tl-2xl rounded-br-2xl"
        />
        <div className="bg-[#3066B1] p-2 flex items-center gap-2 text-white absolute rounded-br-xl top-0 right-5">
          <LuClock3 />
          <p>16 oct 2023</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        <p>By Admin</p>
        <p>2 Comments</p>
      </div>
      <h3 className="text-[#0500FF] text-2xl font-medium mb-2">Even the all-powerful Pointing has no control about</h3>
      <p className="text-[#30F] font-light">Find people with high expectations and a low tolerance for excuses. They’ll have higher expectations for you than you have for yourself.</p>
    </div>
  );
};

export default BlogCard;
