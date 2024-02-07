import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between">
      <Link to="/">
        <span
          className="text-blue-400 text-xl  md:text-2xl font-[400] tracking-wider
          hover:underline underline-offset-2"
        >
          apacjessie Blog
        </span>
      </Link>

      <button>Preferences</button>
    </header>
  );
};

export default Header;
