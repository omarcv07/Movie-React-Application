import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index'
import MovieProduct from '../../../../components/movie-product/index'
import { connect } from 'react-redux';

const AnimationCategory = (props) => {
    const { animationMovies } = props;

    let movies = <EmptyCategoryPage />

    if (animationMovies) {
        const animation = animationMovies.filter((el) => el.genres.includes("Animation"))

        movies = <MovieProduct movies={animation}/>
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    animationMovies: state.movies
})

export default connect(mapStateToProps)(AnimationCategory);