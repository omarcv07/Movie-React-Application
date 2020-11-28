import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index';
import MovieProduct from '../../../../components/movie-product/index';
import { useSelector } from 'react-redux';

const DramaCategory = () => {
    const dramaMovies = useSelector(state => state.movies);

    let movies = <EmptyCategoryPage />

    if (dramaMovies) {
        const drama = dramaMovies.filter((el) => el.genres.includes("Drama"));
        movies = <MovieProduct movies={drama} />
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default DramaCategory;