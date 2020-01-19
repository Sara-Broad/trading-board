import React from 'react'
import './NavHeading.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
class NavHeading extends React.Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Nav className="mr-auto">
                      <Nav.Link href='/home'>Home</Nav.Link>
                      <Nav.Link href='/trade'>Goods</Nav.Link>
                      <Nav.Link href='/postings'>Postings</Nav.Link>
                      <Nav.Link href='/messages'>Messages</Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link href='/login'>Log-in</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavHeading;