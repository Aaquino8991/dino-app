import App from "./App";
import Home from "./Home";
import Dinosaurs from "./Dinosaurs";
import About from "./About"

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dinosaurs",
        element: <Dinosaurs />,
      },
    ],
  },
];

export default routes;
