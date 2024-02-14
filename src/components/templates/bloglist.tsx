import Blog from "./blog";
import { useActiveTag } from "@/hooks/useActiveTag";
import { useSearch } from "@/hooks/useSearch";
import { BlogProps } from "@/utils/types";

const BlogList = ({ blogs }: { blogs: BlogProps[] }) => {
  const { activeTag } = useActiveTag();
  const { search } = useSearch();

  const filteredBlogs = blogs.filter((blog) => {
    // Check if the blog matches the search query
    const matchesSearch =
      search === "" ||
      blog.title.includes(search) ||
      blog.description.includes(search);

    // If there are active tags, also check if the blog has at least one of them
    const matchesTags =
      activeTag.length === 0 ||
      blog.tags.some((tag) => activeTag.includes(tag));

    // Return true if both conditions are met
    return matchesSearch && matchesTags;
  });

  return (
    <section className="flex flex-col gap-12 md:gap-16 w-full mt-16">
      {filteredBlogs.map((blog, index) => (
        <Blog key={index} props={blog} />
      ))}
    </section>
  );
};

export default BlogList;
