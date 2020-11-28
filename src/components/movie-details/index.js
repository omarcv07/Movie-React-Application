import React, { Fragment } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

import './index.css'

const MovieDetails = () => {
    const location = useLocation();
    const data = location.state.movie;

    return (
        <Fragment>
            <Row className ='my-5'>
                 <Col md={{ span: '6' }} className='justify-content-center d-flex'>
                    <Image fluid src={require(`../../assets/img/${data.poster}`).default} alt="Card image"/>
                </Col>
                <Col md={{ span: '6' }}>
                    <div><strong>Title:</strong> {data.title}</div>
                    <div><strong>Genders:</strong> {data.genres}</div>
                    <div><strong>Duration:</strong> {data.duration}</div>
                    <div><strong>Actors:</strong> {data.actors}</div>
                    <div><strong>Release:</strong> {data.releaseDate}</div>
                    {data.storyline ? <div><strong>Sinopsis:</strong> {data.storyline}</div> : null}
                </Col>
            </Row>
        </Fragment>
    );
}


export default MovieDetails;