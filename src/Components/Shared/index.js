import React from "react";

const MainNavBar = React.lazy(() => import("./MainNavBar/MainNavbar"));
const Banner = React.lazy(() => import("./Banner/Banner"));
const MovieCard = React.lazy(() => import("./MovieCard/MovieCard"));
const DataNotFound = React.lazy(() => import("./DataNotFound/DataNotFound"));
const Loader = React.lazy(() => import("./Loader/Loader"));
const PersonCard = React.lazy(() => import("./PersonCard/PersonCard"));

export { MainNavBar, Banner, MovieCard, DataNotFound, Loader, PersonCard };
