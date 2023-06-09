import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PeopleList from "@components/PeoplePage/PeopleList";
import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const [people, setPeople] = useState([]);
  const storeData = useSelector((store) => store.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);
    if (arr.length) {
      const peoples = arr.map((item) => {
        return { id: item[0], ...item[1] };
      });
      setPeople(peoples);
    }
  }, []);

  return (
    <div>
      <h1 className="header__text">Favorites Page</h1>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <p className={styles.comment}>NO DATA</p>
      )}
    </div>
  );
};

export default FavoritesPage;
