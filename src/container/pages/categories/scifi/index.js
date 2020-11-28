import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index';
import MovieProduct from '../../../../components/movie-product/index';
import { useSelector } from 'react-redux';

const ScifiCategory = () => {
    const scifiMovies = useSelector(state => state.movies)

    let movies = <EmptyCategoryPage />

    if (scifiMovies) {
        const scifi = scifiMovies.filter((el) => el.genres.includes("Sci-Fi"));
        movies = <MovieProduct movies={scifi} />
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default ScifiCategory;