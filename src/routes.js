import App from "./App";
import Home from "./Home";
import Dinosaurs from "./Dinosaurs";
import DinoForm from "./DinoForm";

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
        path: "/new-dino",
        element: <DinoForm />,
      },
      {
        path: "/dinosaurs",
        element: <Dinosaurs />,
      },
    ],
  },
];

export default routes;
