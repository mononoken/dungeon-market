import { Link } from "react-router-dom";

type NavProps = {
  monsterCount: number;
};

export function Nav({ monsterCount }: NavProps) {
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
          <Link to="/cart/">Cart {monsterCount > 0 && `${monsterCount}`}</Link>
        </li>
      </ul>
    </nav>
  );
}
