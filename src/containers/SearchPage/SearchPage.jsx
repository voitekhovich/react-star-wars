import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { PropTypes } from "prop-types";
import { getApiResource } from "@utils/network";
import { API_SEARCH } from "@constants/api";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo";
import styles from "./SearchPage.module.css";
import UiInput from "../../components/UI/UiInput/UiInput";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponce = async (params) => {
    console.log(params);
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
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResponce("");
  }, []);

  const deboucedGetResponse = useCallback(
    debounce((value) => getResponce(value), 300),
    []
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    deboucedGetResponse(value);
  };

  return (
    <div>
      <h1 className="header__text">SEARCH PAGE</h1>
      <UiInput
        classes={styles.input__search}
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Search Characters"
      />
      <SearchPageInfo people={people} />
    </div>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
