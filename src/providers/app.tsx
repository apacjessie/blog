import { ActiveTagProvider } from "@/hooks/useActiveTag";
import { BlogsProvider } from "@/hooks/useBlogs";
import { SearchProvider } from "@/hooks/useSearch";
import { ReactNode } from "react";

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <BlogsProvider>
      <ActiveTagProvider>
        <SearchProvider>{children}</SearchProvider>
      </ActiveTagProvider>
    </BlogsProvider>
  );
};

export default AppProviders;
