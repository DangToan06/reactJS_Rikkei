import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Contact from "../page/Contact";
import NotFound from "../page/NotFound";
import About from "../page/About";
import Login from "../page/Login";
import Register from "../page/Register ";
import Nav from "../components/Nav";
import ListUser from "../components/ListUser";
import UserDetail from "../components/UserDetail";

const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  { path: "/about", element: <About></About> },
  { path: "/contact", element: <Contact></Contact> },
  { path: "/login", element: <Login></Login> },
  { path: "/register", element: <Register></Register> },
  {
    path: "/nav",
    element: <Nav></Nav>,
    children: [
      { path: "home", element: <Home></Home> },
      {
        path: "about",
        element: <About></About>,
      },
      { path: "contact", element: <Contact></Contact> },
    ],
  },
  {
    path: "/listUser",
    element: <ListUser></ListUser>,
  },
  { path: "/detail", element: <UserDetail></UserDetail> },
  { path: "*", element: <NotFound></NotFound> },
]);

export default router;
