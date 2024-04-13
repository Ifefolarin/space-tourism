import { Link } from "react-router-dom";
import styles from "./Explore.module.css";

function Explore() {
  return (
    <div>
      <Link to="/destination" className={styles.explore}>
        <button>EXPLORE</button>
      </Link>
      ;
    </div>
  );
}

export default Explore;
