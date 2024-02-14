import SkeletonBlogList from "@/components/skeleton/blog-list";
import BlogList from "@/components/templates/bloglist";
import Searchbar from "@/components/templates/searchbar";
import Tags from "@/components/templates/tags";
import Loading from "@/components/ui/loading";
import { useBlogs } from "@/hooks/useBlogs";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const { blogs, setBlogs } = useBlogs();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      await axios
        .get(`${import.meta.env.VITE_BLOG_API}/blog`)
        .then((res) => setBlogs(res.data))
        .then(() => setLoading(false));
    })();
  }, []);

  return (
    <>
      <Searchbar />
      {loading ? (
        <div className="mt-24 w-full flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <>
          <Tags blogs={blogs} />
          <BlogList blogs={blogs} />
        </>
      )}
    </>
  );
};

export default Home;
