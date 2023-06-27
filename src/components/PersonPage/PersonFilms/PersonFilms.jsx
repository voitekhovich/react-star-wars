import propTypes from "prop-types";
import styles from "./PersonFilms.module.css";

const PersonFilms = ({ personFilms }) => {
  console.log(personFilms);
  return <div></div>;
};

PersonFilms.propTypes = {
  personFilms: propTypes.array,
};

export default PersonFilms;
