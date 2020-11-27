import React, { Fragment } from 'react';
import {
    Button,
    Row,
    Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { navigationDropdownConfig } from '../../../config/navigationConfig';
import { Link } from 'react-router-dom';
import MovieProduct from '../../../components/movie-product';

import './index.css'

const Home = (props) => {
    const { movies } = props;
    
    return (
        <Fragment>
            <Row className='justify-content-center d-flex my-5'>
                {navigationDropdownConfig.map((el, i) => (
                    <Link to={`${el.path}`}>
                        <Button bsPrefix='btn-base m-1'>{el.name}</Button>
                    </Link>
                ))}
            </Row>

            <Col xs={{ span: 12 }} className='p-3 recent-login mb-2'>
                Recent Logins
            </Col>

            <MovieProduct 
                movies={movies}
            />     
        </Fragment>
    );
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps)(Home);