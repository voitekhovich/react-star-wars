import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import img from "./img/not-found.png";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <Fragment>
      <img className={styles.img} src={img} alt="Not Found" />
      <p className={styles.text}>No match for {location.pathname} </p>
    </Fragment>
  );
};

export default NotFoundPage;
