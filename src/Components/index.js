import React from 'react';
import Home from './Home/Home';

const Movie = React.lazy(() => import('./Movie/Movie'));
const Person = React.lazy(() => import('./Person/Person'));

export {
    Home,
    Movie,
    Person
}