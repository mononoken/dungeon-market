import Root from "./routes/root";
import MonsterIndex from "./routes/monster/monster-index";
import Cart from "./routes/cart/cart";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "cart/", element: <Cart /> },
      { path: "monsters/", element: <MonsterIndex />, children: [] },
    ],
  },
];

export default routes;
