import Blog from "./blog";
import { useActiveTag } from "@/hooks/useActiveTag";
import { BlogProps } from "@/utils/types";

const BlogList = ({ blogs }: { blogs: BlogProps[] }) => {
  const { activeTag } = useActiveTag();

  const filteredBlogs =
    activeTag.length > 0
      ? blogs.filter((blog) => blog.tags.some((tag) => activeTag.includes(tag)))
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
