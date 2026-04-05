import About from "./About";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./layout";

const myRougt = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/About",
        element: <about />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const Routing2 = ()=>{
    return(<RouterProvider router={myRougt}/>)
}
export default Routing2