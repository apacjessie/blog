import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogProps } from "@/utils/types";
import axios from "axios";
import ConfiguredMarkdown from "@/components/templates/markdown";

const Article = () => {
  const [article, setArticle] = useState<BlogProps>({
    _id: "",
    createdAt: "",
    title: "",
    tags: [],
    description: "",
    content: "",
    path: "",
  });
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (!id) return;
      const res = await axios.get(
        `${import.meta.env.VITE_BLOG_API}/blog/${id}`,
      );
      setArticle(res.data);
    })();
  }, [id]);

  return (
    <article className="prose dark:prose-invert max-w-none py-24">
      <ConfiguredMarkdown>{article.content}</ConfiguredMarkdown>
    </article>
  );
};

export default Article;
