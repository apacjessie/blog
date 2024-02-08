import { blogs } from "@/utils/mock";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { remark } from "remark";
import { useEffect, useState } from "react";
import { BlogProps } from "@/utils/types";
import DateString from "@/utils/date-string";
import Tag from "@/components/ui/tag";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/tokyo-night-dark.css";

const Article = () => {
  const [article, setArticle] = useState<BlogProps>({
    id: 0,
    created_at: 0,
    title: "",
    tag: [],
    desc: "",
    content: "",
  });
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      if (!id) return;
      const reading = blogs.find((blog) => blog.id === +id);
      const content = await remark().process(reading?.content);
      setArticle({
        ...(reading as BlogProps),
        content: content.value.toString(),
      });
    })();
  }, [id]);

  return (
    <article className="article">
      <header>
        <h1>{article.title}</h1>
        <p className="text-gray-700 dark:text-gray-400 text-lg font-[300]">
          {DateString(article.created_at)}
        </p>
        <div className="py-1 flex gap-3 w-full">
          {article.tag.map((tag) => (
            <Tag value={tag} />
          ))}
        </div>
      </header>
      <Markdown rehypePlugins={[rehypeHighlight]}>{article.content}</Markdown>
    </article>
  );
};

export default Article;
