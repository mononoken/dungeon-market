import Root from "./routes/root";
import MonsterIndex from "./routes/monster";

const routes = [
  {
    path: "/",
    element: <Root />,
  },
  { path: "monsters/", element: <MonsterIndex />, children: [] },
];

export default routes;
