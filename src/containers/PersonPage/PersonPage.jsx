import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { withErrorApi } from "@hoc-helpers/withErrorApi";

import PersonInfo from "@components/PersonPage/PersonInfo/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto/PersonPhoto";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack/PersonLinkBack";

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
        setPersonPhoto(getPeopleImage(params.id));

        // res.films

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
        </div>
      </div>
    </Fragment>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
