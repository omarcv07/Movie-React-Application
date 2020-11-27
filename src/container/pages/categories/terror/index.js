import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index'
import MovieProduct from '../../../../components/movie-product/index'
import { connect } from 'react-redux';

const TerrorCategory = (props) => {
    const { terrorMovies } = props;

    let movies = <EmptyCategoryPage />

    if (terrorMovies) {
        const terror = terrorMovies.filter((el) => el.genres.includes("Horror"))

        movies = <MovieProduct movies={terror}/>
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    terrorMovies: state.movies
});

export default connect(mapStateToProps)(TerrorCategory);