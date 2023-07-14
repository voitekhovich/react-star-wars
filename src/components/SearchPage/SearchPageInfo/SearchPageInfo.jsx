import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import styles from "./SearchPageInfo.module.css";

const SearchPageInfo = ({ people }) => {
  return (
    <>
      {people.length ? (
        <ul className={styles.list__container}>
          {people.map(({ id, name, img }) => (
            <li key={id} className={styles.list__item}>
              <Link to={`/people/${id}`}>
                <img src={img} alt={name} className={styles.person__photo} />
                <p className={styles.person__name}>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.person__comment}>NO RESULTS</p>
      )}
    </>
  );
};

SearchPageInfo.propTypes = {
  people: PropTypes.array,
};

export default SearchPageInfo;
