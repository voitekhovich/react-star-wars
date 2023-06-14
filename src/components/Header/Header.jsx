import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/" end>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/people" end>
            PEOPLE
          </NavLink>
        </li>
        <li>
          <NavLink to="/not-found" end>
            NOT FOUND
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
