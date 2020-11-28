import React, { Fragment, useState, useCallback } from 'react';
import MenuComponent from './HeaderRoutes';
import { 
    Navbar, 
    Container, 
    Image, 
    Nav,
    FormControl,
    InputGroup ,
    Button,
    Collapse,
    Col,
    Form,
} from 'react-bootstrap';
import * as Icon from 'react-feather';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logoMovie from '../../assets/logo-website.png';

import './index.css';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();

    const onInput = e => setValue(e.target.value);

    const onFormSubmit = e => {
        e.preventDefault();
        dispatch({ type: "SEARCH_MOVIE", payload: value.trim() });
        history.push('/search/label/movies/' + value);
    }

    return (
        <Fragment>
            <Navbar expand='lg' variant='dark'>
                <Container bsPrefix='container-fluid container-lg'>

                    <Col xs={{ span: '7' }} md={{ span: '3' }} className='justify-content-center justify-content-lg-start d-flex'>
                        <Navbar.Brand href='/home'><Image src={logoMovie} fluid /></Navbar.Brand>
                    </Col>
                    
                    <Col xs={{ span: '2', order: 'first' }} className='d-lg-none'>
                        <Navbar.Toggle aria-controls='navbar-nav' />    
                    </Col>

                    <Col xs={{ span: '2' }} lg={{ order: 'last' }} className='justify-content-end d-flex'>
                        <Button 
                            bsPrefix='btn text-white shadow-none'
                            onClick={() => setOpen(!open)}
                            aria-expanded={open}
                            >
                            {open ? <Icon.X size={20} /> : <Icon.Search size={20} />}
                        </Button>
                    </Col>

                    <Col lg={{ span: '5', order: 1 }}>
                        <Collapse in={open}>
                            <Form onSubmit={onFormSubmit}>
                                <InputGroup>
                                    <FormControl 
                                        size='md' 
                                        type='text' 
                                        placeholder='Search' 
                                        className='mr-sm-2'
                                        onChange={onInput}
                                    />
                                    <InputGroup.Append>
                                        <Button type={'submit'} variant='danger'>Search</Button>
                                    </InputGroup.Append>
                                </InputGroup >
                            </Form>
                        </Collapse>
                    </Col>
                    
                    <Navbar.Collapse id='navbar-nav' className='justify-content-between'>
                        <Nav>
                            <MenuComponent />
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </Fragment>
    );
}

export default Header;