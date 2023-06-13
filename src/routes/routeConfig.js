import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";

const routeConfig = [
  {
    path: "/",
    end: true,
    element: <HomePage />,
  },
  {
    path: "/people",
    end: true,
    element: <PeoplePage />,
  },
];

export default routeConfig;
