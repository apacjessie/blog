import Search from "../ui/search";

const Searchbar = () => {
  return (
    <div className="mt-10 gap-1 flex flex-col" aria-label="searchbox">
      <p className="tracking-wider font-[500] text-lg lg:text-xl">Search</p>
      <Search />
    </div>
  );
};

export default Searchbar;
