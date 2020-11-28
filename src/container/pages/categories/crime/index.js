import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index';
import MovieProduct from '../../../../components/movie-product/index';
import { useSelector } from 'react-redux';

const CrimeCategory = () => {
    const crimeMovies = useSelector(state => state.movies);

    let movies = <EmptyCategoryPage />

    if (crimeMovies) {
        const crime = crimeMovies.filter((el) => el.genres.includes("Crime"));
        movies = <MovieProduct movies={crime} />
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default CrimeCategory;