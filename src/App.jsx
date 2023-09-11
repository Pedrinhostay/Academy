
import { createBrowserRouter } from "react-router-dom"
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Training from "./pages/Training.jsx";
import Plans from "./pages/Plans.jsx";
import Services from "./pages/Services.jsx";
import Muscle from "./pages/Muscle.jsx";
import Fight from "./pages/Fight.jsx";
import Zumb from "./pages/Zumb.jsx";
import Blog from "./pages/Blog.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
          {
            path: "/",
            element: <Home/>,
          }, {
            path: "training",
            element: <Training/>,
          }, {
            path: '/services',
            element: <Services/>
          }, {
            path: "/plans",
            element: <Plans/>
          }, {
            path: "/musculação",
            element: <Muscle/>
          }, {
            path: "/zumba",
            element: <Zumb/>
          }, {
            path: "/luta",
            element: <Fight/>
          }
        ]
    },
    {
      path: '/blog',
      element: <Blog/>
    }
  ]
);

export default router;

