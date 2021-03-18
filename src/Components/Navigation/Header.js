import React from 'react';
import Aux from '../../hoc/Auxi/Auxi'
import {Navbar,Nav,Form,Button,NavDropdown} from 'react-bootstrap';

const header = () => {
    return(
        <Aux>
            <Navbar bg="dark" variant="dark"  >
                <Navbar.Brand href="#home">PathFinder</Navbar.Brand>
                    <Nav  className="mr-auto">
                    <NavDropdown title="Select Algorithm" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Breadth-First Search (BFS)</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Depth-First Search (DFS)</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Dijkstra</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">...</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                <Form inline>
                    <Button variant="success">Start</Button>
                </Form>
            </Navbar>
        </Aux>
    )
}

export default header;