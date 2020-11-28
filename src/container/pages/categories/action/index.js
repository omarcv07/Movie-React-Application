import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index';
import MovieProduct from '../../../../components/movie-product/index';
import { useSelector } from 'react-redux';

const ActionCategory = () => {
    const actionMovies = useSelector(state => state.movies);

    let movies = <EmptyCategoryPage />

    if (actionMovies) {
        const action = actionMovies.filter((el) => el.genres.includes("Action"));
        movies = <MovieProduct movies={action} />
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default ActionCategory;