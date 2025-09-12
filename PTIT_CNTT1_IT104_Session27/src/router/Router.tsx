import { createBrowserRouter } from "react-router-dom";
import Index from "../view/Index";
import NotFound from "../view/NotFound";
import Home from "../components/bai1/Home";
import Bai1 from "../components/bai1/Bai1";
import About from "../components/bai1/About";
import Contact from "../components/bai1/Contact";
import ProductList from "../components/bai2/ProductList";
import ProductDetail from "../components/bai2/ProductDetail";
import Title from "../components/bai2/Title";
import TitleTask from "../components/bai3/TitleTask";
import TaskList from "../components/bai3/TaskList";
import TaskDetail from "../components/bai3/TaskDetail";
import ProductListSearch from "../components/bai4/ProductListSearch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index></Index>,
  },
  {
    path: "/bai1",
    element: <Bai1></Bai1>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "contact", element: <Contact></Contact> },
    ],
  },

  {
    path: "/bai2",
    element: <Title></Title>,
    children: [
      { index: true, element: <ProductList></ProductList> },
      { path: ":id", element: <ProductDetail></ProductDetail> },
    ],
  },
  {
    path: "/bai3",
    element: <TitleTask></TitleTask>,
    children: [
      { index: true, element: <TaskList></TaskList> },
      { path: ":id", element: <TaskDetail></TaskDetail> },
    ],
  },
  { path: "/bai4", element: <ProductListSearch></ProductListSearch> },
  { path: "*", element: <NotFound></NotFound> },
]);

export default router;
