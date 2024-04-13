import Explore from "../components/Explore";
import HamburgerNav from "../components/HamburgerNav";
import HomeCta from "../components/HomeCta";
import PageNav from "../components/PageNav";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.home}>
      {window.innerWidth > 767 ? <PageNav /> : <HamburgerNav />}
      <div className={styles.homeCta}>
        <HomeCta />
        <Explore />
      </div>
    </main>
  );
}

export default Home;
