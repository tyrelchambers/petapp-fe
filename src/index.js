import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import * as ROUTES from "./routes/main.routes";
import Index from "./pages/Index/Index";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewPet from "./pages/NewPet/NewPet";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = window.localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <React.Fragment>
            <Redirect
              to={{
                pathname: "/signup",
                state: { from: props.location },
              }}
            />
          </React.Fragment>
        )
      }
    />
  );
};

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path={ROUTES.INDEX} component={Index} />
          <PrivateRoute exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <PrivateRoute exact path={ROUTES.NEW_PET} component={NewPet} />
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <Route exact path={ROUTES.SIGNUP} component={Signup} />
          <Route
            exact
            path={ROUTES.SIGNOUT}
            render={() => {
              window.localStorage.removeItem("token");
              window.location.pathname = "/";
            }}
          />
        </Switch>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
