import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getPeopleImage } from "@services/getPeopleData";
import { API_PERSON } from "@constants/api";
import { getApiResource } from "@utils/network";
import styles from "./PersonPage.module.css";

const PersonPage = ({ setErrorApi }) => {
  let params = useParams();
  const [personInfo, setPersonInfo] = useState([]);
  const [personName, setPersonName] = useState();
  const [personPhoto, setPersonPhoto] = useState();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${params.id}`);
      if (res) {
        // console.log(res);

        setPersonInfo([
          { title: "Birth Year", data: res.birth_year },
          { title: "Eye Color", data: res.eye_color },
          { title: "Gender", data: res.gender },
          { title: "Hair Color", data: res.hair_color },
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Skin Color", data: res.skin_color },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(params.id))

        // res.films

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <Fragment>
      <h1 className={styles.color}>{personName}</h1>
      <img src={personPhoto} alt={personName} />
      {personInfo && (
        <ul className={styles.color}>
          {personInfo.map(
            ({ title, data }) =>
              data && (
                <li key={title}>
                  <span>
                    {title}: {data}
                  </span>
                </li>
              )
          )}
        </ul>
      )}
    </Fragment>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
