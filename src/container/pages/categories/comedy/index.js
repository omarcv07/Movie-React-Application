import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index'
import MovieProduct from '../../../../components/movie-product/index'
import { connect } from 'react-redux';

const ComedyCategory = (props) => {
    const { comedyMovies } = props;

    let movies = <EmptyCategoryPage />

    if (comedyMovies) {
        const comedy = comedyMovies.filter((el) => el.genres.includes("Comedy"))

        movies = <MovieProduct movies={comedy}/>
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    comedyMovies: state.movies
});

export default connect(mapStateToProps)(ComedyCategory);
