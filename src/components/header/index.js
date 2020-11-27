import React, { Fragment, useState } from 'react';
import MenuComponent from './HeaderRoutes'
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
} from 'react-bootstrap';
import * as Icon from 'react-feather';
import logoMovie from '../../assets/logo-website.png';

import './index.css'

const Header = (props) => {

    const [open, setOpen] = useState(false);

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
                            bsPrefix="btn text-white shadow-none"
                            onClick={() => setOpen(!open)}
                            aria-expanded={open}
                            >
                            {open ? <Icon.X size={20} /> : <Icon.Search size={20} />}
                        </Button>
                    </Col>

                    <Col lg={{ span: '5', order: 1 }}>
                        <Collapse in={open}>
                            <InputGroup>
                                <FormControl size="md" type="text" placeholder="Search" className="mr-sm-2" />
                                <InputGroup.Append>
                                    <Button variant="danger">Search</Button>
                                </InputGroup.Append>
                            </InputGroup >
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