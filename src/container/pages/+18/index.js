import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import MovieProduct from '../../../components/movie-product';

const AdultAge = (props) => {
    const { movies } = props;

    const adultMovies = movies.filter((el) => el.genres.includes("Crime"))

    return (
        <Fragment>
            <MovieProduct 
                movies={adultMovies}
            />     
        </Fragment>
    );
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps)(AdultAge);