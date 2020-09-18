import React, { Suspense } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import { Movie, Person, Home } from "components";
import Error from "./Error";
import { MainNavBar } from "components/Shared";
import Loader from "components/Shared/Loader/Loader";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<Loader />}>
        <MainNavBar />
        <div className="route-view">
          <Route path="/" exact component={Home}></Route>
          <Route path="/movie/:movieId" exact component={Movie}></Route>
          <Route path="/person/:personId" exact component={Person}></Route>
          <Route path="/error" exact component={Error}></Route>
        </div>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
