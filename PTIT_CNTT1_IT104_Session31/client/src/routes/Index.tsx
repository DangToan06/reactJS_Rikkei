import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./auth.route";
import postsRoutes from "./posts.route";

const routes = [...authRoutes, ...postsRoutes];

const routers = createBrowserRouter(routes);

export default routers;
