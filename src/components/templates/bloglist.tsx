import Blog from "./blog";
import { useBlogs } from "@/hooks/useBlogs";
import { useActiveTag } from "@/hooks/useActiveTag";

const BlogList = () => {
  const { blogs } = useBlogs();
  const { activeTag } = useActiveTag();

  const filteredBlogs =
    activeTag.length > 0
      ? blogs.filter((blog) => blog.tag.some((tag) => activeTag.includes(tag)))
      : blogs;

  return (
    <section className="flex flex-col gap-12 md:gap-16 w-full mt-16">
      {filteredBlogs.map((blog, index) => (
        <Blog key={index} props={blog} />
      ))}
    </section>
  );
};

export default BlogList;
