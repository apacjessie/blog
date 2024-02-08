import { BlogsProvider } from "@/hooks/useBlogs";
import { ReactNode } from "react";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return <BlogsProvider>{children}</BlogsProvider>;
};

export default AppProviders;
