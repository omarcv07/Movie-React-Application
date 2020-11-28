import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index';
import MovieProduct from '../../../../components/movie-product/index';
import { useSelector } from 'react-redux';

const BiographyCategory = () => {
    const biographyMovies = useSelector(state => state.movies);

    let movies = <EmptyCategoryPage />

    if (biographyMovies) {
        const biography = biographyMovies.filter((el) => el.genres.includes("Biography"));
        movies = <MovieProduct movies={biography} />
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default BiographyCategory;