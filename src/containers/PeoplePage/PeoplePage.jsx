import { Fragment, useEffect, useState } from "react";

import { API_PEOPLE } from "../../constance/api";
import { getApiResource } from "../../utils/network";

// import styles from "./PeoplePage.module.css";

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const body = await getApiResource(url);
    const peopleList = body.results.map(({ name, url }) => {
      return {
        name,
        url,
      };
    });
    setPeople(peopleList);
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <Fragment>
      {people && (
        <ul>
          {people.map(({ name, url }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default PeoplePage;
