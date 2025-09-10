import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../Components/ProductDetail";
import Student from "../Components/Student";
import PrivateRouter from "../Components/PrivateRouter";
import Account from "../Components/Account";
import { Login } from "../Components/Login";
import Teams from "../Components/Teams";
import TeamsIndex from "../Components/TeamsIndex";
import Team from "../Components/Team";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
  { path: "/productDetail/:id", element: <ProductDetail></ProductDetail> },
  { path: "/student/:name", element: <Student></Student> },
  { path: "/login", element: <Login></Login> },
  {
    path: "/account",
    element: (
      <PrivateRouter>
        <Account></Account>
      </PrivateRouter>
    ),
  },
  {
    path: "/team",
    element: <Teams></Teams>,
    children: [
      { index: true, element: <TeamsIndex></TeamsIndex> },
      { path: "teams/:teamId", element: <Team></Team> },
    ],
  },
  { path: "/lazyLoad", element: <App></App> },
]);

export default router;
