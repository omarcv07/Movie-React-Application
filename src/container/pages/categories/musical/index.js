import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index'
import MovieProduct from '../../../../components/movie-product/index'
import { connect } from 'react-redux';

const MusicalCategory = (props) => {
    const { musicalMovies } = props;

    let movies = <EmptyCategoryPage />

    if (musicalMovies) {
        const musical = musicalMovies.filter((el) => el.genres.includes("Musical"))

        movies = <MovieProduct movies={musical}/>
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    musicalMovies: state.movies
});

export default connect(mapStateToProps)(MusicalCategory);