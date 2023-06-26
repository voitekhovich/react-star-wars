import { useState } from "react";
import propTypes from "prop-types";
import { makeConcurrentRequest } from "@utils/network";
import styles from "./PersonFilms.module.css";
import { useEffect } from "react";

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const responce = await makeConcurrentRequest(personFilms);
      setFilmsName(responce);
      console.log(responce);
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {filmsName
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }) => (
            <li key={episode_id} className={styles.list__item}>
              <span className={styles.item__episide}>Episode {episode_id}</span>
              <span className={styles.item__colon}> : </span>
              <span className={styles.item__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

PersonFilms.propTypes = {
  personFilms: propTypes.array,
};

export default PersonFilms;
