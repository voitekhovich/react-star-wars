import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation/PeopleNavigation";
import { getApiResource } from "@utils/network";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import { API_PEOPLE } from "@constants/api";
import { useQueryParams } from "../../hooks/useQueryParams";
import { changeHTTP } from "../../utils/network";
import { getPeoplePageId } from "../../services/getPeopleData";

// import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get("page");

  // console.log(queryPage);

  const getResource = async (url) => {
    const body = await getApiResource(url);

    // console.log(body);

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
      setPrevPage(changeHTTP(body.previous));
      setNextPage(changeHTTP(body.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <Fragment>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </Fragment>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
