import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

const EmptyCategoryPage = () => {
    return (
        <Fragment>
            <Row className='text-center my-5'>
                <Col><h5>No result found</h5></Col>
            </Row>
        </Fragment>
    );
}

export default EmptyCategoryPage