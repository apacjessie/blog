const Tag = ({ value }: { value: string }) => {
  return (
    <span
      className="border-2 dark:border-white border-black px-2.5 py-0.5 rounded-[3px] lg:text-lg"
      aria-label="tag"
    >
      {value}
    </span>
  );
};

export default Tag;
