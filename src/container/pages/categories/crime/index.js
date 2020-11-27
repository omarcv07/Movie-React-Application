import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index'
import MovieProduct from '../../../../components/movie-product/index'
import { connect } from 'react-redux';

const CrimeCategory = (props) => {
    const { crimeMovies } = props;

    let movies = <EmptyCategoryPage />

    if (crimeMovies) {
        const crime = crimeMovies.filter((el) => el.genres.includes("Crime"))

        movies = <MovieProduct movies={crime}/>
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    crimeMovies: state.movies
});

export default connect(mapStateToProps)(CrimeCategory);