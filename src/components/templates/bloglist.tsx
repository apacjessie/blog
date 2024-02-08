import { blogs } from "@/utils/mock";
import Blog from "./blog";

const BlogList = () => {
  return (
    <section className="flex flex-col gap-12 md:gap-16 w-full mt-16">
      {blogs.map((blog, index) => (
        <Blog key={index} props={blog} />
      ))}
    </section>
  );
};

export default BlogList;
