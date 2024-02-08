import { ActiveTagProvider } from "@/hooks/useActiveTag";
import { BlogsProvider } from "@/hooks/useBlogs";
import { ReactNode } from "react";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <BlogsProvider>
      <ActiveTagProvider>{children}</ActiveTagProvider>
    </BlogsProvider>
  );
};

export default AppProviders;
