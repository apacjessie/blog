import { Link } from "react-router-dom";
import DateString from "@/utils/date-string";
import { BlogProps } from "@/utils/types";
import Tag from "../ui/tag";

const Blog = ({ props }: { props: BlogProps }) => {
  return (
    <article className="flex flex-col gap-1 lg:gap-2">
      <header>
        <h2
          className="text-xl lg:text-3xl font-bold leading-relaxed hover:underline
          underline-offset-2"
        >
          <Link to="">{props.title}</Link>
        </h2>
        <p className="text-gray-400">{DateString(props.created_at)}</p>
        <div className="my-2 w-full flex gap-2 lg:gap-3">
          {props.tag.map((tag, index) => (
            <Tag key={index} value={tag} />
          ))}
        </div>
      </header>
      <p className="lg:text-lg">{props.desc}</p>
      <Link
        to="#"
        className="text-blue-500 hover:underline underline-offset-2 w-fit"
      >
        Read more
      </Link>
    </article>
  );
};

export default Blog;
