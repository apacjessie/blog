import BlogList from "@/components/templates/bloglist";
import Searchbar from "@/components/templates/searchbar";
import Tags from "@/components/templates/tags";
import { useBlogs } from "@/hooks/useBlogs";
import { blogs } from "@/utils/mock";
import { useEffect } from "react";

const Home = () => {
  const { setBlogs } = useBlogs();
  useEffect(() => {
    setBlogs(blogs);
  }, []);

  return (
    <>
      <Searchbar />
      <Tags />
      <BlogList />
    </>
  );
};

export default Home;
