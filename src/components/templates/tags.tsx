import { useBlogs } from "@/hooks/useBlogs";
import Checkbox from "../ui/checkbox";
import { useActiveTag } from "@/hooks/useActiveTag";
import { BlogProps } from "@/utils/types";

const Tags = ({ blogs }: { blogs: BlogProps[] }) => {
  const allTags = Array.from(new Set(blogs.map((blog) => blog.tags).flat()));

  return (
    <div className="w-full flex gap-3 pt-5">
      {allTags.map((tag) => (
        <Checkbox id={tag} value={tag} />
      ))}
    </div>
  );
};

export default Tags;
