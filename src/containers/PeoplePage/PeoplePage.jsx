import { Fragment, useEffect, useState } from "react";

import { API_PEOPLE } from "../../constance/api";
import { getApiResource } from "../../utils/network";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";

// import styles from "./PeoplePage.module.css";

const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  const [errorApi, setErrorApi] = useState(false);

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

  return (
    <Fragment>
      {errorApi 
        ? <h1>ERRORAPI</h1>
        : people && <PeopleList people={people} />
      }
    </Fragment> 
  )
};

export default PeoplePage;
