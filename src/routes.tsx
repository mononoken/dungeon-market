import Root from "./routes/root";
import MonsterIndex from "./routes/monster";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [{ path: "monsters/", element: <MonsterIndex />, children: [] }],
  },
];

export default routes;
