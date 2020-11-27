import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index'
import MovieProduct from '../../../../components/movie-product/index'
import { connect } from 'react-redux';

const FantasyCategory = (props) => {
    const { fantasyMovies } = props;

    let movies = <EmptyCategoryPage />

    if (fantasyMovies) {
        const fantasy = fantasyMovies.filter((el) => el.genres.includes("Fantasy"))

        movies = <MovieProduct movies={fantasy}/>
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    fantasyMovies: state.movies
});

export default connect(mapStateToProps)(FantasyCategory);