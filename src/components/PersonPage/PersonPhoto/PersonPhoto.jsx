import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setPersonToFavorite, removePersonToFavorite } from "@store/actions";

import imgFavorite from "./img/favorite.svg";
import imgFavoriteFill from "./img/favorite-fill.svg";

import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispath = useDispatch();

  const dispathPersonFavorite = () => {
    if (personFavorite) {
      dispath(removePersonToFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispath(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.photo} src={personPhoto} alt={personName} />
      <img
        className={styles.favorite}
        src={personFavorite ? imgFavoriteFill : imgFavorite}
        alt={personFavorite ? "Удалить из избранного" : "Добавить в избранное"}
        onClick={dispathPersonFavorite}
      />
    </div>
  );
};

PersonPhoto.propTypes = {
  personId: PropTypes.string,
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
