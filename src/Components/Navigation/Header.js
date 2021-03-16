import React from 'react';
import Aux from '../../hoc/Auxi/Auxi'
import {Navbar,Nav,Form,Button} from 'react-bootstrap';

const header = () => {
    return(
        <Aux>
            <Navbar bg="dark" variant="dark"  >
                <Navbar.Brand href="#home">PathFinder</Navbar.Brand>
                    <Nav  className="mr-auto">
                        <Nav.Link href="#home">Select Algorithm</Nav.Link>    
                    </Nav>
                <Form inline>
                    <Button variant="success">Start</Button>
                </Form>
            </Navbar>
        </Aux>
    )
}

export default header;