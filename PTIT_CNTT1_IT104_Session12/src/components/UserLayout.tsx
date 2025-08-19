import { Header } from "./AdminIndex/Header";
import { Cart } from "./UserLayout/Cart";
import { Menu } from "./AdminIndex/Menu";
import { Article } from "./UserLayout/Article";
import { Navigation } from "./UserLayout/Navigation";
import "../Style/UserLayout.css";

export const UserLayout = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <nav>
        <Navigation></Navigation>
      </nav>
      <div>
        <Menu></Menu>
        <div style={{ backgroundColor: "pink" }}>
          <Cart></Cart> <Cart></Cart> <Cart></Cart> <Cart></Cart> <Cart></Cart>{" "}
          <Cart></Cart> <Cart></Cart> <Cart></Cart> <Cart></Cart> <Cart></Cart>{" "}
          <Cart></Cart> <Cart></Cart> <Cart></Cart> <Cart></Cart> <Cart></Cart>{" "}
          <Cart></Cart>
        </div>
        <Article></Article>
      </div>
    </>
  );
};
