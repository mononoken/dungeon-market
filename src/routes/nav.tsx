import { Link } from "react-router-dom";

type NavProps = {
  monsterCount: number;
  onToggleCart: () => void;
};

export function Nav({ monsterCount, onToggleCart }: NavProps) {
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
          <button onClick={onToggleCart}>
            Cart {monsterCount > 0 && `${monsterCount}`}
          </button>
          <Link to="/cart/">Cart {monsterCount > 0 && `${monsterCount}`}</Link>
        </li>
      </ul>
    </nav>
  );
}
