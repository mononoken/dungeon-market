import { Link, Outlet } from "react-router-dom";
import "./root.css";

function Root() {
  return (
    <>
      <h1>Dungeon Market</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/monsters/">Shop</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Root;
