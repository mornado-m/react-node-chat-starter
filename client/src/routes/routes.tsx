import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SignInPage from "../pages/signin/sign-in.page";
import HomePage from "../pages/home/home.page";
import NotFoundPage from "../pages/notfound/notfound.page";
import SettingsPage from "../pages/settings/settings.page";
import SignUpPage from "../pages/signup/sign-up.page";

const useRoutes = (isAuthorized: boolean) => {
  if (isAuthorized) {
    return (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/settings" exact>
          <SettingsPage />
        </Route>
        <Route path="/not-found" exact>
          <NotFoundPage />
        </Route>
        <Redirect to="/not-found" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <SignInPage />
      </Route>
      <Route path="/sign-up" exact>
        <SignUpPage />
      </Route>
      <Route path="/not-found" exact>
        <NotFoundPage />
      </Route>
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default useRoutes;
