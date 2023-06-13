import { BrowserRouter, Routes, Route } from "react-router-dom";
import routeConfig from "@routes/routeConfig";
import Header from "@components/Header";

import styles from "./App.module.css";

const App = () => {
  return (
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
