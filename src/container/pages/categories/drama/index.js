import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index'
import MovieProduct from '../../../../components/movie-product/index'
import { connect } from 'react-redux';

const DramaCategory = (props) => {
    const { dramaMovies } = props;

    let movies = <EmptyCategoryPage />

    if (dramaMovies) {
        const drama = dramaMovies.filter((el) => el.genres.includes("Drama"))

        movies = <MovieProduct movies={drama}/>
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    dramaMovies: state.movies
});

export default connect(mapStateToProps)(DramaCategory);