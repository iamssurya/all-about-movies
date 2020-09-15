import React from 'react';
import { Navbar, MovieCard, Banner } from '../Shared';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <MovieCard />
            </React.Fragment>
        )
    }
}

export default Home;