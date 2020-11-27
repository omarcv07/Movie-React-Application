import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index'
import MovieProduct from '../../../../components/movie-product/index'
import { connect } from 'react-redux';

const RomanceCategory = (props) => {
    const { romanceMovies } = props;

    let movies = <EmptyCategoryPage />

    if (romanceMovies) {
        const romance = romanceMovies.filter((el) => el.genres.includes("Romance"))

        movies = <MovieProduct movies={romance}/>
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    romanceMovies: state.movies
});

export default connect(mapStateToProps)(RomanceCategory);