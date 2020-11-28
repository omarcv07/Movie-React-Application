import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import MovieProduct from '../../../components/movie-product';

const AdultAge = () => {
    const movies = useSelector(state => state.movies)

    const adultMovies = movies.filter((el) => el.genres.includes("Crime"));

    return (
        <Fragment>
            <MovieProduct 
                movies={adultMovies}
            />     
        </Fragment>
    );
}

export default AdultAge;