import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Favorite from "@components/Favorite/Favorite";

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider";

import iconDark from "./img/iconDark.svg";
import iconLight from "./img/iconLight.svg";
import iconNeitral from "./img/iconNeitral.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(iconDark);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(iconLight);
        break;
      case THEME_DARK:
        setIcon(iconDark);
        break;
      case THEME_NEITRAL:
        setIcon(iconNeitral);
        break;
      default:
        setIcon(iconDark);
        break;
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="logo" />
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
        <li>
          <NavLink to="/search" end>
            SEARCH
          </NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
