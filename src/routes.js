import App from "./App"
import Home from "./Home"
import Create from "./Create"
import Dinosaurs from "./Dinosaurs"

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/create",
        element: <Create />
      },
      {
        path: "/dinosaurs",
        element: <Dinosaurs />
      }
    ]
  }
]

export default routes