import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index';
import MovieProduct from '../../../../components/movie-product/index';
import { useSelector } from 'react-redux';

const AdventureCategory = () => {
    const adventureMovies = useSelector(state => state.movies);

    let movies = <EmptyCategoryPage />

    if (adventureMovies) {
        const adventure = adventureMovies.filter((el) => el.genres.includes("Adventure"));
        movies = <MovieProduct movies={adventure} />
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default AdventureCategory;