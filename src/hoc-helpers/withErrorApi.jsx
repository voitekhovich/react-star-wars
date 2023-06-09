import { Fragment, useState } from "react";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export const withErrorApi = (Viev) => {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false);

    return (
      <Fragment>
        {errorApi ? (
          <ErrorMessage />
        ) : (
          <Viev setErrorApi={setErrorApi} {...props} />
        )}
      </Fragment>
    );
  };
};
