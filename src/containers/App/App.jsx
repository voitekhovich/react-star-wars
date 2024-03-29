import { BrowserRouter, Routes, Route } from "react-router-dom";
import routeConfig from "@routes/routeConfig";
import Header from "@components/Header";
import { REPO_NAME } from "@constants/repo";

import styles from "./App.module.css";

const App = () => {
  return (
    // <BrowserRouter basename={`/${REPO_NAME}/`}>
    <BrowserRouter>
      <div className={styles.wraper}>
        <Header />
        <Routes>
          {routeConfig.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              end={route.end}
              element={route.element}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
