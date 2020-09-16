import React from "react";

const MainNavBar = React.lazy(() => import("./MainNavBar/MainNavbar"));
const Banner = React.lazy(() => import("./Banner/Banner"));
const MovieCard = React.lazy(() => import("./MovieCard/MovieCard"));

export { MainNavBar, Banner, MovieCard };
