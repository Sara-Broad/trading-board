import React from 'react'
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar className='navBar'>
                    <Nav>
                        <Nav.Link href='/home'>Home</Nav.Link>
                        <Nav.Link href='/trade'>Goods</Nav.Link>
                        <Nav.Link href='/login'>Log-in</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header;