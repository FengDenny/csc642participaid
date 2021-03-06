import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./mediaQueries.css";
import App from "./App";
import "./map.css";
import "bootstrap/dist/css/bootstrap.css";
// for ghpages deployment
// import { HashRouter as Router } from "react-router-dom";
// for development
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./redux/reducers/authReducer";
import trailSubmitReducer from "./redux/reducers/trialSubmitReducer";
import searchReducer from "./redux/reducers/searchReducer";
import appliedReducer from "./redux/reducers/appliedReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// redux-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";

const rootReducer = combineReducers({
  auth: authReducer,
  submit: trailSubmitReducer,
  search: searchReducer,
  applied: appliedReducer,
});

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = composeWithDevTools(applyMiddleware(thunk))(createStore)(
  persistedReducer
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
