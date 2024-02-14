import BlogList from "@/components/templates/bloglist";
import Searchbar from "@/components/templates/searchbar";
import Tags from "@/components/templates/tags";
import { BlogProps } from "@/utils/types";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${import.meta.env.VITE_BLOG_API}/blog`);
      setBlogs(res.data);
    })();
  }, []);

  return (
    <>
      <Searchbar />
      <Tags blogs={blogs} />
      <BlogList blogs={blogs} />
    </>
  );
};

export default Home;
