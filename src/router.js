import React from "react";
import { routerRedux, Route } from "dva/router";
// import IndexPage from './routes/IndexPage';
import Layout from "./components/Layout";
const { ConnectedRouter } = routerRedux;
function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Route
        path="/"
        render={(props) => <Layout {...props} />}
        redirectPath="/exception/403"
      />
    </ConnectedRouter>
  );
}

export default RouterConfig;
