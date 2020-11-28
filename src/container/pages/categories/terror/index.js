import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index';
import MovieProduct from '../../../../components/movie-product/index';
import { useSelector } from 'react-redux';

const TerrorCategory = () => {
    const terrorMovies = useSelector(state => state.movies);

    let movies = <EmptyCategoryPage />

    if (terrorMovies) {
        const terror = terrorMovies.filter((el) => el.genres.includes("Horror"));
        movies = <MovieProduct movies={terror} />
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default TerrorCategory;