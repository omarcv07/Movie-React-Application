import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index'
import MovieProduct from '../../../../components/movie-product/index'
import { connect } from 'react-redux';

const ThrillerCategory = (props) => {
    const { thrillerMovies } = props;

    let movies = <EmptyCategoryPage />

    if (thrillerMovies) {
        const thriller = thrillerMovies.filter((el) => el.genres.includes("Thriller"))

        movies = <MovieProduct movies={thriller}/>
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    thrillerMovies: state.movies
});

export default connect(mapStateToProps)(ThrillerCategory);