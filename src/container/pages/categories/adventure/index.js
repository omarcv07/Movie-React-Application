import React, { Fragment } from 'react';
import EmptyCategoryPage from '../../../../components/empty-page/index'
import MovieProduct from '../../../../components/movie-product/index'
import { connect } from 'react-redux';

const AdventureCategory = (props) => {
    const { adventureMovies } = props;

    let movies = <EmptyCategoryPage />

    if (adventureMovies) {
        const adventure = adventureMovies.filter((el) => el.genres.includes("Adventure"))

        movies = <MovieProduct movies={adventure}/>
    }
    
    return (
        <Fragment>
            {movies}
        </Fragment>
    );
}

const mapStateToProps = state => ({
    adventureMovies: state.movies
})

export default connect(mapStateToProps)(AdventureCategory);