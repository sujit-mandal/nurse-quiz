import BlogCard from "../Card/BlogCard";


const Blog = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-10">
            <div className="flex justify-between items-center">
                <h3 className="text-[#3066B1] text-4xl">জানার জন্য পড়ুন</h3>
                <button className="border-[1px] border-[#1D4645] text-[#1D4645] px-4 py-2 rounded-md">সবগুলো দেখুন</button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-10">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            </div>
        </div>
    );
};

export default Blog;