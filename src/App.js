import React, { Suspense } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import { Movie, Person, Home } from './Components';

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Route path="/" exact component={Home}></Route>
        <Route path="/movie/:movieId" component={Movie}></Route>
        <Route path="/person/:personId" component={Person}></Route>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
