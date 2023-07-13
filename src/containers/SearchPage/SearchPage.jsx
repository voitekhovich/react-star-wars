import { useState } from "react";
import { PropTypes } from "prop-types";
import { getApiResource } from "@utils/network";
import { API_SEARCH } from "@constants/api";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponce = async (params) => {
    const res = await getApiResource(API_SEARCH + params);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      console.log(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputSearchValue(value);
    getResponce(value);
  };

  return (
    <div>
      <h1 className="header__text">SEARCH PAGE</h1>
      <input
        type="text"
        value={inputSearchValue}
        onChange={handleInputChange}
        placeholder="Search Characters"
      />
    </div>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
