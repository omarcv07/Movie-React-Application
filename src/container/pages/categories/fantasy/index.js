import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index';
import MovieProduct from '../../../../components/movie-product/index';
import { useSelector } from 'react-redux';

const FantasyCategory = () => {
    const fantasyMovies = useSelector(state => state.movies);

    let movies = <EmptyCategoryPage />

    if (fantasyMovies) {
        const fantasy = fantasyMovies.filter((el) => el.genres.includes("Fantasy"));
        movies = <MovieProduct movies={fantasy} />
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default FantasyCategory;