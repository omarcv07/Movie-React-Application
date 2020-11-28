import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index';
import MovieProduct from '../../../../components/movie-product/index';
import { useSelector } from 'react-redux';

const ComedyCategory = () => {
    const comedyMovies = useSelector(state => state.movies);

    let movies = <EmptyCategoryPage />

    if (comedyMovies) {
        const comedy = comedyMovies.filter((el) => el.genres.includes("Comedy"));
        movies = <MovieProduct movies={comedy} />
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default ComedyCategory;
