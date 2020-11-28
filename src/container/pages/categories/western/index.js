import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index';
import MovieProduct from '../../../../components/movie-product/index';
import { useSelector } from 'react-redux';

const WesternCategory = () => {
    const westernMovies = useSelector(state => state.movies)

    let movies = <EmptyCategoryPage />

    if (westernMovies) {
        const western = westernMovies.filter((el) => el.genres.includes("Western"));
        movies = <MovieProduct movies={western} />
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default WesternCategory;