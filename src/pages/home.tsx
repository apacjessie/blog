import BlogList from "@/components/templates/bloglist";
import Searchbar from "@/components/templates/searchbar";
import Tags from "@/components/templates/tags";
import { useBlogs } from "@/hooks/useBlogs";
import { blogs as mock } from "@/utils/mock";
import { useEffect } from "react";

const Home = () => {
  const { blogs, setBlogs } = useBlogs();

  useEffect(() => {
    setBlogs(mock);
  }, []);

  return (
    <>
      <Searchbar />
      <Tags />
      <BlogList blogs={blogs} />
    </>
  );
};

export default Home;
