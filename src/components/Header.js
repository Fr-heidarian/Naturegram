import { Link, useSearchParams } from "react-router-dom";

export default function Header() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="flex items-center justify-between border-b border-borderGray">
      <Link to="/" className="hover:bg-hoverColor hover:text-white p-4">
        NatureGram
      </Link>
      <input
        type="text"
        placeholder="Search here..."
        onChange={(e) => setSearchParams({ title: e.target.value })}
        className="p-2 border border-borderGray w-1/4"
      />
      <div>
        <Link
          to="/createNew"
          className="mr-3 hover:bg-hoverColor hover:text-white p-4"
        >
          createNew
        </Link>
        <Link to="/about" className="hover:bg-hoverColor hover:text-white p-4">
          About
        </Link>
      </div>
    </div>
  );
}
