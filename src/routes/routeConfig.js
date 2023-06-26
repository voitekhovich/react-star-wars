import PeoplePage from "@containers/PeoplePage";
import PersonPage from "@containers/PersonPage";
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage";

const routeConfig = [
  {
    path: "/",
    end: true,
    element: <HomePage />,
  },
  {
    path: "people",
    end: true,
    element: <PeoplePage />,
  },
  {
    path: "people/:id",
    end: true,
    element: <PersonPage />,
  },
  {
    path: "not-found",
    end: true,
    element: <NotFoundPage />,
  },
  {
    path: "*",
    end: false,
    element: <NotFoundPage />,
  },
];

export default routeConfig;
