import { Link, useSearchParams } from "react-router-dom";

export default function Header() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <Link to="/">NatureGram</Link>
      <input
        type="text"
        placeholder="Search here..."
        onChange={(e) => setSearchParams({ title: e.target.value })}
      />
      <Link to="/about">About</Link>
      <Link to="/createNew">createNew</Link>
    </div>
  );
}
