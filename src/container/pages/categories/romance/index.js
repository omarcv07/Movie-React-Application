import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index';
import MovieProduct from '../../../../components/movie-product/index';
import { useSelector } from 'react-redux';

const RomanceCategory = () => {
    const romanceMovies = useSelector(state => state.movies);

    let movies = <EmptyCategoryPage />

    if (romanceMovies) {
        const romance = romanceMovies.filter((el) => el.genres.includes("Romance"));
        movies = <MovieProduct movies={romance} />
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default RomanceCategory;