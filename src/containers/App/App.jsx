import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";

// import styles from "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavLink to="/" end>
        HOME
      </NavLink>
      <NavLink to="/people" end>
        PEOPLE
      </NavLink>
      <Routes>
        <Route path="/" end element={<HomePage />} />
        <Route path="/people" end element={<PeoplePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
