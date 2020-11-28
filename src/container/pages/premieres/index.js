import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import MovieProduct from '../../../components/movie-product';

const Premieres = () => {
    const movies = useSelector(state => state.movies)
    
    const premiereMovies = movies.filter((el) => el.genres.includes("Romance"));

    return (
        <Fragment>
            <MovieProduct 
                movies={premiereMovies}
            />     
        </Fragment>
    );
}

export default Premieres;