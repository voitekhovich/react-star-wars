import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UiButton from "@UI/UiButton/UiButton";
import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  const handlePreviousClick = () => getResource(prevPage);
  const handleNextClick = () => getResource(nextPage);

  //getResource(API_PEOPLE + queryPage);

  return (
    <div className={styles.container}>
      <Link
        to={prevPage ? `/people/?page=${counterPage - 1}` : ""}
        className={styles.buttons}
      >
        <UiButton
          text="Previous"
          disabled={!prevPage}
          onClick={handlePreviousClick}
          // theme="light"
        />
      </Link>
      <Link
        to={nextPage ? `/people/?page=${counterPage + 1}` : ""}
        className={styles.buttons}
      >
        <UiButton text="Next" disabled={!nextPage} onClick={handleNextClick} />
      </Link>
    </div>
  );
};

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNavigation;
