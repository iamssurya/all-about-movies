import React, { Suspense } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import { Movie, Person, Home } from "./Components";
import Error from "./Error";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/" exact component={Home}></Route>
        <Route path="/movie/:movieId" exact component={Movie}></Route>
        <Route path="/person/:personId" exact component={Person}></Route>
        <Route path="/error" exact component={Error}></Route>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
