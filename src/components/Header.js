import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">NatureGram</Link>
      <Link to="/about">About</Link>
      <Link to="/createNew">createNew</Link>
    </div>
  );
}
