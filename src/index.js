import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./routes/main.routes";
import Index from "./pages/Index/Index";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewPet from "./pages/NewPet/NewPet";
import Login from "./pages/Login/Login";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path={ROUTES.INDEX} component={Index} />
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route exact path={ROUTES.NEW_PET} component={NewPet} />
        <Route exact path={ROUTES.LOGIN} component={Login} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
