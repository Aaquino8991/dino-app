import App from "./App"
import Home from "./Home"
import About from "./About"
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
        path: "/about",
        element: <About />
      },
      {
        path: "/dinosaurs",
        element: <Dinosaurs />
      }
    ]
  }
]

export default routes