import { Header } from "./AdminIndex/Header";
import { Menu } from "./AdminIndex/Menu";
import { Main } from "./AdminIndex/Main";
import { Footer } from "./AdminIndex/Footer";
import "../Style/AdminIndex.css";

export const AdminIndex = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section style={{ display: "flex" }}>
        <div>
          <Menu />
        </div>
        <div>
          <Main></Main>
          <Footer></Footer>
        </div>
      </section>
    </>
  );
};
