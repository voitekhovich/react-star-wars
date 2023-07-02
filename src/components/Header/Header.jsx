import { NavLink } from "react-router-dom";
import Favorite from "@components/Favorite/Favorite";
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
          {/* НЕ ПОДСВЕЧИВАЕТСЯ КНОПКА PEOPLE ПРИ ВЫБОРЕ ПЕРСОНАЖА */}
          <NavLink to="/people/?page=1">PEOPLE</NavLink>
        </li>
        <li>
          <NavLink to="/not-found" end>
            NOT FOUND
          </NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
