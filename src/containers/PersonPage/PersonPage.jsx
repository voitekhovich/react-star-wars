import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { API_PERSON } from "@constants/api";
import { getApiResource } from "@utils/network";
import styles from "./PersonPage.module.css";

const PersonPage = ({ setErrorApi }) => {
  let params = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${params.id}`);
      if (res) setErrorApi(false);
      else setErrorApi(true);
    })();
  }, []);

  return <div>PersonPage</div>;
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
