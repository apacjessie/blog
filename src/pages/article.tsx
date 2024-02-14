import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogProps } from "@/utils/types";
import axios from "axios";
import ConfiguredMarkdown from "@/components/templates/markdown";
import Loading from "@/components/ui/loading";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<BlogProps>({
    _id: "",
    createdAt: "",
    title: "",
    tags: [],
    description: "",
    content: "",
    path: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      if (!id) return;

      await axios
        .get(`${import.meta.env.VITE_BLOG_API}/blog/${id}`)
        .then((res) => setArticle(res.data))
        .finally(() => setLoading(false));
    })();
  }, [id]);

  return (
    <article className="prose dark:prose-invert max-w-none py-24">
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <ConfiguredMarkdown>{article.content}</ConfiguredMarkdown>
      )}
    </article>
  );
};

export default Article;
