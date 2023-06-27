import React, { Fragment, useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { withErrorApi } from "@hoc-helpers/withErrorApi";

import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";
import UiLoading from "@UI/UiLoading";

import { getPeopleImage } from "@services/getPeopleData";
import { API_PERSON } from "@constants/api";
import { getApiResource } from "@utils/network";
import styles from "./PersonPage.module.css";

const PersonFilms = React.lazy(() =>
  import("@components/PersonPage/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  let params = useParams();
  const [personInfo, setPersonInfo] = useState([]);
  const [personName, setPersonName] = useState();
  const [personPhoto, setPersonPhoto] = useState();
  const [personFilms, setPersonFilms] = useState();

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
        setPersonPhoto(getPeopleImage(params.id));
        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <Fragment>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto personName={personName} personPhoto={personPhoto} />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading theme={"white"} isShadow />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </Fragment>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
