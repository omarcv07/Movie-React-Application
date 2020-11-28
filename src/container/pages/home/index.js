import React, { Fragment } from 'react';
import {
    Button,
    Row,
    Col,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { navigationDropdownConfig } from '../../../config/navigationConfig';
import { Link } from 'react-router-dom';
import MovieProduct from '../../../components/movie-product';

import './index.css'

const Home = () => {
    const movies = useSelector(state => state.movies);

    return (
        <Fragment>
            <Row className='justify-content-center d-flex my-5'>
                {navigationDropdownConfig.map((el, i) => (
                    <Link key={i} to={`${el.path}`}>
                        <Button bsPrefix='btn-base m-1'>{el.name}</Button>
                    </Link>
                ))}
            </Row>

            <Col xs={{ span: 12 }} className='p-3 recent-login mb-2'>
                New Arrivals
            </Col>

            <MovieProduct 
                movies={movies}
            />     
        </Fragment>
    );
}

export default Home;