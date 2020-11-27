import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index'
import MovieProduct from '../../../../components/movie-product/index'
import { connect } from 'react-redux';

const BiographyCategory = (props) => {
    const { biographyMovies } = props;

    let movies = <EmptyCategoryPage />

    if (biographyMovies) {
        const biography = biographyMovies.filter((el) => el.genres.includes("Biography"))

        movies = <MovieProduct movies={biography}/>
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    biographyMovies: state.movies
})

export default connect(mapStateToProps)(BiographyCategory);