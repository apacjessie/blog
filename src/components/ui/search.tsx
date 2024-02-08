interface SearchProps extends React.ComponentProps<"input"> {}

const Search: React.FC<SearchProps> = ({ ...props }) => {
  return (
    <input
      className="w-full px-2 py-1 text-black 
      border-2 dark:border-gray-500 dark:bg-gray-700/25
      dark:text-white text-lg lg:text-xl border-gray-500"
      type="text"
      aria-label="search-input"
      {...props}
    />
  );
};

export default Search;
