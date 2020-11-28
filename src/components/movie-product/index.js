import React, { Fragment } from 'react';
import {
    Row,
    Col,
    Card,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './index.css'
import * as Icon from 'react-feather';

const MovieProduct = (props) => {
    const history = useHistory();
    const { movies } = props;

    const sendData = async movie => {
        const movieId = movie.title;

        history.push({
            pathname: '/search/label/movie/' + movieId,
            state: { movie: movie }
        })
    }
    
    return (
        <Fragment>
            <Row>
                {movies && movies.map((movie, index) => (
                    <Col xs={{ span: '12' }} md={{ span: '6' }} lg={{ span: '3' }} key={index} className='my-2'>
                        <Card className="bg-dark text-white">
                            <Card.Img src={require(`../../assets/img/${movie.poster}`).default} alt="Card image" />
                            <Card.ImgOverlay onClick={() => sendData(movie)} bsPrefix="card-img-overlay-remade">
                                <Card.Title className='text-center'><Icon.PlayCircle size={20} />{movie.title}</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>
                    
        </Fragment>
    );
}

export default MovieProduct;