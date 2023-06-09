import { useEffect, useState } from "react";
import { withErrorApi } from "@hoc-helpers/withErrorApi";

import { API_PEOPLE } from "@constants/api";
import { getApiResource } from "@utils/network";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";

// import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const body = await getApiResource(url);

    if (body) {
      const peopleList = body.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });

      // console.log(peopleList);
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return people && <PeopleList people={people} />;
};

export default withErrorApi(PeoplePage);
