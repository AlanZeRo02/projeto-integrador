import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import Container from "./container";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/servidor">Servidor</Link>
          </li>
          <li className={styles.item}>
            <Link to="/usuario">Usuarios</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar;
