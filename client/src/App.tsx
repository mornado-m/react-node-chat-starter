import React from "react";
import { Grid, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import useRoutes from "./routes/routes";
import { connect } from "react-redux";
import { AppState } from "./redux/root.reducer";

const mapState = (state: AppState) => ({
  isAuthorized: state.auth.isAuthorized,
});

type Props = ReturnType<typeof mapState>;

function App(props: Props) {
  const routes = useRoutes(props.isAuthorized);

  return (
    <Grid container justify="center" alignItems="center" className="main-grid">
      <CssBaseline />
      <Router>{routes}</Router>
    </Grid>
  );
}

export default connect(mapState)(App);
