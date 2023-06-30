import { configureStore } from "redux";
import rootReducer from "./reducers";

export default configureStore({
  reducer: rootReducer,
});
