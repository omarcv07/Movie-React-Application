import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index'
import MovieProduct from '../../../../components/movie-product/index'
import { connect } from 'react-redux';

const ActionCategory = (props) => {
    const { actionMovies } = props;

    let movies = <EmptyCategoryPage />

    if (actionMovies) {
        const action = actionMovies.filter((el) => el.genres.includes("Action"))

        movies = <MovieProduct movies={action}/>
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    actionMovies: state.movies
})

export default connect(mapStateToProps)(ActionCategory);