import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/monsters/">Shop</Link>
        </li>
        <li>
          <Link to="/cart/">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
