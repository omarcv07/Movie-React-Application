import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../components/empty-page/index'
import MovieProduct from '../../components/movie-product/index'
import { useSelector } from 'react-redux';

const SearchMovies = () => {
    const searchMovies = useSelector(state => state.searchMovies)

    let movies = <EmptyCategoryPage />

    if (searchMovies.length) {
        movies = <MovieProduct movies={searchMovies}/>
    }
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default SearchMovies;