import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index';
import MovieProduct from '../../../../components/movie-product/index';
import { useSelector } from 'react-redux';

const AnimationCategory = () => {
    const animationMovies = useSelector(state => state.movies)

    let movies = <EmptyCategoryPage />

    if (animationMovies) {
        const animation = animationMovies.filter((el) => el.genres.includes("Animation"));
        movies = <MovieProduct movies={animation} />
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

export default AnimationCategory;