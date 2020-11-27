import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index'
import MovieProduct from '../../../../components/movie-product/index'
import { connect } from 'react-redux';

const WesternCategory = (props) => {
    const { westernMovies } = props;

    let movies = <EmptyCategoryPage />

    if (westernMovies) {
        const western = westernMovies.filter((el) => el.genres.includes("Western"))

        movies = <MovieProduct movies={western}/>
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    westernMovies: state.movies
});

export default connect(mapStateToProps)(WesternCategory);