import { useSearch } from "@/hooks/useSearch";
import Search from "../ui/search";

const Searchbar = () => {
  const { search, setSearch } = useSearch();

  return (
    <div className="mt-10 gap-1 flex flex-col" aria-label="searchbox">
      <p className="tracking-wider font-[500] text-lg lg:text-xl">Search</p>
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default Searchbar;
