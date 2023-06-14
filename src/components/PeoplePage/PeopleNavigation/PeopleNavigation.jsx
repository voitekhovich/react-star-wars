import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./PeopleNavigation.module.css";

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  const handlePreviousClick = () => getResource(prevPage);
  const handleNextClick = () => getResource(nextPage);

  //getResource(API_PEOPLE + queryPage);

  return (
    <div>
      <Link to={`/people/?page=${counterPage - 1}`} className={styles.link}>
        <button
          className={styles.button}
          disabled={!prevPage}
          onClick={handlePreviousClick}
        >
          Previous
        </button>
      </Link>
      <Link to={`/people/?page=${counterPage + 1}`}>
        <button
          className={styles.button}
          disabled={!nextPage}
          onClick={handleNextClick}
        >
          Next
        </button>
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
