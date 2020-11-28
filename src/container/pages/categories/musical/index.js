import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index';
import MovieProduct from '../../../../components/movie-product/index';
import { useSelector } from 'react-redux';

const MusicalCategory = () => {
    const musicalMovies = useSelector(state => state.movies);

    let movies = <EmptyCategoryPage />

    if (musicalMovies) {
        const musical = musicalMovies.filter((el) => el.genres.includes("Musical"))
        movies = <MovieProduct movies={musical} />
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default MusicalCategory;