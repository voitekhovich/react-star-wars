import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider";
import styles from "./ChooseSide.module.css";

const ChooseSide = () => {
  const isTheme = useTheme();

  return (
    <div>
      {isTheme.theme}
      <button onClick={() => isTheme.change(THEME_LIGHT)}>LIGHT</button>
      <button onClick={() => isTheme.change(THEME_DARK)}>DARK</button>
      <button onClick={() => isTheme.change(THEME_NEITRAL)}>NEITRAL</button>
    </div>
  );
};

export default ChooseSide;
