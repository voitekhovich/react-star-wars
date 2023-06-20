import { useEffect } from "react";
import { useParams   } from "react-router-dom";
import { API_PERSON } from "@constants/api";
import styles from "./PersonPage.module.css";

const PersonPage = () => {
  let params = useParams();
  console.log(params.id);
  
  return <div>PersonPage</div>;
};

export default PersonPage;
