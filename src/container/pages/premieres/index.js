import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import MovieProduct from '../../../components/movie-product';

const Premieres = (props) => {
    const { movies } = props;
    
    const premiereMovies = movies.filter((el) => el.genres.includes("Romance"));

    return (
        <Fragment>
            <MovieProduct 
                movies={premiereMovies}
            />     
        </Fragment>
    );
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps)(Premieres);