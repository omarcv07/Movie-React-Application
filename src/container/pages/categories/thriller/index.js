import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index';
import MovieProduct from '../../../../components/movie-product/index';
import { useSelector } from 'react-redux';

const ThrillerCategory = () => {
    const thrillerMovies = useSelector(state => state.movies);

    let movies = <EmptyCategoryPage />

    if (thrillerMovies) {
        const thriller = thrillerMovies.filter((el) => el.genres.includes("Thriller"));
        movies = <MovieProduct movies={thriller} />
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default ThrillerCategory;