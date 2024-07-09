import { Link } from "react-router-dom";
import "./root.css";

function Root() {
  return (
    <>
      <h1>Dungeon Market</h1>
      <Link to="/monsters/">Shop</Link>
    </>
  );
}

export default Root;
