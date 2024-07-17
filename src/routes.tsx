import { Root } from "./routes/root";
import { Home } from "./routes/home";
import { MonsterIndex } from "./routes/monster/monster-index";
import { Cart } from "./routes/cart/cart";

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart/", element: <Cart /> },
      { path: "monsters/", element: <MonsterIndex />, children: [] },
    ],
  },
];
