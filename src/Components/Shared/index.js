import React from "react";

const Navbar = React.lazy(() => import("./Navbar/Navbar"));
const Banner = React.lazy(() => import("./Banner/Banner"));
const MovieCard = React.lazy(() => import("./MovieCard/MovieCard"));

export { Navbar, Banner, MovieCard };
