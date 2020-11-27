import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index'
import MovieProduct from '../../../../components/movie-product/index'
import { connect } from 'react-redux';

const ScifiCategory = (props) => {
    const { scifiMovies } = props;

    let movies = <EmptyCategoryPage />

    if (scifiMovies) {
        const scifi = scifiMovies.filter((el) => el.genres.includes("Sci-Fi"))

        movies = <MovieProduct movies={scifi}/>
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    scifiMovies: state.movies
});

export default connect(mapStateToProps)(ScifiCategory);