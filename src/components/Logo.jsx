import logo from "/public/assets/shared/logo.svg";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img className={styles.logo} src={logo} alt="Space tourism Logo" />
    </Link>
  );
}

export default Logo;
